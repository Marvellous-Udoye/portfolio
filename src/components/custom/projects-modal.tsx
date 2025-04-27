"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaJs, FaReact } from "react-icons/fa";
import {
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const projectsData = [
  {
    id: 1,
    name: "Genz.ad",
    image: "/genz.ad.jpg",
    logo: "/genz.ad.jpg",
    description:
      "A modern advertising platform targeting Gen Z audiences with interactive ad experiences and analytics.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
    ],
    githubLink: "https://github.com/hngprojects/AI-Ad-Gen-Frontend",
    liveLink: "https://genz.ad/",
  },
  {
    id: 2,
    name: "Departmental Portal",
    image: "/departmental-portal.jpg",
    logo: "/departmental-portal.jpg",
    description:
      "A comprehensive portal for university departments to manage courses, students, and faculty resources.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    githubLink: "https://github.com/Marvellous-Udoye/departmental-website",
    liveLink: "https://departmental-portal-s.vercel.app/",
  },
  {
    id: 3,
    name: "MyUni",
    image: "/my-uni.jpg",
    logo: "/my-uni.jpg",
    description:
      "A student-focused application for managing university life including schedules, assignments, and campus events.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
    ],
    githubLink: "https://github.com/Marvellous-Udoye/my-uni",
    liveLink: "https://my-uni-rho.vercel.app/",
  },
  {
    id: 4,
    name: "DevLinks",
    image: "/devlinks.png",
    logo: "/devlinks.png",
    description:
      "A centralized platform for developers to organize and share all their important links and resources.",
    techStack: [
      <FaReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
    ],
    githubLink: "https://github.com/Marvellous-Udoye/Devlinks-Full-stack-app",
    liveLink: "https://devlinks-full-stack-app.vercel.app/",
  },
  {
    id: 5,
    name: "Mobtech",
    image: "/mobtech.jpg",
    logo: "/mobtech.jpg",
    description:
      "Mobtech Synergies Ltd is a forward-thinking technology company on a mission to solve pressing challenges at both community and global scales.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    githubLink: "https://github.com/Marvellous-Udoye/mobtech-website",
    liveLink: "https://www.mobtechsynergies.com/",
  },
  {
    id: 6,
    name: "Woodz",
    image: "/woodz.png",
    logo: "/woodz.png",
    description:
      "An e-commerce platform for artisanal wooden furniture with customizable options and 3D previews.",
    techStack: [
      <FaReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiFramer key="framer" />,
    ],
    githubLink: "https://github.com/Marvellous-Udoye/woodz",
    liveLink: "https://marvellous-udoye.github.io/woodz/",
  },
  {
    id: 7,
    name: "AI Text Processor",
    image: "/ai-text-processor.jpg",
    logo: "/ai-text-processor.jpg",
    description:
      "Experience AI-powered text processing with smart summarization, detection and translation capabilities.",
    techStack: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <FaJs key="js" />,
    ],
    githubLink:
      "https://github.com/Marvellous-Udoye/hngx-stage3-ai-text-processor",
    liveLink: "https://ai-text-processor-sdt.vercel.app/",
  },
  {
    id: 8,
    name: "Book Tracker",
    image: "/book-tracker.png",
    logo: "/book-tracker.png",
    description:
      "A personal library management system to track reading progress, take notes, and discover new books.",
    techStack: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <FaJs key="js" />,
    ],
    githubLink: "https://github.com/Marvellous-Udoye/Book-Tracking-App",
    liveLink: "https://book-tracking-app-nu.vercel.app/",
  },
  {
    id: 9,
    name: "Archibuzz",
    image: "/archibuzz.jpg",
    logo: "/archibuzz.jpg",
    description:
      "ARCHIBUZZ STUDIOS, where architecture and AI come together to innovate and inspire.",
    techStack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    githubLink: "https://github.com/Marvellous-Udoye/archi-buzz",
    liveLink: "https://archi-buzz.vercel.app/",
  },
  {
    id: 10,
    name: "Timbu Cloud Store",
    image: "/timbu.jpg",
    logo: "/timbu.jpg",
    description:
      "Get the Best Quality Product with Convenient Checkout Process, Quick Customer Service, Product Quality,Fast Delivery",
    techStack: [
      <FaReact key="react" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    githubLink: "https://github.com/Marvellous-Udoye/Timbu-cloud-store",
    liveLink: "https://timbu-cloud-app.netlify.app//",
  },
];

const servicesData = [
  {
    id: 1,
    name: "Problem Solving",
    description:
      "Expert problem-solving solutions for complex technical challenges across web and mobile platforms.",
    icon: "HiOutlineLightBulb",
  },
  {
    id: 2,
    name: "Team Leadership",
    description:
      "Effective team management and leadership to drive project success and team productivity.",
    icon: "HiOutlineUserGroup",
  },
  {
    id: 3,
    name: "Communication",
    description:
      "Clear, concise communication to ensure all stakeholders remain informed and aligned.",
    icon: "HiOutlineChatAlt",
  },
  {
    id: 4,
    name: "Time Management",
    description:
      "Strategic time planning and resource allocation to ensure project delivery within deadlines.",
    icon: "HiOutlineClock",
  },
  {
    id: 5,
    name: "DevOps & Deployment",
    description:
      "Comprehensive DevOps solutions including CI/CD pipelines, containerization, and cloud deployment.",
    icon: "FaServer",
  },
];

