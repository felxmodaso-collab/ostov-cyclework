'use client';
import { asset } from '@/lib/asset';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { BlueprintDecor } from '@/components/BlueprintDecor';

type TubesetInfo = {
  name: string;
  origin: string;
  weight: string;
  feel: string;
  fit: string;
  note: string;
};

const tubesets: TubesetInfo[] = [
  {
    name: 'Columbus Spirit',
    origin: 'Италия',
    weight: '1,2 кг',
    feel: 'лёгкая и жёсткая',
    fit: 'райдеры до 90 кг',
    note: 'Самая лёгкая из четырёх. Быстрая на рывках, чувствуется сразу. Подходит, если вы ездите налегке, без передних сумок, и цените точную передачу усилия.'
  },
  {
    name: 'Columbus Life',
    origin: 'Италия',
    weight: '1,3 кг',
    feel: 'баланс',
    fit: 'от 90 до 100 кг',
    note: 'Компромисс между весом и прочностью — подходит большинству. Хорошо ведёт себя с лёгким передним багажом, не "гудит" на неровной дороге.'
  },
  {
    name: 'Reynolds 853',
    origin: 'Англия',
    weight: '1,4 кг',
    feel: 'мягкая, гасит тряску',
    fit: 'от 75 до 110 кг, универсал',
    note: 'Особенность этой стали: после пайки шов почти такой же прочный, как сама труба. Рама переживает падения, которые разбили бы алюминиевую. Классика для дальних поездок — не просто так.'
  },
  {
    name: 'Reynolds 953',
    origin: 'Англия',
    weight: '1,4 кг',
    feel: 'прочная, не ржавеет',
    fit: 'любой вес',
    note: 'Нержавеющая сталь — рама остаётся без краски, только шлифовка. Дороже, но не требует перекраски через десять лет. Выбор, если велосипед живёт на улице круглый год.'
  }
];

