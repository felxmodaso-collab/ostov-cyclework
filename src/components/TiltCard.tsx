'use client';

import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
};

/**
 * Tilts slightly toward the cursor on hover. For gallery cards.
 */
export function TiltCard({ children, className = '', max = 7 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rx = -py * max;
    const ry = px * max;
    el.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
  };

  return (
    <div className={`tilt-scene ${className}`}>
      <div
        ref={ref}
        className="tilt-card"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        {children}
      </div>
    </div>
  );
}
