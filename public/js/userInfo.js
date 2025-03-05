import { faGithub, faSquareXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const userInfo = {
    about: {
        title: "About Me",
        description: "Hi I am Sedat Can Uygur. I’ve been a full-stack engineer for over 8 years, working with a variety of technologies, including C#, Java, Python, JavaScript, and TypeScript. I started my career focusing on back-end systems, especially in .NET, but over time I expanded to front-end frameworks like Angular and React. In my recent roles, I’ve worked on projects for global brands such as Under Armour and SSS, where I developed scalable microservices and integrated multiple APIs. For the past couple of years, I’ve also gained experience with cloud platforms—AWS and Azure—using Docker and Kubernetes to containerize and orchestrate microservices. This experience feels highly relevant on cloud-native applications and modern architectures.",
        resume: "https://drive.google.com/file/d/1Dv3THOjyz7-zV9br9arOeyltCt_3Rvng/view?usp=sharing"
    },
    contact: {
        email: {
            htmlFor: "email",
            label: "Email Address",
            placeholder: "sedat.uygur@outlook.com"
        },
        message: {
            htmlFor: "message",
            label: "Message",
            placeholder: "Type your message"
        },
        name: {
            htmlFor: "name",
            label: "Full Name",
            placeholder: "Full Name"
        },
        phone: {
            countryCode: '+90',
            htmlFor: "phone",
            label: "Phone",
            placeholder: "(545) 825-7262"
        },
        submit: "Submit"
    },
    footer: {
        copyright: "Sedat Can Uygur. All rights reserved.",
        quicklinks: {
            title: "Quick Links",
            home: {
                label: "Home",
                href: "/"
            },
            about: {
                label: "About",
                href: "/about"
            },
            projects: {
                label: "Projects",
                href: "/projects"
            },
            blog: {
                label: "Blog",
                href: "/blog"
            },
            contact: {
                label: "Contact",
                href: "/contact"
            }
        },
        socialmedia: {
            title: "Follow Me",
            github: {
                label: "Github",
                href: "https://github.com/SedatUygur"
            },
            linkedin: {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/sedat-can-uygur"
            },
            twitter: {
                label: "Twitter",
                href: "https://x.com/_SedatUygur"
            }
        }
    },
    home: {
        title: "Hey there, I am Sedat Can.",
        subtitle: "Innovative and results-driven Senior Software Engineer with over 8 years of experience in full‑stack development, software architecture. Expert at designing and implementing resilient, scalable systems using microservices, cloud technologies and modern DevOps practices."
    },
    mainSocials: [
        {
            label: "Github",
            href: "https://github.com/SedatUygur",
            icon: faGithub,  
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/sedat-can-uygur",
            icon: faLinkedin
        },
        {
            label: "Twitter",
            href: "https://x.com/_SedatUygur",
            icon: faSquareXTwitter
        }
    ],
    skills: {
        contact: {
            label: "Get in touch",
            href: "/contact"
        },
        title: "Skills",
        capabilities: [
            {
                category: "Frameworks",
                items: [
                    "Node.js",
                    "React",
                    "Next.js",
                    "jQuery",
                    "Express",
                    "ASP.NET Core",
                    "Spring Boot",
                    "Django",
                    "FastAPI"
                ]
            },
            {
                category: "Languages",
                items: [
                    "Python",
                    "C#",
                    "Java",
                    "JavaScript",
                    "TypeScript",
                    "HTML5",
                    "SQL"
                ]
            },
            {
                category: "Database",
                items: [
                    "PostgreSQL",
                    "MySQL",
                    "SQLite",
                    "MS SQL",
                    "MongoDB",
                    "Redis",
                    "Elasticsearch"
                ]
            },
            {
                category: "Other",
                items: [
                    "AWS",
                    "NumPy, Pandas",
                    "CSS3",
                    "Docker",
                    "Git",
                    "npm, Pip",
                    "T-SQL, NoSQL",
                    "Salesforce",
                    "Agile, SCRUM",
                    "Jira",
                    "Linux"
                ]
            },
        ]
    },
}