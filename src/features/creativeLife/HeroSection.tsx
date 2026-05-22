export default function HeroSection() {
  return (
    <section className="py-section-gap w-full max-w-7xl px-12 lg:px-4">
      <div className="gap-stack-md flex flex-col items-center lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="gap-stack-lg flex flex-col">
          <span className="bg-secondary-f text-secondary text-label-lg font-label-sm inline-block w-fit rounded-full px-4 py-2 tracking-wider uppercase">
            Passions &amp; Pursuits
          </span>
          <h1 className="font-display-lg text-display-lg leading-tight text-stone-800">
            Finding Joy in the{' '}
            <span className="text-brand decoration-brand-soft italic underline decoration-4 underline-offset-8">
              Quiet Moments
            </span>
          </h1>
          <p className="font-body-lg text-body-xl max-w-2xl text-balance text-stone-600 italic">
            Creativity is not just a destination; it's the gentle rhythmic pulse of my daily life.
            Explore the textures, flavors, and colors that ground me in the present.
          </p>
        </div>
        <div className="custom-shadow relative h-[450px] overflow-hidden rounded-xl">
          <img
            alt="Creative Space"
            className="h-full w-full object-cover"
            data-alt="A sun-drenched creative workspace with a warm cream background and golden hour lighting. Art supplies like watercolor brushes, natural linen fabrics, and botanical sketches are neatly arranged on a rustic wooden table. The mood is peaceful and deeply inspiring, reflecting a minimalist yet tactile warmth with soft sunflower-colored shadows."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbLW8o51xAZqJb9darDxUwAKcNgFtMT_UwTBhDeGliOeEWxwuQJbRWOxS2lKwkqwOrrxWkDlmdJS8o9axMqa45TVgGhzSAnoJPT4vyf5rjP-CqqOOTz24No9WYktHDjGz22h3A35dpvrhGBl_A9Vlg4UEdeM1yoViKJjx-wJBpmIBirNgB5H_b54eEe_6vJiKPLy9ERgHs3-zZIwP2DTQCyYQ9VYtXPoUPBCJRUOVsBFr0SvxPXbeGRBQl8PYqglUm7Bqp-Ls-AGR1"
          />
          <div className="from-primary/20 absolute inset-0 bg-linear-to-t to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
