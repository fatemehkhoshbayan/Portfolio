import { Link, Outlet } from 'react-router-dom';
import { navItems, footerLinks } from '../assets/navItems.ts';

export default function MainLayout() {
  return (
    <>
      <header className="full-width sticky top-0 z-50 bg-[#FFFDF5] shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <p className="font-headline-lg text-2xl font-bold text-stone-800">Fatemeh Khoshbayan</p>
          <ul className="hidden items-center gap-8 font-serif text-lg tracking-tight md:flex">
            {navItems.map(item => (
              <li key={item.label}>
                <Link
                  className="pb-1 text-stone-500 transition-all duration-300 hover:border-amber-500 hover:text-amber-500"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-primary-container text-on-primary-container font-label-md rounded-full px-6 py-2 transition-transform ease-out hover:scale-105">
            Get in touch
          </button>
        </nav>
      </header>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer className="full-width border-t border-stone-200 bg-[#FFFDF5] py-12 shadow-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 font-serif text-sm italic md:flex-row">
          <p className="text-lg font-semibold text-stone-700">Fatemeh Khoshbayan</p>
          <p className="text-stone-500">© 2026 Moving mountains with my smile.</p>
          <ul className="flex gap-6">
            {footerLinks.map(link => {
              return (
                <li key={link.label}>
                  <a
                    className="text-stone-500 transition-all duration-300 hover:text-amber-500"
                    href={link.href}
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
