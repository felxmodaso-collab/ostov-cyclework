export function Footer() {
  return (
    <footer className="px-6 md:px-12 pt-20 pb-10">
      <div className="max-w-[80rem] mx-auto">
        {/* Farewell */}
        <div className="pb-12 border-b border-[rgba(122,133,153,0.18)]">
          <p
            className="font-serif italic max-w-[52rem]"
            style={{
              fontSize: 'clamp(1.35rem, 2.4vw, 2rem)',
              lineHeight: 1.4,
              fontWeight: 300,
              color: 'var(--fg-cream)',
              letterSpacing: '-0.012em'
            }}
          >
            «Рама служит дольше, чем большинство вещей, которые вы купите за
            жизнь. Имеет смысл сделать её один раз и под себя, а не выбирать по
            таблице размеров.»
          </p>
        </div>

        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p
              className="font-mono uppercase mb-3"
              style={{
                fontSize: '10px',
                letterSpacing: '0.22em',
                color: 'var(--accent-amber)'
              }}
            >
              Ostov Cyclework
            </p>
            <p
              className="font-mono"
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                color: 'var(--fg-steel)',
                lineHeight: 1.75
              }}
            >
              Мастерская с 2019 года
              <br />
              Москва, Басманный район
              <br />
              Сейчас: рама №47 на пайке, рама №48 в проектировании
            </p>
          </div>

          <div>
            <p
              className="font-mono uppercase mb-3"
              style={{
                fontSize: '10px',
                letterSpacing: '0.22em',
                color: 'var(--fg-steel)'
              }}
            >
              Архив работ
            </p>
            <p
              className="font-mono"
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                color: 'var(--fg-steel)',
                lineHeight: 1.75
              }}
            >
              @ostov.cycles в инстаграме
              <br />
              <span style={{ opacity: 0.65 }}>
                только фотографии рам, не продажи
              </span>
            </p>
          </div>

          <div>
            <p
              className="font-mono uppercase mb-3"
              style={{
                fontSize: '10px',
                letterSpacing: '0.22em',
                color: 'var(--fg-steel)'
              }}
            >
              Связаться
            </p>
            <p
              className="font-mono"
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                color: 'var(--fg-cream-dim)',
                lineHeight: 1.75
              }}
            >
              hello@ostov.cycles
              <br />
              <span style={{ color: 'var(--fg-steel)', opacity: 0.7 }}>
                отвечаю в течение двух суток
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
