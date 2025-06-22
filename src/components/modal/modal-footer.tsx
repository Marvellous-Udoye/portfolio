"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ModalFooterProps {
  currentIndex: number;
  dataLength: number;
  onPrevious: () => void;
  onNext: () => void;
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

export const ModalFooter = ({
  currentIndex,
  dataLength,
  onPrevious,
  onNext,
}: ModalFooterProps) => {
  return (
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
        onClick={onPrevious}
        className="border-gray-700 cursor-pointer hover:bg-gray-800 transition-all duration-300 hover:border-violet-500 bg-black text-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex gap-1">
        {Array.from({ length: dataLength }).map((_, index) => (
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
        onClick={onNext}
        className="border-gray-700 cursor-pointer hover:bg-gray-800 transition-all duration-300 hover:border-violet-500 bg-black text-white"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};
