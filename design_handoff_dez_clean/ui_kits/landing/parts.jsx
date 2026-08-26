/* DEZ CLEAN — section components. Requires DS bundle + Lucide. */
const DS = window.AuraCleanDesignSystem_a177ad;
const { Button, Badge, ServiceCard, Step, ReviewCard } = DS;

const Ico = ({ n, ...p }) => <i data-lucide={n} {...p}></i>;

function Header({ onBook }) {
  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <a className="hdr__logo" href="#top">
          <img src="../../assets/dez-clean-logo.jpeg" alt="DEZ CLEAN SERVICES" />
        </a>
        <nav className="hdr__nav">
          <a href="#services">Услуги</a>
          <a href="#pricing">Цены</a>
          <a href="#how">Как работаем</a>
          <a href="#why">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="hdr__cta">
          <Button variant="outline" size="sm" as="a" href="tel:+77001234567" iconLeft={<Ico n="phone" />}>+7 700 123-45-67</Button>
          <Button variant="primary" size="sm" onClick={onBook}>Получить расчёт</Button>
          <button className="hdr__burger" aria-label="Меню"><Ico n="menu" /></button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onBook }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__eyebrow">
              <Badge tone="solid">Коммерческий клининг · Алматы</Badge>
            </div>
            <h1>Чистота<br />промышленного<br />масштаба — <span className="accent">точно в срок</span></h1>
            <p className="hero__sub">Клининг офисов, коворкингов, торговых центров и складских комплексов. Работаем с объектами от 500 м² по SLA-договору.</p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" onClick={onBook} iconRight={<Ico n="arrow-up-right" />}>Получить расчёт стоимости</Button>
              <Button variant="outline" size="lg" as="a" href="#pricing" style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}>Посмотреть цены</Button>
            </div>
          </div>
          <div className="hero__media">
            <div className="photo ph-office"><span className="tag" style={{ color: 'rgba(255,255,255,.7)' }}>Офис после уборки</span></div>
            <div className="hero__float">
              <span className="ic"><Ico n="shield-check" /></span>
              <span>
                <span className="t">SLA-договор</span>
                <span className="s">гарантия сроков и качества</span>
              </span>
            </div>
          </div>
        </div>
        <div className="hero__stats">
          <div className="hero__stat"><div className="n">500+</div><div className="l">обслуживаемых объектов</div></div>
          <div className="hero__stat"><div className="n accent-n">5 лет</div><div className="l">на рынке Алматы</div></div>
          <div className="hero__stat"><div className="n">100%</div><div className="l">соблюдение SLA</div></div>
          <div className="hero__stat"><div className="n">4,9</div><div className="l">рейтинг по отзывам</div></div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ['Офисные помещения', 'Коворкинги', 'Торговые центры', 'Складские комплексы', 'Гостиницы', 'Алматы'];
  const Seg = () => (
    <div className="marquee__seg">
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span className="marquee__item">{t}</span>
          <span className="marquee__dot">·</span>
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track"><Seg /><Seg /><Seg /></div>
    </div>
  );
}

const SERVICES = [
  { title: 'Офисы и бизнес-центры', ph: 'ph-office', desc: 'Ежедневная, еженедельная или разовая уборка офисных пространств любого класса. От 500 м².' },
  { title: 'Коворкинги', ph: 'ph-cw', desc: 'Поддержание чистоты в коворкингах и переговорных зонах — по расписанию или по запросу.' },
  { title: 'Торговые центры', ph: 'ph-mall', desc: 'Уборка торговых галерей, зон общепита и паркингов. Работаем ночью, не мешая трафику.' },
  { title: 'Склады и производство', ph: 'ph-wh', desc: 'Промышленная уборка складских и производственных помещений с учётом требований безопасности.' },
  { title: 'Гостиницы и апарт-отели', ph: 'ph-office', desc: 'Уборка номерного фонда, лобби и служебных зон по стандарту гостиничного сервиса.' },
  { title: 'После ремонта', ph: 'ph-mall', desc: 'Удаление строительной пыли, монтажного клея и загрязнений на всех поверхностях.' },
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="shead">
          <Badge tone="eyebrow">Услуги</Badge>
          <h2>Работаем с крупными объектами</h2>
          <p>Специализируемся на клининге коммерческой недвижимости от 500 м². Постоянные договоры, выделенные бригады, отчётность.</p>
        </div>
        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} title={s.title} description={s.desc} data-ph={s.ph} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PRICES = [
  {
    icon: 'building-2',
    title: 'Офисы и БЦ',
    price: 'от 40 ₸',
    unit: '/ м²',
    desc: 'Регулярная уборка офисных помещений класса A и B.',
    items: ['Влажная уборка полов', 'Санузлы и кухни', 'Протирка поверхностей', 'Вынос мусора'],
  },
  {
    icon: 'shopping-bag',
    title: 'Торговые центры',
    price: 'от 35 ₸',
    unit: '/ м²',
    desc: 'Торговые галереи, паркинги, зоны фудкорта — ночная уборка.',
    items: ['Поломоечные машины', 'Фудкорт и санузлы', 'Витрины и входные группы', 'Паркинг'],
    featured: true,
  },
  {
    icon: 'warehouse',
    title: 'Склады и производство',
    price: 'от 25 ₸',
    unit: '/ м²',
    desc: 'Промышленная уборка с учётом специфики объекта.',
    items: ['Промышленный пылесос', 'Обезжиривание полов', 'Очистка стеллажей', 'Вывоз крупного мусора'],
  },
  {
    icon: 'hotel',
    title: 'Гостиницы',
    price: 'от 800 ₸',
    unit: '/ номер',
    desc: 'Горничные сервис по стандарту 3–5★ — номерной фонд и общие зоны.',
    items: ['Смена постельного белья', 'Санузел и ванная', 'Лобби и коридоры', 'Конференц-залы'],
  },
  {
    icon: 'hard-hat',
    title: 'После ремонта',
    price: 'от 120 ₸',
    unit: '/ м²',
    desc: 'Однократная уборка строительного мусора и пыли перед сдачей объекта.',
    items: ['Строительная пыль', 'Монтажный клей', 'Окна и витражи', 'Сдача с актом'],
  },
  {
    icon: 'users',
    title: 'Коворкинги',
    price: 'от 45 ₸',
    unit: '/ м²',
    desc: 'Ежедневная уборка open-space, переговорных и зон отдыха.',
    items: ['Несколько посещений в день', 'Дозаправка расходников', 'Переговорные комнаты', 'Кухня и кофе-зоны'],
  },
];

