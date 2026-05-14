import type { TGallery } from './interfaces';

interface IGalleryProps {
  gallery: Array<TGallery>;
}

export default function Gallery({ gallery }: IGalleryProps) {
  return (
    <div className="px-stack-lg py-stack-md border-t border-stone-100">
      <p className="font-label-sm text-support mb-stack-sm tracking-wide uppercase">More screens</p>
      <div className="gap-stack-sm grid grid-cols-1 sm:grid-cols-3">
        {gallery.map(shot => (
          <figure key={shot.src} className="overflow-hidden rounded-lg border border-stone-100">
            <div className="aspect-video overflow-hidden bg-stone-50">
              <img
                alt={shot.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                src={shot.src}
              />
            </div>
            <figcaption className="font-label-sm text-support px-2 py-1.5 text-center">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
