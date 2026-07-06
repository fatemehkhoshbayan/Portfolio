import { Card, Pill, PillGroup } from '@/ui';
import { approachCards, stacks } from './constants';

export default function ApproachSection() {
  return (
    <section className="py-stack-lg lg:py-section-gap w-full max-w-7xl px-10 lg:px-4">
      <div className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surf">
          Philosophy &amp; Approach
        </h2>
        <div className="bg-brand-strong mt-3 h-1 w-24"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="p-stack-lg shadow-sun border-brand-strong col-span-1 flex flex-col justify-between rounded-xl border-l-4 bg-white lg:col-span-2">
          <div>
            <span className="material-symbols-outlined text-brand mb-4 text-4xl">architecture</span>
            <h3 className="font-headline-md text-headline-md mb-2">Technical Rigor</h3>
            <p className="font-body-md text-body-lg text-support">
              Clean code is the foundation, but robust architecture is the roof. I build systems
              that scale gracefully while remaining maintainable and secure. Every line of code is
              an opportunity for clarity and precision.
            </p>
          </div>
          <PillGroup className="mt-8">
            {stacks.map(stack => (
              <Pill key={stack}>{stack}</Pill>
            ))}
          </PillGroup>
        </div>
        <div className="bg-container p-stack-lg flex flex-col items-center justify-center gap-3 rounded-xl text-center text-white">
          <span className="material-symbols-outlined">sentiment_satisfied</span>
          <h3 className="font-headline-md text-headline-md">Joyful Design</h3>
          <p className="font-body-md text-body-lg">
            Technology should delight. I focus on micro-interactions and transitions that make users
            smile.
          </p>
        </div>
        {approachCards.map(approach => (
          <Card
            key={approach.title}
            title={approach.title}
            icon={approach.icon}
            desc={approach.desc}
          />
        ))}
      </div>
    </section>
  );
}
