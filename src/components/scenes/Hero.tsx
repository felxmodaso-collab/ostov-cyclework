'use client';

import { useEffect, useState } from 'react';
import { Counter } from '@/components/Counter';
import { BlueprintDecor } from '@/components/BlueprintDecor';

function StatusTime() {
  const [time, setTime] = useState('—:—');

  useEffect(() => {
    const format = () => {
      const d = new Date();
      const msk = new Date(
        d.toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
      );
      const hh = String(msk.getHours()).padStart(2, '0');
      const mm = String(msk.getMinutes()).padStart(2, '0');
      return `${hh}:${mm}`;
    };
    setTime(format());
    const t = setInterval(() => setTime(format()), 30000);
    return () => clearInterval(t);
  }, []);

  return <span>{time} MSK</span>;
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" id="hero">
      {/* Blueprint decor — background technical drawings */}
      <BlueprintDecor
        src="/assets/bp-01-frame-top.png"
        className="top-[55%] -right-[8%] w-[58vw] aspect-[16/9]"
        opacity={0.7}
        rotate={-6}
      />
      <BlueprintDecor
        src="/assets/bp-06-fork.png"
        className="top-[8%] -left-[4%] w-[22vw] aspect-[3/4]"
        opacity={0.6}
        rotate={-12}
      />

      {/* Top status bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-5 border-b border-[rgba(122,133,153,0.12)]">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--fg-steel)]">
          <span className="live-dot" aria-hidden="true" />
          <span>Мастерская работает</span>
          <span className="opacity-40 hidden sm:inline">·</span>
          <span className="hidden sm:inline">собираем раму №47</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--fg-steel)]">
          <StatusTime />
        </div>
      </div>

      {/* Left vertical meta */}
      <div
        className="hidden md:flex absolute left-8 top-24 bottom-24 flex-col justify-between font-mono"
        style={{
          fontSize: '10px',
          letterSpacing: '0.18em',
          color: 'var(--fg-steel)'
        }}
      >
        <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          МОСКВА · БАСМАННЫЙ
        </span>
        <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          МАСТЕРСКАЯ С 2019 ГОДА
        </span>
      </div>

      {/* Right vertical meta */}
      <div
        className="hidden md:flex absolute right-8 top-24 bottom-24 flex-col items-end justify-between font-mono"
        style={{
          fontSize: '10px',
          letterSpacing: '0.18em',
          color: 'var(--fg-steel)'
        }}
      >
        <span style={{ writingMode: 'vertical-rl' }}>
          СТАЛЬ · РУЧНАЯ СБОРКА
        </span>
        <span style={{ writingMode: 'vertical-rl' }}>РАМА №47 · ПАЙКА</span>
      </div>

      {/* Center composition */}
      <div className="absolute inset-0 grid place-items-center px-6 md:px-16 py-24">
        <div className="max-w-[62rem] text-center">
          {/* Pre-title */}
          <p
            className="font-mono uppercase mb-8"
            style={{
              fontSize: '10px',
              letterSpacing: '0.32em',
              color: 'var(--accent-amber)'
            }}
          >
            Велосипедные рамы под заказ · Москва
          </p>

          {/* Main title */}
          <h1
            className="font-serif font-light letterpress"
            style={{
              fontSize: 'clamp(3.25rem, 9vw, 7.75rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              color: 'var(--fg-cream)'
            }}
          >
            Рама не выбирается <br />
            по <em style={{ fontStyle: 'italic', fontWeight: 300 }}>размеру</em>.
          </h1>

          {/* Subtitle */}
          <p
            className="font-mono mx-auto mt-10 max-w-[44rem]"
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--fg-cream-dim)'
            }}
          >
            Мы собираем стальную велосипедную раму с нуля — под ваш рост, вес,
            пропорции и стиль езды. Не готовое «M, L, XL» из каталога, а
            индивидуальная геометрия, рассчитанная по двадцати двум замерам.
            Восемь рам в год. Каждая — у одного человека.
          </p>

          {/* Mini stat row */}
          <div className="mt-14 flex items-center justify-center gap-10 md:gap-16 font-mono flex-wrap">
            <div className="flex flex-col items-center">
              <span
                className="font-serif font-light"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: 1,
                  color: 'var(--accent-light)'
                }}
              >
                <Counter to={8} />
              </span>
              <span
                className="mt-2 uppercase"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'var(--fg-steel)'
                }}
              >
                рам в год
              </span>
            </div>
            <div className="h-10 w-px bg-[rgba(122,133,153,0.25)]" aria-hidden="true" />
            <div className="flex flex-col items-center">
              <span
                className="font-serif font-light"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: 1,
                  color: 'var(--accent-light)'
                }}
              >
                <Counter to={160} />
              </span>
              <span
                className="mt-2 uppercase"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'var(--fg-steel)'
                }}
              >
                часов на одну раму
              </span>
            </div>
            <div className="h-10 w-px bg-[rgba(122,133,153,0.25)]" aria-hidden="true" />
            <div className="flex flex-col items-center">
              <span
                className="font-serif font-light"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: 1,
                  color: 'var(--accent-light)'
                }}
              >
                <Counter to={22} />
              </span>
              <span
                className="mt-2 uppercase"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'var(--fg-steel)'
                }}
              >
                замера на этапе чертежа
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="#order"
              className="reveal-link font-mono"
              style={{ fontSize: '14px', letterSpacing: '0.04em' }}
            >
              → Записаться на встречу и замеры
            </a>
            <span
              className="font-mono"
              style={{
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: 'var(--fg-steel)'
              }}
            >
              Ближайший свободный месяц — февраль 2027
            </span>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 font-mono">
        <span className="h-px w-12 bg-[rgba(122,133,153,0.3)]" aria-hidden="true" />
        <span
          className="uppercase"
          style={{
            fontSize: '10px',
            letterSpacing: '0.28em',
            color: 'var(--fg-steel)'
          }}
        >
          Как проходит заказ
        </span>
        <span className="h-px w-12 bg-[rgba(122,133,153,0.3)]" aria-hidden="true" />
      </div>
    </section>
  );
}
