import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import Button from './ui/Button.jsx';
import Badge from './ui/Badge.jsx';
import Marquee from './Marquee.jsx';

export default function Hero({ onBook }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__eyebrow">
              <Badge tone="solid">Коммерческий клининг · Алматы</Badge>
            </div>
            <h1>
              Чистота<br />промышленного<br />масштаба — <span className="accent">точно в срок</span>
            </h1>
            <p className="hero__sub">
              Клининг офисов, коворкингов, торговых центров и складских комплексов.
              Работаем с объектами от 500 м² по SLA-договору.
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" onClick={onBook} iconRight={<ArrowUpRight size={18} />}>
                Получить расчёт стоимости
              </Button>
              <Button
                variant="outline"
                size="lg"
                as="a"
                href="#pricing"
                style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}
              >
                Посмотреть цены
              </Button>
            </div>
          </div>
          <div className="hero__media">
            <div className="photo ph-office">
              <span className="tag" style={{ color: 'rgba(255,255,255,.7)' }}>Офис после уборки</span>
            </div>
            <div className="hero__float">
              <span className="ic"><ShieldCheck size={20} /></span>
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
