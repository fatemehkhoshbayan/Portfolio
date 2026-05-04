import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="py-section-gap w-full max-w-7xl px-4">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
        <div className="flex w-full max-w-xl flex-col items-center gap-2 text-center md:max-w-none md:flex-1 md:items-start md:text-left">
          <h1 className="font-display-lg text-display-lg mb-stack-md text-brand tracking-tight">
            Moving mountains with a smile.
          </h1>
          <p className="font-body-lg text-body-lg text-support max-w-2xl leading-relaxed italic">
            I am <strong>Fatemeh Khoshbayan</strong>, a Full Stack Developer dedicated to combining
            technical rigor with joyful user experiences. I believe that engineering excellence
            shouldn't feel cold; it should feel like a warm invitation to explore.
          </p>
          <div className="mt-stack-lg flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Link
              className="font-label-md bg-container hover:bg-highlight inline-flex items-center gap-2 rounded-md px-8 py-4 text-white transition-opacity"
              to="/portfolio"
            >
              View My Work
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <div className="font-label-md text-accent flex items-center gap-2 transition-opacity">
              <a
                className="hover:opacity-80"
                href="https://www.linkedin.com/in/fatemeh-khoshbayan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="text-support opacity-60">/</span>
              <a
                className="hover:opacity-80"
                href="https://medium.com/@f.khoshbayan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full sm:max-w-[360px] md:mx-0 md:w-[50%] md:max-w-[550px]">
          <div
            className="bg-brand-soft shadow-md-all pointer-events-none absolute -bottom-1 -left-1 z-0 h-[20%] w-[20%] rounded-full opacity-40 md:-bottom-2 md:-left-2"
            aria-hidden
          />
          <figure className="border-canvas shadow-sun relative z-10 aspect-square w-full overflow-hidden rounded-full border-8">
            <img
              className="h-full w-full object-cover"
              alt="Portrait of Fatemeh Khoshbayan"
              src="/fatemeh.JPG"
              width={800}
              height={800}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
