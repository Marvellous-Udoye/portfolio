"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ExperienceData } from "../../../types/modal";

interface ExperienceContentProps {
  experience: ExperienceData;
  currentIndex: number;
  direction: number;
}

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

export const ExperienceContent = ({
  experience,
  currentIndex,
  direction,
}: ExperienceContentProps) => {
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
              src={experience.image || "/placeholder.svg"}
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
