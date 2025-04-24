"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBuilding, FaHtml5 } from "react-icons/fa";
import { Header } from "../custom/card-header";
import { ExperienceCard } from "../custom/experience-card";
import { MiniCard } from "../custom/mini-card";
import {
  ContactIcon,
  EmailIcon,
  FollowIcon,
  WhatsappIcon,
  WorkIcon,
} from "../icons/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const stacks = [
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
];

const experiences = [
  {
    company: "HNG Tech",
    date: "02/25 — 04/25",
    icon: <FaBuilding color="#CCCCCC" size={20} />,
  },
  {
    company: "Ghreatness Labs",
    date: "11/24 — 04/25",
    icon: <FaBuilding color="#CCCCCC" size={20} />,
  },
  {
    company: "Mobtech Limited",
    date: "10/24 — 04/25",
    icon: <FaBuilding color="#CCCCCC" size={20} />,
  },
  {
    company: "Archibuzz",
    date: "08/24 — 10/24",
    icon: <FaBuilding color="#CCCCCC" size={20} />,
  },
  {
    company: "HNG Tech",
    date: "06/24",
    icon: <FaBuilding color="#CCCCCC" size={20} />,
  },
];

export const ThirdGrid = () => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollHeight(scrollRef.current.scrollHeight);
    }
  }, []);

  const extendedExperiences = [...experiences, ...experiences];

  return (
    <section className="grid grid-cols-1 gap-3">
      <div className="flex max-md:flex-col gap-3 w-full">
        <Card className="p-5 flex flex-col gap-7.5 rounded-[20px] w-full">
          <CardHeader className="flex flex-col items-center gap-[25px] text-center">
            <div>
              <ContactIcon />
            </div>
            <div className="flex flex-col gap-[5px]">
              <CardTitle className="text-[#E6E6E6] font-semibold text-[20px] leading-6">
                Let&apos;s Work Together
              </CardTitle>
              <CardDescription className="py-1.5 px-2.5 text-[#999] font-medium text-sm">
                Let&apos;s Make Magic Happen!
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-3 px-0">
            <Link
              href={"/"}
              className="flex items-center gap-2.5 justify-center px-2.5 py-4 bg-[#1F1F1F] rounded-[10px] text-[#ccc] text-sm font-medium cursor-pointer w-full"
            >
              <div>
                <EmailIcon />
              </div>
              <p>Email Me</p>
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-2.5 justify-center px-2.5 py-4 bg-[#1F1F1F] rounded-[10px] text-[#ccc] text-sm font-medium cursor-pointer w-full"
            >
              <div>
                <WhatsappIcon />
              </div>
              <p>WhatsApp Me</p>
            </Link>
          </CardContent>
        </Card>

        <Card className="flex flex-col rounded-[20px] md:max-w-[245px] w-full gap-4">
          <Header
            title="Experience"
            description="Work Highlights"
            icon={<WorkIcon />}
          />
          <div className="h-[1px] bg-[rgba(255,255,255,0.06)]"></div>

          <div className="relative h-64 overflow-hidden">
            <motion.div
              ref={constraintsRef}
              className="absolute inset-0"
              style={{ overflow: "hidden" }}
            >
              <motion.div
                ref={scrollRef}
                className="px-5 space-y-3"
                drag="y"
                dragConstraints={constraintsRef}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                animate={
                  !isDragging
                    ? {
                        y: [-scrollHeight / 2, 0],
                        transition: {
                          y: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                          },
                        },
                      }
                    : undefined
                }
              >
                {extendedExperiences.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    company={experience.company}
                    date={experience.date}
                    icon={experience.icon}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </div>

      <div className="flex max-md:flex-col gap-3 w-full">
        <Card className="p-5 flex flex-col gap-7.5 rounded-[20px] md:max-w-[225px] w-full">
          <Header
            title="Follow Me"
            description="Online Presence"
            icon={<FollowIcon />}
          />
          <CardContent className="grid grid-cols-1 gap-2 px-0">
            {stacks.map((stack, index) => (
              <div key={index}>
                <MiniCard icon={stack.icon} text={stack.text} />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="p-5 flex flex-col gap-7.5 rounded-[20px] w-full">
          <CardHeader className="flex flex-col items-center gap-[25px] text-center">
            <div>
              <ContactIcon />
            </div>
            <div className="flex flex-col gap-[5px]">
              <CardTitle className="text-[#E6E6E6] font-semibold text-[20px] leading-6">
                Let&apos;s connect
              </CardTitle>
              <CardDescription className="py-1.5 px-2.5 text-[#999] font-medium text-sm">
                Thanks for visiting my portfolio!
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-3 px-0">
            <Link
              href={"mailto:marveldoc17@gmail.com"}
              target="_blank"
              className="flex items-center gap-2.5 justify-center px-2.5 py-4 bg-[#1F1F1F] rounded-[10px] text-[#ccc] text-sm font-medium cursor-pointer w-full"
            >
              <div>
                <EmailIcon />
              </div>
              <p>Email Me</p>
            </Link>
            <Link
              href={"https://wa.link/opsfaw"}
              target="_blank"
              className="flex items-center gap-2.5 justify-center px-2.5 py-4 bg-[#1F1F1F] rounded-[10px] text-[#ccc] text-sm font-medium cursor-pointer w-full"
            >
              <div>
                <WhatsappIcon />
              </div>
              <p>WhatsApp Me</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
