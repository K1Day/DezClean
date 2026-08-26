import { Building2, ShoppingBag, Warehouse, Hotel, HardHat, Users } from 'lucide-react';
import Badge from './ui/Badge.jsx';

const PRICES = [
  {
    icon: Building2,
    title: 'Офисы и БЦ',
    price: 'от 40 ₸',
    unit: '/ м²',
    desc: 'Регулярная уборка офисных помещений класса A и B.',
    items: ['Влажная уборка полов', 'Санузлы и кухни', 'Протирка поверхностей', 'Вынос мусора'],
  },
  {
    icon: ShoppingBag,
    title: 'Торговые центры',
    price: 'от 35 ₸',
    unit: '/ м²',
    desc: 'Торговые галереи, паркинги, зоны фудкорта — ночная уборка.',
    items: ['Поломоечные машины', 'Фудкорт и санузлы', 'Витрины и входные группы', 'Паркинг'],
    featured: true,
  },
  {
    icon: Warehouse,
    title: 'Склады и производство',
    price: 'от 25 ₸',
    unit: '/ м²',
    desc: 'Промышленная уборка с учётом специфики объекта.',
    items: ['Промышленный пылесос', 'Обезжиривание полов', 'Очистка стеллажей', 'Вывоз крупного мусора'],
  },
  {
    icon: Hotel,
    title: 'Гостиницы',
    price: 'от 800 ₸',
    unit: '/ номер',
    desc: 'Горничные сервис по стандарту 3–5★ — номерной фонд и общие зоны.',
    items: ['Смена постельного белья', 'Санузел и ванная', 'Лобби и коридоры', 'Конференц-залы'],
  },
  {
    icon: HardHat,
    title: 'После ремонта',
    price: 'от 120 ₸',
    unit: '/ м²',
    desc: 'Однократная уборка строительного мусора и пыли перед сдачей объекта.',
    items: ['Строительная пыль', 'Монтажный клей', 'Окна и витражи', 'Сдача с актом'],
  },
  {
    icon: Users,
    title: 'Коворкинги',
    price: 'от 45 ₸',
    unit: '/ м²',
    desc: 'Ежедневная уборка open-space, переговорных и зон отдыха.',
    items: ['Несколько посещений в день', 'Дозаправка расходников', 'Переговорные комнаты', 'Кухня и кофе-зоны'],
  },
];

function PriceCard({ icon: Icon, title, price, unit, desc, items, featured }) {
  return (
    <div className={`price-card${featured ? ' price-card--featured' : ''}`}>
      <div className="price-card__icon"><Icon size={22} /></div>
      <div className="price-card__title">{title}</div>
      <div className="price-card__price">{price}<span className="price-card__unit"> {unit}</span></div>
      <p className="price-card__desc">{desc}</p>
      <ul className="price-card__list">
        {items.map((it) => <li key={it}>{it}</li>)}
      </ul>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="section section--mist" id="pricing">
      <div className="wrap">
        <div className="shead">
          <Badge tone="eyebrow">Цены</Badge>
          <h2>Прозрачная стоимость</h2>
          <p>Ориентировочные цены — окончательная стоимость рассчитывается после осмотра объекта и зависит от площади, периодичности и объёма работ.</p>
        </div>
        <div className="pricing__grid">
          {PRICES.map((p) => (
            <PriceCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
