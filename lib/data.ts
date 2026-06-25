import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'e.faras12@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Eslam, I am reaching out to you because I am looking for a project that requires your skills.',

};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/eslam120349' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/eslam-saeid-9a8458295' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
  {
    title: 'Mashros AI',
    slug: 'mashros-ai',
    liveUrl: 'https://mashros.vercel.app/',
    year: 2026,
    description: `
      AI-powered platform for generating lessons, educational content, and teaching materials automatically.
    `,
    role: `
      Frontend & AI Developer
      Built UI and integrated AI APIs for automatic lesson generation.
    `,
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'OpenAI API',
    ],
    thumbnail: '/projects/thumbnail/mashros.jpg',
    longThumbnail: '/projects/long/mashros.jpg',
    images: [
      '/projects/long/mashros.jpg',        
      '/projects/images/mashros-1.jpg',
      '/projects/images/mashros-2.jpg',

    ],
  },

];


export const MY_EXPERIENCE = [
   {
        title: 'Frontend Developer',
        company: 'Freelance',
        duration: 'Jan 2025 - Present',
    },
    {
        title: 'Web Developer',
        company: 'Personal Projects',
        duration: 'Jun 2024 - Dec 2024',
    },
    {
        title: 'UI Developer',
        company: 'Educational Projects',
        duration: 'Jan 2024 - May 2024',
    },
    {
        title: 'Junior Frontend Developer',
        company: 'Self-Learning & Practice',
        duration: 'Jul 2023 - Dec 2023',
    },
];
