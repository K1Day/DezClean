# DEZ CLEAN — Landing Page

One-page B2B landing site for **DEZ CLEAN SERVICES**, a commercial cleaning company in Almaty, Kazakhstan.
The site targets facility managers of offices, business centers, coworkings, malls, warehouses and hotels,
and collects cleaning requests through a booking form.

**Live:** https://dezclean.com.kz

## Features

- Sections: header, hero, marquee, services, 4-step process, why us, CTA, footer
- Booking modal that sends requests to a Google Sheet via a Google Apps Script webhook
- Floating WhatsApp button
- Scroll-reveal animations and animated counters
- SEO for the Almaty region: meta tags, Open Graph, `robots.txt`, `sitemap.xml`
- Prerendered HTML so crawlers (Yandex in particular) see the full content without running JavaScript
- Docker + nginx deployment with HTTPS (Let's Encrypt)

## Tech stack

| Area | Tools |
|---|---|
| UI | React 18, lucide-react icons |
| Build | Vite 6 |
| Styles | Plain CSS with design tokens (CSS custom properties) |
| Prerender | Playwright (headless Chromium) |
| Hosting | Docker, nginx 1.27, Let's Encrypt |

## Getting started

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/Yertay-Yergazy/DezClean.git
cd DezClean
npm install
cp .env.example .env    # optional, see "Booking form" below
npm run dev             # http://localhost:5173
```

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build to `dist/` and prerender `dist/index.html` |
| `npm run preview` | Serve the production build locally |

`npm run build` runs `scripts/prerender.mjs`, which needs Playwright's Chromium.
Install it once:

```bash
npx playwright install chromium
```

## Booking form

The form in `src/components/BookingModal.jsx` sends a `POST` request with these form fields
to the URL in `VITE_SHEETS_WEBHOOK_URL`:

| Field | Meaning |
|---|---|
| `company` | Company or contact person |
| `phone` | Phone number |
| `objectType` | Type of object (office, warehouse, mall…) |
| `addressArea` | Area and address |
| `date` | Submission time (`ru-RU` format) |

Set the URL in `.env`:

```env
VITE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXX/exec
```

Notes:

- `VITE_*` variables are embedded **at build time**. Rebuild the site (or the Docker image) after changing them.
- If the variable is empty, the form still shows "Заявка принята", but the request is **not sent anywhere**
  (a warning is logged in the browser console).
- The request uses `mode: 'no-cors'`, so the browser cannot read the response. The form only shows an error
  when the network request itself fails.

### Example Google Apps Script

In the Google Sheet: **Extensions → Apps Script**, paste the code below, then
**Deploy → New deployment → Web app** with access set to **Anyone**, and copy the `/exec` URL.

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const p = e.parameter;
  sheet.appendRow([p.date, p.company, p.phone, p.objectType, p.addressArea]);
  return ContentService.createTextOutput('ok');
}
```

## Deployment

The site runs as a single Docker container: a Node build stage produces `dist/`,
and an nginx stage serves it.

```bash
docker compose up -d --build
```

nginx (`nginx.conf`):

- redirects HTTP → HTTPS, except `/.well-known/acme-challenge/` for certificate renewal
- serves `dezclean.com.kz` and `www.dezclean.com.kz` over HTTPS with HTTP/2 and gzip
- caches hashed files in `/assets/` for one year
- falls back to `index.html` for unknown paths (SPA)

The certificate must exist on the host **before** the container starts, because nginx
loads it from `/etc/letsencrypt/live/dezclean.com.kz/`. `docker-compose.yml` mounts
`/etc/letsencrypt` and `/var/www/certbot` from the host as read-only volumes.

Make sure `.env` is present on the server before building the image, otherwise the booking form will not send requests.

## Project structure

```
├── index.html                 # HTML entry with SEO meta tags
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Page layout and booking modal state
│   ├── components/            # Page sections (Hero, Services, Steps, WhyUs, CTA…)
│   │   ├── BookingModal.jsx   # Request form → Google Sheets
│   │   └── ui/                # Button, Badge, Field, Counter
│   ├── hooks/useScrollReveal.js
│   └── styles/                # tokens.css, base.css, landing.css
├── public/                    # Logo, photos, robots.txt, sitemap.xml
├── scripts/prerender.mjs      # Snapshots the rendered page into dist/index.html
├── design_handoff_dez_clean/  # Original design handoff: tokens and prototype (not shipped)
├── Dockerfile
├── docker-compose.yml
└── nginx.conf
```

The design tokens and the prototype in `design_handoff_dez_clean/` are the source of truth for colors,
typography and spacing. See [its README](design_handoff_dez_clean/README.md) for details.

## Contacts

- Phone / WhatsApp: [+7 747 700 82 52](tel:+77477008252)
- Email: [info@dezclean.kz](mailto:info@dezclean.kz)
