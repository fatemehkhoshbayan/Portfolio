import { RECOMMENDATIONS } from './constants';
import RecommendationCardItem from './RecommendationCardItem';

export default function RecommendationCard({
  activeIndex,
  desktopScrollRef,
}: {
  activeIndex: number;
  desktopScrollRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <div className="overflow-hidden lg:hidden" aria-live="polite">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {RECOMMENDATIONS.map(rec => (
            <RecommendationCardItem key={rec.name} rec={rec} className="w-full" />
          ))}
        </div>
      </div>

      <div
        ref={desktopScrollRef}
        className="hidden [scroll-snap-type:x_mandatory] gap-6 overflow-x-auto pb-4 [scrollbar-width:none] lg:flex [&::-webkit-scrollbar]:hidden"
      >
        {RECOMMENDATIONS.map(rec => (
          <RecommendationCardItem key={rec.name} rec={rec} className="w-[420px] snap-start" />
        ))}
      </div>
    </>
  );
}
