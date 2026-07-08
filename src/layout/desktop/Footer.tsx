import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { footerLinks } from '@/assets/navItems.ts';

export default function Footer() {
  return (
    <footer className="full-width border-line-subtle bg-canvas shadow-md-up hidden py-12 lg:block">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 font-serif text-sm italic md:flex-row">
        <p className="text-ink-700 text-lg font-semibold">Moving Mountains</p>
        <p className="text-ink-500">© 2026 Moving mountains with my smile.</p>
        <ul className="flex gap-6">
          {footerLinks.map(link => {
            const icon = (
              <FontAwesomeIcon icon={link.icon} aria-hidden="true" className="text-2xl" />
            );

            return (
              <li key={link.label}>
                {link.internal ? (
                  <Link
                    aria-label={link.label}
                    className="text-ink-700 hover:text-highlight transition-all duration-300"
                    to={link.href}
                  >
                    {icon}
                  </Link>
                ) : (
                  <a
                    aria-label={link.label}
                    className="text-ink-700 hover:text-highlight transition-all duration-300"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
