export interface HobbyData {
  id: string;
  icon: string;
  label: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  variant: 'wide' | 'narrow' | 'split';
  colorClass?: string;
}

interface IHobbyImage {
  src: string;
  alt: string;
}

export interface IHobbyCardProps {
  icon: string;
  label: string;
  title: string;
  description: string;
  images: IHobbyImage[];
  /**
   * wide   — default 8-col span, 2-image grid
   * narrow — default 4-col span, single image below text
   * split  — default 8-col span, text left + image right
   */
  variant: 'wide' | 'narrow' | 'split';
  colorClass?: string;
  /** Override the md:col-span-* class applied to the card root */
  colSpanClass?: string;
}
