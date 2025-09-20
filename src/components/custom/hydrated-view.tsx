"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type HydratedViewProps = {
  children: ReactNode;
  fallback: ReactNode;
};

export function HydratedView({ children, fallback }: HydratedViewProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsHydrated(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative">
      {!isHydrated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          {fallback}
        </div>
      )}

      <div
        className={`transition-opacity duration-300 ${
          isHydrated ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isHydrated}
      >
        {children}
      </div>
    </div>
  );
}

