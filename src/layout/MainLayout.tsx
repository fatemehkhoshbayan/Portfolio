import { NavLink, Outlet } from 'react-router-dom';
import { navItems, footerLinks } from '../assets/navItems.ts';

export default function MainLayout() {
  return (
    <>
      <header className="full-width bg-canvas sticky top-0 z-50 shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <p className="font-headline-lg text-ink-900 text-2xl font-bold">Fatemeh Khoshbayan</p>
          <ul className="items-center gap-8 font-serif text-lg tracking-tight md:flex">
            {navItems.map(item => (
              <li key={item.label}>
                <NavLink
                  className={({ isActive }) =>
                    `border-b-2 pb-1 transition-all duration-300 ${
                      isActive
                        ? 'border-highlight text-highlight'
                        : 'text-ink-500 hover:border-highlight hover:text-highlight border-transparent'
                    }`
                  }
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={import.meta.env.VITE_CALENDAR_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-strong font-label-md text-ink-700 rounded-full px-6 py-2 transition-transform ease-out hover:scale-105"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main className="mx-auto flex min-h-screen min-w-[80%] flex-col items-center justify-center">
        <Outlet />
      </main>

      <footer className="full-width border-line-subtle bg-canvas shadow-md-up py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 font-serif text-sm italic md:flex-row">
          <p className="text-ink-700 text-lg font-semibold">Fatemeh Khoshbayan</p>
          <p className="text-ink-500">© 2026 Moving mountains with my smile.</p>
          <ul className="flex gap-6">
            {footerLinks.map(link => {
              return (
                <li key={link.label}>
                  <a
                    className="text-ink-500 hover:text-highlight transition-all duration-300"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </>
  );
}
