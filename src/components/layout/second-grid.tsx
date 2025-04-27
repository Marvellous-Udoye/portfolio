"use client";

import { ProfileCard } from "@/components/custom/profile-card";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLightbulb,
  FaLinkedin,
  FaPaintBrush,
  FaPalette,
  FaRegGem,
} from "react-icons/fa";
import { Header } from "../custom/card-header";
import { MiniCard } from "../custom/mini-card";
import { StatsCard } from "../custom/stats";
import {
  DegreeIcon,
  FirstStatIcon,
  GlobeIcon,
  InspirationIcon,
  LocationIcon,
  SecondStatIcon,
  ThirdStatIcon,
  TimeIcon,
} from "../icons/icons";
import { Card, CardContent } from "../ui/card";

const inspirations = [
  {
    icon: <FaPaintBrush color="#CCCCCC" size={24} />,
    text: "Dribbble Designers",
  },
  {
    icon: <FaPalette color="#CCCCCC" size={24} />,
    text: "Aesthetic Approach",
  },
  {
    icon: <FaLightbulb color="#CCCCCC" size={24} />,
    text: "Everyday Creativity",
  },
  {
    icon: <FaRegGem color="#CCCCCC" size={24} />,
    text: "User-Centered Design",
  },
];

const stats = [
  {
    icon: <SecondStatIcon />,
    text: "Experience",
    count: 1,
  },
  {
    icon: <ThirdStatIcon />,
    text: "Collabs",
    count: 5,
  },
  {
    icon: <FirstStatIcon />,
    text: "Projects",
    count: 28,
  },
];

const profileDetails = [
  {
    label: "Nigeria",
    icon: <LocationIcon />,
  },
  {
    label: "English",
    icon: <GlobeIcon />,
  },
  {
    label: "Frontend Developer",
    icon: <FirstStatIcon />,
  },
  {
    label: "Bells University of Technology",
    icon: <DegreeIcon />,
  },
  {
    label: "UTC",
    icon: <TimeIcon />,
  },
];

export const SecondGrid = () => {
  const [clientWidth, setClientWidth] = useState<number>(0);
  const clientsCarouselForward = useRef<HTMLDivElement>(null);
  const clientsCarouselBackward = useRef<HTMLDivElement>(null);

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
          "Frontend Developer",
          "UI/UX Specialist",
          "Next.js Engineer",
          "HNG12 Finalist",
        ]}
        imageUrl="/profile-picture.jpg"
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
        <CardContent className="px-0 overflow-hidden flex flex-col gap-2">
          <motion.div ref={clientsCarouselForward} className="overflow-hidden">
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: [-clientWidth, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
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
          </motion.div>

          <motion.div ref={clientsCarouselBackward} className="overflow-hidden">
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: [0, -clientWidth],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
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
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
};
