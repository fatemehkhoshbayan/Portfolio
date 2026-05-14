import type { TFeature } from './interfaces';
import { cn } from '@/lib/cn';

interface IWhyCardProps {
  reason: { title: string; description: string; features: Array<TFeature> };
}

export default function WhyCard({ reason }: IWhyCardProps) {
  return (
    <article className="bg-on-surf p-stack-xl gap-stack-xl relative flex flex-col items-center overflow-hidden rounded-xl text-white md:col-span-12 md:flex-row">
      <div className="flex-1">
        <h3 className="font-headline-lg text-headline-lg mb-stack-sm text-primary-f">
          {reason.title}
        </h3>
        <p className="font-body-md text-body-md text-stone-300 italic">{reason.description}</p>
      </div>
      <div className="gap-stack-lg grid shrink-0 grid-cols-2 sm:flex sm:flex-row">
        {reason.features.map(feature => (
          <div className="text-center" key={feature.title}>
            <div
              className={cn(
                'text-display-lg font-display-lg text-5xl leading-none font-bold',
                feature.titleColor,
              )}
            >
              {feature.title}
            </div>
            <div className="text-label-sm text-stone-400">{feature.description}</div>
          </div>
        ))}
      </div>
    </article>
  );
}
