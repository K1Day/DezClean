import Badge from './ui/Badge.jsx';

const STEPS = [
  { n: 1, title: 'Заявка', desc: 'Оставьте заявку на сайте или позвоните — ответим в течение 30 минут.' },
  { n: 2, title: 'Осмотр объекта', desc: 'Выезжаем для оценки объёма работ и составляем детальную смету.' },
  { n: 3, title: 'Договор и SLA', desc: 'Фиксируем сроки, состав работ и стоимость. Никаких доплат по факту.' },
  { n: 4, title: 'Работаем', desc: 'Выделенная бригада, свой инвентарь, отчёт после каждого выезда.', navy: true },
];

function Step({ n, title, desc, navy }) {
  return (
    <div className={`step${navy ? ' step--navy' : ''}`}>
      <div className="step__n">{n}</div>
      <div className="step__rule" />
      <h3 className="step__title">{title}</h3>
      <p className="step__desc">{desc}</p>
    </div>
  );
}

export default function Steps() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="shead">
          <Badge tone="eyebrow">Как работаем</Badge>
          <h2>Четыре шага до чистоты</h2>
          <p>Прозрачный процесс без лишних звонков и согласований.</p>
        </div>
        <div className="steps__grid">
          {STEPS.map((s) => (
            <Step key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
