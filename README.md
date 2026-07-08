# Portfolio

Personal portfolio site built with React, TypeScript, and Vite. It showcases work, creative life, impact, and contact options in a multi-page layout with client-side routing.

## Tech stack

- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/) for dev server and production builds
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [React Router 7](https://reactrouter.com/) for navigation

## Pages

| Route            | Description                                      |
| ---------------- | ------------------------------------------------ |
| `/`              | Home (projects, recommendations, contact CTA)    |
| `/portfolio`     | Portfolio projects                               |
| `/creative-life` | Creative life and hobbies                        |
| `/impact`        | Impact and community work                        |
| `/journal`       | Process journal                                  |
| `/support`       | Support page with contact options and inquiry form |

## Getting started

Install dependencies:

```bash
npm install
```

Copy the environment sample and fill in your values:

```bash
cp .env.sample .env
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

## Environment variables

| Variable                    | Purpose                                              |
| --------------------------- | ---------------------------------------------------- |
| `VITE_CALENDAR_BOOKING_URL` | URL for the "Book a Call" button (e.g. Cal.com link) |
| `VITE_SUPPORT_FORM_URL`     | Formspree endpoint for support form submissions      |

To enable the support form, create a free form at [formspree.io](https://formspree.io), set your notification email, and paste the form URL into `VITE_SUPPORT_FORM_URL`. Submissions will be emailed to your inbox.

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
- `src/layout/` — shared chrome (header, footer, mobile nav)
- `src/pages/` — page components
- `src/features/` — page sections grouped by domain
- `src/assets/navItems.ts` — navigation and footer link data
- `src/ui/` — shared UI components
