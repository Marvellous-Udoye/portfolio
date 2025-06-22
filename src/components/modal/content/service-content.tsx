"use client";

import { motion } from "framer-motion";
import type { ServiceData } from "../../../types/modal";

interface ServiceContentProps {
  service: ServiceData;
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

export const ServiceContent = ({
  service,
  currentIndex,
  direction,
}: ServiceContentProps) => {
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
