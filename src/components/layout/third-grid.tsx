"use client";

import { experienceData } from "@/data/experience";
import { AnimatePresence, motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  experiences,
  galleryImages,
  hobbies,
  testimonials,
} from "@/data/general";
import { Header } from "../custom/card-header";
import { ExperienceCard } from "../custom/experience-card";
import { MiniCard } from "../custom/mini-card";
import { ProjectCard } from "../custom/project-card";
import {
  ContactIcon,
  EmailIcon,
  FollowIcon,
  ProjectsIcon,
  WhatsappIcon,
} from "../icons/icons";
import { Modal } from "../modal/modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const ThirdGrid = () => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const extendedExperiences = [...experiences, ...experiences];
  const [width, setWidth] = useState<number>(0);
  const galleryCarousel = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const experienceDuration = isMobile ? 8 : 20;
  const feedbackDuration = isMobile ? 10 : 30;

  useEffect(() => {
    if (scrollRef.current) {
      setScrollHeight(scrollRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (galleryCarousel.current) {
      setWidth(
        galleryCarousel.current.scrollWidth -
          galleryCarousel.current.offsetWidth
      );
    }

    const handleResize = () => {
      if (galleryCarousel.current) {
        setWidth(
          galleryCarousel.current.scrollWidth -
            galleryCarousel.current.offsetWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="grid grid-cols-1 gap-3">
      <div className="flex max-md:flex-col gap-3 w-full">
        <Card className="flex flex-col rounded-[20px]  w-full gap-4">
          <Header
            title="Experience"
            description="Work Highlights"
            icon={<ProjectsIcon />}
          />
          <div className="h-[1px] bg-[rgba(255,255,255,0.06)]"></div>

          <div className="relative h-68 overflow-hidden">
            <motion.div
              ref={constraintsRef}
              className="absolute inset-0"
              style={{ overflow: "hidden" }}
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <Modal type="experiences" data={experienceData} />
              </div>

              <motion.div
                ref={scrollRef}
                className="px-5 space-y-3 pt-16"
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
                            duration: experienceDuration,
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
                    image={experience.image}
                  />
                ))}
              </motion.div>
              <div
                className="absolute right-0 top-0 z-0"
                style={{
                  width: "100%",
                  height: "40%",
                  background:
                    "linear-gradient(0deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
                }}
              />
            </motion.div>
          </div>
        </Card>

        <Card className="flex flex-col gap-4 rounded-[20px] md:max-w-[245px] w-full relative overflow-hidden">
          <Header
            title=" Feedbacks"
            description="What People Say"
            icon={<QuoteIcon size={20} color="#916CE7" />}
          />
          <div className="h-[1px] bg-[rgba(255,255,255,0.06)]"></div>
          <CardContent className="px-5 h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-between"
              >
                <p className="text-[#CCCCCC] text-sm italic">
                  &quot;{testimonials[current].text}&quot;
                </p>
                <div className="mt-4">
                  <p className="text-[#E6E6E6] font-medium">
                    {testimonials[current].author}
                  </p>
                  <p className="text-[#999] text-xs">
                    {testimonials[current].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </CardContent>

          <div className="flex gap-1.5 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all ${
                  current === index ? "w-4 bg-purple-500" : "w-1.5 bg-[#333]"
                }`}
              />
            ))}
          </div>
          <CardFooter className="px-0 overflow-hidden">
            <motion.div
              ref={galleryCarousel}
              className="overflow-hidden relative"
            >
              <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 0 }}
                animate={{
                  x: [-width, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: feedbackDuration,
                    ease: "linear",
                  },
                }}
              >
                {galleryImages.map((image, index) => (
                  <motion.div key={index} className="px-1">
                    <ProjectCard image={image} />
                  </motion.div>
                ))}
              </motion.div>

              <div
                className="absolute left-0 top-0 bottom-0 z-10"
                style={{
                  width: "30px",
                  height: "100%",
                  background:
                    "linear-gradient(270deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
                }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 z-10"
                style={{
                  width: "30px",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, rgba(16, 16, 16, 0.00) 0%, #0D0D0D 100%)",
                }}
              />
            </motion.div>
          </CardFooter>
        </Card>
      </div>

      <div className="flex max-md:flex-col gap-3 w-full">
        <Card className="p-5 flex flex-col gap-7.5 rounded-[20px] md:max-w-[225px] w-full">
          <Header
            title="Hobbies"
            description="Things I Like To Do"
            icon={<FollowIcon />}
          />
          <CardContent className="grid grid-cols-1 gap-2 px-0">
            {hobbies.map((hobby, index) => (
              <div key={index}>
                <MiniCard icon={hobby.icon} text={hobby.text} />
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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
