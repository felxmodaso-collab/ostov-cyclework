'use client';
import { asset } from '@/lib/asset';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { SceneHue } from '@/components/SceneHue';
import { Counter } from '@/components/Counter';
import { BlueprintDecor } from '@/components/BlueprintDecor';

const stations = [
  {
    num: '01',
    title: 'Резка труб',
    hours: 14,
    body: 'Каждую трубу режут под углом, рассчитанным по чертежу вашей рамы. Зазор между трубами в стыке — одна десятая миллиметра. Меньше — рама будет слишком жёсткой, ударостойкой. Больше — шов не возьмёт нагрузку на длинной дистанции.',
    detail: 'допуск 0,1 мм'
  },
  {
    num: '02',
    title: 'Пайка',
    hours: 42,
    body: 'Серебряный припой, температура 720°C. Здесь важнее не время, а точность температуры: перегрев разрушает кристаллическую структуру стали на 3–4 сантиметра вокруг шва. Это слабое место остаётся в раме навсегда. Поэтому я паяю каждый стык один раз и не переделываю.',
    detail: '720°C · один проход',
    highlight: true
  },
  {
    num: '03',
    title: 'Правка геометрии',
    hours: 22,
    body: 'После пайки рама всегда слегка «ведёт» из-за температурного стресса. Я правлю её на специальном стенде, пока все углы и оси не совпадут с чертежом с точностью до трёх десятых миллиметра. Без этого велосипед будет самопроизвольно уводить в сторону на длинных спусках.',
    detail: 'допуск 0,3 мм по всем осям'
  },
  {
    num: '04',
    title: 'Покраска',
    hours: 34,
    body: 'Пескоструйная обработка, грунт, база, два-три слоя цвета, лаковое покрытие. Сушка 12 часов между слоями. Цвет каждой рамы — уникальный: если захотите такой же второй раз, придётся смешивать краску заново.',
    detail: 'уникальный цвет · не повторяется'
  },
  {
    num: '05',
    title: 'Сборка и тест',
    hours: 48,
    body: 'Устанавливаю каретку, вилку, рулевую колонку, крепления колёс и крепления для фляг и багажника. Финальная проверка геометрии. Потом выезжаю на готовом велосипеде сам — сорок километров по смешанной дороге, чтобы услышать, как он едет. Если что-то не так — возвращаюсь на этап правки.',
    detail: '40 км тестовой поездки'
  }
];

