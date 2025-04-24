"use client";

import { motion, PanInfo, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { Header } from "../custom/card-header";
import { MiniCard } from "../custom/mini-card";
import { ProjectCard } from "../custom/project-card";
import { ProjectsIcon, ServicesIcon, StacksIcon } from "../icons/icons";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface StackItem {
  icon: React.ReactNode;
  text: string;
}

interface PaginatedStacksProps {
  stacks: StackItem[];
}

const stacks: StackItem[] = [
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML5",
  },
  {
    icon: <FaCss3 color="#CCCCCC" size={24} />,
    text: "CSS3",
  },
  {
    icon: <FaJs color="#CCCCCC" size={24} />,
    text: "JavaScript",
  },
  {
    icon: <FaReact color="#CCCCCC" size={24} />,
    text: "React",
  },
  {
    icon: <FaPython color="#CCCCCC" size={24} />,
    text: "Python",
  },
  {
    icon: <FaGit color="#CCCCCC" size={24} />,
    text: "Git",
  },
  {
    icon: <FaGithub color="#CCCCCC" size={24} />,
    text: "GitHub",
  },
  {
    icon: <FaPython color="#CCCCCC" size={24} />,
    text: "React",
  },
  {
    icon: <FaPython color="#CCCCCC" size={24} />,
    text: "React",
  },
];

const services = [
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
];

const projects = [
  "/genz.ad.jpg",
  "/departmental-portal.jpg",
  "/my-uni.jpg",
  "/devlinks.png",
  "/woodz.png",
  "/book-tracker.png",
];

const PaginatedStacks: React.FC<PaginatedStacksProps> = ({ stacks }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(stacks.length / itemsPerPage);

  const x = useMotionValue(0);
  const dragConstraints = { right: 0, left: -(totalPages - 1) * carouselWidth };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    const direction =
      velocity < -100 || (offset < 0 && velocity > -100 && velocity < 100)
        ? 1
        : -1;

    let newPage = currentPage + direction;

    newPage = Math.max(0, Math.min(totalPages - 1, newPage));

    setCurrentPage(newPage);
  };

  const renderPaginationDots = () => {
    return (
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.div
            key={index}
            className="h-2 w-2 rounded-full bg-gray-400 cursor-pointer"
            animate={{
              backgroundColor: currentPage === index ? "#916CE7" : "#666",
              scale: currentPage === index ? 1.2 : 1,
            }}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
    );
  };

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      setCarouselWidth(containerWidth);
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    x.set(-currentPage * carouselWidth);
  }, [currentPage, carouselWidth, x]);

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden" ref={carouselRef}>
        <motion.div
          className="grid grid-cols-2 gap-2"
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{
            x,
            width: `${totalPages * 100}%`,
            display: "grid",
            gridTemplateColumns: `repeat(${totalPages * 2}, 1fr)`,
            cursor: "grab",
          }}
          animate={{
            x: -currentPage * carouselWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {stacks.map((stack: StackItem, index: number) => (
            <div key={index} className="px-1">
              <MiniCard icon={stack.icon} text={stack.text} />
            </div>
          ))}
        </motion.div>
      </div>
      {renderPaginationDots()}
    </div>
  );
};

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
      <Card className="p-5 flex flex-col gap-7.5 rounded-[20px]">
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
          icon={<ProjectsIcon />}
        />
        <CardContent className="px-0 overflow-hidden">
          <motion.div
            ref={projectsCarousel}
            className="cursor-grab overflow-hidden"
          >
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
              {projects.map((project, index) => (
                <motion.div key={index} className="px-1 ">
                  <ProjectCard image={project} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </CardContent>
        <Button className="absolute bottom-4.5 left-1/4 max-md:left-1/2 max-md:-translate-x-1/2 py-[13px] px-7.5 bg-[#916CE7] rounded-[12px] border border-[#101010] text-sm font-medium min-h-[45px] hover:bg-[#916CE7] hover:border-[#916CE7] cursor-pointer">
          View Works
        </Button>
      </Card>

      <Card className="relative px-3 pt-3 pb-10 flex flex-col gap-7.5 rounded-[20px]">
        <Header
          title="Services"
          description="Solutions Suite"
          icon={<ServicesIcon />}
        />
        <CardContent className="px-0 overflow-hidden flex flex-col gap-2">
          <motion.div
            ref={servicesCarouselForward}
            className="cursor-grab overflow-hidden"
          >
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: [-serviceWidth, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
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
            className="cursor-grab overflow-hidden"
          >
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: [0, -serviceWidth],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
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
        <Button className="absolute bottom-4.5 left-1/4 max-md:left-1/2 max-md:-translate-x-1/2 py-[13px] px-7.5 bg-[#916CE7] rounded-[12px] border border-[#101010] text-sm font-medium min-h-[45px] hover:bg-[#916CE7] hover:border-[#916CE7] cursor-pointer">
          View All Services
        </Button>
      </Card>
    </section>
  );
};
