import { Link } from 'react-router-dom';

export default function MobileHeader() {
  return (
    <header className="bg-canvas border-line-subtle lex sticky top-0 z-50 flex w-full items-end justify-between gap-2 border-b px-5 py-6 shadow-sm backdrop-blur-xl md:gap-4 md:px-10 lg:hidden">
      <Link to="/" className="font-headline-lg text-ink-900 text-xl font-bold">
        Moving Mountains
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <a
          href="/Fatemeh-Khoshbayan-Resume.pdf"
          download="Fatemeh-Khoshbayan-Resume.pdf"
          className="border-accent-dark text-brand font-label-md hover:bg-accent-dark rounded-full border-2 bg-white px-4 py-1 text-sm transition-transform ease-out hover:scale-105"
        >
          Resume
        </a>
        <a
          href={import.meta.env.VITE_CALENDAR_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-strong font-label-md text-ink-700 border-accent-dark rounded-full border-2 px-4 py-1 text-sm transition-transform ease-out hover:scale-105"
        >
          Let's Chat
        </a>
      </div>
    </header>
  );
}
