import { useEffect, useState } from "react";
import { FlipDigit } from "./flip-digits";

interface FlipNumberProps {
  number: number;
  className?: string;
}

export const FlipNumber = ({ number, className = "" }: FlipNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(1);

  useEffect(() => {
    let isCancelled = false;

    const interval = setInterval(() => {
      setDisplayNumber((prev) => {
        if (isCancelled) return prev;

        if (prev === number) {
          clearInterval(interval);
          return prev;
        }

        const diff = Math.abs(prev - number);
        const step = diff > 10 ? Math.floor(Math.random() * 10) + 1 : 1;

        const next = prev < number ? prev + step : prev - step;
        return Math.min(
          Math.max(next, Math.min(prev, number)),
          Math.max(prev, number)
        );
      });
    }, 100);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [number]);

  const formattedNumber = displayNumber.toString().padStart(2, "0");
  const digits = formattedNumber.split("").map(Number);

  return (
    <div className={`flex ${className}`}>
      {digits.map((digit, index) => (
        <FlipDigit key={index} digit={digit} />
      ))}
    </div>
  );
};