export function Tubeset() {
  const [active, setActive] = useState(2);

  return (
    <section className="scene" id="tubeset">
      <BlueprintDecor
        src={asset("/assets/bp-05-lug.png")}
        className="top-[6%] -left-[3%] w-[26vw] aspect-[3/4]"
        opacity={0.7}
        rotate={-8}
      />
      <BlueprintDecor
        src={asset("/assets/bp-04-bb.png")}
        className="-bottom-[3%] -right-[3%] w-[28vw] aspect-square"
        opacity={0.65}
        rotate={15}
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
              02 / Материал рамы · четыре варианта стали
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
              выбираем вместе после замеров, не раньше
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          {/* Left: cross-section */}
          <div>
            <Reveal y={50}>
              <div
                className="relative aspect-square w-full max-w-[32rem] mx-auto"
                style={{
                  background: 'rgba(18, 22, 32, 0.5)',
                  border: '1px solid rgba(122, 133, 153, 0.15)'
                }}
              >
                <Image
                  src={asset("/assets/02-cross-section-clean.png")}
                  alt="Разрез трубы с переменной толщиной стенки"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="absolute top-3 left-3 font-mono uppercase"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.22em',
                    color: 'var(--fg-steel)'
                  }}
                >
                  Разрез трубы · переменная стенка
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <p
                className="font-mono mt-6 text-center mx-auto"
                style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'var(--fg-cream-dim)',
                  maxWidth: '34rem'
                }}
              >
                Внутри каждой трубы толщина стенки разная: утолщена по краям (где
                идут нагрузки от стыков) и тоньше в середине (где нагрузка
                небольшая). Это и позволяет сделать раму лёгкой, но не хрупкой.
              </p>
            </Reveal>
          </div>

          {/* Right: text + interactive list */}
          <div>
            <Reveal>
              <h2
                className="font-serif font-light letterpress"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                  lineHeight: 1.04,
                  letterSpacing: '-0.03em',
                  color: 'var(--fg-cream)'
                }}
              >
                Почему сталь,
                <br />
                а <em style={{ fontStyle: 'italic' }}>не</em> карбон.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p
                className="font-mono mt-8 max-w-[34rem]"
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--fg-cream-dim)'
                }}
              >
                Карбоновая рама при серьёзном падении трескается — восстановить
                её нельзя, нужна новая. Стальная гнётся, правится и служит 20–30
                лет. На длинных маршрутах, с багажом и неидеальной дорогой это
                важнее, чем экономия в 500 грамм веса.
              </p>
            </Reveal>

            {/* Interactive tubeset picker */}
            <Reveal delay={220}>
              <div className="mt-10">
                <p
                  className="font-mono uppercase mb-4"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    color: 'var(--fg-steel)'
                  }}
                >
                  Четыре стали, с которыми мы работаем
                  <span className="opacity-60 ml-3 normal-case tracking-normal">
                    (наведите для деталей)
                  </span>
                </p>
                <ul>
                  {tubesets.map((t, i) => {
                    const isActive = active === i;
                    return (
                      <li
                        key={t.name}
                        className="group cursor-pointer"
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        tabIndex={0}
                        style={{
                          borderTop: '1px solid rgba(122, 133, 153, 0.15)',
                          ...(i === tubesets.length - 1
                            ? {
                                borderBottom:
                                  '1px solid rgba(122, 133, 153, 0.15)'
                              }
                            : {})
                        }}
                      >
                        <div className="py-4 md:py-5 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                          <span
                            className="font-mono"
                            style={{
                              fontSize: '11px',
                              letterSpacing: '0.1em',
                              color: isActive
                                ? 'var(--accent-anchor)'
                                : 'var(--fg-steel)',
                              width: '1.8rem'
                            }}
                          >
                            0{i + 1}
                          </span>
                          <span
                            className="font-serif"
                            style={{
                              fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
                              fontWeight: 300,
                              color: isActive
                                ? 'var(--fg-cream)'
                                : 'var(--fg-cream-dim)',
                              letterSpacing: '-0.01em',
                              transition: 'color 320ms ease-out'
                            }}
                          >
                            {t.name}
                            <span
                              className="font-mono uppercase ml-3"
                              style={{
                                fontSize: '10px',
                                letterSpacing: '0.18em',
                                color: 'var(--fg-steel)',
                                opacity: 0.75
                              }}
                            >
                              {t.origin}
                            </span>
                          </span>
                          <span
                            className="font-mono hidden sm:inline"
                            style={{
                              fontSize: '11px',
                              letterSpacing: '0.08em',
                              color: 'var(--fg-steel)',
                              textAlign: 'right'
                            }}
                          >
                            {t.fit}
                          </span>
                        </div>
                        {isActive && (
                          <div
                            className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 sm:gap-6 pb-5"
                            style={{ paddingLeft: '2.4rem' }}
                          >
                            <div
                              className="font-mono flex gap-3 items-center"
                              style={{
                                fontSize: '11px',
                                letterSpacing: '0.08em',
                                color: 'var(--accent-light)'
                              }}
                            >
                              <span>{t.weight}</span>
                              <span className="opacity-40">·</span>
                              <span>{t.feel}</span>
                            </div>
                            <p
                              className="font-mono"
                              style={{
                                fontSize: '13px',
                                lineHeight: 1.65,
                                color: 'var(--fg-cream-dim)'
                              }}
                            >
                              {t.note}
                            </p>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <p
                className="font-serif italic mt-10"
                style={{
                  fontSize: 'clamp(1.15rem, 1.7vw, 1.45rem)',
                  lineHeight: 1.45,
                  color: 'var(--fg-cream)',
                  fontWeight: 300,
                  borderLeft: '2px solid var(--accent-anchor)',
                  paddingLeft: '1.2rem'
                }}
              >
                Какую сталь выбрать — зависит от вашего веса, стиля педалирования
                и того, что вы возите на велосипеде. Это решение мы принимаем
                вместе, после замеров.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
