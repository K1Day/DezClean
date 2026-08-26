import { useEffect, useState } from 'react';

export default function Counter({ to, decimals = 0, suffix = '', duration = 1400, delay = 0 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }

    let raf;
    const timer = setTimeout(() => {
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(to * ease(t));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);

  const display = decimals > 0 ? value.toFixed(decimals).replace('.', ',') : Math.round(value);
  return <span>{display}{suffix}</span>;
}
