import { AnimatePresence, motion } from "framer-motion";

interface FlipDigitProps {
  digit: number;
}

export const FlipDigit = ({ digit }: FlipDigitProps) => {
  return (
    <div className="relative w-[1ch] h-[1.2em] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={digit}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
