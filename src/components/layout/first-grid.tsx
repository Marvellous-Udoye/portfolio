"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaCss3Alt,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  HiOutlineChatAlt,
  HiOutlineClock,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from "react-icons/hi";
import {
  SiDjango,
  SiFirebase,
  SiFramer,
  SiJest,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";
import { Header } from "../custom/card-header";
import { MiniCard } from "../custom/mini-card";
import { PaginatedStacks } from "../custom/paginated-stacks";
import { ProjectCard } from "../custom/project-card";
import { ProjectsModal } from "../custom/projects-modal";
import { ServicesIcon, StacksIcon, WorkIcon } from "../icons/icons";
import { Card, CardContent } from "../ui/card";

const stacks = [
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
];

const services = [
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

const projectsImages = [
  "/genz.ad.jpg",
  "/departmental-portal.jpg",
  "/my-uni.jpg",
  "/devlinks.png",
  "/woodz.png",
  "/book-tracker.png",
];

export const FirstGrid = () => {
  const [width, setWidth] = useState<number>(0);
  const [serviceWidth, setServiceWidth] = useState<number>(0);
  const projectsCarousel = useRef<HTMLDivElement>(null);
  const servicesCarouselForward = useRef<HTMLDivElement>(null);
  const servicesCarouselBackward = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectsCarousel.current) {
      setWidth(
        projectsCarousel.current.scrollWidth -
          projectsCarousel.current.offsetWidth
      );
    }

    if (servicesCarouselForward.current) {
      setServiceWidth(
        servicesCarouselForward.current.scrollWidth -
          servicesCarouselForward.current.offsetWidth
      );
    }

    const handleResize = () => {
      if (projectsCarousel.current) {
        setWidth(
          projectsCarousel.current.scrollWidth -
            projectsCarousel.current.offsetWidth
        );
      }

      if (servicesCarouselForward.current) {
        setServiceWidth(
          servicesCarouselForward.current.scrollWidth -
            servicesCarouselForward.current.offsetWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="grid grid-cols-1 gap-3">
      <Card className="py-5 px-3 flex flex-col gap-7.5 rounded-[20px]">
        <Header
          title="My Stacks"
          description="Tech Arsenal"
          icon={<StacksIcon />}
        />
        <CardContent className="px-0">
          <PaginatedStacks stacks={stacks} />
        </CardContent>
      </Card>

      <Card className="relative px-3 pt-3 pb-10 flex flex-col gap-7.5 rounded-[20px]">
        <Header
          title="Projects"
          description="Works Gallery"
          icon={<WorkIcon />}
        />
        <CardContent className="px-0 overflow-hidden">
          <motion.div ref={projectsCarousel} className="overflow-hidden">
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 0 }}
              animate={{
                x: [-width, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {projectsImages.map((projectImage, index) => (
                <motion.div key={index} className="px-1 ">
                  <ProjectCard image={projectImage} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </CardContent>
        <div className="absolute bottom-4.5 left-1/4 max-xl:left-1/2 max-xl:-translate-x-1/2">
          <ProjectsModal type="projects" />
        </div>
      </Card>

      <Card className="relative px-3 pt-3 pb-10 flex flex-col gap-7.5 rounded-[20px]">
        <Header
          title="Services"
          description="Solutions Suite"
          icon={<ServicesIcon />}
        />
        <CardContent className="px-0 overflow-hidden flex flex-col gap-2">
          <motion.div ref={servicesCarouselForward} className="overflow-hidden">
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: [-serviceWidth, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
            >
              {services.concat(services).map((service, index) => (
                <motion.div key={index} className="px-1 min-w-[180px]">
                  <MiniCard icon={service.icon} text={service.text} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={servicesCarouselBackward}
            className="overflow-hidden"
          >
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: [0, -serviceWidth],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
            >
              {services.concat(services).map((service, index) => (
                <motion.div key={index} className="px-1 min-w-[180px]">
                  <MiniCard icon={service.icon} text={service.text} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </CardContent>
        <div className="absolute bottom-4.5 left-[20%] max-xl:left-1/2 max-xl:-translate-x-1/2">
          <ProjectsModal type="services" />
        </div>
      </Card>
    </section>
  );
};
