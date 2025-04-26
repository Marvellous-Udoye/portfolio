"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaJs, FaReact } from "react-icons/fa";
import { SiFramer, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    name: "GenZ.AD",
    image: "/genz.ad.jpg",
    logo: "/genz-logo.png",
    description:
      "A modern advertising platform targeting Gen Z audiences with interactive ad experiences and analytics.",
    techStack: [
      <FaReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <SiFramer key="framer" />,
    ],
    githubLink: "https://github.com/yourusername/genz-ad",
    liveLink: "https://genz-ad.com",
  },
  {
    id: 2,
    name: "Departmental Portal",
    image: "/departmental-portal.jpg",
    logo: "/dept-logo.png",
    description:
      "A comprehensive portal for university departments to manage courses, students, and faculty resources.",
    techStack: [
      <FaReact key="react" />,
      <FaJs key="js" />,
      <SiTailwindcss key="tailwind" />,
    ],
    githubLink: "https://github.com/yourusername/departmental-portal",
    liveLink: "https://departmental-portal.edu",
  },
  {
    id: 3,
    name: "MyUni",
    image: "/my-uni.jpg",
    logo: "/myuni-logo.png",
    description:
      "A student-focused application for managing university life including schedules, assignments, and campus events.",
    techStack: [
      <FaReact key="react" />,
      <SiNextdotjs key="next" />,
      <FaJs key="js" />,
    ],
    githubLink: "https://github.com/yourusername/my-uni",
    liveLink: "https://my-uni.app",
  },
  {
    id: 4,
    name: "DevLinks",
    image: "/devlinks.png",
    logo: "/devlinks-logo.png",
    description:
      "A centralized platform for developers to organize and share all their important links and resources.",
    techStack: [
      <FaReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
    ],
    githubLink: "https://github.com/yourusername/devlinks",
    liveLink: "https://devlinks.io",
  },
  {
    id: 5,
    name: "Woodz",
    image: "/woodz.png",
    logo: "/woodz-logo.png",
    description:
      "An e-commerce platform for artisanal wooden furniture with customizable options and 3D previews.",
    techStack: [
      <FaReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiFramer key="framer" />,
    ],
    githubLink: "https://github.com/yourusername/woodz",
    liveLink: "https://woodz.store",
  },
  {
    id: 6,
    name: "Book Tracker",
    image: "/book-tracker.png",
    logo: "/booktracker-logo.png",
    description:
      "A personal library management system to track reading progress, take notes, and discover new books.",
    techStack: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <FaJs key="js" />,
    ],
    githubLink: "https://github.com/yourusername/book-tracker",
    liveLink: "https://book-tracker.app",
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

  const data = type === "projects" ? projectsData : servicesData;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const renderProjectContent = () => {
    const project = projectsData[currentIndex];

    return (
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/"
                alt={`${project.name} logo`}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">{project.name}</h3>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <FaGithub size={16} />
                <span>Code</span>
              </Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink size={16} />
                <span>Live</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>

        <p className="mb-4 text-gray-300">{project.description}</p>

        <div className="flex gap-2 mb-4">
          <span className="text-sm text-gray-400">Tech Stack:</span>
          <div className="flex gap-3">
            {project.techStack.map((icon, i) => (
              <span key={i} className="text-xl text-gray-300">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderServiceContent = () => {
    const service = servicesData[currentIndex];

    return (
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-200">
            <span className="text-2xl">?</span>
          </div>
          <h3 className="text-xl font-bold">{service.name}</h3>
        </div>

        <p className="mb-4 text-gray-300">{service.description}</p>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="py-3 px-7 bg-[#916CE7] rounded-[12px] border border-[#101010] text-sm font-medium min-h-[45px] hover:bg-[#916CE7] hover:border-[#916CE7] cursor-pointer">
          {type === "projects" ? "View Works" : "View All Services"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full border bg-[#101010] border-[rgba(255,255,255,0.05)] text-[#CCC]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {type === "projects" ? "My Projects" : "My Services"}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {type === "projects"
            ? renderProjectContent()
            : renderServiceContent()}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="border-gray-700 hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="border-gray-700 hover:bg-gray-800"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
