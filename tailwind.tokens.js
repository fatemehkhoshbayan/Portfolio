/** Single source of truth for Tailwind theme extensions. */

const DISPLAY_FONT = ['Newsreader', 'serif'];

/** Typography roles shared by `fontFamily` and `fontSize` keys. */
export const typeRoles = [
  'headline-lg',
  'label-sm',
  'headline-md',
  'display-lg',
  'body-md',
  'body-lg',
  'label-md',
  'label-sm',
];

/**
 * Material-style roles with short inner keys (Tailwind: `bg-primary-c`, `text-on-surf`).
 * c = container, f = fixed, fd = fixed-dim, on-c / on-f / on-fv = on-container / on-fixed / on-fixed-variant
 */
const palette = {
  primary: {
    DEFAULT: '#785900',
    c: '#ffc107',
    f: '#ffdf9e',
    fd: '#fabd00',
    tint: '#785900',
    'on-f': '#261a00',
    'on-fv': '#5b4300',
    'on-c': '#6d5100',
  },
  secondary: {
    DEFAULT: '#fe7e4f',
    f: '#ffdbcf',
    'on-f': '#380c00',
    'on-fv': '#822800',
    'on-c': '#6b1f00',
  },
  tertiary: {
    DEFAULT: '#5f5f59',
    c: '#cccbc3',
    f: '#e4e3db',
    fd: '#c8c7bf',
    'on-f': '#1b1c17',
    'on-fv': '#474742',
    'on-c': '#555650',
  },
  error: {
    DEFAULT: '#ba1a1a',
    c: '#ffdad6',
    'on-c': '#93000a',
  },
  surface: {
    DEFAULT: '#f4fafd',
    b: '#f4fafd',
    dim: '#d4dbdd',
    v: '#dde4e6',
    0: '#ffffff',
    1: '#eef5f7',
    2: '#e8eff1',
    3: '#e2e9ec',
    4: '#dde4e6',
  },
  neutral: {
    bg: '#f4fafd',
    out: '#827660',
    'out-v': '#d4c5ab',
    inv: '#2b3234',
  },
  on: {
    p: '#ffffff',
    s: '#ffffff',
    t: '#ffffff',
    e: '#ffffff',
    surf: '#161d1f',
    'surf-v': '#4f4632',
    bg: '#161d1f',
    inv: '#ebf2f4',
    pc: '#6d5100',
    sc: '#6b1f00',
  },
};

export const colors = {
  ...palette,

  // --- Legacy / UI aliases (keep existing class names working) ---
  brand: palette.primary.DEFAULT,
  'brand-soft': palette.primary.f,
  'brand-strong': palette.primary.fd,
  'brand-dark': palette.primary['on-fv'],
  'warm-peach': '#f5dfc7',
  'warm-amber': '#dfa037',

  accent: palette.secondary['on-fv'],
  'accent-soft': palette.secondary.f,
  'accent-strong': '#ffb59c',
  'accent-dark': palette.primary.c,

  support: palette.tertiary.DEFAULT,
  'support-soft': palette.tertiary.f,
  'support-strong': palette.tertiary.fd,

  danger: palette.error.DEFAULT,
  'danger-soft': palette.error.c,

  dark: palette.on.surf,

  'ink-900': '#292524',
  'ink-700': '#44403c',
  'ink-500': '#78716c',
  'ink-inverse': palette.on.inv,
  white: '#ffffff',

  canvas: '#fffdf5',
  container: palette.secondary.DEFAULT,
  'on-container': palette.secondary['on-c'],

  'surface-50': palette.surface[0],
  'surface-100': palette.surface[1],
  'surface-200': palette.surface[2],
  'surface-300': palette.surface[3],
  'surface-400': palette.surface[4],
  'surface-dim': palette.surface.dim,
  'surface-inverse': palette.neutral.inv,

  line: palette.neutral.out,
  'line-soft': palette.neutral['out-v'],
  'line-subtle': '#e7e5e4',
  highlight: palette.primary.fd,
};

export const borderRadius = {
  DEFAULT: '0.25rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
};

export const spacing = {
  unit: '8px',
  gutter: '24px',
  'container-max': '1200px',
  'stack-sm': '8px',
  'stack-md': '16px',
  'stack-lg': '32px',
  'stack-xl': '64px',
  'stack-2xl': '80px',
  'section-gap': '120px',
  'section-gap-lg': '210px',
};

export const boxShadow = {
  sm: '0 6px 12px -10px rgba(0, 0, 0, 0.28)',
  md: '0 10px 20px -14px rgba(0, 0, 0, 0.35)',
  'md-all': '0 0 20px rgba(0, 0, 0, 0.22), 0 0 8px rgba(0, 0, 0, 0.12)',
  'sm-up': '0 -6px 12px -10px rgba(0, 0, 0, 0.28)',

  'md-up': '0 -10px 20px -14px rgba(0, 0, 0, 0.35)',
  sun: '0 0 36px -6px rgba(255, 193, 7, 0.22), 0 0 22px rgba(0, 0, 0, 0.12)',
  custom: '0 10px 30px -10px rgba(255, 193, 7, 0.15)',
};

/** One stack for every semantic type role — avoids repeating `['Newsreader']`. */
export const fontFamily = Object.fromEntries(typeRoles.map(role => [role, DISPLAY_FONT]));

export const fontSize = {
  'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
  'headline-md': ['24px', { lineHeight: '32px', fontWeight: '700' }],
  'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
  'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
  'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
  'body-xl': ['22px', { lineHeight: '32px', fontWeight: '400' }],
  'body-2xl': ['24px', { lineHeight: '36px', fontWeight: '400' }],
  'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '500' }],
  'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.03em', fontWeight: '600' }],
};
