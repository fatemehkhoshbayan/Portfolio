import { cn } from '@/lib/cn';
import type { IProjectCardProps } from './interfaces';

export default function ProjectCard({ projects }: IProjectCardProps) {
  return projects.map(project => (
    <article key={project.title} className="group cursor-pointer">
      <figure
        className={cn(
          'mb-stack-md shadow-sun relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl',
          project.cardBackgroundClass !== undefined
            ? project.cardBackgroundClass || false
            : 'bg-brand-soft',
        )}
      >
        <img
          className="max-w-[75%] rounded-sm object-contain shadow-md transition-transform duration-500 group-hover:scale-105"
          data-alt={project.dataAlt}
          src={project.image}
        />
        <div className="bg-primary/10 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <a
            className="text-primary font-label-md bg-canvas rounded-full px-4 py-2 shadow-lg"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {project.title}
          </a>
        </div>
      </figure>
      <h3 className="font-headline-md text-headline-md text-dark">{project.title}</h3>
      <p className="font-body-md text-support italic">{project.tech.join(' & ')}</p>
    </article>
  ));
}
