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

    // Intro ("fairy") phase — sweeping spiral that tracks the cursor and
    // lands on it. Does NOT cancel on pointermove; instead, the spiral's
    // center follows the cursor continuously, so wherever the user's pointer
    // is (or moves to) during the 2s intro, the light converges to it.
    const introStart = performance.now();
    const introDuration = 2000;
    let introActive = true;
    let cursorSeen = false;
    const cursorPos = { x: 0.5, y: 0.32 };
    // start off-screen bottom-left so the sweep is visibly large
    target.current.x = -0.15;
    target.current.y = 1.1;
    current.current.x = -0.15;
    current.current.y = 1.1;

    const onMove = (e: PointerEvent) => {
      if (isTouch) return;
      cursorSeen = true;
      cursorPos.x = e.clientX / window.innerWidth;
      cursorPos.y = e.clientY / window.innerHeight;
      if (!introActive) {
        target.current.x = cursorPos.x;
        target.current.y = cursorPos.y;
      }
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
          target.current.x = cursorSeen ? cursorPos.x : 0.5;
          target.current.y = cursorSeen ? cursorPos.y : 0.32;
        } else {
          // Decaying spiral centered on the live cursor (or default hero
          // landing if cursor never entered). Wider sweep and more turns.
          const p = raw;
          const cx = cursorSeen ? cursorPos.x : 0.5;
          const cy = cursorSeen ? cursorPos.y : 0.32;
          const amp = (1 - p) * (1 - p) * 0.65; // quadratic decay, bigger start
          const phase = p * Math.PI * 3.0;
          target.current.x = cx + amp * Math.cos(phase);
          target.current.y = cy + amp * 0.75 * Math.sin(phase * 1.35);
        }
      }

      const lerp = introActive ? 0.18 : 0.14;
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
