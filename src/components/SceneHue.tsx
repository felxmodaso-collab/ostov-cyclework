'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  hue: string; // e.g. "200, 168, 120" for amber
  radius?: number;
  className?: string;
  id?: string;
};

/**
 * When this scene is in viewport (>50%), cursor-light hue shifts to given value.
 * Used to make the brazing scene glow amber instead of periwinkle.
 */
export function SceneHue({ children, hue, radius, className = '', id }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const root = document.documentElement;
    const DEFAULT_HUE = '159, 168, 218';
    const DEFAULT_RADIUS = '560px';

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.5) {
            root.style.setProperty('--light-hue', hue);
            if (radius)
              root.style.setProperty('--light-radius', `${radius}px`);
          } else if (!e.isIntersecting || e.intersectionRatio < 0.3) {
            root.style.setProperty('--light-hue', DEFAULT_HUE);
            root.style.setProperty('--light-radius', DEFAULT_RADIUS);
          }
        }
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [hue, radius]);

  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  );
}
