import { ArrowUpRight } from 'lucide-react';
import Button from './ui/Button.jsx';

export default function CTA({ onBook }) {
  return (
    <section className="section" id="contacts">
      <div className="wrap">
        <div className="cta__box reveal">
          <span className="eye">Бесплатный расчёт</span>
          <h2>Готовы обсудить ваш объект?</h2>
          <Button variant="primary" size="lg" onClick={onBook} iconRight={<ArrowUpRight size={18} />}>
            Оставить заявку
          </Button>
          <div className="note">Работаем по всему Алматы · Пн–Вс, 08:00–22:00 · Объекты от 500 м²</div>
        </div>
      </div>
    </section>
  );
}
