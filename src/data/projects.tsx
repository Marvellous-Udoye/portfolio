import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCloudinary,
  SiDjango,
  SiFirebase,
  SiFramer,
  SiGooglechrome,
  SiHeadlessui,
  SiMui,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiUikit,
  SiVitest,
} from "react-icons/si";

export const projectsData = [
  {
    id: 1,
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
    liveLink: "https://genz.ad/",
  },
  {
    id: 2,
    name: "Departmental Portal",
    image: "/departmental-portal.jpg",
    logo: "/departmental-portal-logo.jpg",
    description:
      "Connect, collaborate, and thrive in your academic journey. Access course materials, track documents, receive important notifications, and stay updated with departmental activities - all in one seamless platform.",
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
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Mobtech",
    image: "/mobtech.jpg",
    logo: "/mobtech-logo.jpeg",
    description:
      "Mobtech Synergies Ltd is a forward-thinking technology company on a mission to solve pressing challenges at both community and global scales.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <FaFigma key="figma" />,
      <SiFirebase key="firebase" />,
    ],
    liveLink: "https://www.mobtechsynergies.com/",
  },
  {
    id: 6,
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
    id: 7,
    name: "E-library",
    image: "/e-library.jpg",
    logo: "/e-library-logo.jpg",
    description:
      "Access a comprehensive collection of academic resources, research papers, and digital content. Empowering education through technology.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiHeadlessui key="headlessui" />,
      <SiUikit key="uikit" />,
      <SiDjango key="django" />,
      <FaPython key="python" />,
    ],
    liveLink: "https://e-library-ws.vercel.app/",
  },
  {
    id: 8,
    name: "Woodz",
    image: "/woodz.png",
    logo: "/woodz-logo.svg",
    description:
      "Explore Woodz for furniture that's good, artisanal craftsmanship carved from premium wood.",
    techStack: [
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <FaFigma key="figma" />,
    ],
    liveLink: "https://marvellous-udoye.github.io/woodz/",
  },
  {
    id: 9,
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
    id: 10,
    name: "Book Tracker",
    image: "/book-tracker.jpg",
    logo: "/book-tracker.jpg",
    description:
      "Track Your Reading Progress. Organize, manage, and track the books you're reading in one simple app.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiRedux key="redux" />,
    ],
    liveLink: "https://book-tracking-app-nu.vercel.app/",
  },
  {
    id: 11,
    name: "Color Game",
    image: "/color.jpg",
    logo: "/color.jpg",
    description:
      "The Color Game brings fun and fame, test your color perception in this addictive brain game.",
    techStack: [
      <FaReact key="react" />,
      <FaJs key="js" />,
      <FaCss3Alt key="css" />,
    ],
    liveLink: "https://timbu-cloud-app.netlify.app//",
  },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
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
