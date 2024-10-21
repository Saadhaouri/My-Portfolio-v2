import React from "react";
import cryptoImg from "@/public/Crypto.webp";
import resturantImg from "@/public/resturant.webp";
import { CgWorkAlt } from "react-icons/cg";

type LinkType =
  | { name: string; hash: string } // Regular links
  | { name: "LanguageSwitcher"; isLanguageSwitcher: true }; // Language switcher

export const links: LinkType[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "LanguageSwitcher",
    isLanguageSwitcher: true,
  },
];

export const experiencesData = [
  {
    title: "Web Developer Intern",
    date: "August 2024 - September 2024",
    company: "Information Technology Institute ITI",
    description: [
      "Developed responsive and dynamic web pages.",
      "Collaborated with colleagues and mentors as a teamwork.",
      "Used version control to manage project versions , changes.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
] as const;


export const projectsData = [
  {
    title: "Crypto",
    description:
      "A modern cryptocurrency tracking app providing real-time cryptocurrency prices, trends, and charts. Users can sign up, manage profiles, and personalize theme preferences.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    icons: ["logos:react", "logos:firebase", "devicon:tailwindcss"],
    imageUrl: cryptoImg,
    githubLink: "https://github.com/your-crypto-repo", 
    urlLink: "https://crypto-6f014.web.app/",
    features: [
      "Real-time cryptocurrency prices",
      "Responsive design with Dark/Light mode toggle",
      "User Authentication using Firebase",
      "Mobile-friendly navigation with secure routing",
    ],
  },
  {
    title: "Restaurant Website",
    description:
      "A food menu project with filtering options allowing users to sort items by type (burgers, pizza, salads, etc.) and price range. Built with React and Tailwind CSS.",
    tags: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    icons: [
      "logos:react",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:html5",
    ],
    imageUrl: resturantImg,
    githubLink: "https://github.com/your-restaurant-repo",
    urlLink: "https://restaurant-app-react-tailwind.netlify.app/",
    features: [
      "Display top-rated menu items with images and prices",
      "Filter by food type and price",
      "Responsive design with hover and scaling effects",
    ],
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Bootstrap",
    icon: "logos:bootstrap",
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Redux",
    icon: "logos:redux",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "GitHub",
    icon: "logos:github-icon",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Framer Motion",
    icon: "logos:framer",
  },
  {
    name: "Postman",
    icon: "logos:postman-icon",
  },
] as const;