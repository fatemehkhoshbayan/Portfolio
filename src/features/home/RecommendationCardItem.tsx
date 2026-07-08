import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { cn } from '@/lib/cn';
import RecommendationDialog from './RecommendationDialog';
import type { IRecommendationCardItemProps } from './interfaces';
import { RECOMMENDATION_CARD_WIDTH } from './recommendationCarousel';

export default function RecommendationCardItem({
  recommendation,
  className,
}: IRecommendationCardItemProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const hasMore = recommendation.text.trim() !== recommendation.highlight.trim();

  return (
    <>
      <article
        style={{ width: `min(100%, ${RECOMMENDATION_CARD_WIDTH}px)` }}
        className={cn(
          'shadow-sun-sm relative flex shrink-0 flex-col rounded-xl bg-white p-4 lg:p-8',
          className,
        )}
      >
        {/* <figure className="shadow-sun relative flex flex-col rounded-xl bg-white p-4 lg:p-8"> */}
        <div className={hasMore ? 'flex max-h-[400px] flex-col overflow-hidden' : 'flex flex-col'}>
          <div className="mb-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-headline-md text-headline-md text-stone-800">
                  {recommendation.name}
                </h3>
                <p className="font-body-md text-body-md text-support mt-0.5 italic">
                  {recommendation.title}
                </p>
                <p className="font-label-sm text-body-sm text-brand mt-1">
                  {recommendation.relationship}
                </p>
              </div>
              {recommendation.linkedinUrl && (
                <a
                  href={recommendation.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${recommendation.name} on LinkedIn`}
                  className="text-support hover:text-brand mt-1 flex-none transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" className="text-2xl" />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <span
              className="text-brand mb-2 font-serif text-5xl leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-body-md text-body-lg flex-1 leading-relaxed text-stone-600 italic">
              {hasMore ? recommendation.highlight : recommendation.text}
            </p>
            {hasMore && (
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => setDialogOpen(true)}
                className="font-label-md text-brand mt-3 self-start hover:underline"
              >
                Show more
              </button>
            )}
            <span
              className="text-brand mt-2 self-end font-serif text-5xl leading-none select-none"
              aria-hidden="true"
            >
              &rdquo;
            </span>
          </div>
        </div>
        {/* </figure> */}
      </article>

      <RecommendationDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        recommendation={recommendation}
      />
    </>
  );
}
