import React from "react";
import cryptoImg from "@/public/crypto.webp";
import resturantImg from "@/public/resturant.webp";
import portfolioImg from "@/public/portfolio.webp";
import opticalImg from "@/public/opticalImg.png";
import parapharmacyImg from "@/public/parapharmacyImg.png";
import lassriImg from "@/public/lassriImg.png";

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
    title: "Full Stack Developer",
    date: "July 2024",
    company: "Upwork",
    description: [
      "Specialized in building custom applications tailored to client needs.",
      "Led projects in optical and gym management, addressing technical challenges.",
      "Delivered efficient, user-friendly solutions focusing on scalable, high-performance systems.",
      "GitHub repository: [PARA-API](https://github.com/Saadhaouri/PARA-API)",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Frontend Developer",
    date: "February 2024",
    company: "VPI INFO SARL",
    description: [
      "Worked on developing user interfaces and improving web application performance.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Utilized modern frontend technologies to enhance user experience.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Developer Intern",
    date: "October 2023",
    company: "Terabyte Software",
    description: [
      "Gained hands-on experience in full-stack development with React and TypeScript.",
      "Worked on database migrations and improved management with SQL Server.",
      "Contributed to web applications, including HR management systems, enhancing functionality and increasing client satisfaction by 25%.",
      "Collaborated in an Agile environment to optimize real-time data visualization for key HR metrics.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "Optical Management System",
    description:
      "An advanced application for managing optician services, including client information, visits, prescriptions, sales, and invoices. Built using React, TypeScript, and .NET to streamline optical management operations.",
    tags: ["React", "TypeScript", ".NET", "Tailwind CSS"],
    icons: [
      "logos:react",
      "devicon:typescript",
      "devicon:dotnetcore",
      "devicon:tailwindcss",
    ],
    imageUrl: opticalImg, // Replace this with the actual image import
    githubLink: "https://github.com/Saadhaouri/Optique-APP",
    urlLink: "https://optical-management-app.netlify.app/",
    features: [
      "Manage client visits and prescriptions",
      "Generate PDF invoices",
      "Real-time tracking of sales and profits",
      "Responsive dashboard with modern UI",
    ],
  },
  // {
  //   title: "Transport Management System (TMS)",
  //   description:
  //     "A comprehensive system for managing logistics and transportation services. It handles vehicle tracking, driver management, route optimization, and real-time delivery updates.",
  //   tags: ["C#", "ASP.NET", "React", "SQL Server"],
  //   icons: [
  //     "devicon:csharp",
  //     "devicon:dotnetcore",
  //     "logos:react",
  //     "devicon:postgresql",
  //   ],
  //   imageUrl: tmsImg, // Replace this with the actual image import
  //   githubLink: "https://github.com/SaadHoauri/transport-management-system",
  //   urlLink: "https://tms-demo.netlify.app/",
  //   features: [
  //     "Real-time vehicle tracking",
  //     "Driver management and route optimization",
  //     "Dynamic delivery status updates",
  //     "Responsive design with detailed reports",
  //   ],
  // },
  {
    title: "Parapharmacy Management System",
    description:
      "A tailored solution for managing product inventory, sales, and customer orders in a parapharmacy. The application provides real-time stock updates and automated billing features.",
    tags: ["C#", "ASP.NET", "Tailwind CSS", "React"],
    icons: [
      "devicon:csharp",
      "devicon:dotnetcore",
      "logos:react",
      "devicon:tailwindcss",
    ],
    imageUrl: parapharmacyImg, // Replace this with the actual image import
    githubLink: "https://github.com/Saadhaouri/PARA-APP",
    urlLink: "https://parapharmacy-management-app.netlify.app/",
    features: [
      "Real-time inventory management",
      "Automated billing system",
      "Customer order tracking",
      "Responsive UI with data export functionality",
    ],
  },
  {
    title: "Lassri Sarl Landing Page",
    description:
      "A professional landing page for Lassri Sarl, a company specializing in the export and import of fruits and vegetables. The page is designed with a modern, clean layout to highlight the company's services, products, and contact information.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    icons: ["logos:html5", "devicon:tailwindcss", "logos:javascript"],
    imageUrl: lassriImg, // Replace this with the actual image import
    githubLink: "https://github.com/SaadHoauri/lassri-sarl-landing-page",
    urlLink: "https://www.lassri-sarl.com/",
    features: [
      "Detailed product catalog for fruits and vegetables",
      "Responsive layout for mobile and desktop",
      "Contact form integration",
      "Clean, minimalistic design for easy navigation",
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
    name: ". NET ",
    icon: "devicon:dotnetcore",
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
    name: "Vue js  ",
    icon: "logos:vue",
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
    name: "SqlServer",
    icon: "devicon:microsoftsqlserver",
  },
  {
    name: "Framer Motion",
    icon: "logos:framer",
  },
  {
    name: "Postman",
    icon: "logos:postman-icon",
  },
  {
    name: " Photoshop ",
    icon: "logos:adobe-photoshop",
  },
  {
    name: " Illustrator ",
    icon: "logos:adobe-illustrator",
  },
] as const;
