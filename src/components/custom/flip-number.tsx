import { useEffect, useState } from "react";
import { FlipDigit } from "./flip-digits";

interface FlipNumberProps {
  number: number;
  className?: string;
}

export const FlipNumber = ({ number, className = "" }: FlipNumberProps) => {
  const [targetNumber, setTargetNumber] = useState(number);
  const [displayNumber, setDisplayNumber] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setTargetNumber(number);
    setIsAnimating(true);

    setDisplayNumber(1);

    const interval = setInterval(() => {
      setDisplayNumber((prev) => {
        if (prev === targetNumber) {
          clearInterval(interval);
          setIsAnimating(false);
          return prev;
        }

        if (prev < targetNumber) {
          const nextNum =
            isAnimating && prev < targetNumber - 10
              ? prev + Math.floor(Math.random() * 10) + 1
              : prev + 1;
          return Math.min(nextNum, targetNumber);
        } else {
          const nextNum =
            isAnimating && prev > targetNumber + 10
              ? prev - Math.floor(Math.random() * 10) - 1
              : prev - 1;
          return Math.max(nextNum, targetNumber);
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [number, isAnimating, targetNumber]);

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