export const ProjectsModal = ({ type = "projects" }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const data = type === "projects" ? projectsData : servicesData;

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const modalBlockVariants = {
    hidden: (custom: number) => {
      const positions = [
        { x: "-100%", y: 0 },
        { x: "100%", y: 0 },
        { x: 0, y: "-100%" },
        { x: 0, y: "100%" },
      ];
      return positions[custom % positions.length];
    },
    visible: {
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
    exit: (custom: number) => {
      const positions = [
        { x: "100%", y: 0 },
        { x: "-100%", y: 0 },
        { x: 0, y: "100%" },
        { x: 0, y: "-100%" },
      ];
      return {
        ...positions[custom % positions.length],
        transition: { type: "spring", stiffness: 100, damping: 20 },
      };
    },
  };

  const contentVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  const renderProjectContent = () => {
    const project = projectsData[currentIndex];

    return (
      <motion.div
        key={`project-${currentIndex}`}
        custom={direction}
        variants={contentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex flex-col"
      >
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              ) : (
                <span className="text-xl font-bold text-violet-400">
                  {project.name.charAt(0)}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold">{project.name}</h3>
          </motion.div>

          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-gray-700 hover:bg-gray-800 transition-all duration-300"
            >
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <FaGithub size={16} />
                <span className="hidden md:inline-block">Code</span>
              </Link>
            </Button>
            <Button
              variant="default"
              size="sm"
              asChild
              className="bg-violet-700 hover:bg-violet-600 transition-all duration-300"
            >
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink size={16} />
                <span className="hidden md:inline-block">Live</span>
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative w-full h-36 md:h-64 mb-4 overflow-hidden rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {project.description}
        </motion.p>

        <div className="flex items-center gap-3">
          {project.techStack.map((stack, index) => (
            <motion.div
              key={index}
              className="mt-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {stack}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-sm text-gray-400">Tech Stack:</span>
          <div className="flex gap-3">
            {project.techStack.map((icon, i) => (
              <motion.span
                key={i}
                className="text-xl text-gray-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
              >
                {icon}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const renderServiceContent = () => {
    const service = servicesData[currentIndex];

    return (
      <motion.div
        key={`service-${currentIndex}`}
        custom={direction}
        variants={contentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex flex-col"
      >
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-14 h-14 bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-400 border border-violet-700/50">
            <motion.span
              className="text-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
            >
              {service.id}
            </motion.span>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
            {service.name}
          </h3>
        </motion.div>

        <motion.div
          className="relative p-6 bg-gray-900/50 rounded-lg border border-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.span
            className="absolute -top-3 right-4 px-2 py-1 bg-violet-900/70 text-xs rounded-md border border-violet-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Details
          </motion.span>

          <p className="text-gray-300 leading-relaxed">{service.description}</p>

          <motion.div
            className="w-full h-1 bg-gradient-to-r from-violet-700 to-indigo-500 mt-4 rounded"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-12 bg-gray-800/50 rounded-md flex items-center justify-center border border-gray-700/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
              <span className="text-xs text-gray-400">Feature {i}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="py-3 px-7 bg-[#916CE7] rounded-[12px] border border-[#101010] text-sm font-medium min-h-[45px] hover:bg-[#916CE7] hover:border-[#916CE7] cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-violet-700/20">
          {type === "projects" ? "View Works" : "View All Services"}
        </Button>
      </DialogTrigger>

      <AnimatePresence>
        {open && (
          <DialogContent
            className="max-w-3xl w-full border-none bg-transparent text-[#CCC] p-0 max-sm:px-4 overflow-visible"
            forceMount
          >
            <div className="relative">
              <motion.div
                custom={0}
                variants={modalBlockVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-0 left-0 w-full h-16 bg-[#101010] border-t border-l border-r border-[rgba(255,255,255,0.05)] rounded-t-xl z-10"
              >
                <DialogHeader className="p-4">
                  <DialogTitle className="text-2xl font-bold text-center text-gradient bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                    {type === "projects" ? "My Projects" : "My Services"}
                  </DialogTitle>
                </DialogHeader>
              </motion.div>

              <motion.div
                custom={1}
                variants={modalBlockVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative mt-16 w-full bg-[#101010] border-l border-r border-[rgba(255,255,255,0.05)] z-0 px-6 pt-4"
                style={{ height: "calc(100% - 5rem)" }}
              >
                <AnimatePresence custom={direction} mode="wait">
                  {type === "projects"
                    ? renderProjectContent()
                    : renderServiceContent()}
                </AnimatePresence>
              </motion.div>

              <motion.div
                custom={2}
                variants={modalBlockVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute bottom-0 left-0 w-full h-16 bg-[#101010] border-b border-l border-r border-[rgba(255,255,255,0.05)] rounded-b-xl z-10 flex items-center justify-between px-6"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevProject}
                  className="border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:border-violet-500"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex gap-1">
                  {data.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentIndex ? "bg-violet-500" : "bg-gray-700"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextProject}
                  className="border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:border-violet-500"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};
