export default function HeroSection() {
  return (
    <section className="py-stack-xl lg:py-section-gap w-full max-w-7xl px-12 lg:px-4">
      <span className="bg-secondary-f text-secondary text-label-lg font-label-sm inline-block w-fit rounded-full px-4 py-2 tracking-wider uppercase">
        Process Journal
      </span>
      <h1 className="font-display-lg text-display-lg mt-4 leading-tight text-stone-800">
        Thoughts from the{' '}
        <span className="text-brand decoration-brand-soft italic underline decoration-4 underline-offset-8">
          Studio & Field
        </span>
      </h1>
      <p className="font-body-lg text-body-xl text-support mt-4 max-w-2xl text-balance italic">
        Sketches, experiments, and quiet observations from the creative life, unpolished, honest,
        and still becoming.
      </p>
    </section>
  );
}
