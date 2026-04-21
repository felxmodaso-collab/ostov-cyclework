import { asset } from '@/lib/asset';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { TiltCard } from '@/components/TiltCard';
import { BlueprintDecor } from '@/components/BlueprintDecor';

const frames = [
  {
    num: '34',
    material: 'Columbus Spirit (Италия)',
    size: '52 см',
    color: 'Тёмно-зелёная',
    owner: 'И. В., Санкт-Петербург',
    use: 'заезды 600 км в Карелии',
    delivered: 'март 2024',
    img: asset('/assets/04-frame-sage.png')
  },
  {
    num: '29',
    material: 'Reynolds 853 (Англия)',
    size: '56 см',
    color: 'Пыльно-розовая',
    owner: 'А. К., Москва',
    use: 'Париж—Брест—Париж, 1 219 км',
    delivered: 'май 2023',
    img: asset('/assets/05-frame-rose.png')
  },
  {
    num: '31',
    material: 'Columbus Life (Италия)',
    size: '54 см',
    color: 'Тёплая кремовая',
    owner: 'М. С., Петрозаводск',
    use: 'Лондон—Эдинбург—Лондон, 1 540 км',
    delivered: 'август 2022',
    img: asset('/assets/06-frame-cream.png')
  },
  {
    num: '38',
    material: 'Reynolds 953 нержавеющая (Англия)',
    size: '58 см',
    color: 'Шлифованный металл, без краски',
    owner: 'Д. П., Таллин',
    use: 'каждый день, 15—18 тыс. км в год',
    delivered: 'октябрь 2024',
    img: asset('/assets/07-frame-stainless.png')
  }
];

export function Gallery() {
  return (
    <section className="scene" id="gallery">
      <BlueprintDecor
        src={asset("/assets/bp-01-frame-top.png")}
        className="top-[4%] -right-[8%] w-[50vw] aspect-[16/9]"
        opacity={0.55}
        rotate={5}
      />
      <BlueprintDecor
        src={asset("/assets/bp-02-dropout.png")}
        className="bottom-[4%] -left-[3%] w-[20vw] aspect-square"
        opacity={0.65}
        rotate={-18}
      />

      <div className="max-w-[86rem] w-full mx-auto">
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
              04 / Уже сделанные рамы · 30 с 2019 года
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
              показано четыре · весь архив в инстаграме
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_auto] gap-16 items-start mb-16">
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
              Четыре из <em style={{ fontStyle: 'italic' }}>тридцати</em>
              <br />
              собранных.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p
              className="font-mono max-w-[30rem]"
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--fg-cream-dim)'
              }}
            >
              Ни одна не повторяет другую. Каждая — ответ на замеры и разговор с
              одним человеком. Размеры, цвет, материал, характер руления —
              выбиралось отдельно.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {frames.map((f, i) => (
            <Reveal key={f.num} delay={i * 120} y={64}>
              <TiltCard className="h-full">
                <article className="group h-full">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[rgba(18,22,32,0.5)] border border-[rgba(122,133,153,0.15)]">
                    <Image
                      src={f.img}
                      alt={`Рама №${f.num}`}
                      fill
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 25vw"
                      priority={i < 4}
                    />

                    <div
                      className="absolute top-3 left-3 font-serif font-light"
                      style={{
                        fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                        lineHeight: 1,
                        color: 'var(--fg-cream)',
                        letterSpacing: '-0.03em',
                        mixBlendMode: 'difference',
                        opacity: 0.95
                      }}
                    >
                      №{f.num}
                    </div>

                    <div
                      className="absolute bottom-3 right-3 font-mono"
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        color: 'var(--fg-cream)',
                        mixBlendMode: 'difference',
                        opacity: 0.7
                      }}
                    >
                      {f.delivered}
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <p
                      className="font-serif font-light"
                      style={{
                        fontSize: '20px',
                        lineHeight: 1.15,
                        color: 'var(--fg-cream)',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {f.color}
                    </p>
                    <dl
                      className="font-mono space-y-1"
                      style={{
                        fontSize: '12px',
                        lineHeight: 1.55,
                        color: 'var(--fg-cream-dim)'
                      }}
                    >
                      <div>
                        <span
                          className="uppercase mr-2"
                          style={{
                            fontSize: '10px',
                            letterSpacing: '0.16em',
                            color: 'var(--fg-steel)'
                          }}
                        >
                          Сталь
                        </span>
                        {f.material}
                      </div>
                      <div>
                        <span
                          className="uppercase mr-2"
                          style={{
                            fontSize: '10px',
                            letterSpacing: '0.16em',
                            color: 'var(--fg-steel)'
                          }}
                        >
                          Размер
                        </span>
                        {f.size}
                      </div>
                      <div>
                        <span
                          className="uppercase mr-2"
                          style={{
                            fontSize: '10px',
                            letterSpacing: '0.16em',
                            color: 'var(--fg-steel)'
                          }}
                        >
                          Для чего
                        </span>
                        {f.use}
                      </div>
                      <div
                        className="pt-2"
                        style={{
                          borderTop: '1px solid rgba(122, 133, 153, 0.12)',
                          marginTop: '0.5rem'
                        }}
                      >
                        <span
                          className="uppercase mr-2"
                          style={{
                            fontSize: '10px',
                            letterSpacing: '0.16em',
                            color: 'var(--fg-steel)'
                          }}
                        >
                          Владелец
                        </span>
                        {f.owner}
                      </div>
                    </dl>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
