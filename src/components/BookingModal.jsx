import { useEffect, useState } from 'react';
import { X, Check, ArrowUpRight } from 'lucide-react';
import Button from './ui/Button.jsx';
import Badge from './ui/Badge.jsx';
import Field from './ui/Field.jsx';

const SHEETS_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL;

export default function BookingModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (open) {
      setSent(false);
      setError(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const data = new FormData(e.target);
    const params = new URLSearchParams({
      company: data.get('company') || '',
      phone: data.get('phone') || '',
      objectType: data.get('objectType') || '',
      addressArea: data.get('addressArea') || '',
      date: new Date().toLocaleString('ru-RU'),
    });

    if (!SHEETS_URL) {
      console.warn('VITE_SHEETS_WEBHOOK_URL не задан — заявки не отправляются в Google Таблицу.');
      setSent(true);
      return;
    }

    setSending(true);
    try {
      await fetch(SHEETS_URL, { method: 'POST', mode: 'no-cors', body: params });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bk-overlay" onClick={onClose}>
      <div className="bk" onClick={(e) => e.stopPropagation()}>
        <button className="bk__x" onClick={onClose} aria-label="Закрыть"><X size={18} /></button>
        {sent ? (
          <div className="bk__done">
            <span className="bk__check"><Check size={30} /></span>
            <h3>Заявка принята</h3>
            <p>Свяжемся с вами в течение 30 минут для согласования осмотра объекта.</p>
            <Button variant="outline" onClick={onClose}>Хорошо</Button>
          </div>
        ) : (
          <>
            <Badge tone="eyebrow">Бесплатный расчёт</Badge>
            <h3 className="bk__title">Заявка на клининг</h3>
            <p className="bk__sub">Опишите объект — мы подберём формат и рассчитаем стоимость.</p>
            <form className="bk__form" onSubmit={handleSubmit}>
              <Field name="company" label="Компания / контактное лицо" placeholder="ООО «Название» или ваше имя" required />
              <Field name="phone" label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" required hint="Перезвоним в течение 30 минут" />
              <Field name="objectType" label="Тип объекта" placeholder="Офис, склад, ТЦ, гостиница…" />
              <Field name="addressArea" label="Площадь и адрес" placeholder="Напр.: 2 500 м², ул. Абая 10" multiline />
              {error && <p className="bk__error">Не получилось отправить заявку. Попробуйте ещё раз или позвоните нам напрямую.</p>}
              <Button variant="primary" size="lg" block type="submit" disabled={sending} iconRight={<ArrowUpRight size={18} />}>
                {sending ? 'Отправляем…' : 'Отправить заявку'}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
