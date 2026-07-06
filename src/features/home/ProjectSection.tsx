import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from './constants';

export default function ProjectSection() {
  return (
    <section className="lg:py-section-gap py-stack-lg w-full max-w-7xl px-10 lg:px-4">
      <div className="mb-stack-lg gap-stack-md flex flex-col items-start justify-between">
        <div className="flex w-full items-center justify-between gap-4">
          <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-dark">
            Selected Works
          </h2>
          <Link
            className="font-label-md text-body-lg text-accent border-secondary hover:text-on-sc border-b pb-1 transition-colors"
            to="/Portfolio"
          >
            See all projects
          </Link>
        </div>

        <p className="font-body-md text-support text-body-lg">
          A glimpse into digital spaces I've crafted with care.
        </p>
      </div>
      <div className="gap-stack-xl grid grid-cols-1 lg:grid-cols-2">
        <ProjectCard projects={projects} />
      </div>
    </section>
  );
}
