"use client";

import { ProfileCard } from "@/components/custom/profile-card";
import { useRef } from "react";
import { FaGithub, FaHtml5, FaLinkedin } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Header } from "../custom/card-header";
import { MiniCard } from "../custom/mini-card";
import { StatsCard } from "../custom/stats";
import {
  DegreeIcon,
  FirstStatIcon,
  FollowIcon,
  GlobeIcon,
  LocationIcon,
  SecondStatIcon,
  ThirdStatIcon,
  TimeIcon,
} from "../icons/icons";
import { Card, CardContent } from "../ui/card";

const clients = [
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

const stats = [
  {
    icon: <FirstStatIcon />,
    text: "Projects",
    count: 20,
  },
  {
    icon: <SecondStatIcon />,
    text: "Clients",
    count: 39,
  },
  {
    icon: <ThirdStatIcon />,
    text: "Expertise",
    count: 94,
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
    label: "Bells University",
    icon: <DegreeIcon />,
  },
  {
    label: "UTC",
    icon: <TimeIcon />,
  },
];

export const SecondGrid = () => {
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
    <section className="grid grid-cols-1 gap-3 ">
      <div className="flex gap-3 max-h-[132px]">
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
        role="Frontend Developer"
        imageUrl="/profile-picture.jpg"
        initials="MU"
        profileDetails={profileDetails}
        socialLinks={[
          {
            icon: <FaLinkedin color="#916CE7" size={18} />,
            label: "LinkedIn",
          },
          {
            icon: <FaGithub color="#916CE7" size={18} />,
            label: "GitHub",
          },
        ]}
      />

      <Card className="relative px-3 pt-3 pb-10 flex flex-col gap-7.5 rounded-[20px] ">
        <Header
          title="My Clients"
          description="Satisfied Partners"
          icon={<FollowIcon />}
        />
        <CardContent className="px-0 overflow-hidden flex flex-col gap-2">
          <Slider {...slickSettingsForward}>
            {clients.map((client, index) => (
              <div className="px-1">
                <MiniCard key={index} icon={client.icon} text={client.text} />
              </div>
            ))}
          </Slider>
          <Slider {...slickSettingsBackward}>
            {clients.map((client, index) => (
              <div key={index} className="px-1">
                <MiniCard icon={client.icon} text={client.text} />
              </div>
            ))}
          </Slider>
        </CardContent>
      </Card>
    </section>
  );
};
