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

import { experienceData } from "../../data/experience";
import { projectsData } from "../../data/projects";
import { servicesData } from "../../data/services";

export const Modal = ({ type = "projects" }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const data =
    type === "projects"
      ? projectsData
      : type === "services"
      ? servicesData
      : experienceData;

  const nextItem = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevItem = () => {
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
            <div className="w-10 h-10 p-1.5 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
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

        <motion.div
          className="my-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-wrap gap-3">
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
          className="relative p-6 bg-gray-900/50 rounded-lg border border-gray-800"
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
      </motion.div>
    );
  };

  const renderExperienceContent = () => {
    const experience = experienceData[currentIndex];

    return (
      <motion.div
        key={`experience-${currentIndex}`}
        custom={direction}
        variants={contentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex flex-col"
      >
        <div className="flex max-md:flex-col md:items-center gap-3 justify-between mb-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 p-1.5 rounded-md overflow-hidden bg-[#282828] flex items-center justify-center">
              <Image
                src={experience.image}
                alt={`${experience.company} logo`}
                width={48}
                height={48}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#916CE7]">
                {experience.company}
              </h3>
              <p className="text-sm text-gray-300">{experience.position}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
              {experience.date}
            </span>
          </motion.div>
        </div>

        <motion.div
          className="mb-6 p-4 bg-[#191919] rounded-lg border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-sm font-medium text-gray-300 mb-2">About Role</h4>
          <p className="text-gray-400 text-sm">{experience.description}</p>
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-sm font-medium text-gray-300 mb-3">
            Key Responsibilities
          </h4>
          <div className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="w-2 h-2 mt-1.5 rounded-full bg-violet-500"></div>
                <p className="text-sm text-gray-400">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const renderContent = () => {
    switch (type) {
      case "projects":
        return renderProjectContent();
      case "services":
        return renderServiceContent();
      case "experiences":
        return renderExperienceContent();
      default:
        return renderProjectContent();
    }
  };

  const getTitle = () => {
    switch (type) {
      case "projects":
        return "My Projects";
      case "services":
        return "My Services";
      case "experiences":
        return "My Work Experience";
      default:
        return "My Content";
    }
  };

  const getButtonText = () => {
    switch (type) {
      case "projects":
        return "View Works";
      case "services":
        return "View All Services";
      case "experiences":
        return "View Experiences";
      default:
        return "View Content";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="py-3 px-5 bg-[#916CE7] rounded-[12px] border border-[#101010] text-sm font-medium min-h-[45px] hover:bg-[#916CE7] hover:border-[#916CE7] cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-violet-700/20">
          {getButtonText()}
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
                    {getTitle()}
                  </DialogTitle>
                </DialogHeader>
              </motion.div>

              <motion.div
                custom={1}
                variants={modalBlockVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative mt-16 w-full bg-[#101010] border-l border-r border-[rgba(255,255,255,0.05)] z-0 px-6 pt-4 pb-16"
                style={{ minHeight: "400px" }}
              >
                <AnimatePresence custom={direction} mode="wait">
                  {renderContent()}
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
                  onClick={prevItem}
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
                  onClick={nextItem}
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
