import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeroSection() {
  return (
    <section className="py-section-gap w-full max-w-7xl px-12 lg:px-4">
      <div className="gap-stack-lg grid grid-cols-1 items-center lg:grid-cols-12">
        <div className="gap-stack-lg flex flex-col lg:col-span-7">
          <span className="bg-secondary-f text-secondary text-label-lg font-label-sm inline-block w-fit rounded-full px-4 py-2 tracking-wider uppercase">
            BLOOM TOGETHER
          </span>
          <h1 className="font-display-lg text-display-lg leading-tight text-stone-800">
            Engineering Empathy for a{' '}
            <span className="text-brand decoration-brand-soft italic underline decoration-4 underline-offset-8">
              Brighter World
            </span>
          </h1>
          <p className="font-body-lg text-body-xl text-support max-w-2xl italic">
            I believe that technology isn't just about lines of code, but the lives it touches. My
            vision is a world where digital innovation bridges human gaps, fostering empathy and
            equity through sustainable, joyful design.
          </p>
          {/* <div className="gap-md flex">
            <div className="flex flex-col">
              <span className="font-h3 text-h3 text-secondary mb-xs">85%</span>
              <span className="font-label-caps text-label-caps text-outline">
                Open Source Contribution
              </span>
            </div>
            <div className="bg-outline-variant h-12 w-px self-center"></div>
            <div className="flex flex-col">
              <span className="font-h3 text-h3 text-secondary mb-xs">12+</span>
              <span className="font-label-caps text-label-caps text-outline">
                Non-Profit Partners
              </span>
            </div>
          </div> */}
        </div>
        <div className="relative lg:col-span-5">
          <div className="floating-shadow rotate-2 overflow-hidden rounded-xl">
            <img
              alt="Community Impact"
              className="h-[500px] w-full object-cover"
              data-alt="A warm and heartfelt photograph of a community center courtyard filled with diverse people collaborating joyfully. The scene is bathed in soft, golden morning sunlight that emphasizes a sense of hope and tranquility. The color palette features gentle greens of lush plants and soft blues from the sky, creating a serene and welcoming atmosphere that aligns with a mission of social responsibility."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXCb8JukcDQilGhh0kmYoDkG8xl1lBRCTqWh1YTU5qccetYWTsRmXe3lNi4JcJ3JdRDHD82fqj7I1f2I34PtyRRu7ra7EdyObS1bPOA1nNse1eEwGFxR6Wmx4R4l7YcLS3fT2lAIaSmMzuf8hUwNWKpmFXTAmXQua8q6CqFb0B2p9eqb2bNd7VXkT3tdUvNxcG1lsab1j5TSfTz_Ho9OwKQl3mkTBVPmlCI_2rYXS701ykEuYhIYGxPsakaWJbr9HqQIMqfpo4QkJb"
            />
          </div>
          <div className="bg-secondary-container ambient-shadow absolute -bottom-11 -left-6 hidden rounded-xl p-6 md:block">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              aria-hidden="true"
              className="text-secondary bg-secondary-f rounded-md p-2 text-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
