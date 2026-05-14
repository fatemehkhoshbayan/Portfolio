import type { TProgress } from '../interfaces';

interface IProgressCardProps {
  progress: TProgress;
}

export default function ProgressCard({ progress }: IProgressCardProps) {
  return (
    <article className="bg-brand-soft/30 p-stack-lg shadow-sun flex h-full flex-col justify-between rounded-xl transition-all duration-500 hover:-translate-y-1">
      <div>
        <div className="mb-stack-lg text-brand-strong shadow-sun flex h-12 w-12 items-center justify-center rounded-lg bg-white">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            {progress.icon}
          </span>
        </div>
        <div className="gap-stack-sm mb-stack-md flex flex-wrap">
          {progress.topFeature.map(feat => (
            <span
              key={feat}
              className="text-brand-dark text-label-sm rounded-full bg-white/60 px-3 py-0.5"
            >
              {feat}
            </span>
          ))}
        </div>
        <h2 className="font-headline-md text-headline-md mb-stack-sm text-stone-800">
          {progress.title}
        </h2>
        <p className="font-body-md text-body-md text-support mb-stack-lg">{progress.description}</p>
      </div>
      <div className="space-y-stack-sm">
        <div className="text-label-sm text-support flex justify-between italic">
          {progress.progressTitle.map(title => (
            <span key={title} className="text-label-sm text-support italic">
              {title}
            </span>
          ))}
        </div>
        <div className="bg-tertiary-c h-1.5 w-full overflow-hidden rounded-full">
          <div className="bg-secondary h-full w-[35%]" aria-hidden />
        </div>
      </div>
    </article>
  );
}
