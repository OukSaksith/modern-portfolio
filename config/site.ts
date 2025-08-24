export const siteConfig = {
  name: 'OUK Saksith',
  role: 'Backend Developer',
  secRole: 'DevOps Engineering',
  location: 'Phnom Penh, Cambodia',
  email: 'ouksaksith11@gmail.com',
  phone: '+855 92 984 470',
  summary: 'Creating efficient, robust, and seamless backend experiences using Spring Boot, TypeScript, and DevOps tools.',
  url: 'https://ouksaksith-portfolio.vercel.app',
  socials: {
    github: 'https://github.com/OukSaksith/',
    linkedin: 'https://www.linkedin.com/in/ouksaksith-software-developer/',
    twitter: 'https://x.com/your-handle',
    website: 'https://ouksaksith-portfolio.vercel.app'
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
    { label: 'Education', href: '#education' },
    { label: 'Certification', href: '#certified' },
  ]
};

export type SiteConfig = typeof siteConfig;