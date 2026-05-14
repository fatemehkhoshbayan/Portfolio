import { flexifyGallery, flexifyToolkitTags, flexifyPills } from './constant';
import { PillGroup, Pill } from '@/ui';

export default function ProjectsSection() {
  return (
    <section className="gap-stack-lg py-stack-2xl grid w-full max-w-7xl grid-cols-1 md:grid-cols-12">
      <article className="group shadow-sun relative overflow-hidden rounded-xl bg-white transition-all duration-500 hover:-translate-y-1 md:col-span-8">
        <div className="aspect-video overflow-hidden">
          <img
            alt="Flexify"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="Smart workout planner SPA: explore exercises by muscle and difficulty, search, favorites, and a plan builder—without a heavy subscription platform."
            src="./flexify.png"
          />
        </div>

        <div className="p-stack-lg">
          <PillGroup className="gap-stack-sm mb-stack-md flex flex-wrap">
            {flexifyPills.map(pill => (
              <Pill key={pill} className="bg-container/20 text-on-container">
                {pill}
              </Pill>
            ))}
          </PillGroup>

          <h2 className="font-headline-lg text-headline-lg mb-stack-sm text-dark">
            Flexify — Smart Workout Planner
          </h2>
          <p className="font-body-md text-body-md text-support mb-stack-lg leading-relaxed">
            A SPA for busy beginners who want workouts by muscle group and difficulty—not another
            overwhelming fitness subscription. Filters, search, and favorites sit on top of an
            exercises API; routines and preferences use local validation and localStorage. Next
            version: prompt-based plans generated with an LLM so users can describe goals and get a
            tailored routine.
          </p>
          <div className="gap-stack-md just-center flex flex-wrap items-center">
            <a
              className="font-label-md text-brand inline-flex items-center gap-1 transition-transform hover:translate-x-1"
              href="https://flexify-taupe.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              View live app <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a
              className="font-label-md text-brand inline-flex items-center gap-1 transition-transform hover:translate-x-1"
              href="https://github.com/fatemehkhoshbayan/Flexify"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
        <div className="px-stack-lg py-stack-md border-t border-stone-100">
          <p className="font-label-sm text-support mb-stack-sm tracking-wide uppercase">
            More screens
          </p>
          <div className="gap-stack-sm grid grid-cols-1 sm:grid-cols-3">
            {flexifyGallery.map(shot => (
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
      </article>
      <div className="gap-stack-lg flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 md:col-span-4">
        <article className="bg-brand-soft/30 p-stack-lg shadow-sun flex h-full flex-col justify-between rounded-xl transition-all duration-500 hover:-translate-y-1">
          <div>
            <div className="mb-stack-lg text-brand-strong shadow-sun flex h-12 w-12 items-center justify-center rounded-lg bg-white">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                smart_toy
              </span>
            </div>
            <div className="gap-stack-sm mb-stack-md flex flex-wrap">
              <span className="text-brand-dark text-label-sm rounded-full bg-white/60 px-3 py-0.5">
                LLM
              </span>
              <span className="text-brand-dark text-label-sm rounded-full bg-white/60 px-3 py-0.5">
                Roadmap
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md mb-stack-sm text-stone-800">
              AI-built workout plans
            </h2>
            <p className="font-body-md text-body-md text-support mb-stack-lg">
              Planned for Flexify v2: users describe goals and constraints in plain language—an LLM
              turns that into a structured session plan you can tweak, merge with favorites, or save
              alongside today&apos;s browse-and-filter flows.
            </p>
          </div>
          <div className="space-y-stack-sm">
            <div className="text-label-sm text-support flex justify-between italic">
              <span>Roadmap · v2</span>
              <span>In exploration</span>
            </div>
            <div className="bg-tertiary-c h-1.5 w-full overflow-hidden rounded-full">
              <div className="bg-secondary h-full w-[35%]" aria-hidden />
            </div>
          </div>
        </article>
        <article className="p-stack-lg shadow-sun rounded-xl border border-stone-100 bg-[#FFFDF5] transition-all md:col-span-4">
          <h3 className="font-headline-md text-headline-md mb-stack-sm text-stone-800">
            Built with
          </h3>
          <p className="font-body-md text-body-md text-support mb-stack-md">
            The Flexify SPA is deliberately lightweight: semantic HTML, modular CSS variables,
            vanilla JavaScript over the Fetch API and local persistence—deployed as a fast static
            frontend on Vercel.
          </p>
          <div className="flex flex-wrap gap-2">
            {flexifyToolkitTags.map(tag => (
              <span
                key={tag}
                className="bg-surface-2 font-label-sm text-on-surf-v rounded-lg px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>

      <article className="bg-on-surf p-stack-xl gap-stack-xl relative flex flex-col items-center overflow-hidden rounded-xl text-white md:col-span-12 md:flex-row">
        <div className="flex-1">
          <h3 className="font-headline-lg text-headline-lg mb-stack-sm text-primary-f">
            Why Flexify
          </h3>
          <p className="font-body-md text-body-md text-stone-300 italic">
            Most fitness platforms bury simple needs behind subscriptions and clutter. Flexify
            concentrates on discovery: exercises filtered by muscle and difficulty, sensible
            defaults, and a path toward AI-generated plans from natural-language prompts—all without
            losing the approachable, unpaid core experience.
          </p>
        </div>
        <div className="gap-stack-lg grid shrink-0 grid-cols-2 sm:flex sm:flex-row">
          <div className="text-center">
            <div className="text-display-lg text-secondary font-display-lg leading-none">REST</div>
            <div className="text-label-sm text-stone-400">Flexify exercises API</div>
          </div>
          <div className="text-center">
            <div className="text-display-lg text-primary-fd font-display-lg leading-none">SPA</div>
            <div className="text-label-sm text-stone-400">Live on Vercel</div>
          </div>
        </div>
      </article>
    </section>
  );
}
