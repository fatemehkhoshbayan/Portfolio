import type { IHobbyCardProps } from './interfaces';

const DEFAULT_SPAN: Record<IHobbyCardProps['variant'], string> = {
  wide: 'col-span-full md:col-span-8',
  narrow: 'col-span-full md:col-span-4',
  split: 'col-span-full md:col-span-8',
};

export default function HobbyCard({
  icon,
  label,
  title,
  description,
  images,
  variant,
  colorClass = 'bg-white',
  colSpanClass,
  imgLeft = false,
}: IHobbyCardProps) {
  const span = colSpanClass ?? DEFAULT_SPAN[variant];

  const iconColor =
    colorClass === 'bg-white' || colorClass.includes('primary')
      ? 'text-primary'
      : colorClass.includes('secondary')
        ? 'text-secondary'
        : colorClass.includes('surface')
          ? 'text-tertiary'
          : 'text-primary';

  const labelBlock = (
    <div className={`${iconColor} mb-4 flex items-center gap-2`}>
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-label-md">{label}</span>
    </div>
  );

  if (variant === 'wide') {
    return (
      <div
        className={`custom-shadow flex flex-col justify-between rounded-xl border-none ${colorClass} p-4 md:p-8 ${span}`}
      >
        <div className="max-w-md">
          {labelBlock}
          <h3 className="font-headline-md text-headline-md mb-2 text-stone-800">{title}</h3>
          <p className="font-body-md mb-6 text-stone-600">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:h-80 md:grid-cols-2">
          {images.slice(0, 2).map(img => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="h-48 w-full rounded-lg object-cover md:h-full"
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'split') {
    return (
      <div
        className={`custom-shadow grid gap-6 rounded-xl border-none ${colorClass} p-4 md:gap-8 md:p-8 ${span} md:grid-cols-2`}
      >
        {imgLeft && (
          <div className="relative h-56 overflow-hidden rounded-lg md:h-full">
            {images[0] && (
              <img src={images[0].src} alt={images[0].alt} className="h-full w-full object-cover" />
            )}
          </div>
        )}
        <div className="flex flex-col justify-center">
          {labelBlock}
          <h3 className="font-headline-md text-headline-md mb-2 text-stone-800">{title}</h3>
          <p className="font-body-md text-stone-600">{description}</p>
        </div>
        {!imgLeft && (
          <div className="relative h-56 overflow-hidden rounded-lg md:h-full">
            {images[0] && (
              <img src={images[0].src} alt={images[0].alt} className="h-full w-full object-cover" />
            )}
          </div>
        )}
      </div>
    );
  }

  // narrow
  return (
    <div
      className={`custom-shadow flex flex-col rounded-xl border-none ${colorClass} p-4 md:p-8 ${span}`}
    >
      {labelBlock}
      <h3 className="font-headline-md text-headline-md mb-2 text-stone-800">{title}</h3>
      <p className="font-body-md mb-6 text-stone-600">{description}</p>
      <div className="mt-auto overflow-hidden rounded-lg">
        {images[0] && (
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        )}
      </div>
    </div>
  );
}
