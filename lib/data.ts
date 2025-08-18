export type Certification = {
  title: string;
  issuer: string;
  year?: string;
  description?: string;
};

export const certifications: Certification[] = [
  {
    title: 'NestJS Zero to Hero - Modern TypeScript Back-end Development',
    issuer: 'Udemy',
    year: '2025',
    description: 'Completed training on NestJS, focusing on modern TypeScript back-end development practices.'
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services Training and Certification',
    year: '2025',
    description: 'Completed training on cloud architecting using AWS services.'
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Operations',
    issuer: 'Amazon Web Services Training and Certification',
    year: '2025',
    description: 'Completed training on cloud operations using AWS services.'
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Security Foundations',
    issuer: 'Amazon Web Services Training and Certification',
    year: '2025',
    description: 'Completed training on cloud security foundations using AWS services.'
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services Training and Certification',
    year: '2025',
    description: 'Completed training on cloud foundations using AWS services.'
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
    issuer: 'Amazon Web Services Training and Certification',
    year: '2025',
    description: 'Completed training on machine learning foundations using AWS services.'
  },
  {
    title: 'DevOps Engineering',
    issuer: 'Center of Science and Technology Advanced Development',
    year: '2024',
    description: 'Completed DevOps training covering CI/CD, containerization, and cloud deployment.'
  },
  {
    title: 'React 18: Intermediate Topics',
    issuer: 'Udemy',
    year: '2024',
    description: 'Completed training on React 18, focusing on intermediate concepts and best practices.'
  },
  {
    title: 'Building web APIs with Rust (Advanced)',
    issuer: 'Udemy',
    year: '2024',
    description: 'Completed training on building web APIs using Rust, focusing on best practices and practical implementation.'
  },
  {
    title: 'Building web APIs with Rust (beginners)',
    issuer: 'Udemy',
    year: '2023',
    description: 'Completed training on building web APIs using Rust, focusing on best practices and practical implementation.'
  },
  {
    title: 'Web Design',
    issuer: 'Korea Software HRD Center',
    year: '2020',
    description: 'Completed web design training with a focus on user experience and responsive design.'
  },
  {
    title: 'Android Development',
    issuer: 'Korea Software HRD Center',
    year: '2020',
    description: 'Completed Android development training with a focus on mobile app development and best practices.'
  },
  {
    title: 'Pedagogy',
    issuer: 'STUDENT RESOURCES DEVELOPMENT ORGANIZATIONSTUDENT',
    year: '2015',
    description: 'Completed Pedagogy training with a focus on teaching methods and educational psychology.'
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
  logo?: string; // Optional logo for the company
};

export type Education = {
  degree: string;
  school: string;
  years: string;
  coursework: string[];
  logo?: string;
};

export const projects: Project[] = [
  {
    title: 'Modern Portfolio',
    description:
      'This site template: Next.js App Router, Tailwind, dark mode, animations, and clean architecture.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    repo: 'https://github.com/OukSaksith/modern-portfolio.git',
    href: ''
  },
  {
    title: 'Ocelot Microservice',
    description:
      'A microservice for managing classroom hub using ASP.Net Web API, Blazor, Ocelot, SQL Server, and Docker.',
    tags: ['Asp.Net', 'Blazor', 'SQL Server', 'Ocelot', 'Docker'],
     repo: 'https://github.com/OukSaksith/OcelotMicroservice.git',
    href: ''
  },
];

export const experience: Experience[] = [
  {
    company: 'IBANK Cambodia',
    role: 'Backend and API Developer',
    period: 'Aug 2025 — Current',
    location: 'On-site',
    bullets: [
      ' Joint develops and implementation related system, backend system development, and API for mobile application.',
      ' Work with IT and related stack-holder to test new enchantment and new product to ensure products has been completed and deployed to production successfully',
      ' Executed the checklists and report the task progress to supervisor',
      ' Support the users including the procedural documentation and relevant reports related system',
      ' Provide the training if the related system has been implemented',
      ' Report the task/project progress to supervisor',
      ' Any related tasks may assign by supervisor or management from time to time.'
    ]
  },
  {
    company: 'BICBank Cambodia',
    role: 'Backend and API Developer',
    period: 'Jul 2022 — Aug 2025',
    location: 'On-site',
    bullets: [
      ' Joint develops and implementation related system, backend system development, and API for mobile application.',
      ' Work with IT and related stack-holder to test new enchantment and new product to ensure products has been completed and deployed to production successfully',
      ' Executed the checklists and report the task progress to supervisor',
      ' Support the users including the procedural documentation and relevant reports related system',
      ' Provide the training if the related system has been implemented',
      ' Report the task/project progress to supervisor',
      ' Any related tasks may assign by supervisor or management from time to time.'
    ]
  },
  {
    company: 'TURBOTECH',
    role: 'Backend Developer',
    period: 'Dec 2021 — Jul 2022',
    location: 'On-site',
    bullets: [
      ' Doing back-end development to build, to maintain, restful API, web application integrity.',
      ' Used Google Maps API to produce the application related mapping.',
      ' Validated third-party code to comply with internal standards and technical requirements.',
      ' Discussed site and app requirements with clients to produce actionable development plans.',
      ' Provide the training if the related system has been implemented',
      ' Report the task/project progress to supervisor',
      ' Any related tasks may assign by supervisor or management from time to time.'
    ]
  },
  {
    company: 'TURBOTECH',
    role: 'Web Developer',
    period: 'May 2021 — Dec 2021',
    location: 'On-site',
    bullets: [
      ' Doing back-end development to build, to maintain, restful API, web application integrity.',
      ' Used Google Maps API to produce the application related mapping.',
      ' Validated third-party code to comply with internal standards and technical requirements.',
      ' Discussed site and app requirements with clients to produce actionable development plans.',
      ' Provide the training if the related system has been implemented',
      ' Report the task/project progress to supervisor',
      ' Any related tasks may assign by supervisor or management from time to time.'
    ]
  },
  {
    company: 'ABA Bank',
    role: 'Epayment Support Officer',
    period: 'May 2020 — Mar 2021',
    location: 'On-site',
    bullets: [
      ' Conduct end-to-end user testing (SIT, UAT, etc....) on new and modified E-Payment systems to identify improvement points and ensure smooth system for internal stakeholders before its launching for operations.',
      ' Work closely with related teams (card system, digital, IT) to conduct testing and follow up on further improvements of the systems after testing and feedback are delivered.',
      ' Draft and prepare confirmation on test case and its report to serve as references for further processing.',
      ' Check and troubleshoot issues and logging in E-Payment.',
      ' Department to facilitate smooth system operations.',
      ' Process daily incoming and outgoing files to external payment schemes (MC/VS/UPI) to manage correct recordings of these products.',
      ' Keep tracking on daily report and escalate critical issues to line manager or relevant stakeholders for a timely and proper solution to ensure the assigned projects are achieved within the timeline and scope.',
      ' Handle tasks assigned by Line Manager.'
    ]
  }
];


export const education: Education[] = [
  {
    degree: 'Master of Information Technology',
    school: 'SETEC Institute',
    years: '2024 - Current',
    coursework: [
      'Human Resource Managment',
      'Business Statistics',
      'Research Methodology',
      'Relational Database Management System',
      'Advance Database Administration',
      'Software Project Management',
      'Web Application Development',
      'Java Programming with Oracle',
      'Project on Dot Framework',
      'Network Security',
      'Advance Network Security',
      'Open Source Mobile Application',
      'IOS Mobile Application',
      'Linux Administration',
      'Advance Linux Administration'
    ],
    logo: '/images/setec-logo.png'
  },
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    school: 'Royal University of Phnom Penh',
    years: '2017 - 2021',
    coursework: [
      'Web Application Development.',
      'Java Programming.',
      '.NET Programming.',
      'Management Information Systems (MIS)',
      'Linux System Administration',
      'IT Project Management',
      'Object-Oriented Analysis, Design and Programming',
      'Software Engineering',
      'Computer Network',
      'Information System Analysis and Design',
      'Statistics Analysis',
      'Robotics',
      'Data Structures and Algorithms',
      'Database Systems',
      'C++ Programming Language',
      'Computer Architectures',
      'Data Communications',
      'English Language',
      'English for Computing',
      'Advanced C Programming Language',
      'Electronics',
      'Khmer History and Khmer Civilization',
      'Mathematics and Math Lab',
      'Fundamental Computer Concepts'
    ],
    logo: '/images/rupp-logo.png'
  }
];

export const skills = [
  'Spring Boot',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'NestJS',
  'PostgreSQL',
  'JasperReports',
  'SQL Server',
  'MySQL',
  'Bootstrap',
  'Next.js',
  'DevOps',
  'Laravel',
  'PHP'
];

export const featuredTags = ['Spring Boot', 'Next.js', 'TypeScript', 'Tailwind'];