import { Reveal } from '@/components/Reveal';

type Props = {
  text: string;
  meta?: string;
  italic?: boolean;
};

/**
 * Breath — short quote/annotation between scenes.
 * Tight but with a subtle divider to keep rhythm visible.
 */
export function Breath({ text, meta, italic = false }: Props) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[54rem] mx-auto text-center">
        <Reveal blur>
          <div className="hair mx-auto mb-10 w-24" aria-hidden="true" />
          <p
            className={italic ? 'font-serif italic' : 'font-serif'}
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.65rem)',
              lineHeight: 1.45,
              fontWeight: 300,
              color: 'var(--fg-cream)',
              letterSpacing: '-0.005em'
            }}
          >
            {italic && (
              <span
                style={{
                  color: 'var(--accent-anchor)',
                  marginRight: '0.3rem',
                  fontStyle: 'normal'
                }}
              >
                «
              </span>
            )}
            {text}
            {italic && (
              <span
                style={{
                  color: 'var(--accent-anchor)',
                  marginLeft: '0.2rem',
                  fontStyle: 'normal'
                }}
              >
                »
              </span>
            )}
          </p>
          {meta && (
            <p
              className="font-mono uppercase mt-6"
              style={{
                fontSize: '10px',
                letterSpacing: '0.22em',
                color: 'var(--fg-steel)'
              }}
            >
              {meta}
            </p>
          )}
          <div className="hair mx-auto mt-10 w-24" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
