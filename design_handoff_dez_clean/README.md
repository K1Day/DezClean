# Handoff: DEZ CLEAN SERVICES — Landing Page

## Overview

Full one-page B2B landing site for **DEZ CLEAN SERVICES**, a commercial cleaning company in Almaty. The page targets facility managers and operations directors at commercial real estate firms. Key sections: sticky header, dark-navy hero, marquee strip, 6 service cards, pricing table (6 types), 4-step process, why-us trust block, dark CTA, footer, floating WhatsApp button, and a booking modal.

## About the Design Files

The HTML files in this bundle are **design references created as prototypes** — they show the intended look, layout, copy, and interactive behavior. The task is to **recreate these designs in your target codebase** (Next.js, React, Vue, native, etc.) using its established patterns, component libraries, and build system. Do **not** ship the raw HTML/Babel prototype files to production.

The `_ds_bundle.js` is a compiled design-system bundle used only by the prototype. In production, use the token CSS files directly and implement the components in your framework.

## Fidelity

**High-fidelity.** Pixel-accurate colors, typography, spacing, and interactions. Recreate the UI exactly, applying the design tokens from `tokens/` as CSS custom properties (or convert to your theme system — e.g. Tailwind config, Chakra theme, or CSS variables in a global stylesheet).

---

## Design Tokens

All tokens live in `tokens/` and are imported via `styles.css`.

### Colors

```css
/* Surfaces */
--paper:        #F3F7FB;  /* page background */
--paper-raised: #FFFFFF;  /* cards */
--mist:         #E8F0F8;  /* alternate section bg */
--mist-deep:    #D8E4F0;
--steel:        #C5D4E4;

/* Text */
--ink:          #0C1C30;  /* headings */
--ink-soft:     #3C4D63;  /* body */
--ink-muted:    #6E7E92;  /* captions, meta */
--ink-faint:    #A9B7C7;  /* disabled */

/* Blue — primary accent */
--blue:         #2E80D8;
--blue-deep:    #1E63B4;  /* hover */
--blue-soft:    #B7D4F0;  /* fills */
--blue-wash:    #E7F1FB;  /* tinted bg */
--blue-ink:     #1A4E89;  /* blue text */

/* Navy — dark brand surfaces */
--navy:         #102D4C;
--navy-deep:    #0A1B2E;  /* hero / footer ground */
--navy-soft:    #B4C2D4;
--navy-wash:    #E3EAF2;

/* Highlight */
--sky:          #5AA0E6;

/* Lines */
--line:         #DBE5F0;
--line-strong:  #C6D4E3;

/* Feedback */
--positive:     #2E9E6B;
--danger:       #C8503F;
```

### Typography

```css
--font-display: 'Sora', sans-serif;   /* headings — weight 600/700 */
--font-body:    'DM Sans', sans-serif; /* body, UI — weight 400/500/600 */

/* Scale */
--fs-display:  clamp(2.75rem, 1.6rem + 5vw, 5rem);
--fs-h1:       clamp(2.25rem, 1.5rem + 3.2vw, 3.75rem);
--fs-h2:       clamp(1.875rem, 1.4rem + 2vw, 2.75rem);
--fs-h3:       clamp(1.375rem, 1.15rem + 1vw, 1.875rem);
--fs-lead:     1.1875rem;
--fs-body:     1.0625rem;
--fs-sm:       0.9375rem;
--fs-caption:  0.8125rem;

/* Line heights */
--lh-tight:   1.08;
--lh-relaxed: 1.7;

/* Letter spacing */
--ls-tight:  -0.02em;  /* headings */
--ls-wider:   0.2em;   /* eyebrows / uppercase labels */
```

### Spacing

```css
--space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
--space-4: 1rem;     --space-5: 1.5rem;   --space-6: 2rem;
--space-7: 3rem;     --space-8: 4rem;     --space-9: 6rem;

--container:  1200px;
--gutter:     clamp(1.25rem, 5vw, 5rem);
--section-y:  clamp(4rem, 9vw, 8rem);
```

