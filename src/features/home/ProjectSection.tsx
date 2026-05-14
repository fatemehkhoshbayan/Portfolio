import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from './constants';

export default function ProjectSection() {
  return (
    <section className="py-section-gap w-full max-w-7xl px-4">
      <div className="mb-stack-lg flex items-end justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-dark">Selected Works</h2>
          <p className="font-body-md text-support mt-2">
            A glimpse into digital spaces I've crafted with care.
          </p>
        </div>
        <Link
          className="font-label-md text-accent border-secondary hover:text-on-sc border-b pb-1 transition-colors"
          to="/Portfolio"
        >
          See all projects
        </Link>
      </div>
      <div className="gap-stack-xl grid grid-cols-1 lg:grid-cols-2">
        <ProjectCard projects={projects} />
      </div>
    </section>
  );
}
