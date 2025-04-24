"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedRoleProps {
  roles: string[];
  transitionDuration?: number;
  className?: string;
}

export const AnimatedRole = ({
  roles = [""],
  transitionDuration = 2,
  className = "",
}: AnimatedRoleProps) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [, setPrevRoleIndex] = useState(roles.length - 1);
  const [, setNextRoleIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevRoleIndex(currentRoleIndex);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setNextRoleIndex((prevIndex) => (prevIndex + 2) % roles.length);
    }, transitionDuration * 1000);

    return () => clearInterval(interval);
  }, [currentRoleIndex, roles.length, transitionDuration]);

  return (
    <div className={`flex items-center gap-1 text-xs md:text-sm ${className}`}>
      <span className="text-[#999] font-medium whitespace-nowrap h-6">
        I&apos;m a
      </span>
      <div className={`relative h-6 w-full overflow-hidden ${className}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentRoleIndex}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              type: "tween",
              duration: transitionDuration * 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-full"
          >
            <span className="text-[#916CE7] font-medium">
              {roles[currentRoleIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
