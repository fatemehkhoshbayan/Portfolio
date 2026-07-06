export interface JournalEntry {
  date: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
}

export interface IJournalCardProps {
  entry: JournalEntry;
}
