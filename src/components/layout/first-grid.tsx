"use client";

import { projectsImages, services, stacks } from "@/data/general";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Header } from "../custom/card-header";
import { MiniCard } from "../custom/mini-card";
import { PaginatedStacks } from "../custom/paginated-stacks";
import { ProjectCard } from "../custom/project-card";
import { ServicesIcon, StacksIcon, WorkIcon } from "../icons/icons";
import { Modal } from "../modal/modal";
import { Card, CardContent } from "../ui/card";

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
          <motion.div
            ref={projectsCarousel}
            className="overflow-hidden relative"
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
              {projectsImages.map((projectImage, index) => (
                <motion.div key={index} className="px-1 ">
                  <ProjectCard image={projectImage} />
                </motion.div>
              ))}
            </motion.div>
            <div
              className="absolute right-0 bottom-0 z-0"
              style={{
                width: "100%",
                height: "50%",
                background:
                  "linear-gradient(180deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
          </motion.div>
        </CardContent>
        <div className="absolute bottom-4.5 left-1/4 max-xl:left-1/2 max-xl:-translate-x-1/2">
          <Modal type="projects" data={projectsData} />
        </div>
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
            className="overflow-hidden relative"
          >
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
            <div
              className="absolute left-0 top-0 bottom-0 z-10"
              style={{
                width: "30px",
                height: "100%",
                background:
                  "linear-gradient(270deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 z-10"
              style={{
                width: "30px",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
          </motion.div>

          <motion.div
            ref={servicesCarouselBackward}
            className="overflow-hidden relative"
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
            <div
              className="absolute left-0 top-0 bottom-0 z-10"
              style={{
                width: "30px",
                height: "100%",
                background:
                  "linear-gradient(270deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 z-10"
              style={{
                width: "30px",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
          </motion.div>
        </CardContent>
        <div className="absolute bottom-4.5 left-[20%] max-xl:left-1/2 max-xl:-translate-x-1/2">
          <Modal type="services" data={servicesData} />
        </div>
      </Card>
    </section>
  );
};
