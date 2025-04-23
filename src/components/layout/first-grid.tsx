"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { Header } from "../custom/card-header";
import { MiniCard } from "../custom/mini-card";
import { ProjectCard } from "../custom/project-card";
import { ProjectsIcon, ServicesIcon, StacksIcon } from "../icons/icons";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const stacks = [
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
        <CardContent className="grid grid-cols-2 gap-2 px-0">
          {stacks.map((stack, index) => (
            <div key={index}>
              <MiniCard icon={stack.icon} text={stack.text} />
            </div>
          ))}
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
