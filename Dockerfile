# ---- Build stage ----
# Debian-based (not alpine) because the build runs a headless Chromium
# via Playwright to prerender index.html for crawlers — Playwright's
# bundled Chromium needs glibc.
FROM node:20-bookworm-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
RUN npx playwright install --with-deps chromium

COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
