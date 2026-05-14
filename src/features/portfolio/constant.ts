import type { IProject, TFocus } from './interfaces';

export const PROJECTS: IProject[] = [
  {
    cover_img: {
      src: './flexify.png',
      alt: 'Flexify workout app: browsing exercises overview',
      data_alt:
        'Smart workout planner SPA: explore exercises by muscle and difficulty, search, favorites, and a plan builder—without a heavy subscription platform.',
    },
    gallery: [
      {
        src: './flexify-plan.png',
        alt: 'Flexify workout app: browsing exercises overview',
        caption: 'Get a plan',
      },
      {
        src: './flexify-browse.png',
        alt: 'Flexify filtering exercises by muscle and difficulty',
        caption: 'Filter & discover',
      },
      {
        src: './flexify-detail.png',
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
  {
    cover_img: {
      src: './quran-extension.png',
      alt: 'AI-Powered Daily Quran Chrome Extension',
      data_alt:
        'AI-Powered Daily Quran Chrome Extension: daily Quran reading, recitation, and reflection with AI-generated insights and personalized recommendations.',
    },
    gallery: [
      {
        src: './easily-change-verse.png',
        alt: 'Easily change verse',
        caption: 'Easily change verse',
      },
      {
        src: './more-explanation.png',
        alt: 'Get more explanation',
        caption: 'Get more explanation',
      },
      {
        src: './ask-anything-from-AI.png',
        alt: 'Ask AI About the Verse',
        caption: 'Ask AI About the Verse',
      },
    ],
    pills: ['React', 'TypeScript', 'Nest.js', 'Chrome Extension'],
    progress: {
      icon: 'auto_awesome',
      topFeature: ['LLM', 'Quran Foundation'],
      title: 'AI-Powered Daily Quran Chrome Extension',
      description: `Daily Quran v2 focuses on habit-friendly engagement: switch verses instantly, request layered explanations, and ask contextual questions in natural language—while keeping the experience lightweight, respectful, and free for everyday use.`,
      progressTitle: ['Roadmap · v2', 'In development'],
    },
    built: {
      title: 'Built with',
      description:
        'Designed for low-friction daily use inside the browser: a React + TypeScript side-panel UI, Nest.js APIs for structured verse retrieval and AI orchestration, and production-ready deployment for dependable performance.',
      toolkitTags: [
        'React',
        'TypeScript',
        'Nest.js',
        'Chrome Extension',
        'LLM',
        'Side Panel',
        'Tailwind CSS',
        'openai',
        'vite',
        'Qwen',
        'Vercel/serverless deployment',
        'Axios',
      ],
    },
    title: 'AI-Powered Daily Quran',
    description: `Maintaining a spiritual routine is difficult when most of the day happens in the browser. Daily Quran removes that friction by bringing reading, listening, and reflection directly into Chrome's side panel, so users can stay focused on work or study while still keeping meaningful Quran engagement in their daily flow.`,
    links: [
      {
        label: 'View live extension',
        href: 'https://chromewebstore.google.com/detail/daily-quran/diilngbfimlnkdbabjhadnblkhfbfcge',
        icon: 'arrow_forward',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/fatemehkhoshbayan/qoran-chrome-extension',
        icon: 'open_in_new',
      },
    ],
    why: {
      title: 'Why AI-Powered Daily Quran',
      description:
        'The project solves a practical habit problem: people want consistent Quran time, but context switching to separate apps breaks momentum. With side-panel access, quick verse discovery, and AI-supported explanation, Daily Quran makes spiritual mindfulness feel native to modern digital routines—for busy professionals, students, new learners, and daily readers alike.',
      features: [
        {
          title: 'AI-Powered',
          description: 'Integrated with LLM',
          titleColor: 'text-secondary text-4xl',
        },
        {
          title: 'Side Panel',
          description: 'Easy access for spiritual routines',
          titleColor: 'text-primary-f text-4xl',
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
