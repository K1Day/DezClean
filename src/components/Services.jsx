import { ArrowUpRight } from 'lucide-react';
import Badge from './ui/Badge.jsx';

const SERVICES = [
  { title: 'Офисы и бизнес-центры', ph: 'ph-office', desc: 'Ежедневная, еженедельная или разовая уборка офисных пространств любого класса. От 500 м².' },
  { title: 'Коворкинги', ph: 'ph-cw', desc: 'Поддержание чистоты в коворкингах и переговорных зонах — по расписанию или по запросу.' },
  { title: 'Торговые центры', ph: 'ph-mall', desc: 'Уборка торговых галерей, зон общепита и паркингов. Работаем ночью, не мешая трафику.' },
  { title: 'Склады и производство', ph: 'ph-wh', desc: 'Промышленная уборка складских и производственных помещений с учётом требований безопасности.' },
  { title: 'Гостиницы и апарт-отели', ph: 'ph-office', desc: 'Уборка номерного фонда, лобби и служебных зон по стандарту гостиничного сервиса.' },
  { title: 'После ремонта', ph: 'ph-mall', desc: 'Удаление строительной пыли, монтажного клея и загрязнений на всех поверхностях.' },
];

function ServiceCard({ title, desc, ph }) {
  return (
    <a className="service-card" href="#contacts">
      <div className={`service-card__media photo ${ph}`} />
      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{desc}</p>
        <span className="service-card__more">Подробнее <ArrowUpRight size={14} /></span>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="shead">
          <Badge tone="eyebrow">Услуги</Badge>
          <h2>Работаем с крупными объектами</h2>
          <p>Специализируемся на клининге коммерческой недвижимости от 500 м². Постоянные договоры, выделенные бригады, отчётность.</p>
        </div>
        <div className="services__grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
