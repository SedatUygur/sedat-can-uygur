// import project demo images as follows.
import PROJECT1_1 from '../images/projects/Project1_1.png';
import PROJECT1_2 from '../images/projects/Project1_2.png';
import PROJECT1_3 from '../images/projects/Project1_3.png';
import PROJECT2_1 from '../images/projects/Project2_1.png';
import PROJECT2_2 from '../images/projects/Project2_2.png';
import PROJECT2_3 from '../images/projects/Project2_3.png';
import PROJECT3_1 from '../images/projects/Project3_1.png';
import PROJECT3_2 from '../images/projects/Project3_2.png';
import PROJECT3_3 from '../images/projects/Project3_3.png';
import PROJECT4_1 from '../images/projects/Project4_1.jpg';
import PROJECT4_2 from '../images/projects/Project4_2.jpg';
import PROJECT4_3 from '../images/projects/Project4_3.jpg';
import PROJECT5_1 from '../images/projects/Project5_1.png';
import PROJECT5_2 from '../images/projects/Project5_2.png';
import PROJECT5_3 from '../images/projects/Project5_3.png';
import PROJECT6_1 from '../images/projects/Project6_1.png';
import PROJECT6_2 from '../images/projects/Project6_2.png';
import PROJECT6_3 from '../images/projects/Project6_3.png';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    id: 1,
    name: 'Saklı Orman', //project name
    description:
      "Türkiye's Most Delicious Mushrooms from the Forests of Our Country, with the Labor of Our Villagers", //project description
    githubLink: '', //github repo link
    projectLink: 'https://www.sakliorman.com/', //deployed project link
    tech: ['ASP.NET 4.0', 'Bootstrap', 'jQuery', 'Modernizr', 'slick'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photos: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
  },
  {
    id: 2,
    name: 'Sun & Sand Sports',
    description:
      'Sun & Sand Sports has hit a number of milestones to achieve the status of leading sports retailer in the Middle East. Launching its first sports store in Al Ghurair, it is through a passion for sports and fitness that SSS will motivate you to step up your game with the world’s best high-performance and stylish sportswear and accessories brands.',
    githubLink: '',
    projectLink: 'https://en-ae.sssports.com',
    tech: ['Salesforce', 'SFCC', 'MoEngage', 'lazySizes'],
    photos: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
  },
  {
    id: 3,
    name: 'Under Armour',
    description:
      'Under Armour is obsessed with being better, stronger, and more focused than anyone else out there. To inspire you with performance solutions you never knew you needed and can’t imagine living without.',
    githubLink: '/',
    projectLink: 'https://www.underarmour.com/en-us',
    tech: ['Next.js', 'React.js', 'Vercel', 'Fastly', 'Tealium', 'Varnish'],
    photos: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
  },
  {
    id: 4,
    name: 'Dropkick',
    description:
      'Dropkick is a mobile app providing real‑time access to trending sneakers, apparel and accessories.',
    githubLink: '/',
    projectLink: 'https://play.google.com/store/apps/details?id=com.dropkick.android',
    tech: ['Salesforce', 'SFCC', 'MoEngage', 'OCAPI'],
    photos: [PROJECT4_1, PROJECT4_2, PROJECT4_3],
  },
  {
    id: 5,
    name: 'Portakal Bahçem',
    description:
      "Behind every branch, every leaf and every fruit is the promise of PortakalBahçem and our family's 100 years of farming experience. Reach the products we grow in PortakalBahçem terroir, located in Finike plain with its unique micro-climate in the world, from the source.",
    githubLink: '/',
    projectLink: 'https://www.portakalbahcem.com/',
    tech: ['Laravel', 'Azure', 'jQuery', 'Mustache'],
    photos: [PROJECT5_1, PROJECT5_2, PROJECT5_3],
  },
  {
    id: 6,
    name: 'Fieldscope',
    description:
      'Fieldscope is a SaaS-based next generation business tool for enterprises specializing in field service management. It is designed for companies seeking a scalable and flexible B2B platform for sales force automation, B2B e-Commerce and field execution from one collaborative space. With end-to-end solutions for all your needs in the field, it helps you manage all your schedules, routes, assets, relations, sales, work orders, and tasks efficiently with real-time field monitoring, data analysis and customizable reporting functions.',
    githubLink: '/',
    projectLink: 'https://fieldscope.io',
    tech: ['ASP.NET Core', 'C#', 'PHP', 'Azure', 'jQuery', 'nginx'],
    photos: [PROJECT6_1, PROJECT6_2, PROJECT6_3],
  },
];