### Radii & Shadows

```css
--radius-sm:  10px;
--radius-md:  16px;  /* inputs */
--radius-lg:  24px;  /* cards */
--radius-xl:  32px;  /* image panels, CTA box */
--radius-pill: 999px; /* buttons, badges */

--shadow-xs: 0 1px 2px rgba(16,45,76,.05);
--shadow-sm: 0 2px 8px rgba(16,45,76,.06);
--shadow-md: 0 10px 30px -12px rgba(16,45,76,.18);
--shadow-lg: 0 24px 60px -24px rgba(16,45,76,.25);
```

### Motion

```css
--ease-out:  cubic-bezier(0.22, 0.61, 0.36, 1);
--ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
--dur-fast:  160ms;
--dur-base:  280ms;
--dur-slow:  520ms;
```

---

## Screens / Views

### 1. Header (sticky)

- **Position:** sticky top, z-index 50
- **Height:** 76px
- **Background:** `rgba(#F3F7FB, 88%) + backdrop-filter: blur(14px)`
- **Border-bottom:** `1px solid rgba(--line, 80%)`
- **Layout:** flex row, space-between. Logo left → nav center (margin-left auto) → CTAs right.
- **Logo:** `assets/dez-clean-logo.jpeg`, height 44px
- **Nav links:** DM Sans 15px / 500 / `--ink-soft`. Hover → `--ink`. Links: Услуги · Цены · Как работаем · О нас · Контакты
- **CTA buttons:** outline button "+7 700 123-45-67" (with phone icon) + primary button "Получить расчёт"
- **Mobile (≤900px):** Nav and CTA button hidden, hamburger icon shown.

---

### 2. Hero (dark navy, full-width)

