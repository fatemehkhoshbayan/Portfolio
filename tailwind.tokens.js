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

export const colors = {
  tertiary: '#5f5f59',
  error: '#ba1a1a',
  'primary-fixed-dim': '#fabd00',
  'outline-variant': '#d4c5ab',
  'surface-dim': '#d4dbdd',
  'surface-variant': '#dde4e6',
  'tertiary-container': '#cccbc3',
  'inverse-surface': '#2b3234',
  'inverse-primary': '#fabd00',
  'surface-bright': '#f4fafd',
  'on-surface': '#161d1f',
  'surface-container-high': '#e2e9ec',
  'on-primary-fixed': '#261a00',
  'surface-container-low': '#eef5f7',
  'primary-container': '#ffc107',
  'on-surface-variant': '#4f4632',
  'surface-tint': '#785900',
  primary: '#785900',
  'error-container': '#ffdad6',
  'on-secondary-container': '#6b1f00',
  'secondary-container': '#fe7e4f',
  'surface-container-highest': '#dde4e6',
  'secondary-fixed': '#ffdbcf',
  'on-secondary': '#ffffff',
  'on-secondary-fixed-variant': '#822800',
  outline: '#827660',
  'on-secondary-fixed': '#380c00',
  'tertiary-fixed': '#e4e3db',
  'on-background': '#161d1f',
  'on-primary-fixed-variant': '#5b4300',
  'on-primary': '#ffffff',
  background: '#f4fafd',
  surface: '#f4fafd',
  'secondary-fixed-dim': '#ffb59c',
  secondary: '#a43c12',
  'surface-container': '#e8eff1',
  'on-error': '#ffffff',
  'inverse-on-surface': '#ebf2f4',
  'surface-container-lowest': '#ffffff',
  'on-tertiary-fixed-variant': '#474742',
  'on-tertiary-container': '#555650',
  'on-primary-container': '#6d5100',
  'on-tertiary-fixed': '#1b1c17',
  'on-tertiary': '#ffffff',
  'tertiary-fixed-dim': '#c8c7bf',
  'primary-fixed': '#ffdf9e',
  'on-error-container': '#93000a',
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
