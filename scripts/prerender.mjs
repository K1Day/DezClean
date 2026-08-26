// Snapshots the fully client-rendered app into dist/index.html so
// crawlers that don't execute JS well (Yandex in particular) see real
// content instead of an empty <div id="root">. React still mounts and
// takes over on the client as normal — this only changes what's in the
// initial HTML response.
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const PORT = 4173;
// 127.0.0.1, not "localhost" — Node's fetch can try ::1 first in some
// container environments, where vite preview isn't listening.
const URL = `http://127.0.0.1:${PORT}/`;

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`Server at ${url} did not start in time`);
}

const preview = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(PORT), '--strictPort'], {
  stdio: 'inherit',
});

try {
  await waitForServer(URL);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500); // let counters / scroll-reveal settle

  const html = await page.content();
  writeFileSync('dist/index.html', html);
  await browser.close();

  console.log('Prerendered dist/index.html with full app markup.');
} finally {
  preview.kill();
}