- **Background:** `--navy-deep` (#0A1B2E) + radial blue glow: `radial-gradient(ellipse 80% 60% at 70% 50%, rgba(46,128,216,.18), transparent 70%)`
- **Padding:** clamp(4rem, 8vw, 7rem) top, 0 bottom
- **Layout:** CSS grid, 2 cols (1.1fr / 0.9fr), gap clamp(2.5rem–5rem), align-items center

**Left column (copy):**
- Eyebrow badge: "Коммерческий клининг · Алматы" — solid blue fill badge, pill shape
- H1: Sora 700, `--fs-display`, color white, ls −0.025em, line-height 1.04. Text: "Чистота промышленного масштаба — <span color #2E80D8>точно в срок</span>"
- Subhead: DM Sans `--fs-lead`, `rgba(255,255,255,.72)`, max-width 36ch, line-height 1.55. Text: "Клининг офисов, коворкингов, торговых центров и складских комплексов. Работаем с объектами от 500 м² по SLA-договору."
- CTA row: Primary button lg "Получить расчёт стоимости" (arrow-up-right icon) + outline button lg "Посмотреть цены" (border `rgba(255,255,255,.3)`, color white)

**Stats bar** (border-top `rgba(255,255,255,.1)`, padding 0.6rem 0):
- 4 stats side by side: "500+" / "обслуживаемых объектов" · "5 лет" (blue) / "на рынке Алматы" · "100%" / "соблюдение SLA" · "4,9" / "рейтинг по отзывам"
- Number: Sora 700, 2.25rem, white (accent numbers blue)
- Label: DM Sans `--fs-sm`, `rgba(255,255,255,.55)`

**Right column (media):**
- Image panel: aspect-ratio 4/5, `--radius-xl`, placeholder warm-blue gradient
- Floating badge (bottom-left of image, offset −24px left): white card, pill, shadow-lg. Icon circle (blue-wash bg, blue-deep icon, 40×40px) + "SLA-договор" bold / "гарантия сроков и качества" muted

---

### 3. Marquee strip

- **Background:** `--navy` (#102D4C)
- **Height:** auto (~46px)
- **Animation:** infinite linear scroll left, 30s, 3× repeated segments
- **Items:** DM Sans 13px / 500 / tracking .18em / uppercase / `rgba(255,255,255,.85)`
- **Separator:** `·` in `--blue`
- **Content:** "Офисные помещения · Коворкинги · Торговые центры · Складские комплексы · Гостиницы · Алматы"
- `prefers-reduced-motion`: stop animation

---

### 4. Services section

- **Background:** `--paper`
- **Section padding:** `--section-y`
- **Section heading (shead):**
  - Eyebrow badge: "Услуги" (tone eyebrow — uppercase, blue-deep, no background)
  - H2: "Работаем с крупными объектами" (Sora 700, `--fs-h2`, `--ink`, ls −.02em)
  - Body text: "Специализируемся на клининге…" (DM Sans, `--fs-body`, `--ink-soft`, max-width 52ch)
- **Grid:** 3 cols, gap `--space-5` (mobile: 1 col)
- **6 service cards:** whole card is `<a>`, `--radius-lg`, white surface, `1px --line` border, shadow-sm → shadow-md on hover, translateY(−6px) on hover

Each card:
- Media area: aspect-ratio 4/3, `--radius-xl` top, gradient placeholder (replace with real photo). Warm dark overlay gradient bottom. No img tag needed if placeholder.
- Body: padding `--space-5`, flex column, gap 0.5em
- Title: Sora 500, `--fs-title` (1.3125rem), `--ink`, line-height 1.15
- Description: DM Sans `--fs-sm`, `--ink-soft`, line-height 1.55
- "Подробнее" link: DM Sans `--fs-sm` / 600 / `--blue-deep` + arrow-up-right icon (1em). Icon translates (2px, −2px) on card hover.

**Services list:**
1. Офисы и бизнес-центры — "Ежедневная, еженедельная или разовая уборка офисных пространств любого класса. От 500 м²."
2. Коворкинги — "Поддержание чистоты в коворкингах и переговорных зонах — по расписанию или по запросу."
3. Торговые центры — "Уборка торговых галерей, зон общепита и паркингов. Работаем ночью, не мешая трафику."
4. Склады и производство — "Промышленная уборка складских и производственных помещений с учётом требований безопасности."
5. Гостиницы и апарт-отели — "Уборка номерного фонда, лобби и служебных зон по стандарту гостиничного сервиса."
6. После ремонта — "Удаление строительной пыли, монтажного клея и загрязнений на всех поверхностях."

---

### 5. Pricing section

- **Background:** `--mist` (#E8F0F8)
- **Grid:** 3 cols (mobile: 1 col), gap `--space-5`
- **Price card:** white surface, `--radius-lg`, `1px --line` border, padding `--space-6`, flex column gap `--space-3`
- **Featured card** (Торговые центры): border-color `--blue`, background `--blue-wash`
- **On hover:** translateY(−5px), shadow-md

Each card structure:
- Icon container: 46×46px, `--radius-md`, blue-wash bg (featured: blue bg), blue-deep icon (featured: white). Lucide icon 22px.
- Title: Sora 600, `--fs-title`, `--ink`
- Price: Sora 700, 1.75rem, `--blue-deep` + unit span (DM Sans `--fs-caption`, `--ink-muted`)
- Description: DM Sans `--fs-sm`, `--ink-soft`, line-height 1.6
- Feature list: no bullets (use a 7×7px circle in `--blue`), DM Sans `--fs-sm`, `--ink-soft`, gap 8px

**Pricing data:**
| Icon | Title | Price | Unit | Features |
|------|-------|-------|------|----------|
| building-2 | Офисы и БЦ | от 40 ₸ | / м² | Влажная уборка полов · Санузлы и кухни · Протирка поверхностей · Вынос мусора |
| shopping-bag ⭐ | Торговые центры | от 35 ₸ | / м² | Поломоечные машины · Фудкорт и санузлы · Витрины и входные группы · Паркинг |
| warehouse | Склады и производство | от 25 ₸ | / м² | Промышленный пылесос · Обезжиривание полов · Очистка стеллажей · Вывоз крупного мусора |
| hotel | Гостиницы | от 800 ₸ | / номер | Смена постельного белья · Санузел и ванная · Лобби и коридоры · Конференц-залы |
| hard-hat | После ремонта | от 120 ₸ | / м² | Строительная пыль · Монтажный клей · Окна и витражи · Сдача с актом |
| users | Коворкинги | от 45 ₸ | / м² | Несколько посещений в день · Дозаправка расходников · Переговорные комнаты · Кухня и кофе-зоны |

---

### 6. How we work (4 steps)

- **Background:** `--paper`
- **Grid:** 4 cols (tablet: 2×2, mobile: 1 col), gap clamp(1.5rem–3rem)

Each step:
- Number: Sora 500, clamp(3rem–4.5rem), `--blue` (step 4: `--navy`), ls −.02em, line-height 1
- Horizontal rule: 48×1px, `--line-strong`, margin 0.2em 0 0.3em
- Title: Sora 500, `--fs-h3`, `--ink`, line-height 1.15
- Description: DM Sans `--fs-body`, `--ink-soft`, line-height 1.6, max-width 34ch

**Steps:**
1. "Заявка" — "Оставьте заявку на сайте или позвоните — ответим в течение 30 минут."
2. "Осмотр объекта" — "Выезжаем для оценки объёма работ и составляем детальную смету."
3. "Договор и SLA" — "Фиксируем сроки, состав работ и стоимость. Никаких доплат по факту."
4. "Работаем" — "Выделенная бригада, свой инвентарь, отчёт после каждого выезда." (tone: navy)

---

### 7. Why DEZ CLEAN

- **Background:** `--mist`
- **Layout:** 2-col grid (1fr 1fr), gap clamp(2rem–5rem), align-items center

Left: image panel, aspect-ratio 1:1, `--radius-xl`, placeholder gradient

Right:
- Eyebrow: "Почему DEZ CLEAN"
- H2: "Надёжный партнёр для бизнеса" (Sora 700, `--fs-h2`, `--ink`, max-width 18ch)
- 5 items, flex column, gap `--space-5`:
  - Icon: 44×44px rounded square (`--radius-md`), `--blue-wash` bg, `--blue-deep` icon, Lucide 22px
  - Title h4: DM Sans 700, `--fs-body`, `--ink`
  - Description p: DM Sans `--fs-sm`, `--ink-soft`, line-height 1.6

**Why items:**
| Icon | Title | Description |
|------|-------|-------------|
| shield-check | SLA-договор | Фиксируем сроки и стандарты качества. Штрафные санкции за нарушение — прописаны в договоре. |
| users | Проверенные бригады | Штатные сотрудники с допуском на объект, в форме с бейджами. Никаких субподрядчиков. |
| tag | Прозрачные цены | Смета до начала работ. Цена не меняется — если только вы не расширяете объём. |
| clock | Гибкий график | Работаем ночью, в выходные, в нерабочее время — по удобному для вас расписанию. |
| leaf | Экологичная химия | Профессиональные сертифицированные средства, безопасные для персонала и посетителей. |

---

### 8. CTA section (dark)

- **Background:** `--navy-deep` + radial glow `rgba(46,128,216,.25)` at top center
- **Box:** `--radius-xl`, padding clamp(3rem–6rem), text-align center
- **Eyebrow:** "Бесплатный расчёт" — uppercase, `--blue`, DM Sans 13px tracking .2em
- **H2:** "Готовы обсудить ваш объект?" — Sora 700, `--fs-h1`, white, max-width 22ch, ls −.02em
- **Button:** Primary lg "Оставить заявку" with arrow-up-right icon
- **Note:** "Работаем по всему Алматы · Пн–Вс, 08:00–22:00 · Объекты от 500 м²" — DM Sans `--fs-sm`, `rgba(255,255,255,.55)`

---

### 9. Footer (dark)

- **Background:** `--navy-deep`, `border-top: 1px solid rgba(46,128,216,.25)`
- **Padding:** `--space-8` top, `--space-6` bottom
- **Top grid:** 3 cols (1.5fr 1fr 1fr), border-bottom `rgba(255,255,255,.1)`
  - Col 1: Logo img (height 44px) + tagline "Уборка с заботой о вашем доме. Чистое пространство — ясная голова." (DM Sans `--fs-sm`, `rgba(255,255,255,.55)`, max-width 30ch)
  - Col 2: "Услуги" h5 (uppercase, `rgba(255,255,255,.4)`, tracking .14em) + 5 links
  - Col 3: "Контакты" h5 + phone, email, WhatsApp, address
- **Bottom row:** copyright text (`rgba(255,255,255,.4)`) + social icons row
- **Social icons:** 40×40px circles, `border: 1px solid rgba(255,255,255,.2)`, hover → `--blue` fill. Icons: instagram, message-circle, map-pin

---

### 10. WhatsApp FAB

- **Position:** fixed, right 22px, bottom 22px, z-index 60
- **Style:** green (#25A84A → hover #1D8F3E), pill, padding 13px 20px, shadow-lg
- **Content:** message-circle icon (20px) + "WhatsApp"
- **Hover:** translateY(−2px)
- **Mobile:** stretches full width (left 16px, right 16px, bottom 16px, justify-content center)

---

### 11. Booking Modal

**Trigger:** "Получить расчёт" / "Оставить заявку" buttons.

- **Overlay:** fixed inset 0, `rgba(--navy-deep, 55%)`, blur(4px), fade-in animation
- **Modal box:** max-width 480px, centered, `--paper` bg, `--radius-lg`, shadow-lg, padding clamp(1.75rem–2.75rem)
  - Rise-in animation: opacity 0→1, translateY(16px→0), `--dur-base`
- **Close button:** 38×38px circle, `--mist` bg, top-right 16px

**Form (initial state):**
- Eyebrow badge: "Бесплатный расчёт"
- Title h3: "Заявка на клининг" — Sora 700, `--fs-h3`, `--ink`
- Sub: "Опишите объект — мы подберём формат и рассчитаем стоимость." — DM Sans `--fs-sm`, `--ink-soft`
- Fields (flex column, gap `--space-4`):
  1. "Компания / контактное лицо" — text, placeholder "ООО «Название» или ваше имя", required
  2. "Телефон" — tel, placeholder "+7 (___) ___-__-__", required, hint "Перезвоним в течение 30 минут"
  3. "Тип объекта" — text, placeholder "Офис, склад, ТЦ, гостиница…"
  4. "Площадь и адрес" — textarea, placeholder "Напр.: 2 500 м², ул. Абая 10"
- Submit button: Primary lg block "Отправить заявку" with arrow-up-right icon

**Success state (after submit):**
- 64px circle: `--blue-wash` bg, `--blue-deep` check icon (30px)
- H3: "Заявка принята"
- Text: "Свяжемся с вами в течение 30 минут для согласования осмотра объекта."
- Outline button "Хорошо" → closes modal

---

## Components

### Button
```
Variants: primary (--blue fill), outline (hairline border), ghost (text only)
Sizes: sm (15px / .85em padding), md, lg (17px / 1em padding)
Shape: pill (border-radius 999px)
Hover: fill → --blue-deep; Active: scale(.978)
Disabled: opacity .5
Can render as <a> tag (for link buttons)
Props: variant, size, as, block, iconLeft, iconRight
```

### Badge
```
Variants: solid (blue fill), eyebrow (uppercase, no bg, blue-deep text),
          blue (blue-wash fill), navy (navy-wash fill),
          neutral (mist fill), outline (hairline border)
Shape: pill
Optional: dot (status indicator), icon (leading Lucide icon)
```

### Input
```
Labelled field: label above, hint/error below
Border: 1px --line; focus: --blue + 3px focus ring color-mix(blue 50%, transparent)
Border-radius: --radius-md (16px)
Multiline: renders <textarea>, resize: vertical, min-height 6em
Error state: border --danger, hint text --danger
```

### ServiceCard
```
Full-card link (<a>), border-radius --radius-lg
Media: aspect-ratio 4/3, image or gradient placeholder
Corner tag: absolute top-left pill
Body: title (Sora), description (DM Sans), "Подробнее" link with icon
Hover: translateY(-6px), shadow-md, image scale(1.04), icon translates
```

### Step
```
Big number: Sora 500, clamp 48-72px, --blue (tone clay → --navy)
Rule: 48x1px, --line-strong
Title: Sora 500, --fs-h3
Description: DM Sans, --fs-body
```

### ReviewCard
```
Stars: Lucide star icons, --clay color (clay is --navy in this rebrand)
Quote: italic serif, --fs-lead, --ink (note: brand is now sans-first, skip italic)
Footer: Avatar + name + source line
Variants: card (surface+border) | plain (bare)
```

---

## Interactions & Behavior

| Element | Interaction | Details |
|---------|-------------|---------|
| Header | Scroll | Sticky top, blur backdrop on scroll |
| Hero CTA | Click | Opens booking modal |
| Nav links | Click | Smooth scroll to section (scroll-margin-top 88px) |
| Service cards | Hover | translateY(-6px), shadow-md, image zoom, icon nudge |
| Price cards | Hover | translateY(-5px), shadow-md |
| Booking modal | Open | Fade + rise animation |
| Booking modal | Submit | Shows success state (no real API) |
| Booking modal | Overlay click | Closes modal |
| WhatsApp FAB | Hover | translateY(-2px) |
| Marquee | — | Infinite linear scroll, paused for `prefers-reduced-motion` |

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| ≤1024px | Pricing: 2 cols · Steps: 2×2 |
| ≤900px | Header: nav hidden, burger shown · Hero: single col, photo on top · Services: 2 cols · Why us: single col · Footer: single col |
| ≤600px | Services: 1 col · Pricing: 1 col · Steps: 1 col · Hero stats: vertical · WhatsApp FAB: full width |

---

## Assets

| File | Usage |
|------|-------|
| `assets/dez-clean-logo.jpeg` | Header logo (h:44px), footer logo (h:44px) |
| Photography (missing) | Replace CSS-gradient placeholders in service cards, hero media, and why-us image panel with real photos of commercial spaces. Aspect ratios: hero 4:5, service cards 4:3, why-us 1:1. |

**Icons:** [Lucide](https://lucide.dev) — thin rounded stroke, 1.75px, `currentColor`. CDN: `https://unpkg.com/lucide@0.263.1/dist/umd/lucide.min.js`. In React, use `lucide-react` package (`npm i lucide-react`).

---

## Files in This Package

```
design_handoff_dez_clean/
├── README.md                    ← this file
├── styles.css                   ← global CSS entry (imports all tokens)
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   ├── fonts.css
│   └── base.css
├── assets/
│   └── dez-clean-logo.jpeg
└── ui_kits/landing/
    ├── index.html               ← interactive prototype (reference)
    ├── landing.css              ← layout CSS (sections, grid, responsive)
    ├── parts.jsx                ← section components (Babel/JSX prototype)
    └── App.jsx                  ← app shell + booking modal
```

> `parts.jsx` and `App.jsx` are Babel prototype files — read them to understand component structure and copy text, but rewrite in your framework's idioms.

---

## Implementation Notes

1. **Load Sora + DM Sans** from Google Fonts (or self-host). Add to `<head>`: `https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap`
2. **CSS custom properties** — link `styles.css` globally (or copy the `:root` block into your theme). All component styles reference `var(--token-name)`.
3. **Booking form** — currently a no-op prototype. Wire to your backend (REST endpoint, Formspree, etc.).
4. **Prices** — approximate/placeholder. Confirm with client before publishing.
5. **Contact info** — phone `+7 700 123-45-67`, email `info@dezclean.kz`, address are placeholders.
6. **Scroll behaviour** — add `scroll-behavior: smooth` to `html` and `scroll-margin-top: 88px` to each section for anchor nav.
