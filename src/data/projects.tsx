import { FaFigma, FaJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiCloudinary,
  SiDjango,
  SiFirebase,
  SiFramer,
  SiGmail,
  SiGooglechrome,
  SiHeadlessui,
  SiMui,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiUikit,
  SiVitest,
} from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";

export const projectsData = [
  {
    name: "Sync",
    image: "/sync.png",
    logo: "/sync-logo.png",
    description:
      "Sync your digital assets effortlessly. Keep your links, notes, files, and ideas organized and accessible across all your devices.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
      <SiShadcnui key="shadcn" />,
      <FaFigma key="figma" />,
      <SiSupabase key="supabase" />,
    ],
    liveLink: "https://s-ync.vercel.app/",
  },
  {
    name: "Genz.ad",
    image: "/genz.ad.jpg",
    logo: "/genz.ad-logo.svg",
    description:
      "AI generated ads that maximise engagement and revenue, Generate High-converting, Smarter Adverts in minutes with AI",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
      <SiShadcnui key="shadcn" />,
      <FaFigma key="figma" />,
      <SiCloudinary key="cloudinary" />,
      <SiPostman key="postman" />,
    ],
    liveLink: "https://genz-ad.vercel.app/",
  },
  {
    name: "Mind Haven",
    image: "/mind-haven.png",
    logo: "/mind-haven-logo.svg",
    description:
      "Mind Haven connects care seekers with mental health providers to find therapists, book and manage appointments, and communicate securely.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiSupabase key="supabase" />,
      <SiFramer key="framer" />,
    ],
    liveLink: "https://mind-haven-care.vercel.app/",
  },
  {
    name: "TrueNorth",
    image: "/true-north.png",
    logo: "/true-north-logo.jpeg",
    description:
      "TrueNorth Talent Advisory delivers executive search, strategic recruitment, and career services across tech, operations, and professional services.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
    ],
    liveLink: "https://true-north-talent.vercel.app/",
  },
  {
    name: "LLM Chat Platform",
    image: "/llm-powered-chat.png",
    logo: "/llm-powered-chat-logo.png",
    description:
      "Gemini-powered chat UI with streaming responses, optimistic updates, threaded history, and a responsive layout built for desktop-to-mobile workflows.",
    techStack: [
      <FaReact key="react" />,
      <SiVite key="vite" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
      <RiGeminiFill key="gemini" />,
    ],
    liveLink: "https://llm-powered-chat-platform.vercel.app/",
  },
  {
    name: "VFGL",
    image: "/vfgl.png",
    logo: "/vfgl-logo.png",
    description:
      "VFGL Tech builds innovative, secure, and intelligent digital solutions that power businesses of tomorrow.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
      <SiShadcnui key="shadcn" />,
      <SiGmail key="nodemailer" />,
    ],
    liveLink: "https://www.vfgl.tech/",
  },
  {
    name: "Departmental Portal",
    image: "/departmental-portal.jpg",
    logo: "/departmental-portal-logo.jpg",
    description:
      "Access course materials, track documents, receive important notifications, and stay updated with departmental activities - all in one seamless platform.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiHeadlessui key="headlessui" />,
      <SiUikit key="uikit" />,
      <SiDjango key="django" />,
      <FaPython key="python" />,
    ],
    liveLink: "https://departmental-portal-s.vercel.app/",
  },
  {
    name: "MyUni",
    image: "/my-uni.jpg",
    logo: "/my-uni-logo.jpg",
    description:
      "Find the school that matches your goals, lifestyles, and dreams. Take the first step towards a university experience you'll thrive in.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
    ],
    liveLink: "https://my-uni-rho.vercel.app/",
  },
  {
    name: "DevLinks",
    image: "/devlinks.png",
    logo: "/devlinks-logo.svg",
    description:
      "DevLinks helps coders sync, sharing resources with just one link; organize connections and watch productivity climb to the brink.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFirebase key="firebase" />,
      <SiRedux key="redux" />,
    ],
    liveLink: "https://devlinks-full-stack-app.vercel.app/",
  },
  {
    name: "Misplace me",
    image: "/misplace-me.png",
    logo: "/misplaceme-logo.png",
    description:
      "MisplaceMe is a full-stack platform designed to reconnect lost items with their owners. It uses detailed reports from users to securely and efficiently reunite belongings. ",
    techStack: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiTypescript key="ts" />,
      <SiPostman key="postman" />,
      <SiVitest key="jest" />,
    ],
    liveLink: "https://misplaceme.vercel.app/",
  },
  {
    name: "AI Text Processor",
    image: "/ai-text-processor.jpg",
    logo: "/ai-text-processor-logo.svg",
    description:
      "Experience AI-powered text processing with smart summarization, detection and translation capabilities.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <SiTypescript key="ts" />,
      <SiHeadlessui key="headlessui" />,
      <SiGooglechrome key="chrome" />,
    ],
    liveLink: "https://ai-text-processor-sdt.vercel.app/",
  },
  {
    name: "Ticz",
    image: "/ticz.jpg",
    logo: "/ticz-logo.svg",
    description:
      "Book events with Ticz, seamless and quick; no login needed, just grab your ticket with a click.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiCloudinary key="cloudinary" />,
    ],
    liveLink: "https://conference-ticket-generator-delta.vercel.app/",
  },
  {
    name: "Archibuzz",
    image: "/archibuzz.jpg",
    logo: "/archibuzz-logo.jpg",
    description:
      "Archibuzz is where designs come alive with a buzz, blending AI and architecture to innovate and inspire. ",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiMui key="magicui" />,
      <SiFramer key="framer" />,
    ],
    liveLink: "https://archi-buzz.vercel.app/",
  },
  {
    name: "Timbu Cloud Store",
    image: "/timbu.jpg",
    logo: "/timbu-logo.svg",
    description:
      "Shop at Timbu, deliveries come to you; quality products and service that's always true.",
    techStack: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <FaJs key="js" />,
      <SiPostman key="postman" />,
      <SiVitest key="jest" />,
    ],
    liveLink: "https://timbu-cloud-app.netlify.app//",
  },
  {
    name: "Nexum",
    image: "/nexum.jpg",
    logo: "/nexum-logo.svg",
    description:
      "Nexum is a clean and intuitive Kanban board UI designed in Figma, for efficient task management, collaboration, and streamlined workflows.",
    techStack: [<FaFigma key="figma" />],
    liveLink:
      "https://www.figma.com/design/XyCBbrLKyLM1KIQLhAmHFi/Kanban-Board?node-id=10-7&t=GAzwMCNk1530D1Ix-0",
  },
];
