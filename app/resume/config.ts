import { Github, Linkedin, Location, Mail, Phone } from "./icons";

const fullName = "VINAY KUMAR NAGILLA"

const designation = "Senior Front End Engineer"

const skills = ["HTML", 'CSS', "JavaScript", 'ReactJS', 'NextJS', 'GIT', 'NodeJS (Beginner)', 'MangoDB (Beginner)', 'MySQL(Beginner)', 'AWS (Beginner)'];

const education = {
    title: "Bachelor of Science (Computers)",
    college: "Acharya Nagarjuna University",
    period: "2014 - 2018"
}

const headerItems = [
    {
        title: "9505335109",
        icon: Phone,
    },
    {
        title: "Hyderabad",
        icon: Location,
    },
    {
        title: "vinaykanna367@gmail.com",
        icon: Mail,
    },
    {
        title: "Linkedin",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/vinay-kumar-497911144/",
    },
    {
        title: "Github",
        icon: Github,
        link: "https://github.com/vinaykanna",
    },
];

export { fullName, skills, education, headerItems, designation }