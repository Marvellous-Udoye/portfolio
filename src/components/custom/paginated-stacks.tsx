import { motion, PanInfo, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MiniCard } from "./mini-card";

interface StackItem {
  icon: React.ReactNode;
  text: string;
}

interface PaginatedStacksProps {
  stacks: StackItem[];
}

export const PaginatedStacks = ({ stacks }: PaginatedStacksProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(stacks.length / itemsPerPage);

  const x = useMotionValue(0);
  const dragConstraints = { right: 0, left: -(totalPages - 1) * carouselWidth };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    const direction =
      velocity < -100 || (offset < 0 && velocity > -100 && velocity < 100)
        ? 1
        : -1;

    let newPage = currentPage + direction;

    newPage = Math.max(0, Math.min(totalPages - 1, newPage));

    setCurrentPage(newPage);
  };

  const renderPaginationDots = () => {
    return (
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.div
            key={index}
            className="h-2 w-2 rounded-full bg-gray-400 cursor-pointer"
            animate={{
              backgroundColor: currentPage === index ? "#916CE7" : "#666",
              scale: currentPage === index ? 1.2 : 1,
            }}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
    );
  };

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      setCarouselWidth(containerWidth);
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    x.set(-currentPage * carouselWidth);
  }, [currentPage, carouselWidth, x]);

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden" ref={carouselRef}>
        <motion.div
          className="grid grid-cols-2 gap-2"
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{
            x,
            width: `${totalPages * 100}%`,
            display: "grid",
            gridTemplateColumns: `repeat(${totalPages * 2}, 1fr)`,
          }}
          animate={{
            x: -currentPage * carouselWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {stacks.map((stack: StackItem, index: number) => (
            <div key={index} className="px-1">
              <MiniCard icon={stack.icon} text={stack.text} />
            </div>
          ))}
        </motion.div>
      </div>
      {renderPaginationDots()}
    </div>
  );
};
