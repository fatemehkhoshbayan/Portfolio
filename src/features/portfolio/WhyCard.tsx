import type { TFeature } from './interfaces';
import { cn } from '@/lib/cn';

interface IWhyCardProps {
  reason: { title: string; description: string; features: Array<TFeature> };
}

export default function WhyCard({ reason }: IWhyCardProps) {
  return (
    <article className="bg-on-surf p-stack-xl gap-stack-xl relative flex flex-col overflow-hidden rounded-xl text-white min-[1000px]:col-span-12">
      <h3 className="font-headline-lg text-headline-lg text-primary-f">{reason.title}</h3>
      <div className="gap-x-stack-xl gap-y-stack-lg flex w-full flex-wrap justify-center">
        {reason.features.map(feature => (
          <div className="px-stack-sm min-w-28 text-center" key={feature.title}>
            <div
              className={cn(
                'text-display-lg font-display-lg text-5xl leading-none font-bold',
                feature.titleColor,
              )}
            >
              {feature.title}
            </div>
            <div className="text-label-md text-stone-400">{feature.description}</div>
          </div>
        ))}
      </div>
      <p className="font-body-lg text-body-lg text-stone-300 italic">{reason.description}</p>
    </article>
  );
}
