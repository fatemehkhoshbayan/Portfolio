import type { TGallery } from '@ui/interfaces';

type TLink = {
  label: string;
  href: string;
  icon: string;
};

export type TFeature = {
  title: string;
  description: string;
  titleColor: string;
};

export type TFocus = {
  title: string;
  description: string;
  icon: string;
};

export type TProgress = {
  icon: string;
  topFeature: string[];
  title: string;
  description: string;
  progressTitle: string[];
};

export type TBuilt = {
  title: string;
  description: string;
  toolkitTags: string[];
};

export interface IProject {
  cover_img: {
    src: string;
    alt: string;
    data_alt: string;
  };
  gallery: TGallery[];
  pills: string[];
  progress: TProgress;
  built: TBuilt;
  title: string;
  description: string;
  links: Array<TLink>;
  why: {
    title: string;
    description: string;
    features: Array<TFeature>;
  };
}

export interface IBuiltCardProps {
  built: TBuilt;
}

export interface IProgressCardProps {
  progress: TProgress;
}

export interface IProjectInfoSectionProps {
  project: IProject;
}

export interface IWhyCardProps {
  reason: { title: string; description: string; features: Array<TFeature> };
}
