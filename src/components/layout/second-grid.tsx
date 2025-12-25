"use client";

import { ProfileCard } from "@/components/custom/profile-card";
import {
  profileDetails as baseProfileDetails,
  inspirations,
  stats,
} from "@/data/general";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Header } from "../custom/card-header";
import { MiniCard } from "../custom/mini-card";
import { StatsCard } from "../custom/stats";
import { InspirationIcon } from "../icons/icons";
import { Card, CardContent } from "../ui/card";

export const SecondGrid = () => {
  const [clientWidth, setClientWidth] = useState<number>(0);
  const clientsCarouselForward = useRef<HTMLDivElement>(null);
  const clientsCarouselBackward = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  const inspirationSpeed = 58;
  const minInspirationDuration = 18;
  const inspirationDuration =
    clientWidth > 0
      ? Math.max(clientWidth / inspirationSpeed, minInspirationDuration)
      : minInspirationDuration;
  useEffect(() => {
    if (clientsCarouselForward.current) {
      setClientWidth(
        clientsCarouselForward.current.scrollWidth -
          clientsCarouselForward.current.offsetWidth
      );
    }

    const handleResize = () => {
      if (clientsCarouselForward.current) {
        setClientWidth(
          clientsCarouselForward.current.scrollWidth -
            clientsCarouselForward.current.offsetWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const profileDetails = useMemo(() => {
    const utcIndex = baseProfileDetails.findIndex((d) => d.label === "UTC");
    if (utcIndex === -1) return baseProfileDetails;

    const utcItem = baseProfileDetails[utcIndex];
    const filtered = baseProfileDetails.filter((_, i) => i !== utcIndex);

    if (isMounted && isMobile) {
      filtered.splice(2, 0, utcItem);
      return filtered;
    } else {
      return [...filtered, utcItem];
    }
  }, [isMobile, isMounted]);

  return (
    <section className="grid grid-cols-1 gap-3">
      <div className="flex gap-3 max-h-30 md:max-h-[132px] w-full">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            text={stat.text}
            count={stat.count}
          />
        ))}
      </div>

      <ProfileCard
        name="Marvellous Udoye"
        roles={[
          "Software Developer",
          "Next.js Specialist",
          "HNG Finalist",
          "UX Specialist",
          "10x Dev",
        ]}
        imageUrl="/profile-image.png"
        initials="MU"
        profileDetails={profileDetails}
        socialLinks={[
          {
            link: "https://www.linkedin.com/in/marvellous-udoye",
            icon: <FaLinkedin color="#916CE7" size={20} />,
            label: "LinkedIn",
          },
          {
            link: "https://github.com/Marvellous-Udoye",
            icon: <FaGithub color="#916CE7" size={20} />,
            label: "GitHub",
          },
        ]}
      />

      <Card className="relative px-3 pt-3 pb-10 flex flex-col gap-7.5 rounded-[20px]">
        <Header
          title="Inspirations"
          description="Where I Get My Ideas"
          icon={<InspirationIcon />}
        />
        <CardContent className="px-0 overflow-hidden flex flex-col gap-2 relative">
          <motion.div
            ref={clientsCarouselForward}
            className="overflow-hidden relative"
          >
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: [-clientWidth, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: inspirationDuration,
                  ease: "linear",
                },
              }}
            >
              {inspirations.concat(inspirations).map((inspiration, index) => (
                <motion.div key={index} className="px-1 min-w-[180px]">
                  <MiniCard icon={inspiration.icon} text={inspiration.text} />
                </motion.div>
              ))}
            </motion.div>

            <div
              className="absolute left-0 top-0 bottom-0 z-10"
              style={{
                width: "51px",
                height: "100%",
                background:
                  "linear-gradient(270deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 z-10"
              style={{
                width: "51px",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
          </motion.div>

          <motion.div
            ref={clientsCarouselBackward}
            className="overflow-hidden relative"
          >
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: [0, -clientWidth],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: inspirationDuration,
                  ease: "linear",
                },
              }}
            >
              {inspirations.concat(inspirations).map((inspiration, index) => (
                <motion.div key={index} className="px-1 min-w-[180px]">
                  <MiniCard icon={inspiration.icon} text={inspiration.text} />
                </motion.div>
              ))}
            </motion.div>

            <div
              className="absolute left-0 top-0 bottom-0 z-10"
              style={{
                width: "51px",
                height: "100%",
                background:
                  "linear-gradient(270deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 z-10"
              style={{
                width: "51px",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
              }}
            />
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
};
