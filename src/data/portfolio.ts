import {type PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Kipngetich Brian',
    title: 'Frontend Developer',
    brandName: 'Kipngetich.dev',
    location: 'Remote',
    avatar: 'bg-gradient-to-br from-blue-500 to-purple-600',
    profileImage: 'bg-gradient-to-br from-blue-500 to-purple-600',
    hobbies: [
      'Web Development',
      'UI/UX Design',
      'Open Source Contribution',
      'Photography',
      'Hiking',
      'Reading Tech Blogs'
    ]
  },

  hero: {
    greeting: `Hi, I’m Kipngetich Brian — I build clean, fast web experiences.`,
    ctaButtons: [
      {
        text: 'View Projects',
        target: 'projects',
        primary: true
      },
      {
        text: 'Contact Me',
        target: 'contact'
      }
    ]
  },

  about: {
    title: 'About Me',
    paragraphs: [
      'I’m a frontend developer focused on building accessible and performant web applications.',
      'I enjoy working with modern JavaScript frameworks and turning designs into polished user experiences.'
    ],
    highlights: [
      '3+ years of experience',
      'Strong focus on UX',
      'Clean, maintainable code'
    ]
  },

  skills: {
    title: 'Skills',
    categories: [
      {
        name: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
      },
      {
        name: 'Backend',
        items: ['Node.js', 'MYSQL', 'REST APIs', 'Python']
      },
      {
        name: 'Tools',
        items: ['Git', 'Vite', 'Figma', 'Firebase']
      }
    ]
  },

    projects: {
      title: 'Projects',
      items: [
        {
          title: 'Portfolio Website',
          description:
            'A personal portfolio built with React and Tailwind CSS.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS'],
          category: 'web',
          gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
          links: {
            github: 'https://github.com/kipngetich204/portfolio',
            demo: 'https://kipngetichportfolio.web.app'
          }
        },
        {
          title: 'Task Manager App',
          description:
            'A simple task management app with authentication and CRUD features.',
          technologies: ['React', 'Node.js', 'Express'],
          category: 'web',
          gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
          links: {
            github: 'https://github.com/username/task-manager'
          }
        },
        {
          title: 'LiveTips – Football Predictions',
          description:
            'A football predictions platform providing match insights and tips powered by a Python-based backend.',
          technologies: ['React', 'TypeScript', 'Python', 'AI'],
          category: 'web',
          gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
          links: {
            demo: 'https://footballpredict-26f20.web.app/'
          }
        }
      ]
    },

  contact: {
    title: 'Get In Touch',
    description:
      'Have a question or want to work together? Send me a message.',
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: true
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        rows: 5,
        required: true
      }
    ],
    submitLabel: 'Send Message'
  },

  social: [
    {
      platform: 'github',
      url: 'https://github.com/kipngetich204'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/kipngetich-brian'
    },
    {
      platform: 'email',
      url: 'mailto:kipngetichbrian204@gmail.com'
    }
  ],

  footer: {
    copyright: '© 2025 Kipngetich Brian. All rights reserved.'
  },
  stats: {
    visitors: 0,
    contacts: 0
  }
};

export default portfolioData;
