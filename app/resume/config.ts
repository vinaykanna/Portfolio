import { Github, Linkedin, Location, Mail, Phone, Web } from "../icons";

const fullName = "VINAY KUMAR NAGILLA";

const designation = "System Analyst | Frontend-focused Full Stack Engineer";

const summary = [
  "Frontend-focused Full Stack Engineer with 6+ years of experience designing and developing scalable, high-performance web applications. Expertise in building intuitive, user-centric interfaces using modern JavaScript frameworks including React, Vue, and Angular. Strong foundation in core web technologies such as HTML5, CSS3, JavaScript (ES6+), and HTTP/REST APIs.",
  "Proven ability to translate business requirements into efficient, maintainable solutions, with a focus on performance optimization, accessibility, and responsive design. Experienced in collaborating with cross-functional teams, writing clean and reusable code, and improving overall user experience and application efficiency.",
  "Passionate about continuous learning, solving complex technical challenges, and leveraging best practices to deliver impactful digital products.",
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "NextJS",
  "GIT",
  "NodeJS (Beginner)",
  "MongoDB (Beginner)",
  "MySQL(Beginner)",
  "AWS (Beginner)",
];

const skillsElaborated = [
  {
    label: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Typescript",
      "ReactJS",
      "Angular",
      "VueJS",
      "NextJS",
      "Microfrontends",
    ],
  },
  {
    label: "Backend",
    items: ["NodeJS", "ExpressJS", "NestJS"],
  },
  {
    label: "Databases",
    items: [
      "SQL",
      "SQLite",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
    ],
  },
  {
    label: "Cloud and DevOps",
    items: ["GitHub Actions", "AWS"],
  },
  {
    label: "Softwares and Tools",
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Contentful",
      "Optimizely",
      "VS Code",
      "Figma (UX Design)",
      "Featurevisor (Feature Flags, Remote Config, AB Testing)",
      "New Relic (Logging and Monitoring)",
    ],
  },
  {
    label: "Miscellaneous",
    items: [
      "CI/CD",
      "REST APIs",
      "GraphQL",
      "Jest/Vitest",
      "Webpack/Vite",
      "Agile/Scrum",
      "Performance optimization",
      "Accessibility best practices",
    ],
  },
];

const education = [
  {
    title: "B.Com (Computer Applications)",
    college: "Acharya Nagarjuna University",
    period: "2014 - 2018",
  },
];

const achievements = [
  {
    title: "Secured 2nd place in the hackathon",
    desc: "The hackathon was about developing User interface based on the requirements with the best possible UX.",
  },
];

const passions = [
  "Continuous learning and improvement in the tech",
  "Open-source development",
];

const languages = [
  {
    title: "Telugu",
    points: 5,
    proficiency: "Native",
  },
  {
    title: "English",
    points: 4,
    proficiency: "Proficient",
  },
  {
    title: "Hindi",
    points: 3,
    proficiency: "Intermediate",
  },
];

const experience = [
  {
    company: "DAZN",
    roles: [
      {
        title: "System Analyst",
        period: "06/2025 - Present",
        location: "Hyderabad",
        work: [
          "Led the migration of the News module from client-side rendering (CSR) to Server-Side Rendering (SSR) and transitioned multiple static pages to Static Site Generation (SSG) using modern frameworks, significantly improving SEO, initial load performance, and increasing Lighthouse performance scores from ~60 to ~85 across key pages.",
          "Spearheaded accessibility (a11y) improvements across multiple modules from the ground up, ensuring compliance with WCAG standards. Implemented semantic HTML, ARIA roles, keyboard navigation support, focus management, and screen reader compatibility, resulting in a more inclusive user experience and improved accessibility audit scores.",
          "Drove performance optimization initiatives in the Catalogue module, reducing redundant and repeated API calls by ~30–40% through request deduplication, caching strategies, and improved state management. Collaborated closely with backend teams to enhance API performance by implementing HTTP best practices such as response caching, compression, and optimized payload structures, resulting in faster response times and improved application responsiveness.",
          "Played a key role in the successful migration and integration of two major products — Kayo (Sports) and Binge (Entertainment) with 5m+ users — acquired from Foxtel into the DAZN platform within a tight 6-month timeline. Contributed to seamless platform unification, ensuring consistent user experience and performance across products.",
          "Contributed to the migration of feature flagging and experimentation systems from Optimizely to an in-house solution (FeatureVisor). Assisted in re-implementing A/B testing and remote configuration workflows, improving flexibility, reducing third-party dependency, and enabling better control over experimentation strategies.",
          "Led the migration of the Catalogue module from JavaScript to TypeScript, improving code reliability, maintainability, and developer productivity.",
        ],
      },
      {
        title: "Senior Software Engineer",
        period: "06/2023 - 05/2025",
        location: "Hyderabad",
        work: [
          "Collaborated on the development of the Catalogue Module for DAZN's sports streaming platform.",
          "Implemented A/B testing strategies using Optimizely to enhance user engagement and conversion rates",
          "Utilized microfrontend architecture principles to design and implement modular, scalable, and maintainable front-end components.",
          "Implemented internationalization (i18n) to provide multi-language support, enhancing the platform's accessibility to a global audience.",
          "Collaborated closely with cross-functional teams, including designers and backend engineers, to deliver seamless user experiences.",
          "Actively participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives.",
          "Participated in code reviews, ensuring code quality, adherence to coding standards, and best practices.",
        ],
      },
    ],
  },
  {
    company: "Janaspandana Software Solutions",
    roles: [
      {
        title: "Full Stack Developer",
        period: "03/2022 - 02/2023",
        location: "Hyderabad",
        work: [
          "Involved in the development of University Management System and Learning Management System (ULMS).",
          "Optimized these applications performance by implementing best practices for image compression, caching, and minification, resulting in increased page speed",
          "Improved these applications accessibility by implementing best practices for color contrast, keyboard navigation, and screen reader compatibility for Learning Management System.",
          "Introduced and implemented a new frontend framework (NextJS) that improved the development process and reduced time-to-market for new features.",
          "Managed a team of 2 remote full-time employees",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "09/2019 - 02/2022",
        location: "Hyderabad",
        work: [
          "Successfully developed and launched several clients websites which are responsive across all devices and truly accessible. ",
          "Dealt directly with different clients to understand their needs and provide solutions that met their expectations. ",
          "Developed and designed the complete frontend and backend of a business management system, working independently from conception to delivery. Leveraged expertise in HTML, CSS, and JavaScript, as well as experience with frontend frameworks such as React, to create a user-friendly interface. And learnt and applied various backend technologies such as NestJS, NodeJS, MongoDB and MySQL.",
          "Integrated marketplace 3rd party modules into existing system such as OneDrive integration using Microsoft Graph and GoogleDrive integration using google APIs.",
          "Developed a very interesting feature called Form builder - this feature allows users to create custom forms easily, without needing to code them from scratch. It enables businesses or individuals to collect specific data from their customers efficiently.",
        ],
      },
    ],
  },
];

const headerItems = [
  {
    title: "vinaykanna367@gmail.com",
    icon: Mail,
  },
  {
    title: "9505335109",
    icon: Phone,
  },
  {
    title: "Hyderabad",
    icon: Location,
  },
  {
    title: "Github",
    icon: Github,
    link: "https://github.com/vinaykanna",
  },
  {
    title: "Website",
    icon: Web,
    link: "https://me.technologyexplorer.dev",
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/vinay-kumar-497911144/",
  },
];

export {
  fullName,
  summary,
  skills,
  education,
  headerItems,
  designation,
  achievements,
  passions,
  languages,
  experience,
  skillsElaborated,
};
