"use client";

import * as React from "react";
import { useEffect, useState } from "react";

export function GlobalGlowEffect({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isMobileOrMedium, setIsMobileOrMedium] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrMedium(window.innerWidth < 1024);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobileOrMedium) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setBoundingRect(rect);

      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isHovering, isMobileOrMedium]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {!isMobileOrMedium && (
        <div
          className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {boundingRect && isHovering && (
            <div
              className="absolute"
              style={{
                left: 0,
                top: 0,
                width: boundingRect.width,
                height: boundingRect.height,
                background: `
                  radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(145, 108, 231, 0.25), transparent 40%),
                  radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(145, 108, 231, 0.15), transparent 50%),
                  radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(145, 108, 231, 0.05), transparent 60%)
                `,
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
}
