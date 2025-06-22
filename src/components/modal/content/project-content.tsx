"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectData } from "../../../types/modal";

interface ProjectContentProps {
  project: ProjectData;
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

export const ProjectContent = ({
  project,
  currentIndex,
  direction,
}: ProjectContentProps) => {
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
                src={project.logo || "/placeholder.svg"}
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
          src={project.image || "/placeholder.svg"}
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
