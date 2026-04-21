import { asset } from '@/lib/asset';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { Counter } from '@/components/Counter';
import { BlueprintDecor } from '@/components/BlueprintDecor';

export function FitStudy() {
  return (
    <section className="scene" id="fit-study">
      <BlueprintDecor
        src={asset("/assets/bp-03-headtube.png")}
        className="-top-[3%] -right-[5%] w-[30vw] aspect-[4/5]"
        opacity={0.7}
        rotate={8}
      />
      <BlueprintDecor
        src={asset("/assets/bp-02-dropout.png")}
        className="bottom-[6%] -left-[3%] w-[24vw] aspect-square"
        opacity={0.6}
        rotate={-15}
      />

      <div className="max-w-[80rem] w-full mx-auto">
        {/* Header row */}
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
              01 / Встреча и замеры · один день
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
              в мастерской · или с выездом к вам
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <Reveal blur delay={40}>
              <h2
                className="font-serif font-light letterpress"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                  lineHeight: 1.04,
                  letterSpacing: '-0.03em',
                  color: 'var(--fg-cream)'
                }}
              >
                Рама проектируется
                <br />
                <em style={{ fontStyle: 'italic' }}>под вас</em>, а не наоборот.
              </h2>
            </Reveal>

            {/* Stat row */}
            <Reveal delay={140}>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-[34rem]">
                {[
                  { n: 22, label: 'замера тела и посадки' },
                  { n: 7, label: 'параметров геометрии' },
                  { n: 1, label: 'рама под вас' }
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="font-serif font-light"
                      style={{
                        fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
                        lineHeight: 1,
                        color: 'var(--accent-anchor)',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      <Counter to={s.n} duration={1200} />
                    </div>
                    <div
                      className="mt-2 font-mono uppercase"
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        color: 'var(--fg-steel)',
                        lineHeight: 1.35
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 space-y-5 max-w-[36rem]">
              <Reveal delay={220}>
                <p
                  className="font-mono"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--fg-cream-dim)'
                  }}
                >
                  Мы встречаемся на два часа. Я снимаю двадцать два замера — от
                  роста и длины рук до гибкости спины. Мы разговариваем: на каких
                  сёдлах вам было больно, где болят колени после длинной поездки,
                  как вы проходите повороты, как крутите педали в подъём.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <p
                  className="font-mono"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--fg-cream-dim)'
                  }}
                >
                  По этим данным я рисую чертёж рамы. Семь ключевых параметров
                  геометрии — длина верхней и подседельной труб, углы,
                  расположение каретки, длина задней части, характер руления.
                  Каждый параметр — не интуиция, а следствие конкретной цифры из
                  ваших замеров.
                </p>
              </Reveal>

              <Reveal delay={340}>
                <p
                  className="font-serif italic pt-4"
                  style={{
                    fontSize: 'clamp(1.15rem, 1.7vw, 1.45rem)',
                    lineHeight: 1.45,
                    color: 'var(--fg-cream)',
                    fontWeight: 300,
                    borderLeft: '2px solid var(--accent-anchor)',
                    paddingLeft: '1.2rem'
                  }}
                >
                  Велосипед, на котором вы проедете 1000 км, начинается с двадцати
                  двух замеров и одного честного разговора. Не с выбора размера
                  в каталоге.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right: wireframe with scan line */}
          <Reveal delay={200} y={60}>
            <div
              className="relative aspect-[16/10] w-full overflow-hidden"
              style={{
                background: 'rgba(18, 22, 32, 0.5)',
                border: '1px solid rgba(122, 133, 153, 0.15)'
              }}
            >
              <Image
                src={asset("/assets/01-wireframe-clean.png")}
                alt="Чертёж геометрии велосипедной рамы"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />

              <div
                className="absolute top-0 bottom-0 w-40 scan-line pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(159, 168, 218, 0.14) 50%, transparent 100%)'
                }}
                aria-hidden="true"
              />

              <div
                className="absolute top-3 left-3 font-mono uppercase"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.22em',
                  color: 'var(--fg-steel)'
                }}
              >
                Чертёж · вид сбоку
              </div>
              <div
                className="absolute bottom-3 right-3 font-mono"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.22em',
                  color: 'var(--fg-steel)'
                }}
              >
                Масштаб 1:12
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom annotation */}
        <Reveal delay={400}>
          <div className="mt-12 pt-8 border-t border-[rgba(122,133,153,0.15)] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                title: 'длина рамы',
                body: 'Расстояние от седла до руля. Ошибка в 5 мм — и после 400 км у вас заболит поясница. Мы считаем её не по таблице, а по вашей гибкости спины и длине рук.'
              },
              {
                title: 'характер руления',
                body: 'Насколько велосипед стабилен в поворотах и на спуске. Одним людям нужен «острый» руль, другим — спокойный. Это не правильное или неправильное — это ваш стиль.'
              },
              {
                title: 'длина задней части',
                body: 'Короче — велосипед быстрее разгоняется, но жёстче на неровностях. Длиннее — комфортнее с багажом и на длинных дистанциях. Выбор зависит от того, как и где вы ездите.'
              }
            ].map((f) => (
              <div key={f.title}>
                <p
                  className="font-mono uppercase mb-2"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    color: 'var(--accent-light)'
                  }}
                >
                  — {f.title}
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.65,
                    color: 'var(--fg-cream-dim)'
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
