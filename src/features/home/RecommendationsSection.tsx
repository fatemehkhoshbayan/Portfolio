import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { RECOMMENDATIONS } from './constants';

export default function RecommendationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('article')?.offsetWidth ?? 400;
    scrollRef.current.scrollBy({
      left: direction === 'right' ? cardWidth + 24 : -(cardWidth + 24),
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-section-gap w-full max-w-7xl px-12 lg:px-4">
      <div className="mb-stack-lg flex items-end justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surf">Kind Words</h2>
          <p className="font-body-md text-support text-body-lg mt-2 italic">
            What colleagues say about working together.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => scroll('left')}
            className="border-line-soft text-support hover:bg-brand-soft/30 hover:text-brand flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll('right')}
            className="border-line-soft text-support hover:bg-brand-soft/30 hover:text-brand flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
          >
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex [scroll-snap-type:x_mandatory] gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {RECOMMENDATIONS.map(rec => (
          <article
            key={rec.name}
            className="custom-shadow flex w-[min(90vw,420px)] flex-none snap-start flex-col rounded-xl bg-white p-8 shadow-lg"
          >
            <div className="mb-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-headline-md text-headline-md text-stone-800">{rec.name}</h3>
                  <p className="font-body-md text-body-md text-support mt-0.5 italic">
                    {rec.title}
                  </p>
                  <p className="font-label-sm text-body-sm text-brand mt-1">{rec.relationship}</p>
                </div>
                {rec.linkedinUrl && (
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${rec.name} on LinkedIn`}
                    className="text-support hover:text-brand mt-1 flex-none transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" className="text-2xl" />
                  </a>
                )}
              </div>
            </div>

            <span
              className="text-brand mb-2 font-serif text-5xl leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-body-md text-body-lg flex-1 leading-relaxed text-stone-600 italic">
              {rec.text}
            </p>
            <span
              className="text-brand mt-2 self-end font-serif text-5xl leading-none select-none"
              aria-hidden="true"
            >
              &rdquo;
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
