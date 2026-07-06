import { NavLink } from 'react-router-dom';
import { navItems } from '@/assets/navItems';

const NAV_ICONS: Record<string, string> = {
  '/': 'home',
  '/portfolio': 'work',
  '/creative-life': 'palette',
  '/impact': 'volunteer_activism',
};

export default function MobileBottomNav() {
  return (
    <nav className="bg-canvas border-line-subtle pb-safe fixed right-0 bottom-0 left-0 z-50 flex items-center justify-around border-t py-4 backdrop-blur-xl lg:hidden">
      {navItems.map(({ label, href }) => (
        <NavLink
          key={href}
          to={href}
          end={href === '/'}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-primary' : 'text-ink-500'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`flex items-center justify-center rounded-full px-4 py-1 transition-all duration-200 ${
                  isActive ? 'bg-primary/10' : 'bg-transparent'
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '30px',
                    fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {NAV_ICONS[href]}
                </span>
              </span>
              <p className="font-label-sm text-label-sm">{label}</p>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
