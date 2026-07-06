import WhyCard from './WhyCard';
import { PROJECTS } from './constant';
import ProgressCard from './ProgressCard';
import BuiltCard from './BuiltCard';
import ProjectInfoSection from './ProjectInfoSection';

export default function ProjectsSection() {
  return (
    <>
      {PROJECTS.map(project => {
        return (
          <section
            key={project.title}
            className="gap-stack-lg py-stack-lg lg:py-stack-2xl px-12 lg:px-4"
          >
            <h3 className="font-headline-lg text-headline-md lg:text-headline-lg text-dark pb-stack-lg">
              {project.title}
            </h3>
            <section
              key={project.title}
              className="gap-stack-lg grid w-full max-w-7xl grid-cols-1 lg:grid-cols-12"
            >
              <ProjectInfoSection project={project} />

              <div className="gap-stack-lg flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 lg:col-span-4">
                <ProgressCard progress={project.progress} />
                <BuiltCard built={project.built} />
              </div>

              <WhyCard reason={project.why} />
            </section>
          </section>
        );
      })}
    </>
  );
}
