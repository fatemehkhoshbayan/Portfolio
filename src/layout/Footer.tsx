import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { footerLinks } from '@/assets/navItems.ts';

export default function Footer() {
  return (
    <footer className="full-width border-line-subtle bg-canvas shadow-md-up py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 font-serif text-sm italic md:flex-row">
        <p className="text-ink-700 text-lg font-semibold">Moving Mountains</p>
        <p className="text-ink-500">© 2026 Moving mountains with my smile.</p>
        <ul className="flex gap-6">
          {footerLinks.map(link => {
            return (
              <li key={link.label}>
                <a
                  aria-label={link.label}
                  className="text-ink-700 hover:text-highlight transition-all duration-300"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={link.icon} aria-hidden="true" className="text-2xl" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