function Pricing() {
  return (
    <section className="section section--mist" id="pricing">
      <div className="wrap">
        <div className="shead">
          <Badge tone="eyebrow">Цены</Badge>
          <h2>Прозрачная стоимость</h2>
          <p>Ориентировочные цены — окончательная стоимость рассчитывается после осмотра объекта и зависит от площади, периодичности и объёма работ.</p>
        </div>
        <div className="pricing__grid">
          {PRICES.map((p, i) => (
            <div key={i} className={`price-card${p.featured ? ' price-card--featured' : ''}`}>
              <div className="price-card__icon"><Ico n={p.icon} /></div>
              <div className="price-card__title">{p.title}</div>
              <div className="price-card__price">{p.price}<span className="price-card__unit"> {p.unit}</span></div>
              <p className="price-card__desc">{p.desc}</p>
              <ul className="price-card__list">
                {p.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="shead">
          <Badge tone="eyebrow">Как работаем</Badge>
          <h2>Четыре шага до чистоты</h2>
          <p>Прозрачный процесс без лишних звонков и согласований.</p>
        </div>
        <div className="steps__grid">
          <Step number={1} title="Заявка" description="Оставьте заявку на сайте или позвоните — ответим в течение 30 минут." />
          <Step number={2} title="Осмотр объекта" description="Выезжаем для оценки объёма работ и составляем детальную смету." />
          <Step number={3} title="Договор и SLA" description="Фиксируем сроки, состав работ и стоимость. Никаких доплат по факту." />
          <Step number={4} title="Работаем" description="Выделенная бригада, свой инвентарь, отчёт после каждого выезда." tone="clay" />
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { ic: 'shield-check', t: 'SLA-договор', d: 'Фиксируем сроки и стандарты качества. Штрафные санкции за нарушение — прописаны в договоре.' },
  { ic: 'users', t: 'Проверенные бригады', d: 'Штатные сотрудники с допуском на объект, в форме с бейджами. Никаких субподрядчиков.' },
  { ic: 'tag', t: 'Прозрачные цены', d: 'Смета до начала работ. Цена не меняется — если только вы не расширяете объём.' },
  { ic: 'clock', t: 'Гибкий график', d: 'Работаем ночью, в выходные, в нерабочее время — по удобному для вас расписанию.' },
  { ic: 'leaf', t: 'Экологичная химия', d: 'Профессиональные сертифицированные средства, безопасные для персонала и посетителей.' },
];

function WhyUs() {
  return (
    <section className="section section--mist" id="why">
      <div className="wrap why__grid">
        <div className="why__media"><div className="photo ph-cw"><span className="tag">Сертифицированный персонал</span></div></div>
        <div>
          <Badge tone="eyebrow">Почему DEZ CLEAN</Badge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h2)', color: 'var(--ink)', margin: '12px 0 0', maxWidth: '18ch', letterSpacing: '-.02em' }}>Надёжный партнёр для бизнеса</h2>
          <div className="why__list">
            {WHY.map((w, i) => (
              <div className="why__item" key={i}>
                <span className="ic"><Ico n={w.ic} /></span>
                <div><h4>{w.t}</h4><p>{w.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ onBook }) {
  return (
    <section className="section" id="contacts">
      <div className="wrap">
        <div className="cta__box">
          <span className="eye aura-eyebrow">Бесплатный расчёт</span>
          <h2>Готовы обсудить ваш объект?</h2>
          <Button variant="primary" size="lg" onClick={onBook} iconRight={<Ico n="arrow-up-right" />}>Оставить заявку</Button>
          <div className="note">Работаем по всему Алматы · Пн–Вс, 08:00–22:00 · Объекты от 500 м²</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__brand">
            <img className="ftr__logo" src="../../assets/dez-clean-logo.jpeg" alt="DEZ CLEAN SERVICES" />
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
          <span>© 2025 DEZ CLEAN SERVICES. Алматы.</span>
          <div className="ftr__social">
            <a href="#" aria-label="Instagram"><Ico n="instagram" /></a>
            <a href="#" aria-label="WhatsApp"><Ico n="message-circle" /></a>
            <a href="#" aria-label="2GIS"><Ico n="map-pin" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WaFab() {
  return (
    <a className="wa-fab" href="#" aria-label="WhatsApp">
      <Ico n="message-circle" /> WhatsApp
    </a>
  );
}

Object.assign(window, {
  AuraHeader: Header,
  AuraHero: Hero,
  AuraServices: Services,
  AuraPricing: Pricing,
  AuraSteps: HowWeWork,
  AuraWhyUs: WhyUs,
  AuraCTA: CTA,
  AuraFooter: Footer,
  AuraWaFab: WaFab,
});
