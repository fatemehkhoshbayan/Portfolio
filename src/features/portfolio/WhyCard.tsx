import { cn } from '@/lib/cn';
import type { IWhyCardProps } from './interfaces';

export default function WhyCard({ reason }: IWhyCardProps) {
  return (
    <article className="bg-on-surf p-stack-lg lg:p-stack-xl gap-stack-xl relative flex flex-col overflow-hidden rounded-xl text-white min-[1000px]:col-span-12">
      <h3 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary-f">
        {reason.title}
      </h3>
      <div className="gap-x-stack-xl gap-y-stack-lg flex w-full flex-wrap justify-center">
        {reason.features.map(feature => (
          <div className="px-stack-sm min-w-28 text-center" key={feature.title}>
            <div
              className={cn(
                'text-display-lg text-4xl leading-none font-bold lg:text-5xl',
                feature.titleColor,
              )}
            >
              {feature.title}
            </div>
            <div className="text-label-md text-stone-400">{feature.description}</div>
          </div>
        ))}
      </div>
      <p className="font-body-md lg:font-body-lg text-body-lg text-stone-300 italic">
        {reason.description}
      </p>
    </article>
  );
}
