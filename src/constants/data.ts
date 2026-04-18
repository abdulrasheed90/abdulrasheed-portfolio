import { Github, Linkedin, Mail, Twitter, Globe, Code, Layout, Cpu, Smartphone, Database, Server, Facebook, Instagram } from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS = [
  { name: "React & Next.js", icon: Code, level: 95 },
  { name: "Tailwind CSS", icon: Layout, level: 95 },
  { name: "JavaScript / TS", icon: Code, level: 85 },
  { name: "Vue.js / Svelte", icon: Code, level: 65 },
  
  { name: "HTML5 & CSS3", icon: Layout, level: 90 },
  { name: "Framer Motion", icon: Layout, level: 75 },
  { name: "Node.js", icon: Server, level: 50 },
  { name: "Express.js", icon: Server, level: 45 },
  
  { name: "MongoDB", icon: Database, level: 40 },
  { name: "PostgreSQL", icon: Database, level: 35 },
  { name: "GraphQL", icon: Globe, level: 30 },
  { name: "WebSockets", icon: Globe, level: 25 },
];

import portfolio1 from "../../portfolio-1.png";
import portfolio2 from "../../portfolio-2.png";
import project3 from "../../projhect -3.png";
import project4 from "../../project-4.png";
import project5 from "../../project -5.png";
import portfolio5 from "../../portfolio-5.png";
import portfolio6 from "../../portfolio-6.png";
import portfolio8 from "../../portfolio-8.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Ice Cream World",
    description: "A delightful e-commerce website for ordering ice creams with interactive flavors showcase.",
    image: portfolio2,
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
    liveUrl: "https://abdulrasheed90.github.io/Ice-Cream-Shop/",
    githubUrl: "https://github.com/abdulrasheed90/Ice-Cream-Shop",
    category: "Web",
  },
  {
    id: 2,
    title: "Nike Shoes",
    description: "A high-performance e-commerce landing page for Nike sneakers, featuring smooth animations and modern UI.",
    image: portfolio8,
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://nike-shoes-xi.vercel.app/",
    githubUrl: "https://github.com/abdulrasheed90/Nike-Shoes",
    category: "Web",
  },
  {
    id: 3,
    title: "Prayer Times (Namaz)",
    description: "A comprehensive application displaying accurate daily prayers schedule and Islamic calendar.",
    image: project4,
    tags: ["React", "API", "Mobile"],
    liveUrl: "https://abdulrasheed90.github.io/namaz-timing/",
    githubUrl: "https://github.com/abdulrasheed90/namaz-timing",
    category: "App",
  },
  {
    id: 4,
    title: "Image Search App",
    description: "An interactive image search gallery application for finding adorable high-quality cat pictures.",
    image: project5,
    tags: ["React", "Gallery", "Fetch API"],
    liveUrl: "https://abdulrasheed90.github.io/Image-Search-App/",
    githubUrl: "https://github.com/abdulrasheed90/Image-Search-App",
    category: "Web",
  },
  {
    id: 5,
    title: "Age Calculator",
    description: "A sleek utility application that instantly calculates precise age in years, months, and days.",
    image: portfolio1,
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://abdulrasheed90.github.io/Age-Calculator/",
    githubUrl: "https://github.com/abdulrasheed90/Age-Calculator",
    category: "App",
  },
  {
    id: 6,
    title: "Weather App",
    description: "Real-time weather tracking application showing temperature, humidity, and forecasts.",
    image: project3,
    tags: ["HTML", "CSS", "JS", "API"],
    liveUrl: "https://abdulrasheed90.github.io/weather-app/",
    githubUrl: "https://github.com/abdulrasheed90/weather-app",
    category: "App",
  },
  {
    id: 7,
    title: "Tic Tac Toe game",
    description: "A classic interactive game built with modern web technologies, featuring a clean UI and game logic.",
    image: portfolio5,
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://abdulrasheed90.github.io/Tic-Tac-Toe-project/",
    githubUrl: "https://github.com/abdulrasheed90/Tic-Tac-Toe-project",
    category: "Web",
  },
  {
    id: 8,
    title: "ToDo App",
    description: "A collaborative productivity suite designed to keep remote teams aligned and efficient.",
    image: portfolio6,
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://abdulrasheed90.github.io/TODO-app/",
    githubUrl: "https://github.com/abdulrasheed90/TODO-app",
    category: "App",
  },
];

export const EXPERIENCE = [
  {
    company: "Saylani Mass IT Training (SMIT)",
    role: "Web & Mobile App Development",
    period: "2023 - 2024",
    description: "Successfully completed a comprehensive course in Web and Mobile development. Mastered modern technologies and received certification for professional-grade project delivery.",
  },
  {
    company: "Codezyra",
    role: "Full Stack Developer (Intern)",
    period: "2024 - 2024",
    description: "Gained hands-on industry experience building scalable web applications. Contributed to both frontend and backend development in a professional team environment.",
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2024 - Present",
    description: "Delivering high-quality digital solutions to clients worldwide across various freelancing platforms. Specialized in custom web applications and responsive UI design.",
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern technologies.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces with a focus on user experience.",
    icon: Layout,
  },
  {
    title: "Mobile Solutions",
    description: "Developing cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "AI Integration",
    description: "Implementing AI and machine learning capabilities into existing applications.",
    icon: Cpu,
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "Working with this developer was a game-changer for our product. The attention to detail and technical expertise is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "CTO at Innovate",
    content: "The portfolio speaks for itself, but the actual delivery was even better. Highly professional and efficient.",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager",
    content: "A true visionary in frontend development. The animations and UI are simply world-class.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", icon: Github, href: "https://github.com/abdulrasheed90" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/abdul-rasheed-qureshi-508123380?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1CZTLqSUL3/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/abeer90900?igsh=MThia2oybmR3c3BqYg==" },
];

export const CONTACT_INFO = {
  email: "arqureshi9090@gmail.com",
  phone: "+92 370 279 1841",
  location: "Liaqtabad Karachi",
};
