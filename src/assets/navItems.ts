import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeadset } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type FooterLink = {
  label: string;
  href: string;
  icon: IconDefinition;
  internal?: boolean;
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Creative Life', href: '/creative-life' },
  { label: 'Impact', href: '/impact' },
];

export const footerLinks: FooterLink[] = [
  { label: 'Support', href: '/support', icon: faHeadset, internal: true },
  { label: 'Medium', href: 'https://medium.com/@f.khoshbayan', icon: faMedium },
  { label: 'GitHub', href: 'https://github.com/fatemehkhoshbayan', icon: faGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fatemeh-khoshbayan/', icon: faLinkedin },
  { label: 'Contact', href: 'mailto:f.khoshbayan@gmail.com', icon: faEnvelope },
];
