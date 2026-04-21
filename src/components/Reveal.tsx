'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  blur?: boolean;
};

/**
 * Fade + translate-up on viewport intersection.
 * More pronounced than typical reveal — 48px translate, 1100ms, optional blur-to-focus.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  y = 48,
  blur = false
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const unveiled =
      document.documentElement.dataset.unveiled === '1' ||
      new URLSearchParams(window.location.search).has('unveil');

    if (reduced || unveiled) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
      return;
    }

    el.style.opacity = '0';
    el.style.transform = `translateY(${y}px)`;
    if (blur) el.style.filter = 'blur(8px)';
    el.style.transition = `opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
    el.style.willChange = 'opacity, transform, filter';

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            if (blur) el.style.filter = 'blur(0)';
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, y, blur]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
