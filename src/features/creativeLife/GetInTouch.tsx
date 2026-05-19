export default function GetInTouch() {
  return (
    <section className="py-section-gap w-full max-w-7xl px-12 lg:px-4">
      <div className="bg-primary custom-shadow relative overflow-hidden rounded-3xl p-12 text-center text-white">
        <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-48 w-48 rounded-full bg-white/5"></div>
        <h2 className="font-display-lg text-display-lg mb-4">Join my creative circle</h2>
        <p className="font-body-lg text-body-lg mx-auto mb-8 max-w-xl opacity-90">
          Sign up for my occasional newsletter where I share process videos, pattern downloads, and
          seasonal recipes.
        </p>
        <form className="mx-auto flex max-w-md flex-col gap-4 md:flex-row">
          <input
            className="font-body-md grow rounded-full border-none bg-white/20 px-6 py-3 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50"
            placeholder="Your email address"
            type="email"
          />
          <button
            className="text-primary font-label-md rounded-full bg-white px-8 py-3 font-bold transition-colors hover:bg-stone-200"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
