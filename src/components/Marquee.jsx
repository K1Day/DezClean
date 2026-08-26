const ITEMS = ['Офисные помещения', 'Коворкинги', 'Торговые центры', 'Складские комплексы', 'Гостиницы', 'Алматы'];

function Segment() {
  return (
    <div className="marquee__seg">
      {ITEMS.map((t) => (
        <span key={t}>
          <span className="marquee__item">{t}</span>
          <span className="marquee__dot">·</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Segment />
        <Segment />
        <Segment />
      </div>
    </div>
  );
}
