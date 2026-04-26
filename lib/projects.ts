export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  context: string;
  status: "Ongoing" | "Delivered";
  year: number;
  technologies: string[];
  highlights: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "sistem-informasi-magang",
    title: "Sistem Informasi Magang",
    description: "PKL management system for SMK with geolocation attendance",
    longDescription:
      "A comprehensive internship management system designed for SMK (Vocational High School). Features real-time geolocation-based attendance tracking, weekly logbook management, and a digital knowledge library for interns and supervisors.",
    context: "Final-Year Project",
    status: "Ongoing",
    year: 2025,
    technologies: ["PHP", "Laravel", "SQLite", "HTML5", "Geolocation API"],
    highlights: [
      "Real-time GPS-based attendance tracking with location verification",
      "Weekly logbook digital management system",
      "Knowledge library with resource sharing",
      "Role-based access control for interns and supervisors",
      "Responsive mobile-first design for field workers",
    ],
    featured: true,
  },
  {
    id: "stockify",
    title: "Stockify",
    description: "Web inventory system with 4 user roles",
    longDescription:
      "A full-featured inventory management system built during an internship. Supports multiple user roles (Admin, Manager, Warehouse, Staff) with role-based access control, real-time inventory tracking, and comprehensive reporting features.",
    context: "Internship Project",
    status: "Delivered",
    year: 2025,
    technologies: ["Laravel", "PHP", "SQLite", "Tailwind CSS", "Bootstrap"],
    highlights: [
      "Multi-role user system with granular permissions",
      "Real-time inventory tracking and management",
      "Automated stock alerts and notifications",
      "Comprehensive reporting and analytics dashboard",
      "Audit trail for all inventory transactions",
    ],
    featured: true,
  },
  {
    id: "nebeng",
    title: "Nebeng",
    description: "Web carpooling platform with driver-first model",
    longDescription:
      "A modern carpooling platform built with Next.js that prioritizes driver experience. Features real-time ride matching, integrated Google Maps API for route optimization, and seamless booking experience.",
    context: "Internship Project",
    status: "Delivered",
    year: 2025,
    technologies: ["Next.js", "Tailwind CSS", "Google Maps API", "JavaScript"],
    highlights: [
      "Driver-first platform design and UX",
      "Real-time ride matching algorithm",
      "Google Maps integration for route optimization",
      "Responsive design optimized for mobile",
      "Seamless booking and payment flow",
    ],
    featured: true,
  },
  {
    id: "bpjs-patient-system",
    title: "BPJS Patient System",
    description: "Offline desktop app for healthcare facility",
    longDescription:
      "A freelance project for a healthcare facility in Jambi. Built as a desktop application with offline-first capabilities, this system manages patient records, appointments, and BPJS insurance information with a focus on reliability in low-connectivity environments.",
    context: "Freelance Project",
    status: "Delivered",
    year: 2025,
    technologies: ["Java", "SQLite", "Swing UI"],
    highlights: [
      "Offline-first architecture for reliable operation",
      "Patient record management system",
      "BPJS insurance data integration",
      "Appointment scheduling and tracking",
      "Desktop application with persistent data storage",
    ],
    featured: true,
  },
];
