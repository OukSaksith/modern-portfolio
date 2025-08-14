export type Certification = {
  title: string;
  issuer: string;
  year?: string;
  description?: string;
};

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2024',
    description: 'Validated expertise in designing and deploying scalable systems on AWS.'
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google/Coursera',
    year: '2023',
    description: 'Completed foundational IT support coursework and hands-on labs.'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
    description: 'Built projects and passed tests on HTML, CSS, and responsive design.'
  }
];
export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  image?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  years: string;
  coursework: string[];
};

export const projects: Project[] = [
  {
    title: 'Modern Portfolio',
    description:
      'This site template: Next.js App Router, Tailwind, dark mode, animations, and clean architecture.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    repo: 'https://github.com/your/repo',
    href: 'https://your-portfolio.vercel.app'
  },
  {
    title: 'Realtime Chat',
    description:
      'End-to-end typed chat app with WebSockets, optimistic UI, and message persistence.',
    tags: ['Next.js', 'Prisma', 'Postgres', 'Socket.IO']
  },
  {
    title: 'Design System',
    description:
      'Themeable UI kit with tokens, components, and docs site powered by MDX.',
    tags: ['Storybook', 'Tailwind', 'MDX']
  }
];

export const experience: Experience[] = [
  {
    company: 'Acme Inc.',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    location: 'Remote',
    bullets: [
      'Led migration to Next.js App Router, reducing TTFB by 35%.',
      'Built component library and design tokens, accelerating delivery by 2x.',
      'Mentored 4 engineers on performance and accessibility best practices.'
    ]
  },
  {
    company: 'Globex',
    role: 'Full-Stack Developer',
    period: '2021 — 2023',
    location: 'Hybrid',
    bullets: [
      'Shipped multi-tenant dashboard with RBAC and audit trails.',
      'Introduced CI/CD and preview environments via Vercel and GitHub Actions.'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Royal University of Phnom Penh',
    years: '2017 - 2021',
    coursework: [
      'Data Structures',
      'Algorithms',
      'Web Development',
      'Databases'
    ]
  },
  {
    degree: 'Master of Science in Software Engineering',
    school: 'Institute of Technology of Cambodia',
    years: '2022 - 2024',
    coursework: [
      'Software Architecture',
      'Distributed Systems',
      'Cloud Computing',
      'Machine Learning'
    ]
  },
  {
    degree: 'Diploma in Web Development',
    school: 'Cambodia Academy of Digital Technology',
    years: '2016 - 2017',
    coursework: [
      'HTML & CSS',
      'JavaScript',
      'Responsive Design',
      'UI/UX Fundamentals'
    ]
  }
];

export const skills = [
  'Next.js',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'tRPC',
  'GraphQL',
  'Playwright',
  'Vitest'
];

export const featuredTags = ['Next.js', 'TypeScript', 'Tailwind'];