export const approachCards = [
  {
    title: 'Impact First',
    icon: 'lightbulb',
    desc: 'Building things that matter to real people, solving real problems. ',
  },
  {
    title: 'Editorial Mindset',
    icon: 'edit_note',
    desc: 'Treating every interface like a high-end publication: clean, readable, and focused.',
  },
  {
    title: 'Human Connection',
    icon: 'groups',
    desc: 'Code is a tool for communication between humans, not just machines. ',
  },
];

export const projects = [
  {
    title: 'Daily Quran',
    image: './extension/quran-extension.png',
    dataAlt:
      'Manifest V3 Chrome extension with a side-panel UI: Uthmani Arabic, English translation, optional tafsir, and API-backed AI Q&A.',
    tech: ['React', 'TypeScript', 'OpenAI API', 'Tailwind'],
    link: 'https://chromewebstore.google.com/detail/daily-quran/diilngbfimlnkdbabjhadnblkhfbfcge',
    cardBackgroundClass: 'bg-warm-peach',
  },
  {
    title: 'Flexify',
    image: './flexify/flexify.png',
    dataAlt:
      'Smart workout planner SPA: explore exercises by muscle and difficulty, search, favorites, and a plan builder—without a heavy subscription platform.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    link: 'https://flexify-taupe.vercel.app/',
    cardBackgroundClass: 'bg-warm-amber',
  },
];

export const stacks = ['React/Next.js', 'Python', 'TypeScript', 'Postgres', 'MongoDB'];

export interface Recommendation {
  name: string;
  title: string;
  relationship: string;
  text: string;
  linkedinUrl?: string;
}

export const RECOMMENDATIONS: Recommendation[] = [
  {
    name: 'Farshid Abdi',
    title: 'Senior Software Architect',
    relationship: 'Managed Fatemeh at Evenset',
    text: `I had the pleasure of working with Fatemeh as a Front-End Developer on our team, and I can confidently say she was one of the most reliable and detail-oriented people I’ve worked with. Beyond her strong front-end development skills, she also had a solid understanding of Python and regularly supported the backend team whenever needed. What truly distinguished her was her precision, organization, and sense of responsibility. She consistently delivered clean, maintainable work and paid close attention to even the smallest details. She is highly dependable, learns quickly, communicates professionally, and always approaches tasks with ownership and discipline. Any team would be fortunate to have someone with her technical skills, work ethic, and positive attitude. I strongly recommend her to any company looking for a talented and trustworthy software engineer.`,
    linkedinUrl: 'https://www.linkedin.com/in/farshidabdy/',
  },
  {
    name: 'Midhun Harikumar',
    title: 'Technology Architect - Engineering Manager',
    relationship: "Fatemeh's instructor at Humber Polytechnic",
    text: `I had the opportunity to mentor Fatemeh during a Web Development Fundamentals course, where she distinguished herself as one of the top performers in the class. Fatemeh consistently demonstrated a strong sense of responsibility and ownership, proactively volunteering for group tasks and ensuring all assignments were completed on time. Her ability to approach problems independently and implement solutions in their own thoughtful way reflected both confidence and solid technical understanding. Fatemeh maintained a high standard of work throughout the course and conducted themselves with professionalism. I am confident they will be a valuable asset in any full-stack development role and highly recommend them.`,
    linkedinUrl: 'https://www.linkedin.com/in/midhunhk/',
  },
  {
    name: 'Fahimeh Fooladgar',
    title: 'Senior Scientist',
    relationship: 'Worked with Fatemeh at Sokhan AI',
    text: `I had the pleasure of working with Fatemeh at Sokhan AI on training Automatic Speech Recognition (ASR) models for Farsi. She consistently brought a rare combination of technical depth, ownership, and curiosity to the team. What impressed me most was her rigor with data preparation and verification, along with how quickly she could learn and apply new technologies. Beyond her individual contributions, she was a true force multiplier, always willing to support others, improve processes, and push the project forward. Fatemeh is driven, thoughtful, dependable, and a great collaborator. Any team would be fortunate to have her.`,
    linkedinUrl: 'https://www.linkedin.com/in/fahimeh-fooladgar/',
  },
  {
    name: 'Sadaf Mozafari',
    title: 'Full Stack Developer',
    relationship: 'Peer collaborator at Sokhan AI',
    text: `Fatemeh is a reliable and capable professional with a strong sense of ownership and clear communication. She collaborates well with others and adapts quickly to new challenges. She is also a strong self-learner who continuously grows her skills and takes initiative in learning new technologies. I’d happily recommend Fatemeh to any team looking for a dependable and motivated professional.`,
    linkedinUrl: 'https://www.linkedin.com/in/sadaf-mozaffari/',
  },
];
