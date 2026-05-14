export default function HeroSection() {
  return (
    <header className="py-section-gap gap-stack-xl w-full max-w-7xl px-12 text-center md:text-left lg:px-4">
      <div className="bg-container/20 text-dark text-label-sm mb-stack-md inline-block rounded-full px-4 py-2 tracking-widest uppercase">
        Technical Portfolio
      </div>
      <h1 className="font-display-lg text-display-lg text-dark mb-stack-md max-w-3xl leading-tight">
        Engineering solutions with{' '}
        <span className="text-brand decoration-brand-soft italic underline decoration-4 underline-offset-8">
          human warmth
        </span>{' '}
        and digital precision.
      </h1>
      <p className="font-body-lg text-body-lg text-support max-w-2xl italic">
        Moving mountains through scalable architecture and intelligent engines that prioritize
        sustainability and seamless user experiences.
      </p>
    </header>
  );
}
