"use client";

import { useRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Header } from "../custom/card-header";
import { MiniCard } from "../custom/mini-card";
import { ProjectCard } from "../custom/project-card";
import { ProjectsIcon, ServicesIcon, StacksIcon } from "../icons/icons";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { slickSettings } from "@/lib/slick";

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

const services = [
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

const projects = [
  "/genz.ad.jpg",
  "/departmental-portal.jpg",
  "/my-uni.jpg",
  "/devlinks.png",
  "/woodz.png",
  "/book-tracker.png",
];

export const FirstGrid = () => {
  const sliderRef = useRef(null);

  const slickSettingsForward = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: false,
    touchMove: false,
    variableWidth: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slickSettingsBackward = {
    ...slickSettingsForward,
    rtl: true,
  };

  return (
    <section className="grid grid-cols-1 gap-3">
      <Card className="p-5 flex flex-col gap-7.5 rounded-[20px]">
        <Header
          title="My Stacks"
          description="Tech Arsenal"
          icon={<StacksIcon />}
        />
        <CardContent className="grid grid-cols-2 gap-2 px-0">
          {stacks.map((stack, index) => (
            <div key={index}>
              <MiniCard icon={stack.icon} text={stack.text} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="relative px-3 pt-3 pb-10 flex flex-col gap-7.5 rounded-[20px]">
        <Header
          title="Projects"
          description="Works Gallery"
          icon={<ProjectsIcon />}
        />
        <CardContent className="px-0 overflow-hidden flex flex-col gap-2">
          <Slider {...slickSettings} className="w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} image={project} />
            ))}
          </Slider>
        </CardContent>
        <Button className="absolute bottom-4.5 left-1/4 py-[13px] px-7.5 bg-[#916CE7] rounded-[12px] border border-[#101010] text-sm font-medium min-h-[45px] hover:bg-[#916CE7] hover:border-[#916CE7] cursor-pointer">
          View Works
        </Button>
      </Card>

      <Card className="relative px-3 pt-3 pb-10 flex flex-col gap-7.5 rounded-[20px]">
        <Header
          title="Services"
          description="Solutions Suite"
          icon={<ServicesIcon />}
        />
        <CardContent className="px-0 overflow-hidden flex flex-col gap-2">
          <Slider {...slickSettingsForward}>
            {services.map((service, index) => (
              <div className="px-1">
                <MiniCard key={index} icon={service.icon} text={service.text} />
              </div>
            ))}
          </Slider>
          <Slider {...slickSettingsBackward}>
            {services.map((service, index) => (
              <div key={index} className="px-1">
                <MiniCard icon={service.icon} text={service.text} />
              </div>
            ))}
          </Slider>
        </CardContent>
        <Button className="absolute bottom-4.5 left-1/4 py-[13px] px-7.5 bg-[#916CE7] rounded-[12px] border border-[#101010] text-sm font-medium min-h-[45px] hover:bg-[#916CE7] hover:border-[#916CE7] cursor-pointer">
          View All Services
        </Button>
      </Card>
    </section>
  );
};
