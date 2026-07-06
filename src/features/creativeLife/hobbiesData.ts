import type { JournalEntry } from '../journal/interfaces';
import type { HobbyData } from './interfaces';

export const HOBBIES: HobbyData[] = [
  {
    id: 'watercolor',
    icon: 'palette',
    label: 'Artistry',
    title: 'Watercoloring',
    description: `Capturing the translucency of light through pigment and water. It's a lesson in letting go and embracing beautiful accidents.`,
    variant: 'wide',
    colorClass: 'bg-white',
    images: [
      {
        src: '/hobbies/watercolor-1.jpeg',
        alt: 'Watercolor painting of a male and female cardinal perched together on a bare snowy branch, painted by Fatemeh in 2023',
      },
      {
        src: '/hobbies/watercolor-2.jpeg',
        alt: 'Watercolor painting of a DSLR camera framed by lush green forest trees, with the viewfinder reflecting the woodland scene, painted by Fatemeh in 2023',
      },
    ],
  },
  {
    id: 'pateh',
    icon: 'gesture',
    label: 'Traditional Craft',
    title: 'Pateh Embroidery',
    description:
      'The rhythmic dance of needle and thread on hand-dyed wool fabrics. Each stitch is a prayer of patience.',
    variant: 'narrow',
    colorClass: 'bg-secondary-container/10',
    images: [
      {
        src: '/hobbies/pateh.jpeg',
        alt: 'A circular Pateh embroidery piece on ivory fabric with concentric rings of intricate paisley and floral motifs in deep purple, pink, gold, teal, and green',
      },
    ],
  },
  {
    id: 'baking-cooking',
    icon: 'bakery_dining',
    label: 'Nourishment',
    title: 'Baking & Cooking',
    description:
      'From the slow alchemy of sourdough starter to the joyful chaos of a Persian feast — my kitchen is where science, memory, and love meet.',
    variant: 'narrow',
    colorClass: 'bg-primary-container/10',
    images: [
      {
        src: '/hobbies/baking.jpeg',
        alt: 'Two golden-brown sourdough boules crusted with black and white sesame seeds, resting on a red-and-white checkered cloth',
      },
    ],
  },
  {
    id: 'nature-journal',
    icon: 'nature',
    label: 'Exploration',
    title: 'Nature Journaling',
    description: `Observing the small changes in the local park — the way light hits a leaf, the first bloom of spring. It's a dialogue with the earth.`,
    variant: 'split',
    colorClass: 'bg-surface-container-lowest',
    images: [
      {
        src: '/hobbies/nature-journal.jpeg',
        alt: 'Two maple trees in peak autumn colour — vivid orange and yellow leaves framing a calm lake reflecting the sky, fallen leaves on green grass',
      },
    ],
  },
  {
    id: 'yoga',
    icon: 'self_improvement',
    label: 'Movement',
    title: 'Yoga',
    description:
      'Getting lost in the motion of breath and body. Each pose is a quiet conversation between strength and surrender, a moving meditation that brings me back to myself.',
    variant: 'narrow',
    colorClass: 'bg-secondary-container/10',
    images: [
      {
        src: '/hobbies/yoga.jpeg',
        alt: 'A golden beach sunset with ocean waves rolling in on dark sand and a pier silhouetted against the warm orange sky',
      },
    ],
  },
  {
    id: 'walking-nature',
    icon: 'park',
    label: 'Wandering',
    title: 'Walking in Nature',
    description:
      'Following trails where the river runs and leaves dance in the wind. I lose myself in the motion of water, the rustle of branches, the way the world breathes when you slow down enough to hear it.',
    variant: 'split',
    colorClass: 'bg-primary-container/10',
    images: [
      {
        src: '/hobbies/walking-nature.jpeg',
        alt: 'A wide red clay trail winding through a tall green deciduous forest, two people walking peacefully in the distance',
      },
    ],
  },
  {
    id: 'reading',
    icon: 'menu_book',
    label: 'Stories',
    title: 'Reading',
    description: `Getting lost in someone else's world is its own kind of travel. A good book is a door, and I love disappearing through it, page by page, into lives I could never otherwise live.`,
    variant: 'narrow',
    colorClass: 'bg-white',
    images: [
      {
        src: '/hobbies/reading.jpeg',
        alt: 'An open book in warm afternoon light, a cup of tea beside it, pages soft and worn',
      },
    ],
  },
  {
    id: 'birds-animals',
    icon: 'flutter_dash',
    label: 'Wild Life',
    title: 'Bird Watching & Animals',
    description: `There is a particular stillness that comes from being patient enough for a bird to land nearby, or an animal to trust your presence. Nature's creatures remind me to be quiet, to look up, and to wonder.`,
    variant: 'narrow',
    colorClass: 'bg-surface-container-lowest',
    images: [
      {
        src: '/hobbies/bird-watching.jpg',
        alt: 'A vibrant red male cardinal perched high on the bare gnarled branches of a large tree against a bright blue winter sky',
      },
    ],
  },
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    slug: 'painting-made-with-love',
    date: 'Jul 12 2024',
    title: 'Painted with Love',
    excerpt: `I spent weeks on this little bear, every stitch of his sweater, every snowflake. Watching my nephew's face when he unwrapped it made every hour worth it.`,
    imageSrc: '/hobbies/journal-bear-gift.jpeg',
    imageAlt:
      'A watercolor painting of a cozy teddy bear in a Christmas sweater, holding a gift in a snowy winter scene',
  },
  {
    slug: 'yeast-and-patience',
    date: 'Feb 28 2025',
    title: 'Yeast and Patience',
    excerpt: `The kitchen was 74 degrees this morning. Perfect for the starter. I've realized that my best bread comes from the days when I'm not in a hurry.`,
    imageSrc: '/hobbies/journal-bread.jpeg',
    imageAlt:
      'A raw scored sourdough boule on parchment paper, pale and ready for the oven, with a clean central score and decorative leaf cuts around it',
  },
  {
    slug: 'the-language-of-a-cockatiel',
    date: 'Jun 22',
    title: 'The Language of a Cockatiel',
    excerpt:
      'He tilts his head just so, and I swear he understands everything. There is a whole vocabulary in the angle of a crest.',
    imageSrc: '/hobbies/journal-cockatiel.jpeg',
    imageAlt:
      'Fatemeh pointing a finger toward a small grey-white cockatiel perched in a wooden outdoor aviary, the bird looking back with curiosity',
  },
  {
    slug: 'piece-by-piece',
    date: 'Jan 25 2025',
    title: 'Piece by Piece',
    excerpt: `I clear my mind by doing puzzles. There is something about searching for the next piece that quiets everything else.`,
    imageSrc: '/hobbies/journal-puzzle.jpeg',
    imageAlt:
      'A partially completed jigsaw puzzle of a snowy log cabin under the northern lights, spread on a leaf-patterned tablecloth with loose pieces nearby',
  },
  {
    slug: 'joy-in-sweetness',
    date: 'Feb 15',
    title: 'Joy in Sweetness',
    excerpt: `I bake sweets to bring joy and sweetness. There is nothing quite like watching someone's face light up over a bite of something homemade.`,
    imageSrc: '/hobbies/journal-sweets.jpeg',
    imageAlt:
      'A plate of golden almond brittle arranged on a cream ceramic dish with a blue rim, resting on a patterned tablecloth',
  },
  {
    slug: 'what-the-river-taught-me',
    date: 'Jun 21',
    title: 'What the River Taught Me',
    excerpt: `Walked for two hours following the creek trail. The water doesn't hurry. It goes around, under, through — and still arrives.`,
    imageSrc: '/hobbies/journal-river.jpeg',
    imageAlt:
      'Powerful turquoise rapids rushing through a rocky gorge with grey limestone cliffs and lush green trees lining both banks under a partly cloudy sky',
  },
];
