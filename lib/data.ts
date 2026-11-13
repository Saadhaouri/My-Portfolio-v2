import type { StaticImageData } from "next/image";
import opticalImg from "@/public/opticalImg.png";
import parapharmacyImg from "@/public/parapharmacyImg.png";
import lassriImg from "@/public/lassriImg.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

export const profile = {
  name: "Saad Haouri",
  location: "Kénitra, Morocco",
  email: "saadhaouri@gmail.com",
  github: "https://github.com/Saadhaouri",
  linkedin: "https://www.linkedin.com/in/saad-haouri-b87a89265/",
  cv: "/CV.pdf",
  roles: [
    "Full-Stack Developer",
    ".NET & React Engineer",
    "Odoo Migration Specialist",
    "Business Software Builder",
  ],
  summary:
    "I build business software with C#/.NET, React and SQL. Since February 2025 I'm a senior developer at OB Consulting Group, shipping client web apps and leading Cegid → Odoo Enterprise data migrations.",
};

export const stats = [
  { value: 3, suffix: "+", label: "Years building software" },
  { value: 6, suffix: "+", label: "Business apps delivered" },
  { value: 3, suffix: "", label: "Languages spoken" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Web apps & APIs",
    description:
      "Full-stack web applications, from requirements and UI to deployment.",
    icon: "ph:browsers-duotone",
    points: [".NET Web API & EF Core", "React / Next.js front ends", "IIS & cloud deployment"],
  },
  {
    title: "ERP & data migration",
    description:
      "Moving companies from Cegid to Odoo Enterprise with clean, reconciled data.",
    icon: "ph:arrows-left-right-duotone",
    points: ["Mapping & transformation scripts", "Odoo imports & XML-RPC", "Reconciliation & cutover"],
  },
  {
    title: "Business software",
    description:
      "Replacing Excel workflows with custom tools for real shops and companies.",
    icon: "ph:storefront-duotone",
    points: ["Stock, sales & invoicing", "Reporting dashboards", "Training & support"],
  },
];

