export default function ContactSection() {
  return (
    <section className="bg-brand-soft/20 py-stack-2xl mt-stack-lg lg:my-section-gap w-full max-w-7xl rounded-3xl px-10 text-center lg:px-4">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
        Let's build something beautiful together.
      </h2>
      <p className="font-body-lg text-body-lg text-support mb-stack-lg mx-auto max-w-xl">
        Whether you have a specific project in mind or just want to chat about the future of joyful
        technology, my door is always open.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <a
          className="bg-brand font-headline-md rounded-xl px-10 py-4 text-white transition-transform hover:scale-105"
          href="mailto:f.khoshbayan@gmail.com"
        >
          Send an Email
        </a>
        <a
          className="border-accent-dark text-brand font-headline-md hover:bg-accent-dark rounded-xl border-2 bg-white px-10 py-4 transition-transform hover:scale-105"
          href={import.meta.env.VITE_CALENDAR_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
