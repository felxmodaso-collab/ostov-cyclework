import { Reveal } from '@/components/Reveal';
import { BlueprintDecor } from '@/components/BlueprintDecor';

const slots = [
  { month: 'Октябрь 2026', status: 'занят', code: 'рама №47 · сдача в январе 2027' },
  { month: 'Ноябрь 2026', status: 'занят', code: 'рама №48' },
  { month: 'Декабрь 2026', status: 'свободен' },
  { month: 'Январь 2027', status: 'занят', code: 'рама №49' },
  { month: 'Февраль 2027', status: 'свободен' },
  { month: 'Март 2027', status: 'свободен' },
  { month: 'Апрель 2027', status: 'свободен' },
  { month: 'Май 2027', status: 'свободен' }
];

const steps = [
  {
    n: '1',
    text: 'Вы пишете мне на почту — коротко: где и как ездите, на каком велосипеде сейчас, чего хочется от следующего.',
    time: 'электронное письмо · 5 минут вашего времени'
  },
  {
    n: '2',
    text: 'Я отвечаю в течение двух суток. Если вижу, что это не мой проект — говорю сразу, без «может быть, позже».',
    time: 'мой ответ · до 48 часов'
  },
  {
    n: '3',
    text: 'Если продолжаем — встречаемся на два часа. Я снимаю 22 замера, мы обсуждаем, как вы ездите. Один день.',
    time: 'встреча и замеры · один день'
  },
  {
    n: '4',
    text: 'После встречи у вас есть две недели подумать без давления. Если решаете — вносите 40% как начало работы.',
    time: 'предоплата · 40% от стоимости'
  }
];

export function Order() {
  const openCount = slots.filter((s) => s.status === 'свободен').length;

  return (
    <section className="scene" id="order">
      <BlueprintDecor
        src="/assets/bp-06-fork.png"
        className="top-[6%] -right-[3%] w-[24vw] aspect-[3/4]"
        opacity={0.7}
        rotate={10}
      />
      <BlueprintDecor
        src="/assets/bp-05-lug.png"
        className="bottom-[8%] -left-[3%] w-[22vw] aspect-[3/4]"
        opacity={0.6}
        rotate={-12}
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
              05 / Как записаться · {openCount} свободных месяцев
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
              через встречу · сайт не оформляет заказы
            </p>
          </Reveal>
        </div>

        <Reveal blur>
          <h2
            className="font-serif font-light letterpress max-w-[52rem] mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: 'var(--fg-cream)'
            }}
          >
            Я беру заказ <em style={{ fontStyle: 'italic' }}>только</em> после
            личной встречи.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p
            className="font-mono max-w-[44rem] mb-16"
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--fg-cream-dim)'
            }}
          >
            Не беру предоплату через сайт — только после того, как мы встретились
            и я снял замеры. Если на встрече становится понятно, что задача не
            моя — отказываю сразу. Всего два заказа в год. Вот календарь.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 mb-20">
          {/* Left: slot calendar */}
          <div>
            <Reveal delay={160}>
              <p
                className="font-mono uppercase mb-6"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.22em',
                  color: 'var(--fg-steel)'
                }}
              >
                Месяц, когда начинается ваша рама
              </p>
            </Reveal>

            <ul>
              {slots.map((slot, i) => (
                <Reveal key={slot.month} delay={200 + i * 60}>
                  <li
                    className="grid grid-cols-[1fr_auto] gap-6 py-4 items-baseline group"
                    style={{
                      borderTop: '1px solid rgba(122, 133, 153, 0.15)',
                      ...(i === slots.length - 1
                        ? {
                            borderBottom: '1px solid rgba(122, 133, 153, 0.15)'
                          }
                        : {})
                    }}
                  >
                    <div>
                      <span
                        className="font-serif font-light"
                        style={{
                          fontSize: '18px',
                          color:
                            slot.status === 'свободен'
                              ? 'var(--fg-cream)'
                              : 'var(--fg-steel)',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {slot.month}
                      </span>
                      {slot.code && (
                        <span
                          className="font-mono block mt-1"
                          style={{
                            fontSize: '11px',
                            letterSpacing: '0.04em',
                            color: 'var(--fg-steel)',
                            opacity: 0.65
                          }}
                        >
                          {slot.code}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {slot.status === 'свободен' && (
                        <span
                          className="live-dot"
                          style={{
                            background: 'var(--accent-anchor)',
                            boxShadow: '0 0 12px rgba(212, 165, 165, 0.5)'
                          }}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className="font-mono uppercase"
                        style={{
                          fontSize: '10px',
                          letterSpacing: '0.22em',
                          color:
                            slot.status === 'свободен'
                              ? 'var(--accent-anchor)'
                              : 'var(--fg-steel)',
                          opacity: slot.status === 'свободен' ? 1 : 0.55
                        }}
                      >
                        {slot.status}
                      </span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right: process */}
          <div>
            <Reveal delay={160}>
              <p
                className="font-mono uppercase mb-6"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.22em',
                  color: 'var(--fg-steel)'
                }}
              >
                Четыре шага до начала работы
              </p>
            </Reveal>

            <ol className="space-y-6">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={240 + i * 90}>
                  <li
                    className="grid grid-cols-[auto_1fr] gap-6 items-start pb-6"
                    style={{
                      borderBottom:
                        i < steps.length - 1
                          ? '1px solid rgba(122, 133, 153, 0.12)'
                          : 'none'
                    }}
                  >
                    <span
                      className="font-serif font-light"
                      style={{
                        fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                        lineHeight: 1,
                        color: 'var(--accent-light)',
                        letterSpacing: '-0.02em',
                        minWidth: '2rem'
                      }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <p
                        className="font-mono"
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.7,
                          color: 'var(--fg-cream)'
                        }}
                      >
                        {step.text}
                      </p>
                      <p
                        className="font-mono mt-2 uppercase"
                        style={{
                          fontSize: '10px',
                          letterSpacing: '0.2em',
                          color: 'var(--accent-amber)',
                          opacity: 0.8
                        }}
                      >
                        — {step.time}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Big CTA */}
        <Reveal delay={400}>
          <div className="pt-12 border-t border-[rgba(122,133,153,0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <a
                  href="mailto:hello@ostov.cycles?subject=Хочу записаться на встречу и замеры"
                  className="font-serif font-light inline-block reveal-link"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.025em',
                    color: 'var(--accent-anchor)'
                  }}
                >
                  → hello@ostov.cycles
                </a>
                <p
                  className="font-mono mt-6"
                  style={{
                    fontSize: '12px',
                    lineHeight: 1.75,
                    color: 'var(--fg-cream-dim)'
                  }}
                >
                  +7 495 xxx-xx-xx · пн—чт · 10:00—17:00 по Москве
                  <br />
                  Москва, Басманный район — точный адрес мастерской сообщаю
                  после первого письма.
                </p>
              </div>

              <div
                className="font-mono"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: 'var(--fg-steel)',
                  textAlign: 'right',
                  maxWidth: '22rem',
                  lineHeight: 1.6
                }}
              >
                Напишите коротко: где ездите, на чём сейчас, чего хотите.
                <br />
                Пожалуйста, без готовых ТЗ, мудбордов и «референсов стиля».
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
