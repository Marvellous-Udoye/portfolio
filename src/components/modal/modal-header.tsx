"use client";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface ModalHeaderProps {
  title: string;
}

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

export const ModalHeader = ({ title }: ModalHeaderProps) => {
  return (
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
          {title}
        </DialogTitle>
      </DialogHeader>
    </motion.div>
  );
};
