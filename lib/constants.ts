export interface Skill {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Tools" | "Databases";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "Frontend" },
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", category: "Frontend" },
  { name: "JavaScript", icon: "javascript", category: "Frontend" },
  { name: "HTML5", icon: "html5", category: "Frontend" },
  { name: "CSS3", icon: "css3", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend" },
  { name: "Bootstrap", icon: "bootstrap", category: "Frontend" },

  // Backend
  { name: "PHP", icon: "php", category: "Backend" },
  { name: "Laravel", icon: "laravel", category: "Backend" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "Java", icon: "java", category: "Backend" },

  // Databases
  { name: "MySQL", icon: "mysql", category: "Databases" },
  { name: "SQLite", icon: "sqlite", category: "Databases" },

  // Tools
  { name: "Git", icon: "git", category: "Tools" },
  { name: "GitHub", icon: "github", category: "Tools" },
  { name: "Figma", icon: "figma", category: "Tools" },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Internship" | "Freelance";
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "seven-inc",
    title: "Full-stack Web Developer Intern",
    company: "Seven Inc",
    location: "Yogyakarta, Indonesia (Hybrid)",
    type: "Internship",
    startDate: "Jun 2025",
    endDate: "Sep 2025",
    description: [
      "Developed and maintained full-stack web applications using Laravel and Next.js",
      "Implemented responsive UI components with Tailwind CSS and Bootstrap",
      "Collaborated with team members using Git and GitHub for version control",
      "Participated in code reviews and contributed to technical documentation",
    ],
    skills: ["Laravel", "Next.js", "React", "Tailwind CSS", "MySQL"],
  },
  {
    id: "healthcare-freelance",
    title: "Freelance Software Developer",
    company: "Healthcare Client",
    location: "Jambi, Indonesia",
    type: "Freelance",
    startDate: "Jul 2025",
    endDate: "Aug 2025",
    description: [
      "Developed offline desktop application for patient record management",
      "Implemented SQLite database with complex queries and data synchronization",
      "Delivered working solution ahead of schedule with comprehensive testing",
    ],
    skills: ["Java", "SQLite", "Desktop Applications"],
  },
  {
    id: "ski-telkom",
    title: "Public Relations Coordinator",
    company: "SKI Telkom University Purwokerto",
    location: "Purwokerto, Indonesia",
    type: "Full-time",
    startDate: "2023",
    endDate: "2024",
    description: [
      "Coordinated internal and external PR initiatives for student organization",
      "Managed digital communications and social media presence",
      "Organized community engagement events and conferences",
    ],
    skills: ["Communication", "Event Management", "Digital Marketing"],
  },
];

export const stats = [
  {
    label: "Months Experience",
    value: "4+",
    description: "Professional internship and freelance work",
  },
  {
    label: "Projects Delivered",
    value: "5+",
    description: "From concept to production",
  },
  {
    label: "GPA",
    value: "3.68",
    description: "Bachelor of Science in Informatics",
  },
  {
    label: "Available",
    value: "Jul 2026",
    description: "Ready for full-time opportunity",
  },
];
