/* DEZ CLEAN — app shell + booking modal */
const { Button, Input, Badge } = window.AuraCleanDesignSystem_a177ad;
const Ico2 = ({ n }) => <i data-lucide={n}></i>;

function BookingModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) { setSent(false); document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  if (!open) return null;
  return (
    <div className="bk-overlay" onClick={onClose}>
      <div className="bk" onClick={e => e.stopPropagation()}>
        <button className="bk__x" onClick={onClose} aria-label="Закрыть"><Ico2 n="x" /></button>
        {sent ? (
          <div className="bk__done">
            <span className="bk__check"><Ico2 n="check" /></span>
            <h3>Заявка принята</h3>
            <p>Свяжемся с вами в течение 30 минут для согласования осмотра объекта.</p>
            <Button variant="outline" onClick={onClose}>Хорошо</Button>
          </div>
        ) : (
          <>
            <Badge tone="eyebrow">Бесплатный расчёт</Badge>
            <h3 className="bk__title">Заявка на клининг</h3>
            <p className="bk__sub">Опишите объект — мы подберём формат и рассчитаем стоимость.</p>
            <form className="bk__form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
              <Input label="Компания / контактное лицо" placeholder="ООО «Название» или ваше имя" required />
              <Input label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" required hint="Перезвоним в течение 30 минут" />
              <Input label="Тип объекта" placeholder="Офис, склад, ТЦ, гостиница…" />
              <Input label="Площадь и адрес" placeholder="Напр.: 2 500 м², ул. Абая 10" multiline />
              <Button variant="primary" size="lg" block type="submit" iconRight={<Ico2 n="arrow-up-right" />}>Отправить заявку</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function LandingApp() {
  const [booking, setBooking] = React.useState(false);
  const open = () => setBooking(true);

  const Header   = window.AuraHeader;
  const Hero     = window.AuraHero;
  const Services = window.AuraServices;
  const Pricing  = window.AuraPricing;
  const Steps    = window.AuraSteps;
  const WhyUs    = window.AuraWhyUs;
  const CTA      = window.AuraCTA;
  const Footer   = window.AuraFooter;
  const WaFab    = window.AuraWaFab;

  React.useEffect(() => {
    // paint service-card placeholders
    document.querySelectorAll('.aura-service').forEach(el => {
      const ph = el.getAttribute('data-ph');
      const media = el.querySelector('.aura-service__media');
      if (ph && media) media.classList.add(ph);
    });
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <div className="lp">
      <Header onBook={open} />
      <Hero onBook={open} />
      <Services />
      <Pricing />
      <Steps />
      <WhyUs />
      <CTA onBook={open} />
      <Footer />
      <WaFab />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LandingApp />);
setTimeout(() => window.lucide && window.lucide.createIcons(), 80);