export function Workshop() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SceneHue hue="200, 168, 120" radius={680} className="scene" id="workshop">
      <BlueprintDecor
        src={asset("/assets/bp-06-fork.png")}
        className="top-[8%] -right-[3%] w-[22vw] aspect-[3/4]"
        opacity={0.7}
        rotate={12}
      />
      <BlueprintDecor
        src={asset("/assets/bp-04-bb.png")}
        className="bottom-[8%] -left-[3%] w-[24vw] aspect-square"
        opacity={0.65}
        rotate={-10}
      />

      <div className="max-w-[80rem] w-full mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-end mb-12 pb-8 border-b border-[rgba(122,133,153,0.18)]">
          <Reveal>
            <p
              className="font-mono uppercase"
              style={{
                fontSize: '11px',
                letterSpacing: '0.22em',
                color: 'var(--accent-amber)'
              }}
            >
              03 / Как я собираю раму · пять этапов
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p
              className="font-mono md:text-right"
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: 'var(--fg-steel)'
              }}
            >
              одна рама за раз · шесть—девять месяцев
            </p>
          </Reveal>
        </div>

        {/* Hero + title */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center">
          <Reveal blur>
            <h2
              className="font-serif font-light letterpress"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                color: 'var(--fg-cream)'
              }}
            >
              Шестнадцать недель
              <br />
              в <em style={{ fontStyle: 'italic' }}>одних</em> руках.
            </h2>
            <p
              className="font-mono mt-8 max-w-[34rem]"
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--fg-cream-dim)'
              }}
            >
              От первой отрезанной трубы до моей пробной поездки на готовом
              велосипеде. Я считаю часы, потому что ошибка на любом этапе
              останется с рамой на следующие тридцать лет.
            </p>

            {/* Big stat */}
            <div className="mt-10 flex items-baseline gap-6">
              <div
                className="font-serif font-light"
                style={{
                  fontSize: 'clamp(4rem, 9vw, 7rem)',
                  lineHeight: 0.9,
                  color: 'var(--accent-amber)',
                  letterSpacing: '-0.04em'
                }}
              >
                <Counter to={160} duration={1800} />
              </div>
              <div
                className="font-mono uppercase"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  color: 'var(--fg-steel)',
                  paddingBottom: '0.6rem',
                  lineHeight: 1.5
                }}
              >
                часов работы
                <br />
                <span style={{ opacity: 0.5 }}>на одну раму</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} y={60}>
            <div
              className="relative aspect-video w-full overflow-hidden"
              style={{
                border: '1px solid rgba(200, 168, 120, 0.2)'
              }}
            >
              <Image
                src={asset("/assets/03-brazing.png")}
                alt="Пайка стального стыка рамы"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute bottom-3 left-3 font-mono"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.22em',
                  color: 'var(--accent-amber)',
                  opacity: 0.75
                }}
              >
                ПАЙКА · 720°C · РАМА №47
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stations list — interactive */}
        <div>
          {stations.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <Reveal key={s.num} delay={i * 80}>
                <div
                  className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-baseline py-7 md:py-8 relative cursor-default"
                  style={{
                    borderTop: '1px solid rgba(122, 133, 153, 0.18)',
                    ...(i === stations.length - 1
                      ? {
                          borderBottom: '1px solid rgba(122, 133, 153, 0.18)'
                        }
                      : {})
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {isHovered && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{
                        background: s.highlight
                          ? 'var(--accent-amber)'
                          : 'var(--accent-light)',
                        boxShadow: `0 0 16px ${
                          s.highlight
                            ? 'rgba(200, 168, 120, 0.5)'
                            : 'rgba(159, 168, 218, 0.5)'
                        }`
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <span
                    className="font-mono"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      color: s.highlight
                        ? 'var(--accent-amber)'
                        : 'var(--accent-light)',
                      minWidth: '2rem',
                      transition: 'transform 300ms ease-out',
                      transform: isHovered ? 'translateX(6px)' : 'translateX(0)'
                    }}
                  >
                    {s.num}
                  </span>

                  <div>
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <h3
                        className="font-serif font-light"
                        style={{
                          fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                          lineHeight: 1.15,
                          letterSpacing: '-0.02em',
                          color: s.highlight
                            ? 'var(--accent-amber)'
                            : 'var(--fg-cream)'
                        }}
                      >
                        {s.title}
                      </h3>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '11px',
                          letterSpacing: '0.1em',
                          color: 'var(--fg-steel)',
                          opacity: isHovered ? 1 : 0.6,
                          transition: 'opacity 300ms ease-out'
                        }}
                      >
                        — {s.detail}
                      </span>
                    </div>
                    <p
                      className="font-mono mt-3"
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.7,
                        color: 'var(--fg-cream-dim)',
                        maxWidth: '56rem'
                      }}
                    >
                      {s.body}
                    </p>
                  </div>

                  <span
                    className="font-serif font-light hidden md:inline-block"
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      lineHeight: 1,
                      color: isHovered
                        ? s.highlight
                          ? 'var(--accent-amber)'
                          : 'var(--fg-cream)'
                        : 'var(--fg-steel)',
                      letterSpacing: '-0.02em',
                      textAlign: 'right',
                      minWidth: '6rem',
                      transition: 'color 320ms ease-out'
                    }}
                  >
                    {s.hours}
                    <span
                      className="font-mono ml-1"
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        color: 'var(--fg-steel)',
                        opacity: 0.7
                      }}
                    >
                      ч
                    </span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SceneHue>
  );
}
