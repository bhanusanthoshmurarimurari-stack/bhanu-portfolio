import { PersonalInfo, SkillCategory, ProjectItem, EducationItem, PhilosophyPillar } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Bhanu Santhosh Murari',
  title: 'Full Stack Developer',
  email: 'muraribhanusanthosh@gmail.com',
  availability: 'Available for New Opportunities',
  statusText: 'Open to Full Stack Roles & Collaborations',
  github: 'https://github.com/bhanusanthoshmurari-stack',
  linkedin: 'https://www.linkedin.com/in/bhanu-santhosh-murari-251934368/',
  headline: 'Building Digital Experiences That Make an Impact.',
  heroIntro: "Hi, I'm Bhanu Santhosh Murari, a Full Stack Developer passionate about creating modern, scalable, and meaningful digital experiences.",
  aboutIntro: "I'm Bhanu Santhosh Murari, a Full Stack Developer interested in building intuitive, scalable, and impactful web applications. I enjoy transforming ideas into functional digital products by combining creative problem-solving with modern development technologies."
};

export const philosophyPillars: PhilosophyPillar[] = [
  {
    title: 'Code as Craft',
    principle: 'Clean, Maintainable Architecture',
    description: 'Writing readable, modular, and self-documenting code. Focusing on structural clarity and sustainable codebase scaling.'
  },
  {
    title: 'User-Centric Architecture',
    principle: 'Intuitive & Accessible Interfaces',
    description: 'Bridging technical back-end logic with tactile, responsive front-end execution. Every interaction serves a clear purpose.'
  },
  {
    title: 'Modern Scalability',
    principle: 'Robust Full-Stack Foundations',
    description: 'Constructing performant REST APIs, reliable databases, and state-driven interfaces optimized for speed and reliability.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Crafting responsive, performant user interfaces with modern client-side standards.',
    skills: [
      { name: 'HTML5', category: 'Frontend', highlight: true },
      { name: 'CSS3', category: 'Frontend', highlight: true },
      { name: 'JavaScript', category: 'Frontend', highlight: true },
      { name: 'React.js', category: 'Frontend', highlight: true },
      { name: 'Responsive Web Design', category: 'Frontend', highlight: true }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Building server-side logic, routing architectures, and reliable API services.',
    skills: [
      { name: 'Node.js', category: 'Backend', highlight: true },
      { name: 'Express.js', category: 'Backend', highlight: true },
      { name: 'REST APIs', category: 'Backend', highlight: true }
    ]
  },
  {
    id: 'database',
    title: 'Database & Storage',
    description: 'Modeling data structures, queries, and document stores.',
    skills: [
      { name: 'MongoDB', category: 'Database', highlight: true },
      { name: 'SQL', category: 'Database', highlight: true }
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Logic',
    description: 'Core computational fundamentals and algorithmic problem-solving.',
    skills: [
      { name: 'JavaScript (ES6+)', category: 'Programming', highlight: true },
      { name: '+ Add Languages When Confirmed', category: 'Programming', highlight: false }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    description: 'Version control, development environments, and workflow orchestration.',
    skills: [
      { name: 'Git', category: 'Tools', highlight: true },
      { name: 'GitHub', category: 'Tools', highlight: true },
      { name: 'VS Code', category: 'Tools', highlight: true }
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'project-fullstack-core',
    title: 'Full Stack Web Application',
    category: 'Full Stack Architecture',
    summary: 'A complete end-to-end web system connecting a modern React client with an Express REST API and database persistence.',
    description: 'Designed as a production-grade full stack system highlighting structured component hierarchy, asynchronous state synchronization, secure API route handlers, and modular database schemas. Built with an emphasis on clean architecture and predictable data flow.',
    architectureHighlights: [
      'Asymmetrical component layout with responsive breakpoints',
      'RESTful endpoints handling structured CRUD operations',
      'Database connection pooling with MongoDB / SQL',
      'Centralized error boundary & form validation logic'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3'],
    isPlaceholder: true,
    githubUrl: 'https://github.com/bhanusanthoshmurari-stack',
    liveUrl: 'https://github.com/bhanusanthoshmurari-stack',
    featured: true,
    accentColor: '#C5A46D',
    mockupType: 'browser'
  },
  {
    id: 'project-interactive-client',
    title: 'Responsive Web Experience',
    category: 'Frontend Engineering',
    summary: 'A high-performance responsive web interface with micro-interactions, smooth state handling, and accessible UI patterns.',
    description: 'An interactive client-side web application built with modern JavaScript and React. Features dynamic view rendering, modular styling with clean tokens, fluid typography, and optimized asset loading across mobile and desktop viewports.',
    architectureHighlights: [
      'Fluid mobile-first responsive layout',
      'Reusable interactive UI component system',
      'Smooth client-side routing & micro-animations',
      'Accessible semantic HTML markup'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    isPlaceholder: true,
    githubUrl: 'https://github.com/bhanusanthoshmurari-stack',
    liveUrl: 'https://github.com/bhanusanthoshmurari-stack',
    featured: true,
    accentColor: '#17233B',
    mockupType: 'code'
  },
  {
    id: 'project-api-service',
    title: 'RESTful API & Database Architecture',
    category: 'Backend & Data Systems',
    summary: 'A robust Node.js and Express backend service with structured endpoints, data validation, and query optimization.',
    description: 'Server-side application focusing on scalable API endpoints, clean controller-service-model separation, request payload sanitization, and structured relational / document database queries.',
    architectureHighlights: [
      'Modular route & controller architecture',
      'Schema modeling with query optimization',
      'Standardized JSON response envelope formatting',
      'Environment variable management & security headers'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs', 'Git'],
    isPlaceholder: true,
    githubUrl: 'https://github.com/bhanusanthoshmurari-stack',
    liveUrl: 'https://github.com/bhanusanthoshmurari-stack',
    featured: false,
    accentColor: '#C5A46D',
    mockupType: 'dashboard'
  }
];

export const educationData: EducationItem[] = [
  {
    institution: 'Narayana College',
    year: '2025',
    description: 'Focused on higher secondary studies with strong emphasis on mathematical logic, computational foundations, and scientific principles.',
    highlights: [
      'Rigorous analytical problem-solving training',
      'Active exploration of computer programming fundamentals',
      'Completed in 2025'
    ],
    isRecent: true
  },
  {
    institution: 'Sri Chaitanya School',
    year: '2023',
    description: 'Foundational secondary school education establishing academic discipline, mathematics, science, and early technical curiosity.',
    highlights: [
      'Core foundation in mathematics and logic',
      'Early engagement with technology and digital systems',
      'Graduated in 2023'
    ],
    isRecent: false
  }
];
