export type FlexifyScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

/** Extra Flexify thumbnails — swap `browse`/`detail` files when you capture real crops. */
export const flexifyGallery: FlexifyScreenshot[] = [
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
];

export const flexifyPills = ['HTML5', 'CSS', 'JavaScript (ES6+)', 'Vercel'];

/** Stack used for Flexify in this showcase */
export const flexifyToolkitTags = [
  'HTML5',
  'CSS',
  'JavaScript (ES6+)',
  'Fetch API',
  'LocalStorage',
  'Vercel',
  'REST APIs',
  'Nest.js',
  'TypeScript',
];

export const focus = [
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
