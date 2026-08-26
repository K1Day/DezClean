import { useEffect, useRef } from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import Button from './ui/Button.jsx';
import Badge from './ui/Badge.jsx';
import Counter from './ui/Counter.jsx';
import Marquee from './Marquee.jsx';

export default function Hero({ onBook }) {
  const imgRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const img = imgRef.current;
    if (!img) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const offset = Math.min(36, window.scrollY * 0.12);
        img.style.transform = `scale(1.15) translateY(${offset}px)`;
        raf = null;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__eyebrow">
              <Badge tone="solid">Коммерческий клининг · Алматы и область</Badge>
            </div>
            <h1>
              Чистота<br />промышленного<br />масштаба — <span className="accent">точно в срок</span>
            </h1>
            <p className="hero__sub">
              Клининг офисов, коворкингов, торговых центров и складских комплексов
              в Алматы и Алматинской области. Работаем с объектами от 500 м² по SLA-договору.
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" onClick={onBook} iconRight={<ArrowUpRight size={18} />}>
                Получить расчёт стоимости
              </Button>
              <Button
                variant="outline"
                size="lg"
                as="a"
                href="#services"
                style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}
              >
                Смотреть услуги
              </Button>
            </div>
          </div>
          <div className="hero__media">
            <div className="photo ph-office">
              <img ref={imgRef} className="parallax-img" src="/assets/photos/hero-office.jpg" alt="Офис после уборки DEZ CLEAN" loading="lazy" />
              <span className="tag">Офис после уборки</span>
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
          <div className="hero__stat"><div className="n"><Counter to={500} suffix="+" delay={100} /></div><div className="l">обслуживаемых объектов</div></div>
          <div className="hero__stat"><div className="n accent-n"><Counter to={5} suffix=" лет" delay={200} /></div><div className="l">на рынке Алматы</div></div>
          <div className="hero__stat"><div className="n"><Counter to={100} suffix="%" delay={300} /></div><div className="l">соблюдение SLA</div></div>
          <div className="hero__stat"><div className="n"><Counter to={4.9} decimals={1} delay={400} /></div><div className="l">рейтинг по отзывам</div></div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}
