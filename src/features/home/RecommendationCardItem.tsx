import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { IRecommendationCardItemProps } from './interfaces';

export default function RecommendationCardItem({
  rec,
  className = '',
}: IRecommendationCardItemProps) {
  return (
    <article
      className={`custom-shadow flex flex-none flex-col rounded-xl bg-white p-4 shadow-lg lg:p-8 ${className}`}
    >
      <div className="mb-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-headline-md text-headline-md text-stone-800">{rec.name}</h3>
            <p className="font-body-md text-body-md text-support mt-0.5 italic">{rec.title}</p>
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
  );
}
