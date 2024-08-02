import { Github, Linkedin, Location, Mail, Phone, Web } from "../icons";

const fullName = "PRAVEEN REDDY NAGILLA";

const designation = "Digital Engineer";

const summary = `Seeking a position as software Engineer with zeal to learn and grow with the company where my skills and abilities in the information technology industry can be utilized to their best to improve and success of the organization.`;

const careerObjective = `Seeking a position as software Engineer with zeal to learn and grow with the company where my skills and abilities in the information technology industry can be utilized to their best to improve and success of the organization.`;

const skills = [
  "Core Java",
  "Spring Boot",
  "Hibernate / JPA",
  "Rest API",
  "MySQL",
  "Git",
  "Maven",
  "Load Runner",
  "Postman",
];

const education = [
  {
    title: "Master of Computer Applications",
    college: "Telangana University",
    period: "2018 - 2021",
    grade: "CGPA: 8.2",
  },
  {
    title: "Bachelor of Science(Computers)",
    college: "Pratibha Degree College",
    period: "2015 - 2018",
    grade: "CGPA: 8.2",
  },
];

const achievements = [
  {
    title: "Recieved a DNA Award from my company",
    desc: "Me and my team recieved the award for the contribution to the company.",
  },
];

const passions = ["Continuous learning and improvement in the tech"];

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
    company: "Sonata Software Limited",
    roles: [
      {
        title: "Digital Enigineer",
        projects: [
          {
            title: "PAS-X MES (Manufacturing Execution System) ",
            description:
              "The J&J PAS-X MES (Manufacturing Execution System) application is used for the execution of batch records and supporting operations digitally inside manufacturing plants across sectors. PAS-X MES enhances the visibility and speed of manufacturing operations by integrating with other shop floor systems (Automation, Historian) and enterprise planning systems such SAP, reducing human error, enabling review by exception, and reducing review/release cycle times.",
            tech: "Performance Testing, Performance testing tools (Load Runner)",
            responsibilities: [
              "Understanding the performance requirements",
              "Discussion with the Business, development and Functional team to identify the Critical business scenarios",
              "Creating the Test Scripts based on the End-User Transactions",
              "Generating the Script and Enhancing the script for Correlation and parameterization",
              "Involved in designing the work load models for all the tests like Load, Stress &Endurance tests.",
              "Designing and executing the scenarios as per schedule",
              "Executing the Scripts in LoadRunner Enterprise (LRE).",
              "Expertise in monitoring all the servers during the execution of the test.",
              "Involved in analyzing the results after the execution",
              "Generating the Performance report and forwarding the report to my onsite coordinator.",
            ],
          },
          {
            title: "Sales and PnL Dashboards in SigniFi Project",
            description:
              "Signifi is a pharmaceutical project. Mainly I have worked on two main modules Sales and PnL (Profit and Loss). In Sales, there are four easy dashboards, each looking at different sales details. Just hit 'Go,' and you get instant, up-to-date information from the database, giving you the latest insights into pharmaceutical sales",
            tech: "Performance Testing, Performance testing tools (Load Runner)",
            responsibilities: [
              "Understanding of Business requirements and specifications.",
              "Involved in Test Plan and Test scenarios preparation.",
              "Creating the Virtual User Scripts using Virtual User Generator",
              "Involved in All major Enhancements like Correlation and Parameterization.",
              "Running the test scenario in LoadRunner Enterprise (LRE).",
              "Involved in Load, Stress and Endurance Testing.",
              "Reporting the Bottlenecks.",
            ],
          },
        ],
      },
    ],
  },
];

const headerItems = [
  {
    title: "praveenreddynagilla1996@gmail.com",
    icon: Mail,
  },
  {
    title: "9381131674",
    icon: Phone,
  },
  {
    title: "Hyderabad",
    icon: Location,
  },
  {
    title: "Github",
    icon: Github,
    link: "https://github.com/praveenreddynagilla",
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/praveen-reddy-nagilla-7b135b20b/",
  },
];

const professionalSummary = [
  "Overall, 2+ years of professional experience in Information technology industry.",
  "Hands on experience in using Load Runner Tool for Performance Testing.",
  "Worked on multiple protocols like WebHttp/html, ATC, SAP GUI.",
  "Strong knowledge of core java concepts like OOPs, Collections",
  "Strong knowledge of Core Java, Spring Boot, Hibernate",
  "Strong knowledge of developing REST API based web services",
  "Hands on experience in using Web servers like Tomcat server.",
  "Ability to quickly learn new technologies.",
  "I have solved 100+ DSA Problems on online problem solving platforms.",
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
  careerObjective,
  professionalSummary,
};
