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
];

/**
 * Utility-agnostic color palette.
 */
export const colors = {
  // Brand and accent hues
  brand: '#785900',
  'brand-soft': '#ffdf9e',
  'brand-strong': '#fabd00',
  accent: '#a43c12',
  'accent-soft': '#ffdbcf',
  'accent-strong': '#ffb59c',
  support: '#5f5f59',
  'support-soft': '#e4e3db',
  'support-strong': '#c8c7bf',
  danger: '#ba1a1a',
  'danger-soft': '#ffdad6',

  // Neutrals and ink tones
  'ink-900': '#292524',
  'ink-700': '#44403c',
  'ink-500': '#78716c',
  'ink-inverse': '#ebf2f4',
  white: '#ffffff',

  // Surfaces and backgrounds
  canvas: '#fffdf5',
  surface: '#f4fafd',
  'surface-50': '#ffffff',
  'surface-100': '#eef5f7',
  'surface-200': '#e8eff1',
  'surface-300': '#e2e9ec',
  'surface-400': '#dde4e6',
  'surface-dim': '#d4dbdd',
  'surface-inverse': '#2b3234',

  // Lines, outlines, and emphasis
  line: '#827660',
  'line-soft': '#d4c5ab',
  'line-subtle': '#e7e5e4',
  highlight: '#f59e0b',
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
  'stack-lg': '32px',
  'margin-edge': '32px',
  'section-gap': '80px',
  'stack-md': '16px',
};

export const boxShadow = {
  sm: '0 6px 12px -10px rgba(0, 0, 0, 0.28)',
  md: '0 10px 20px -14px rgba(0, 0, 0, 0.35)',
  'sm-up': '0 -6px 12px -10px rgba(0, 0, 0, 0.28)',
  'md-up': '0 -10px 20px -14px rgba(0, 0, 0, 0.35)',
};

/** One stack for every semantic type role — avoids repeating `['Newsreader']`. */
export const fontFamily = Object.fromEntries(typeRoles.map(role => [role, DISPLAY_FONT]));

export const fontSize = {
  'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
  'headline-md': ['24px', { lineHeight: '32px', fontWeight: '700' }],
  'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
  'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
  'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
  'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '500' }],
  'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.03em', fontWeight: '600' }],
};
