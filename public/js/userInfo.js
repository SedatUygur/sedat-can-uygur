import {
  faGithub,
  faSquareXTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const userInfo = {
  name: 'Sedat Can Uygur',
  about: {
    title: 'About Me',
    description:
      'Hi I am Sedat Can Uygur. I’ve been a full-stack engineer for over 8 years, working with a variety of technologies, including C#, Java, Python, JavaScript, and TypeScript. I started my career focusing on back-end systems, especially in .NET, but over time I expanded to front-end frameworks like Angular and React. In my recent roles, I’ve worked on projects for global brands such as Under Armour and SSS, where I developed scalable microservices and integrated multiple APIs. For the past couple of years, I’ve also gained experience with cloud platforms—AWS and Azure—using Docker and Kubernetes to containerize and orchestrate microservices. This experience feels highly relevant on cloud-native applications and modern architectures.',
    resume:
      'https://drive.google.com/file/d/1Dv3THOjyz7-zV9br9arOeyltCt_3Rvng/view?usp=sharing',
  },
  blogs: { visible: true },
  contact: {
    email: {
      htmlFor: 'email',
      label: 'Email Address',
      placeholder: 'sedat.uygur@outlook.com',
    },
    message: {
      htmlFor: 'message',
      label: 'Message',
      placeholder: 'Type your message',
    },
    name: {
      htmlFor: 'name',
      label: 'Full Name',
      placeholder: 'Full Name',
    },
    phone: {
      countryCode: '+90',
      htmlFor: 'phone',
      label: 'Phone',
      placeholder: '(545) 825-7262',
    },
    submit: 'Submit',
  },
  education: {
    about: 'About Me',
    schools: [
      {
        time: '2010 - 2015',
        department: 'Computer Engineering',
        name: 'Muğla Sıtkı Koçman University',
        grade: '2.76 / 4',
      },
      {
        time: '2006 - 2010',
        department: 'Science',
        name: 'Ortaklar Science High School',
        grade: '86.02 / 100',
      },
    ],
    title: 'Education',
    visible: true,
  },
  experience: {
    visible: true,
    items: [
      {
        company: 'Freelance',
        companylogo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGjq6nmQlFz3lVCY6Rshn2fsHEHPGe5331w&usqp=CAU',
        position: 'Senior Software Engineer',
        time: '09/2023 - Present',
        description:
          'Architect and develop full stack solutions with an emphasis on scalable microservices and resilient design. Implement fault‑tolerant and performance optimizations using patterns like circuit breakers and redundancy. Leverage cloud platforms (AWS, Google Cloud) and containerization (Docker, Kubernetes) to streamline deployments.',
      },
      {
        company: 'feature/mind',
        companylogo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGjq6nmQlFz3lVCY6Rshn2fsHEHPGe5331w&usqp=CAU',
        position: 'Senior Software Engineer',
        time: '10/2021 - 06/2023',
        description:
          'Led design, development and integration of Salesforce-based solutions on Commerce Cloud and Service Cloud. Developed end‑to‑end projects using Lightning, APEX and Salesforce Flows. Streamlined data migration processes and implemented rigorous testing and documentation practices.',
      },
      {
        company: 'Vodafone',
        companylogo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGjq6nmQlFz3lVCY6Rshn2fsHEHPGe5331w&usqp=CAU',
        position: 'Senior Software Engineer',
        time: '03/2020 - 09/2021',
        description:
          'Designed and implemented ticket management and web service projects using SOAP and REST APIs. Designed scalable and service‑oriented architectures to support large‑scale IT operations and enterprise workflows.',
      },
      {
        company: 'Kuzey Pharma',
        companylogo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGjq6nmQlFz3lVCY6Rshn2fsHEHPGe5331w&usqp=CAU',
        position: 'Software Engineer',
        time: '03/2017 - 02/2020',
        description:
          'Designed and developed an ERP project using Java technologies, ensuring robust business process automation. Created and managed databases with T-SQL and PL/SQL to maintain data integrity and performance.',
      },
    ],
  },
  footer: {
    copyright: 'All rights reserved. Developed by Sedat Can Uygur',
    quicklinks: {
      heading: 'Pages',
      title: 'Quick Links',
      home: {
        label: 'Home',
        href: '/',
      },
      about: {
        label: 'About',
        href: '/about',
      },
      projects: {
        label: 'Projects',
        href: '/projects',
      },
      blog: {
        label: 'Blog',
        href: '/blog',
      },
      contact: {
        label: 'Contact',
        href: '/contact',
      },
    },
    socialmedia: {
      heading: 'Socials',
      title: 'Follow Me',
      mail: 'Mail',
      github: {
        label: 'Github',
        href: 'https://github.com/SedatUygur',
      },
      linkedin: {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sedat-can-uygur',
      },
      twitter: {
        label: 'Twitter',
        href: 'https://x.com/_SedatUygur',
      },
    },
  },
  home: {
    title: 'Hey there, I am Sedat Can.',
    subtitle:
      'Innovative and results-driven Senior Software Engineer with over 8 years of experience in full‑stack development, software architecture. Expert at designing and implementing resilient, scalable systems using microservices, cloud technologies and modern DevOps practices.',
  },
  socials: [
    {
      label: 'Github',
      href: 'https://github.com/SedatUygur',
      icon: faGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sedat-can-uygur',
      icon: faLinkedin,
    },
    {
      label: 'Twitter',
      href: 'https://x.com/_SedatUygur',
      icon: faSquareXTwitter,
    },
  ],
  skills: {
    contact: {
      label: 'Get in touch',
      href: '/contact',
    },
    title: 'Skills',
    capabilities: [
      {
        category: 'Frameworks',
        items: [
          'Node.js',
          'React',
          'Next.js',
          'jQuery',
          'Express',
          'ASP.NET Core',
          'Spring Boot',
          'Django',
          'FastAPI',
        ],
      },
      {
        category: 'Languages',
        items: ['Python', 'C#', 'Java', 'JavaScript', 'TypeScript', 'HTML5', 'SQL'],
      },
      {
        category: 'Database',
        items: [
          'PostgreSQL',
          'MySQL',
          'SQLite',
          'MS SQL',
          'MongoDB',
          'Redis',
          'Elasticsearch',
        ],
      },
      {
        category: 'Other',
        items: [
          'AWS',
          'NumPy, Pandas',
          'CSS3',
          'Docker',
          'Git',
          'npm, Pip',
          'T-SQL, NoSQL',
          'Salesforce',
          'Agile, SCRUM',
          'Jira',
          'Linux',
        ],
      },
    ],
  },
};

export const headings = {
  about: 'About Me',
  blogs: 'My favorite blogs on Medium',
  contact: 'Contact Me',
  education: 'Education',
  experience: 'Experiences',
  skills: 'Skills',
  workHomePage: 'Projects',
};

export const ctaTexts = {
  capabCTA: 'Get in Touch',
  educationCTA: 'About Me',
  landingCTA: 'My projects',
  resumeCTA: 'Resume',
  submitBTN: 'Submit',
  workCTA: 'View All',
};
