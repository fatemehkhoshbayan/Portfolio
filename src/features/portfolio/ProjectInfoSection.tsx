import { PillGroup, Pill, Gallery } from '@/ui';

import type { IProject } from './interfaces';

interface IProjectInfoSectionProps {
  project: IProject;
}

export default function ProjectInfoSection({ project }: IProjectInfoSectionProps) {
  return (
    <>
      <article className="group shadow-sun relative overflow-hidden rounded-xl bg-white transition-all duration-500 hover:-translate-y-1 min-[1000px]:col-span-8">
        <div className="aspect-video overflow-hidden">
          <img
            alt={project.cover_img.alt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt={project.cover_img.data_alt}
            src={project.cover_img.src}
          />
        </div>

        <div className="p-stack-lg">
          <PillGroup className="gap-stack-sm mb-stack-md flex flex-wrap">
            {project.pills.map(pill => (
              <Pill key={pill} className="bg-container/20 text-on-container">
                {pill}
              </Pill>
            ))}
          </PillGroup>

          <h2 className="font-headline-lg text-headline-lg mb-stack-sm text-dark">
            {project.title}
          </h2>
          <p className="font-body-md text-body-md text-support mb-stack-lg leading-relaxed">
            {project.description}
          </p>
          <div className="gap-stack-md just-center flex flex-wrap items-center">
            {project.links.map(link => (
              <a
                key={link.href}
                className="font-label-md text-brand inline-flex items-center gap-1 transition-transform hover:translate-x-1"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
                <span className="material-symbols-outlined text-sm">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <Gallery gallery={project.gallery} />
      </article>
    </>
  );
}
