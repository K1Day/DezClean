import { ShieldCheck, Users, Tag, Clock, Leaf } from 'lucide-react';
import Badge from './ui/Badge.jsx';

const WHY = [
  { icon: ShieldCheck, t: 'SLA-договор', d: 'Фиксируем сроки и стандарты качества. Штрафные санкции за нарушение — прописаны в договоре.' },
  { icon: Users, t: 'Проверенные бригады', d: 'Штатные сотрудники с допуском на объект, в форме с бейджами. Никаких субподрядчиков.' },
  { icon: Tag, t: 'Прозрачные цены', d: 'Смета до начала работ. Цена не меняется — если только вы не расширяете объём.' },
  { icon: Clock, t: 'Гибкий график', d: 'Работаем ночью, в выходные, в нерабочее время — по удобному для вас расписанию.' },
  { icon: Leaf, t: 'Экологичная химия', d: 'Профессиональные сертифицированные средства, безопасные для персонала и посетителей.' },
];

export default function WhyUs() {
  return (
    <section className="section section--mist" id="why">
      <div className="wrap why__grid">
        <div className="why__media reveal">
          <div className="photo ph-cw">
            <img src="/assets/photos/whyus-staff.jpg" alt="Сертифицированный персонал DEZ CLEAN" loading="lazy" />
            <span className="tag">Сертифицированный персонал</span>
          </div>
        </div>
        <div>
          <Badge tone="eyebrow">Почему DEZ CLEAN</Badge>
          <h2 className="why__heading">Надёжный партнёр для бизнеса</h2>
          <div className="why__list reveal-stagger">
            {WHY.map(({ icon: Icon, t, d }) => (
              <div className="why__item" key={t}>
                <span className="ic"><Icon size={22} /></span>
                <div><h4>{t}</h4><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
