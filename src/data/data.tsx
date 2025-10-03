import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/nadia-valko-0QIO4MjMquo-unsplash.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Qianyong (Harry) Zhang - Portfolio',
  description: "Computer Science student at Brandeis University with experience in AI development and full-stack engineering",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Qianyong (Harry) Zhang.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Computer Science Student</strong> at
        <strong className="text-stone-100"> Brandeis University</strong> with expertise in AI development,
        full-stack engineering, and data analysis. I have hands-on experience building intelligent systems
        and scalable applications.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Qianyong (Harry) Zhang Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a Computer Science student passionate about AI development, full-stack engineering, and data analysis. 
  I specialize in building intelligent systems with LangChain and OpenAI, developing scalable web applications 
  with modern frameworks, and creating data-driven solutions. My experience spans from emotion-aware AI agents 
  to enterprise inventory systems, always focusing on performance optimization and user experience.`,
  aboutItems: [
    { label: 'Location', text: 'Boston, MA', Icon: MapIcon },
    { label: 'Age', text: '21', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Chinese', Icon: FlagIcon },
    { label: 'Interests', text: 'Music, Tennis, Coding', Icon: SparklesIcon },
    { label: 'Study', text: 'Brandeis University', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'R',
        level: 5,
      },
      {
        name: 'SQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Vue.js',
        level: 6,
      },
      {
        name: 'React Native',
        level: 8,
      },
      {
        name: 'Material UI',
        level: 8,
      },
      {
        name: 'D3.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend & AI Development',
    skills: [
      {
        name: 'FastAPI',
        level: 9,
      },
      {
        name: 'Spring Boot',
        level: 7,
      },
      {
        name: 'Litestar',
        level: 9,
      },
      {
        name: 'LangChain',
        level: 7,
      },
      {
        name: 'OpenAI API',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Spring Boot-Vue.js Video Streaming Platform',
    description: 'Full-stack video streaming platform with microservice architecture, supporting thousands of concurrent users, featuring video uploading, live comments, and real-time statistics.',
    url: '#', // Add your repository link here
    image: porfolioImage1,
  },
  {
    title: 'AI Calendar with Intelligent Task Management',
    description: 'Intelligent to-do list application using Litestar and React Native, integrating OpenAI API for smart task scheduling and prioritization with behavioral analysis.',
    url: '#', // Add your repository link here
    image: porfolioImage2,
  },
  {
    title: 'US Housing Affordability Analysis',
    description: 'Interactive visualization tool examining housing affordability trends across urban, suburban, and rural areas using D3.js with choropleth maps and scatterplots.',
    url: '#', // Add your repository link here
    image: porfolioImage3,
  },
  {
    title: 'Emotion-Aware AI Agent (INNOVA AI TECH)',
    description: 'Full-stack AI agent with RAG system using LangChain, FAISS, and ChromaDB for real-time search and workflow automation with Google Workspace integration.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Inventory Analytics System (Schneider Electric)',
    description: 'Web-based inventory analytics system using FastAPI and React, increasing operational efficiency by 50% with real-time procurement analytics.',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'FastAPI + React Enterprise System',
    description: 'Robust backend system with SQLAlchemy, Pandas optimization, JWT authentication, and RESTful APIs for inventory management and data visualization.',
    url: '#',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2023 – Present',
    location: 'Brandeis University, Waltham, MA',
    title: 'B.Sc. in Computer Science',
    content: <p>Major in Computer Science with a GPA of 3.67/4.0. Focused on data analysis, AI development, web development, and software engineering principles. Active in projects involving machine learning, full-stack development, and data visualization.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jun 2025 - Aug 2025',
    location: 'INNOVA AI TECH LLC, San Francisco, CA',
    title: 'Software Developer Intern',
    content: (
      <p>
        Developed a full-stack, emotion-aware AI agent for Real-Time Search and Workflow Automation using LangChain,
        featuring a sophisticated RAG system with FAISS and ChromaDB vector stores. Automated enterprise workflows
        through Google Workspace integration and built a modular, containerized system with Docker, JWT Authentication,
        and AES encryption for secure, extensible applications.
      </p>
    ),
  },
  {
    date: 'Jan 2025 - May 2025',
    location: 'Schneider Electric, Remote, China',
    title: 'Software Development Engineer Intern',
    content: (
      <p>
        Increased operational efficiency by 50% through development of a web-based inventory analytics system using
        FastAPI and React. Optimized backend data handling with SQLAlchemy and Pandas, designed RESTful APIs for
        user authentication and inventory management, and enabled real-time analytics for procurement decisions
        through seamless frontend-backend integration.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you have any questions about my work or would like to discuss potential opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'harry.wadu233@gmail.com',
      href: 'mailto:harry.wadu233@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Boston, MA',
      href: 'https://www.google.com/maps/place/Boston,+MA',
    },
    {
      type: ContactType.Github,
      text: 'Harrrryz',
      href: 'https://github.com/Harrrryz',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/Harrrryz' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/qianyong-harry-zhang/' }, // Add your LinkedIn URL here
];
