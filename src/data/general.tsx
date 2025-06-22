import { Film } from "lucide-react";
import {
    FaBasketballBall,
    FaCode,
    FaCss3Alt,
    FaFigma,
    FaGit,
    FaGithub,
    FaHtml5,
    FaJs,
    FaLightbulb,
    FaPaintBrush,
    FaPalette,
    FaPython,
    FaReact,
    FaRegGem,
    FaServer,
} from "react-icons/fa";
import {
    HiOutlineChatAlt,
    HiOutlineClock,
    HiOutlineLightBulb,
    HiOutlineUserGroup,
} from "react-icons/hi";
import {
    SiCloudinary,
    SiCrowdsource,
    SiDjango,
    SiFirebase,
    SiFramer,
    SiGooglechrome,
    SiJest,
    SiNextdotjs,
    SiPostman,
    SiRedux,
    SiSass,
    SiShadcnui,
    SiTailwindcss,
    SiTypescript,
    SiVitest,
} from "react-icons/si";
import {
    DegreeIcon,
    FirstStatIcon,
    GlobeIcon,
    LocationIcon,
    SecondStatIcon,
    ThirdStatIcon,
    TimeIcon,
} from "../components/icons/icons";

export const inspirations = [
  {
    icon: <FaPaintBrush color="#CCCCCC" size={24} />,
    text: "Dribbble Designers",
  },
  {
    icon: <FaPalette color="#CCCCCC" size={24} />,
    text: "Aesthetic Approach",
  },
  {
    icon: <FaLightbulb color="#CCCCCC" size={24} />,
    text: "Everyday Creativity",
  },
  {
    icon: <FaRegGem color="#CCCCCC" size={24} />,
    text: "User-Centered Design",
  },
];

export const stats = [
  {
    icon: <SecondStatIcon />,
    text: "Experience",
    count: 1,
  },
  {
    icon: <ThirdStatIcon />,
    text: "Collabs",
    count: 5,
  },
  {
    icon: <FirstStatIcon />,
    text: "Projects",
    count: 10,
  },
];

export const profileDetails = [
  {
    label: "Nigeria",
    icon: <LocationIcon />,
  },
  {
    label: "English",
    icon: <GlobeIcon />,
  },
  {
    label: "Frontend Engineer",
    icon: <FirstStatIcon />,
  },
  {
    label: "Bells University of Technology",
    icon: <DegreeIcon />,
  },
  {
    label: "UTC",
    icon: <TimeIcon />,
  },
];

export const stacks = [
  { icon: <FaHtml5 color="#CCCCCC" size={24} />, text: "HTML5" },
  { icon: <FaCss3Alt color="#CCCCCC" size={24} />, text: "CSS3" },
  { icon: <FaJs color="#CCCCCC" size={24} />, text: "JavaScript" },
  { icon: <SiTypescript color="#CCCCCC" size={24} />, text: "TypeScript" },
  { icon: <FaReact color="#CCCCCC" size={24} />, text: "React" },
  { icon: <SiNextdotjs color="#CCCCCC" size={24} />, text: "Next.js" },
  { icon: <SiTailwindcss color="#CCCCCC" size={24} />, text: "Tailwind CSS" },
  { icon: <SiSass color="#CCCCCC" size={24} />, text: "SASS" },
  { icon: <SiSass color="#CCCCCC" size={24} />, text: "SCSS" },
  { icon: <SiFramer color="#CCCCCC" size={24} />, text: "Framer Motion" },
  { icon: <SiRedux color="#CCCCCC" size={24} />, text: "Redux" },
  { icon: <SiShadcnui color="#CCCCCC" size={24} />, text: "ShadCN" },
  { icon: <FaGit color="#CCCCCC" size={24} />, text: "Git" },
  { icon: <FaGithub color="#CCCCCC" size={24} />, text: "GitHub" },
  { icon: <SiJest color="#CCCCCC" size={24} />, text: "Jest" },
  { icon: <SiVitest color="#CCCCCC" size={24} />, text: "Vitest" },
  { icon: <FaFigma color="#CCCCCC" size={24} />, text: "Figma" },
  { icon: <SiFirebase color="#CCCCCC" size={24} />, text: "Firebase" },
  { icon: <SiDjango color="#CCCCCC" size={24} />, text: "Django" },
  { icon: <FaPython color="#CCCCCC" size={24} />, text: "Python" },
  { icon: <SiPostman color="#CCCCCC" size={24} />, text: "Postman" },
  { icon: <SiGooglechrome color="#CCCCCC" size={24} />, text: "Chrome APIs" },
  { icon: <SiCloudinary color="#CCCCCC" size={24} />, text: "Cloudinary" },
];

export const projectsImages = [
  "/genz.ad.jpg",
  "/departmental-portal.jpg",
  "/my-uni.jpg",
  "/devlinks.png",
  "/mobtech.jpg",
  "/ticz.jpg",
  "/e-library.jpg",
  "/ai-text-processor.jpg",
  "/woodz.png",
  "/book-tracker.jpg",
  "/color.jpg",
  "/timbu.jpg",
  "/archibuzz.jpg",
];

export const services = [
  {
    icon: <HiOutlineLightBulb color="#CCCCCC" size={24} />,
    text: "Problem Solving",
  },
  {
    icon: <HiOutlineUserGroup color="#CCCCCC" size={24} />,
    text: "Team Leadership",
  },
  {
    icon: <HiOutlineChatAlt color="#CCCCCC" size={24} />,
    text: "Communication",
  },
  {
    icon: <HiOutlineClock color="#CCCCCC" size={24} />,
    text: "Time Management",
  },
  {
    icon: <FaServer color="#CCCCCC" size={24} />,
    text: "DevOps & Deployment",
  },
];

export const testimonials = [
  {
    text: "Marvellous delivered exceptional work that exceeded our expectations. His attention to detail is remarkable.",
    author: "Frontend Developer",
    position: "HNG",
  },
  {
    text: "Working with Marvellous was a pleasure. He brings innovative solutions to complex problems.",
    author: "Backend Developer",
    position: "Ghreatness Labs",
  },
  {
    text: "His code quality and UI implementations are top-notch. Would definitely work with him again.",
    author: "Fullstack Developer",
    position: "Mobtech Limited",
  },
];

export const hobbies = [
  {
    icon: <FaCode color="#CCCCCC" size={24} />,
    text: "Programming",
  },
  {
    icon: <FaBasketballBall color="#CCCCCC" size={24} />,
    text: "Playing Basketball",
  },
  {
    icon: <Film color="#CCCCCC" size={24} />,
    text: "Watching Anime",
  },
  {
    icon: <SiCrowdsource color="#CCCCCC" size={24} />,
    text: "Socializing",
  },
];

export const experiences = [
  {
    company: "HNG Tech",
    date: "02/25 — 04/25",
    image: "/hng-logo.jpeg",
  },
  {
    company: "Ghreatness Labs",
    date: "11/24 — 04/25",
    image: "/ghreatness-labs-logo.png",
  },
  {
    company: "Mobtech Limited",
    date: "10/24 — 04/25",
    image: "/mobtech-logo.jpeg",
  },
  {
    company: "Archibuzz",
    date: "08/24 — 10/24",
    image: "/archibuzz-logo.jpg",
  },
  {
    company: "HNG Tech",
    date: "06/24",
    image: "/hng-logo.jpeg",
  },
];

export const galleryImages = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
];
