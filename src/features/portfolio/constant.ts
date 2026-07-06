import type { IProject, TFocus } from './interfaces';

export const PROJECTS: IProject[] = [
  {
    cover_img: {
      src: './ctrl-alt-meet/ctrl-alt-meet.png',
      alt: 'Ctrl Alt Meet: event discovery with filters and favorites',
      data_alt:
        'React event platform: browse conferences, filter by category and price, favorite events, book tickets, and manage reservations—with auth, theming, and responsive layouts.',
    },
    gallery: [
      {
        src: './ctrl-alt-meet/ctrl-alt-meet-speakers.png',
        alt: 'Ctrl Alt Meet discover speakers',
        caption: 'Discover Speakers',
      },
      {
        src: './ctrl-alt-meet/ctrl-alt-meet-events.png',
        alt: 'Ctrl Alt Meet events listing with search and filters',
        caption: 'Discover events',
      },
      {
        src: './ctrl-alt-meet/ctrl-alt-meet-bookings.png',
        alt: 'Ctrl Alt Meet my bookings with upcoming and past tabs',
        caption: 'Manage bookings',
      },
    ],
    pills: ['React', 'TypeScript', 'Redux Toolkit', 'Vercel'],
    progress: {
      icon: 'confirmation_number',
      topFeature: ['Booking', 'Redis'],
      title: 'Production-ready reservations',
      description:
        'Shipped end-to-end: json-server locally for fast iteration, Vercel serverless handlers in production with Upstash Redis so favorites, bookings, and ticket availability persist across redeploys.',
      progressTitle: ['Shipped · v1', 'Live on Vercel'],
    },
    built: {
      title: 'Built with',
      description:
        'A React 19 SPA with Redux Toolkit for events, bookings, and favorites; React Hook Form + Zod for validation; Tailwind CSS v4 and Radix UI for accessible UI—backed by a mock JSON API in dev and serverless + Redis in production.',
      toolkitTags: [
        'React',
        'TypeScript',
        'Redux Toolkit',
        'React Hook Form',
        'Zod',
        'Tailwind CSS',
        'Vite',
        'React Router',
        'json-server',
        'Upstash Redis',
        'Vercel',
        'Vercel/serverless deployment',
      ],
    },
    title: 'Ctrl Alt Meet — Event Management Platform',
    description:
      'A conference discovery and ticketing SPA that covers the full attendee journey in one polished app. Filter and sort events by category, date, and price; explore detail pages with schedules, tiers, venues, and speakers; sign in to save favorites and complete a three-step booking flow with validation and confirmation. My Bookings keeps upcoming and past reservations in one place—with ticket details, references, and cancellation—while light/dark theme and responsive layouts make it feel production-ready end to end.',
    links: [
      {
        label: 'View live app',
        href: 'https://ctrl-alt-meet.vercel.app/',
        icon: 'arrow_forward',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/fatemehkhoshbayan/Ctrl-Alt-Meet',
        icon: 'open_in_new',
      },
    ],
    why: {
      title: 'Why Ctrl Alt Meet',
      description:
        'Event sites often demo UI without the hard parts: auth, inventory, persistence, and cancellation flows. Ctrl Alt Meet exercises the full user journey—from filtered discovery and favorites through checkout, My Bookings, and cancel—with realistic state management and a production data layer.',
      features: [
        {
          title: 'REST',
          description: 'Serverless API + Redis',
          titleColor: 'text-secondary',
        },
        {
          title: 'SPA',
          description: 'Auth, booking & favorites',
          titleColor: 'text-primary-f',
        },
      ],
    },
  },
  {
    cover_img: {
      src: './extension/quran-extension.png',
      alt: 'AI-Powered Daily Quran Chrome Extension',
      data_alt:
        'AI-Powered Daily Quran Chrome Extension: daily Quran reading in Chrome’s side panel with tafsir, AI reflection, Quran.com login, and synced favorites.',
    },
    gallery: [
      {
        src: './extension/easily-change-verse.png',
        alt: 'Easily change verse',
        caption: 'Navigate verses with prev / next',
      },
      {
        src: './extension/more-explanation.png',
        alt: 'Get more explanation',
        caption: 'Show tafsir and layered commentary',
      },
      {
        src: './extension/ask-anything-from-AI.png',
        alt: 'Ask AI About the Verse',
        caption: 'Ask AI contextual questions',
      },
    ],
    pills: ['React', 'TypeScript', 'Nest.js', 'Chrome Extension'],
    progress: {
      icon: 'auto_awesome',
      topFeature: ['LLM', 'Quran Foundation', 'Quran.com OAuth'],
      title: 'AI-Powered Daily Quran Chrome Extension',
      description: `Daily Quran brings habit-friendly Quran engagement into Chrome’s side panel: browse verses instantly, explore tafsir, ask AI in natural language, and—when signed in—save favorites that sync to your Quran.com profile. Core features work in guest mode; login unlocks bookmark sync.`,
      progressTitle: ['Live · Chrome Web Store', 'v1.1.1'],
    },
    built: {
      title: 'Built with',
      description:
        'A React + TypeScript side-panel extension talks to a Nest.js API on Vercel: Quran Foundation for verse data, Gemini with OpenRouter/Qwen fallback for AI explanations, OAuth2 + PKCE for Quran.com login, and Upstash Redis for session storage.',
      toolkitTags: [
        'React',
        'TypeScript',
        'Nest.js',
        'Chrome Extension',
        'Manifest V3',
        'Side Panel',
        'Tailwind CSS',
        'Vite',
        'React Query',
        'Axios',
        'LLM',
        'Gemini',
        'OpenRouter',
        'Qwen',
        'Quran Foundation',
        'OAuth2',
        'PKCE',
        'Upstash Redis',
        'Vercel',
        'DOMPurify',
      ],
    },
    title: 'AI-Powered Daily Quran',
    description: `Maintaining a spiritual routine is difficult when most of the day happens in the browser. Work, study, and daily tasks keep attention elsewhere, and switching to a separate Quran app often breaks the momentum you were trying to protect. Daily Quran removes that friction by bringing reading, tafsir, AI reflection, and Quran.com favorites directly into Chrome’s side panel—so users can stay focused on what they’re doing while still keeping meaningful Quran engagement in their daily flow. Each session shows a verse in Uthmani Arabic with English translation, with prev/next navigation for ordered reading or discovery. Users can expand tafsir, ask AI contextual questions in natural language, and—when signed in—save favorites that sync to their Quran.com profile. Guest mode keeps the core experience free and lightweight; login is only needed for bookmark sync.`,
    links: [
      {
        label: 'View live extension',
        href: 'https://chromewebstore.google.com/detail/daily-quran/diilngbfimlnkdbabjhadnblkhfbfcge',
        icon: 'arrow_forward',
      },
      {
        label: 'Extension GitHub',
        href: 'https://github.com/fatemehkhoshbayan/qoran-chrome-extension',
        icon: 'open_in_new',
      },
      {
        label: 'API GitHub',
        href: 'https://github.com/fatemehkhoshbayan/quran-chrome-extension-api',
        icon: 'open_in_new',
      },
    ],
    why: {
      title: 'Why AI-Powered Daily Quran',
      description:
        'The project solves a practical habit problem: people want consistent Quran time, but switching to separate apps breaks momentum. With side-panel access, quick verse discovery, AI-supported explanation, and optional Quran.com account sync, Daily Quran makes spiritual mindfulness feel native to modern digital routines—for busy professionals, students, new learners, and daily readers alike.',
      features: [
        {
          title: 'AI-Powered',
          description: 'Gemini + OpenRouter fallback for tafsir and Q&A',
          titleColor: 'text-secondary text-4xl',
        },
        {
          title: 'Side Panel',
          description: 'Always-accessible, low-friction daily reading',
          titleColor: 'text-primary-f text-4xl',
        },
        {
          title: 'Quran.com Sync',
          description: 'Login to save favorites to your Quran.com profile',
          titleColor: 'text-secondary text-4xl',
        },
      ],
    },
  },
  {
    cover_img: {
      src: './virtual-business/virtual-business-card.png',
      alt: 'Virtual Business Card: build a scannable QR contact card',
      data_alt:
        'Next.js app: enter contact details, pick colors and layout, preview a branded business card with vCard QR code, and download a share-ready PNG—with validation, logo upload, and light/dark theme.',
    },
    gallery: [
      {
        src: './virtual-business/virtual-business-card-builder.png',
        alt: 'Virtual Business Card form with contact fields, colors, and layout options',
        caption: 'Build your card',
      },
      {
        src: './virtual-business/virtual-business-card-preview.png',
        alt: 'Virtual Business Card live canvas preview with QR code',
        caption: 'Live preview',
      },
      {
        src: './virtual-business/virtual-business-card-layouts.png',
        alt: 'Virtual Business Card vertical and horizontal layouts with custom branding',
        caption: 'Layouts & branding',
      },
    ],
    pills: ['Next.js', 'TypeScript', 'React', 'Vercel'],
    progress: {
      icon: 'qr_code_2',
      topFeature: ['vCard', 'Canvas'],
      title: 'Client-side card generation',
      description:
        'Shipped end-to-end in the browser: vCard 3.0 QR encoding, dynamic palette generation from brand colors, HTML Canvas rendering for vertical and horizontal layouts, and one-click PNG export—no backend required.',
      progressTitle: ['Shipped · v1', 'Live on Vercel'],
    },
    built: {
      title: 'Built with',
      description:
        'A Next.js 16 App Router app with React 19 and TypeScript. Tailwind CSS v4 for the builder UI; the qrcode library for scannable vCards; and a custom Canvas pipeline for gradients, logos, typography, and PNG download—all validated client-side before export.',
      toolkitTags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'HTML Canvas',
        'vCard 3.0',
        'QRCode',
        'Vercel',
      ],
    },
    title: 'Virtual Business Card — QR Contact Card Builder',
    description:
      'A single-page tool for creating scannable digital business cards. Fill in name, company, title, phone, email, and website; upload an optional logo; pick primary and accent colors; and switch between vertical and horizontal layouts. A live Canvas preview updates as you type, encoding contact details into a vCard QR code phones can save in one scan. Blur and download validation keep exports clean, while light/dark UI theme and responsive layout make it feel ready to share at events or on LinkedIn.',
    links: [
      {
        label: 'View live app',
        href: 'https://virtual-business-card.vercel.app/',
        icon: 'arrow_forward',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/fatemehkhoshbayan/virtual-business-card',
        icon: 'open_in_new',
      },
    ],
    why: {
      title: 'Why Virtual Business Card',
      description:
        'QR generators often stop at plain codes or static templates. This project covers the full flow—structured contact data, branded layout, real-time preview, and export—while keeping everything client-side so there’s no account, API, or storage layer to maintain.',
      features: [
        {
          title: 'vCard',
          description: 'Scannable contact QR',
          titleColor: 'text-secondary',
        },
        {
          title: 'Canvas',
          description: 'Live preview & PNG export',
          titleColor: 'text-primary-f',
        },
      ],
    },
  },
  {
    cover_img: {
      src: './flexify/flexify.png',
      alt: 'Flexify workout app: browsing exercises overview',
      data_alt:
        'Smart workout planner SPA: explore exercises by muscle and difficulty, search, favorites, and a plan builder—without a heavy subscription platform.',
    },
    gallery: [
      {
        src: './flexify/flexify-plan.png',
        alt: 'Flexify workout app: browsing exercises overview',
        caption: 'Get a plan',
      },
      {
        src: './flexify/flexify-browse.png',
        alt: 'Flexify filtering exercises by muscle and difficulty',
        caption: 'Filter & discover',
      },
      {
        src: './flexify/flexify-detail.png',
        alt: 'Flexify exercise detail with instructions',
        caption: 'Exercise detail',
      },
    ],
    pills: ['HTML5', 'CSS', 'JavaScript (ES6+)', 'Vercel'],
    progress: {
      icon: 'smart_toy',
      topFeature: ['LLM', 'Roadmap'],
      title: 'AI-built workout plans',
      description: `Planned for Flexify v2: users describe goals and constraints in plain language—an LLM turns that into a structured session plan you can tweak, merge with favorites, or save alongside today's browse-and-filter flows.`,
      progressTitle: ['Roadmap · v2', 'In exploration'],
    },
    built: {
      title: 'Built with',
      description:
        'The Flexify SPA is deliberately lightweight: semantic HTML, modular CSS variables, vanilla JavaScript over the Fetch API and local persistence—deployed as a fast static frontend on Vercel.',
      toolkitTags: [
        'HTML5',
        'CSS',
        'JavaScript (ES6+)',
        'Fetch API',
        'LocalStorage',
        'Vercel',
        'REST APIs',
        'Nest.js',
        'TypeScript',
      ],
    },
    title: 'Flexify — Smart Workout Planner',
    description: `A SPA for busy beginners who want workouts by muscle group and difficulty—not another
            overwhelming fitness subscription. Filters, search, and favorites sit on top of an
            exercises API; routines and preferences use local validation and localStorage. Next
            version: prompt-based plans generated with an LLM so users can describe goals and get a
            tailored routine.`,
    links: [
      {
        label: 'View live app',
        href: 'https://flexify-taupe.vercel.app/',
        icon: 'arrow_forward',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/fatemehkhoshbayan/Flexify',
        icon: 'open_in_new',
      },
    ],
    why: {
      title: 'Why Flexify',
      description:
        'Most fitness platforms bury simple needs behind subscriptions and clutter. Flexify concentrates on discovery: exercises filtered by muscle and difficulty, sensible defaults, and a path toward AI-generated plans from natural-language prompts—all without losing the approachable, unpaid core experience.',
      features: [
        {
          title: 'REST',
          description: 'Flexify exercises API',
          titleColor: 'text-secondary',
        },
        {
          title: 'SPA',
          description: 'Live on Vercel',
          titleColor: 'text-primary-f',
        },
      ],
    },
  },
];

export const focus: Array<TFocus> = [
  {
    title: 'Human-Centered',
    description:
      "Prioritizing the end-user's emotional and physical well-being in every line of code.",
    icon: 'diversity_1',
  },
  {
    title: 'Sustainability First',
    description:
      'Optimizing resource consumption and cloud costs to minimize digital carbon footprints.',
    icon: 'eco',
  },
  {
    title: 'Scalable Impact',
    description: 'Building architectures that grow gracefully alongside global communities.',
    icon: 'bolt',
  },
];
