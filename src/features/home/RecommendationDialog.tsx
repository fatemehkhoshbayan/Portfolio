import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Dialog } from '@/ui';
import type { IRecommendationDialogProps } from './interfaces';

export default function RecommendationDialog({
  open,
  onClose,
  recommendation,
}: IRecommendationDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} title={recommendation.name}>
      <div className="mb-4">
        <p className="font-body-md text-body-md text-support italic">{recommendation.title}</p>
        <p className="font-label-sm text-body-md text-brand mt-1">{recommendation.relationship}</p>
        {recommendation.linkedinUrl && (
          <a
            href={recommendation.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${recommendation.name} on LinkedIn`}
            className="text-support hover:text-brand mt-3 inline-flex items-center gap-2 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" className="text-2xl" />
            <span className="font-label-md">View on LinkedIn</span>
          </a>
        )}
      </div>

      <span
        className="text-brand mb-2 block font-serif text-5xl leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="font-body-md text-body-lg leading-relaxed text-stone-600">
        {recommendation.text}
      </p>
      <span
        className="text-brand mt-2 block text-right font-serif text-5xl leading-none select-none"
        aria-hidden="true"
      >
        &rdquo;
      </span>
    </Dialog>
  );
}
