import { useEffect, useRef, useState } from 'react';
import { RECOMMENDATIONS } from './constants';
import RecommendationCard from './RecommendationCard';
import { getRecommendationTrackWidth } from './recommendationCarousel';

export default function RecommendationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const navigate = (direction: 'left' | 'right') => {
    setActiveIndex(prev => {
      if (direction === 'right') return Math.min(prev + 1, RECOMMENDATIONS.length - 1);
      return Math.max(prev - 1, 0);
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateNavigation = () => {
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      if (!isDesktop) {
        setShowNavigation(RECOMMENDATIONS.length > 1);
        return;
      }

      const trackWidth = getRecommendationTrackWidth(RECOMMENDATIONS.length);
      const contentWidth = section.clientWidth - 32;
      setShowNavigation(trackWidth > contentWidth);
    };

    updateNavigation();
    window.addEventListener('resize', updateNavigation);
    return () => window.removeEventListener('resize', updateNavigation);
  }, []);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === RECOMMENDATIONS.length - 1;

  return (
    <section
      ref={sectionRef}
      className="lg:py-section-gap py-stack-lg w-full max-w-7xl px-10 lg:px-4"
    >
      <div className="mb-stack-lg gap-stack-md flex flex-col items-start justify-between">
        <div className="flex w-full items-center justify-between gap-4">
          <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surf">
            Kind Words
          </h2>
          {showNavigation && (
            <div className="flex gap-2">
              <button
                aria-label="Previous recommendation"
                onClick={() => navigate('left')}
                disabled={isFirst}
                className="border-line-soft text-support hover:bg-brand-soft/30 hover:text-brand flex h-10 w-10 items-center justify-center rounded-full border transition-colors disabled:pointer-events-none disabled:opacity-40"
              >
                <span className="material-symbols-outlined text-xl">arrow_back</span>
              </button>
              <button
                aria-label="Next recommendation"
                onClick={() => navigate('right')}
                disabled={isLast}
                className="border-line-soft text-support hover:bg-brand-soft/30 hover:text-brand flex h-10 w-10 items-center justify-center rounded-full border transition-colors disabled:pointer-events-none disabled:opacity-40"
              >
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
        <p className="font-body-md text-support text-body-lg mt-2 italic">
          What colleagues say about working together.
        </p>
      </div>
      <RecommendationCard activeIndex={activeIndex} />
    </section>
  );
}
