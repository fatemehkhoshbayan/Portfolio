import { useLayoutEffect, useRef, useState } from 'react';
import { RECOMMENDATIONS } from './constants';
import RecommendationCardItem from './RecommendationCardItem';
import { getRecommendationOffset, getRecommendationTrackWidth } from './recommendationCarousel';

export default function RecommendationCard({ activeIndex }: { activeIndex: number }) {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const [maxOffset, setMaxOffset] = useState(0);

  useLayoutEffect(() => {
    const container = desktopContainerRef.current;
    if (!container) return;

    const updateMaxOffset = () => {
      const trackWidth = getRecommendationTrackWidth(RECOMMENDATIONS.length);
      setMaxOffset(Math.max(0, trackWidth - container.clientWidth));
    };

    updateMaxOffset();

    const observer = new ResizeObserver(updateMaxOffset);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const desktopOffset = getRecommendationOffset(activeIndex, maxOffset);

  return (
    <>
      <div className="overflow-x-hidden lg:hidden" aria-live="polite">
        <div
          className="flex px-2 py-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {RECOMMENDATIONS.map(recommendation => (
            <RecommendationCardItem
              key={recommendation.name}
              recommendation={recommendation}
              className="w-full shrink-0"
            />
          ))}
        </div>
      </div>

      <div
        ref={desktopContainerRef}
        className="hidden overflow-x-hidden lg:block"
        aria-live="polite"
      >
        <div
          className="flex gap-6 px-2 py-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${desktopOffset}px)` }}
        >
          {RECOMMENDATIONS.map(recommendation => (
            <RecommendationCardItem key={recommendation.name} recommendation={recommendation} />
          ))}
        </div>
      </div>
    </>
  );
}
