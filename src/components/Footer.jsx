import { Instagram, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__brand">
            <img className="ftr__logo" src="/assets/dez-clean-logo.jpeg" alt="DEZ CLEAN SERVICES — клининг в Алматы" loading="lazy" />
            <p>Профессиональный клининг коммерческих объектов в Алматы. Работаем с 2020 года.</p>
          </div>
          <div className="ftr__col">
            <h5>Услуги</h5>
            <a href="#services">Офисы и БЦ</a>
            <a href="#services">Торговые центры</a>
            <a href="#services">Склады и производство</a>
            <a href="#services">Гостиницы</a>
            <a href="#services">Коворкинги</a>
          </div>
          <div className="ftr__col">
            <h5>Контакты</h5>
            <a href="tel:+77001234567">+7 700 123-45-67</a>
            <a href="mailto:info@dezclean.kz">info@dezclean.kz</a>
            <a href="#">WhatsApp</a>
            <a href="#">Алматы, ежедневно 08–22</a>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>© 2026 DEZ CLEAN SERVICES. Алматы.</span>
          <div className="ftr__social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <a href="#" aria-label="2GIS"><MapPin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
