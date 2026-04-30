import { cn } from '@/lib/utils';

export const BorderBeam = ({ className, size = 200, duration = 15, anchor = 90, borderWidth = 1.5, colorFrom = '#ffaa40', colorTo = '#9c40ff', delay = 0 }) => {
  return (
    <div
      style={{
        '--size': size,
        '--duration': duration,
        '--anchor': anchor,
        '--border-width': borderWidth,
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--delay': `-${delay}s`,
      }}
      className={cn(
        'absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]',

        // mask styles
        '[background:linear-gradient(transparent,transparent),conic-gradient(from_calc(var(--anchor)*1deg),transparent_0_5deg,var(--color-from)_var(--anchor),var(--color-to)_calc(var(--anchor)*0.25deg),transparent_calc(var(--anchor)*0.5deg))_border-box]',
        '[mask:linear-gradient(transparent,transparent)_padding-box,linear-gradient(white,white)]',
        '[mask-composite:intersect_[,[mask-composite:subtract]]',

        // pseudo styles
        'after:animate-border-beam after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:[border-radius:50%] after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[mask:linear-gradient(white,transparent)]',
        className
      )}
    />
  );
};
