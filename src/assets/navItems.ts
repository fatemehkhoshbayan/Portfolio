import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Creative Life', href: '/creative-life' },
  { label: 'Impact', href: '/impact' },
];

export const footerLinks = [
  { label: 'Medium', href: 'https://medium.com/@f.khoshbayan', icon: faMedium },
  { label: 'GitHub', href: 'https://github.com/fatemehkhoshbayan', icon: faGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fatemeh-khoshbayan/', icon: faLinkedin },
  { label: 'Contact', href: 'mailto:f.khoshbayan@gmail.com', icon: faEnvelope },
];
