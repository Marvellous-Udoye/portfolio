"use client";

import { AnimatePresence, motion } from "framer-motion";
import type {
    ExperienceData,
    ModalType,
    ProjectData,
    ServiceData,
} from "../../types/modal";
import { ExperienceContent } from "./content/experience-content";
import { ProjectContent } from "./content/project-content";
import { ServiceContent } from "./content/service-content";

interface ModalContentProps {
  type: ModalType;
  currentIndex: number;
  direction: number;
  data: (ProjectData | ServiceData | ExperienceData)[];
}

export const modalBlockVariants = {
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

export const ModalContent = ({
  type,
  currentIndex,
  direction,
  data,
}: ModalContentProps) => {
  const renderContent = () => {
    const currentItem = data[currentIndex];

    switch (type) {
      case "projects":
        return (
          <ProjectContent
            project={currentItem as ProjectData}
            currentIndex={currentIndex}
            direction={direction}
          />
        );
      case "services":
        return (
          <ServiceContent
            service={currentItem as ServiceData}
            currentIndex={currentIndex}
            direction={direction}
          />
        );
      case "experiences":
        return (
          <ExperienceContent
            experience={currentItem as ExperienceData}
            currentIndex={currentIndex}
            direction={direction}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      custom={1}
      variants={modalBlockVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative mt-16 w-full bg-[#101010] border-l border-r border-[rgba(255,255,255,0.05)] z-0 px-4 pt-4 pb-16"
      style={{ minHeight: "400px" }}
    >
      <AnimatePresence custom={direction} mode="wait">
        {renderContent()}
      </AnimatePresence>
    </motion.div>
  );
};
