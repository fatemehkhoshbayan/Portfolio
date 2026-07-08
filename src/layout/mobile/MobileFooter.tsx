import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { footerLinks } from '@/assets/navItems';

export default function MobileFooter() {
  return (
    <footer className="border-line-subtle bg-canvas shadow-md-up block border-t pt-10 pb-30 lg:hidden">
      <div className="flex flex-col items-center gap-6 px-6 text-center font-serif">
        <p className="text-ink-700 text-xl font-bold">Moving Mountains</p>

        <p className="text-ink-500 max-w-xs text-sm italic">
          © {new Date().getFullYear()} Moving mountains with my smile.
        </p>

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
                    className="text-ink-700 hover:text-highlight transition-colors"
                    to={link.href}
                  >
                    {icon}
                  </Link>
                ) : (
                  <a
                    aria-label={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-700 hover:text-highlight transition-colors"
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
