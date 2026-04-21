'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

/**
 * Ticks from 0 to target when entering viewport.
 * Used for stat anchors (8, 160, 22, 30).
 */
export function Counter({ to, duration = 1600, suffix = '', className = '' }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const unveiled =
      document.documentElement.dataset.unveiled === '1' ||
      new URLSearchParams(window.location.search).has('unveil');
    if (reduced || unveiled) {
      setVal(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.round(eased * to));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}
