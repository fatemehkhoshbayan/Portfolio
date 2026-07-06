import type { IJournalCardProps } from './interfaces';

export default function JournalCard({ entry }: IJournalCardProps) {
  return (
    <article>
      <div className="mb-stack-md custom-shadow relative aspect-4/5 overflow-hidden rounded-xl">
        <img
          src={entry.imageSrc}
          alt={entry.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="font-label-sm absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-stone-600 backdrop-blur-md">
          {entry.date}
        </div>
      </div>
      <h3 className="font-headline-md text-headline-md group-hover:text-primary mb-1 text-stone-800 transition-colors">
        {entry.title}
      </h3>
      <p className="font-body-md text-body-md text-stone-500">{entry.excerpt}</p>
    </article>
  );
}
