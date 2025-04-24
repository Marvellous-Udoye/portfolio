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
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="pt-5 px-1.5 pb-1.5 md:px-2.5 flex flex-col gap-2 rounded-[14px] w-full">
      <div className="relative">
        <div className="flex items-center justify-center gap-1.5">
          <h1 className="text-[#999] font-medium text-4xl sm:text-5xl flex">
            {isVisible ? <FlipNumber number={count} /> : <span>01</span>}
          </h1>
          <FaPlus color="#916CE7" className="size-4 md:size-5" />
        </div>
        <div
          className="absolute left-[0.832px] top-[2px] w-full h-2 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #111 100%)",
          }}
        ></div>
        <div
          className="absolute left-[0.832px] bottom-[2px] w-full h-5 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #111 100%)",
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