export type Experience = {
  title: string;
  company: string;
  place: string;
  date: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const experiencesData: Experience[] = [
  {
    title: "Senior Developer — Web Apps & Data Migration",
    company: "OB Consulting Group",
    place: "France",
    date: "Feb 2025 – Present",
    current: true,
    points: [
      "Design and build client websites and web applications, from requirements and UI to deployment.",
      "Develop APIs with .NET and front ends with React on SQL databases.",
      "Lead Cegid → Odoo Enterprise migrations: customers, suppliers, products, chart of accounts, journals, open invoices and stock.",
      "Write SQL and Python transformation scripts; load data through Odoo imports and the XML-RPC API.",
      "Reconcile balances between Cegid and Odoo, run test migrations and cutover, and train French-speaking users.",
    ],
    tags: [".NET", "React", "Odoo", "Cegid", "Python", "SQL"],
  },
  {
    title: "Freelance Software Developer",
    company: "Upwork & direct clients",
    place: "Remote",
    date: "2024",
    points: [
      "Build business management apps end to end with .NET Web API, React and SQL Server, deployed on IIS.",
      "Developed an ERP-style backend with EF Core, PostgreSQL and SQL Server: data model, business rules, reporting.",
      "Replace clients' Excel workflows with custom software and migrate their legacy data.",
    ],
    tags: [".NET", "EF Core", "React", "SQL Server", "IIS"],
  },
  {
    title: "Frontend Developer",
    company: "VPI INFO SARL",
    place: "Morocco",
    date: "Feb 2024",
    points: [
      "Built React interfaces for business management software, including HR management screens.",
      "Integrated backend APIs for clients, products and stock data.",
    ],
    tags: ["React", "TypeScript", "REST APIs"],
  },
  {
    title: "Software Developer Intern",
    company: "TeraByte Software",
    place: "Morocco",
    date: "Oct 2023",
    points: [
      "Worked on C#/.NET management applications with WinForms, ADO.NET and SQL Server.",
      "Wrote T-SQL queries and helped with a database migration.",
    ],
    tags: ["C#", "WinForms", "ADO.NET", "T-SQL"],
  },
  {
    title: "Founder & Manager",
    company: "Cyber Asile",
    place: "Kénitra",
    date: "Own business",
    points: [
      "Run a digital-services, printing, stationery and gaming center: operations, stock, sales and customer service.",
      "Design bilingual (French/Arabic) branding and ads for local businesses.",
    ],
    tags: ["Management", "Branding", "IT support"],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  icons: string[];
  tags: string[];
  imageUrl?: StaticImageData;
  placeholderIcon?: string;
  githubLink?: string;
  urlLink?: string;
};

export const projectsData: Project[] = [
  {
    title: "Optique Management",
    subtitle: "Optical shop system",
    description:
      "Clients, visits, prescriptions, purchases, sales, PDF invoices and stock tracking for an optical store, with a responsive dashboard.",
    icons: ["logos:react", "logos:typescript-icon", "logos:dotnet", "logos:tailwindcss-icon"],
    tags: [".NET 7", "React", "TypeScript"],
    imageUrl: opticalImg,
    githubLink: "https://github.com/Saadhaouri/Optique-APP",
    urlLink: "https://optical-management-app.netlify.app/",
  },
  {
    title: "BetyPara",
    subtitle: "Parapharmacy system",
    description:
      "Products, stock, suppliers, sales, customer debts, promotions and WhatsApp ordering in one system, with automated billing.",
    icons: ["logos:c-sharp", "logos:dotnet", "logos:react", "devicon:microsoftsqlserver"],
    tags: [".NET 7", "React", "SQL Server"],
    imageUrl: parapharmacyImg,
    githubLink: "https://github.com/Saadhaouri/PARA-APP",
    urlLink: "https://parapharmacy-management-app.netlify.app/",
  },
  {
    title: "Odoo ERP",
    subtitle: "Implementation & migration",
    description:
      "Configured accounting, inventory, purchasing and products; migrated data from Cegid, built a company website and integrated external data.",
    icons: ["simple-icons:odoo", "logos:python", "devicon:microsoftsqlserver"],
    tags: ["Odoo 16/17", "Odoo Enterprise", "XML-RPC"],
    placeholderIcon: "simple-icons:odoo",
  },
  {
    title: "Emeuble",
    subtitle: "Furniture business app",
    description:
      "Replaced the client's Excel workflows with one web app for orders, stock and sales.",
    icons: ["logos:dotnet", "logos:react"],
    tags: [".NET 7", "React"],
    placeholderIcon: "ph:armchair-duotone",
  },
  {
    title: "Lassri Sarl",
    subtitle: "Company landing page",
    description:
      "A clean, responsive landing page for a fruit and vegetable import/export company, with product catalog and contact form.",
    icons: ["logos:html-5", "logos:tailwindcss-icon", "logos:javascript"],
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    imageUrl: lassriImg,
    urlLink: "https://www.lassri-sarl.com/",
  },
];

// `color` tints single-color icons (simple-icons / phosphor); multi-color logos ignore it.
export type Skill = { name: string; icon: string; color?: string };
export type SkillGroup = { category: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: [
      { name: "C#", icon: "logos:c-sharp" },
      { name: ".NET 7/8/9", icon: "logos:dotnet" },
      { name: "ASP.NET API", icon: "devicon:dotnetcore" },
      { name: "EF Core", icon: "devicon:entityframeworkcore" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "logos:express" },
      { name: "Python", icon: "logos:python" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Vue 3", icon: "logos:vue" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Ant Design", icon: "logos:ant-design" },
      { name: "shadcn/ui", icon: "simple-icons:shadcnui" },
      { name: "Framer Motion", icon: "logos:framer" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql-icon" },
    ],
  },
  {
    category: "ERP & Data",
    skills: [
      { name: "Odoo", icon: "simple-icons:odoo", color: "#714B67" },
      { name: "Cegid", icon: "ph:database-duotone", color: "#0E7C86" },
      { name: "XML-RPC", icon: "ph:code-duotone", color: "#475569" },
      { name: "Data migration", icon: "ph:arrows-left-right-duotone", color: "#D39A2E" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Visual Studio", icon: "logos:visual-studio" },
      { name: "PowerShell", icon: "devicon:powershell" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "IIS", icon: "ph:hard-drives-duotone" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Canva", icon: "devicon:canva" },
    ],
  },
  {
    category: "AI Tools",
    skills: [
      { name: "Claude Code", icon: "logos:claude-icon" },
      { name: "Codex", icon: "logos:openai-icon" },
      { name: "Google AI Studio", icon: "logos:google-aistudio" },
      { name: "Gemini", icon: "simple-icons:googlegemini", color: "#8E75B2" },
    ],
  },
];

export const educationData = [
  {
    title: "Bac+2 Diploma in IT Development",
    school: "Groupe MIAGE · Kénitra",
    date: "2021 – 2023",
    note: "Software development technician: web applications, databases and object-oriented programming.",
  },
  {
    title: "DEUG in Law (Arabic track) · 2nd year",
    school: "Ibn Tofail University · Kénitra",
    date: "",
    note: "Legal foundations that help with contracts, compliance and business processes.",
  },
  {
    title: "Baccalauréat",
    school: "Ministry of National Education",
    date: "2018",
    note: "Independent candidate.",
  },
];

export const certificationsData = [
  {
    title: "Odoo Enterprise & Community",
    issuer: "Certification · in progress",
    date: "2025",
    icon: "simple-icons:odoo",
  },
  {
    title: "English B2 Certificate",
    issuer: "Online course",
    date: "2025",
    icon: "ph:translate-duotone",
  },
];
