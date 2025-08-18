export const siteConfig = {
  name: process.env['NEXT_PUBLIC_SITE_NAME'] || 'Ouk Saksith',
  role: process.env['NEXT_PUBLIC_SITE_ROLE'] || 'Full-Stack Developer',
  location: process.env['NEXT_PUBLIC_SITE_LOCATION'] || 'Phnom Penh, Cambodia',
  email: process.env['NEXT_PUBLIC_SITE_EMAIL'] || 'you@example.com',
  summary:
    process.env['NEXT_PUBLIC_SITE_SUMMARY'] || 'I craft fast, accessible, and delightful web experiences with Next.js, TypeScript, and modern tooling.',
  url: process.env['NEXT_PUBLIC_SITE_URL'] || 'https://your-domain.com',
  socials: {
    github: 'https://github.com/OukSaksith',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    twitter: 'https://x.com/your-handle',
  website: process.env['NEXT_PUBLIC_SITE_URL'] || 'https://your-domain.com'
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