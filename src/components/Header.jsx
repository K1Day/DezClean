import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Button from './ui/Button.jsx';

const NAV_LINKS = [
  { href: '#services', label: 'Услуги' },
  { href: '#pricing', label: 'Цены' },
  { href: '#how', label: 'Как работаем' },
  { href: '#why', label: 'О нас' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header({ onBook }) {
  const [open, setOpen] = useState(false);

  const closeAndRun = (fn) => () => {
    setOpen(false);
    fn?.();
  };

  return (
    <header className={`hdr${open ? ' is-open' : ''}`}>
      <div className="wrap hdr__in">
        <a className="hdr__logo" href="#top">
          <img src="/assets/dez-clean-logo.jpeg" alt="DEZ CLEAN SERVICES — клининг в Алматы" />
        </a>
        <nav className="hdr__nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="hdr__cta">
          <Button variant="outline" size="sm" as="a" href="tel:+77001234567" iconLeft={<Phone size={16} />}>
            +7 700 123-45-67
          </Button>
          <Button variant="primary" size="sm" onClick={onBook}>Получить расчёт</Button>
          <button className="hdr__burger" aria-label="Меню" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div className="hdr__mobile">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <Button variant="outline" size="sm" as="a" href="tel:+77001234567" iconLeft={<Phone size={16} />}>
          +7 700 123-45-67
        </Button>
        <Button variant="primary" size="sm" onClick={closeAndRun(onBook)}>Получить расчёт</Button>
      </div>
    </header>
  );
}
