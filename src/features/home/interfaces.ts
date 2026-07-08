import type { Recommendation } from './constants';

export interface IProject {
  title: string;
  image: string;
  dataAlt: string;
  tech: string[];
  link: string;
  cardBackgroundClass?: string;
}

export interface IRecommendationCardItemProps {
  recommendation: Recommendation;
  className?: string;
}

export interface IProjectCardProps {
  projects: IProject[];
}

export interface IRecommendationDialogProps {
  recommendation: Recommendation;
  open: boolean;
  onClose: () => void;
}
