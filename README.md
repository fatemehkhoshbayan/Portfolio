# Portfolio

Personal portfolio site built with React, TypeScript, and Vite. It showcases work, creative life, impact, and contact information in a multi-page layout with client-side routing.

## Tech stack

- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/) for dev server and production builds
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [React Router 7](https://reactrouter.com/) for navigation

## Pages

| Route            | Description   |
| ---------------- | ------------- |
| `/`              | Home          |
| `/portfolio`     | Portfolio     |
| `/creative-life` | Creative life |
| `/impact`        | Impact        |
| `/contact`       | Contact       |

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server (with hot reload):

```bash
npm run dev
```

Production build and local preview:

```bash
npm run build
npm run preview
```

## Scripts

| Command                | Purpose                            |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Start Vite dev server              |
| `npm run build`        | Typecheck and build for production |
| `npm run preview`      | Serve the production build locally |
| `npm run lint`         | Run ESLint                         |
| `npm run prettier`     | Format `src` with Prettier         |
| `npm run check-format` | Check formatting (CI-friendly)     |

Lint-staged runs Prettier on staged files under `src` when configured in your Git hooks.

## Project structure

- `src/App.tsx` — route definitions
- `src/layout/MainLayout.tsx` — shared chrome (nav, footer)
- `src/pages/` — page components
- `src/assets/navItems.ts` — navigation and footer link data
