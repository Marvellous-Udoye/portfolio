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

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    const measureWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  useEffect(() => {
    x.set(-currentPage * carouselWidth);
  }, [currentPage, carouselWidth, x]);

  const paginatedStacks = Array.from({ length: totalPages }, (_, i) =>
    stacks.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden" ref={carouselRef}>
        {carouselWidth > 0 && (
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{
              left: -(carouselWidth * (totalPages - 1)),
              right: 0,
            }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{
              x,
              width: `${100 * totalPages}%`,
            }}
            animate={{ x: -currentPage * carouselWidth }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {paginatedStacks.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-2 gap-2 px-2"
                style={{
                  width: `${carouselWidth}px`,
                }}
              >
                {page.map((stack, i) => (
                  <MiniCard key={i} icon={stack.icon} text={stack.text} />
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </div>

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
    </div>
  );
};
