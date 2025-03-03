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

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        id: 1,
        name: 'Saklı Orman', //project name
        description: "Türkiye's Most Delicious Mushrooms from the Forests of Our Country, with the Labor of Our Villagers", //project description
        githubLink: '', //github repo link
        projectLink: 'https://www.sakliorman.com/', //deployed project link
        tech: ['ASP.NET 4.0', 'Bootstrap', 'jQuery', 'Modernizr', 'slick'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photos: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        id: 2,
        name: 'Sun & Sand Sports',
        description: 'Sun & Sand Sports has hit a number of milestones to achieve the status of leading sports retailer in the Middle East. Launching its first sports store in Al Ghurair, it is through a passion for sports and fitness that SSS will motivate you to step up your game with the world’s best high-performance and stylish sportswear and accessories brands.',
        githubLink: '',
        projectLink: 'https://en-ae.sssports.com',
        tech: ['Salesforce', 'SFCC', 'MoEngage', 'lazySizes'],
        photos: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        id: 3,
        name: 'Under Armour',
        description: 'Under Armour Makes You Better. Under Armour is obsessed with being better, stronger, and more focused than anyone else out there. To inspire you with performance solutions you never knew you needed and can’t imagine living without.',
        githubLink: '/',
        projectLink: 'https://www.underarmour.com/en-us',
        tech: ['Next.js', 'React.js', 'Vercel', 'Fastly', 'Tealium', 'Varnish'],
        photos: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
]