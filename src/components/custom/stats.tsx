import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Card } from "../ui/card";
import { FlipNumber } from "./flip-number";

interface StatsProps {
  icon: React.ReactNode;
  text: string;
  count: number;
}

export const StatsCard = ({ icon, text, count }: StatsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="px-1.5 pt-1.5 pb-2.5 md:px-2.5 flex flex-col gap-2 rounded-[14px] w-full">
      <div className="relative">
        <div className="flex items-center justify-center gap-1.5 py-1">
          <h1 className="text-[#999] font-medium text-4xl sm:text-5xl flex">
            {isVisible ? <FlipNumber number={count} /> : <span>01</span>}
          </h1>
          <FaPlus color="#916CE7" className="size-4 md:size-5" />
        </div>
        <div
          className="absolute left-[0.832px] top-0 w-full h-2 md:h-3 pointer-events-none rounded-t-md"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.7) 100%)",
          }}
        ></div>
        <div
          className="absolute left-[0.832px] bottom-0 w-full h-5 md:h-6 pointer-events-none rounded-b-md"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.9) 100%)",
          }}
        ></div>
      </div>
      <div className="flex gap-1.5 md:gap-2.5 items-center justify-center bg-[#141414] rounded-full border-[0.5px] border-[rgba(255,255,255,0.05)] text-[#ccc] text-[10px] md:text-[13px] font-medium px-1 md:px-3 py-1.5 ">
        <div>{icon}</div>
        <p> {text}</p>
      </div>
    </Card>
  );
};
