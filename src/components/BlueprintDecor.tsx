import Image from 'next/image';

type Props = {
  src: string;
  className?: string;
  opacity?: number;
  rotate?: number;
  alt?: string;
};

/**
 * Blueprint-style technical drawing placed as a background decoration.
 * Positioned absolutely inside a section — the parent must have
 * `position: relative; overflow: hidden;`
 */
export function BlueprintDecor({
  src,
  className = '',
  opacity = 0.11,
  rotate = 0,
  alt = ''
}: Props) {
  return (
    <div
      className={`blueprint-decor absolute pointer-events-none ${className}`}
      style={{
        opacity,
        transform: `rotate(${rotate}deg)`,
        mixBlendMode: 'difference',
        filter: 'brightness(1.2)',
        zIndex: 0
      }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="50vw"
      />
    </div>
  );
}
