'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * CursorLight — central trick of the site.
 * Two fullscreen gradients that follow the cursor at 60fps with lerp smoothing.
 * URL ?unveil=1 disables — for screenshots / production preview.
 */
export function CursorLight() {
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const [unveiled, setUnveiled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('unveil')) {
      document.documentElement.dataset.unveiled = '1';
      setUnveiled(true);
      return;
    }

    const isReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (isReducedMotion) return;

    const isTouch = window.matchMedia('(hover: none)').matches;
    const root = document.documentElement;

    // Intro ("fairy") phase — auto-animate spotlight for ~1.8s, land on hero title,
    // then hand off to real cursor on first pointer move.
    const introStart = performance.now();
    const introDuration = 1800;
    let introActive = true;
    target.current.x = 0.18;
    target.current.y = 0.22;
    current.current.x = 0.18;
    current.current.y = 0.22;

    const onMove = (e: PointerEvent) => {
      if (isTouch) return;
      introActive = false;
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = e.clientY / window.innerHeight;
    };

    const onLeave = () => {
      if (introActive) return;
      target.current.x = 0.5;
      target.current.y = 0.5;
    };

    if (!isTouch) {
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('pointerleave', onLeave);
    }

    const tick = (now: number) => {
      if (isTouch) {
        const t = (now - introStart) / 1000;
        target.current.x = 0.5 + 0.28 * Math.sin(t * 0.32);
        target.current.y = 0.5 + 0.18 * Math.cos(t * 0.47);
      } else if (introActive) {
        const raw = (now - introStart) / introDuration;
        if (raw >= 1) {
          introActive = false;
          target.current.x = 0.5;
          target.current.y = 0.32;
        } else {
          // decaying spiral, settles at hero title (0.5, 0.32)
          const p = raw;
          const amp = (1 - p) * 0.34;
          const phase = p * Math.PI * 2.2;
          target.current.x = 0.5 + amp * Math.cos(phase);
          target.current.y = 0.32 + amp * 0.7 * Math.sin(phase * 1.3);
        }
      }

      const lerp = introActive ? 0.22 : 0.14;
      current.current.x += (target.current.x - current.current.x) * lerp;
      current.current.y += (target.current.y - current.current.y) * lerp;

      root.style.setProperty('--cx', `${(current.current.x * 100).toFixed(2)}%`);
      root.style.setProperty('--cy', `${(current.current.y * 100).toFixed(2)}%`);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (unveiled) return null;

  return (
    <>
      <div className="veil-dark" aria-hidden="true" />
      <div className="veil-glow" aria-hidden="true" />
    </>
  );
}
