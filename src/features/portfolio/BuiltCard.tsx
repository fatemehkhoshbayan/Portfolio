import type { IBuiltCardProps } from './interfaces';

export default function BuiltCard({ built }: IBuiltCardProps) {
  return (
    <article className="p-stack-lg shadow-sun rounded-xl border border-stone-100 bg-[#FFFDF5] transition-all md:col-span-4">
      <h3 className="font-headline-md text-headline-md mb-stack-sm text-stone-800">
        {built.title}
      </h3>
      <p className="font-body-md text-body-md text-support mb-stack-md">{built.description}</p>
      <div className="flex flex-wrap gap-2">
        {built.toolkitTags.map(tag => (
          <span
            key={tag}
            className="bg-surface-2 font-label-sm text-on-surf-v rounded-lg px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
