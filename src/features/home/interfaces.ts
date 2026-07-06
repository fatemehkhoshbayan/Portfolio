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
  rec: Recommendation;
  className?: string;
}

export interface IProjectCardProps {
  projects: IProject[];
}
