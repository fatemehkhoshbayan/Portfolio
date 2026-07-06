import { NavLink } from 'react-router-dom';
import { navItems } from '@/assets/navItems.ts';

export default function Header() {
  return (
    <header className="full-width bg-canvas sticky top-0 z-50 hidden shadow-md lg:block">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <p className="font-headline-lg text-ink-900 text-2xl font-bold">Moving Mountains</p>
          <ul className="hidden items-center gap-8 font-serif text-lg tracking-tight lg:flex">
          {navItems.map(item => (
            <li key={item.label}>
              <NavLink
                className={({ isActive }) =>
                  `border-b-2 pb-1 text-xl transition-all duration-300 ${
                    isActive
                      ? 'border-highlight text-highlight'
                      : 'text-ink-700 hover:border-highlight hover:text-highlight border-transparent'
                  }`
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/Fatemeh-Khoshbayan-Resume.pdf"
            download="Fatemeh-Khoshbayan-Resume.pdf"
            className="border-accent-dark text-brand font-label-md text-body-md hover:bg-accent-dark rounded-full border-2 bg-white px-4 py-2 transition-transform ease-out hover:scale-105 sm:px-6"
          >
            Resume
          </a>
          <a
            href={import.meta.env.VITE_CALENDAR_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-strong font-label-md text-body-md text-ink-700 rounded-full px-4 py-2 transition-transform ease-out hover:scale-105 sm:px-6"
          >
            Let's Chat
          </a>
        </div>
      </nav>
    </header>
  );
}
