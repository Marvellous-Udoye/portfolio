"use client";

import Link from "next/link";
import { ResumeIcon, StatusIcon } from "../icons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
  initials?: string;
  profileDetails: {
    label: string;
    icon: React.ReactNode;
  }[];
  socialLinks: {
    link: string;
    icon: React.ReactNode;
    label: string;
  }[];
}

export const ProfileCard = ({
  name,
  role,
  imageUrl,
  initials = "MU",
  profileDetails = [],
  socialLinks = [],
}: ProfileCardProps) => {
  return (
    <Card className="p-5 min-h-[345px] flex flex-col gap-7.5">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src={imageUrl ?? "/next.svg"}
            alt={name}
            className="w-[107px] h-[110px] rounded-2xl object-cover"
          />
          <AvatarFallback className="bg-[#1D1B23] w-[107px] h-[110px] text-[#CCC] text-lg font-medium">
            {initials}
          </AvatarFallback>
        </Avatar>

        <CardHeader className="px-0 w-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between w-full">
              <Badge
                variant="outline"
                className="bg-[#141414] border-[0.5px] border-[rgba(255,255,255,0.05)] px-2.5 py-1.5 rounded-full flex gap-2 text-xs md:text-[13px] font-medium text-[#999]"
              >
                <div className="animate-pulse">
                  <StatusIcon />
                </div>
                <p>Available to work</p>
              </Badge>

              <Badge className="hidden text-[#CCC] text-xs md:text-[13px] font-medium md:flex gap-2 items-center ">
                <p>Resume</p>
                <div className="cursor-pointer">
                  <ResumeIcon />
                </div>
              </Badge>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[#E6E6E6] text-[18px] md:text-[22px] leading-6 font-semibold">
                {name}
              </h3>
              <p className="flex gap-1 text-xs md:text-sm">
                <span className="text-[#999] font-medium"> I&apos;m a</span>
                <span className="text-[#916CE7] font-medium">{role}</span>
              </p>
            </div>
          </div>
        </CardHeader>
      </div>

      <CardContent className="p-3 bg-[#141414] rounded-[10px] border-[0.8px] border-[rgba(255,255,255,0.06)]">
        {profileDetails.length > 0 && (
          <div className="flex flex-wrap gap-2.5 ">
            {profileDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 bg-[#191919] border-[rgba(255,255,255,0.05)] py-1.5 px-2.5 rounded-full"
              >
                <div>{detail.icon}</div>
                <span className="text-[#CCC] text-[13px] font-medium">
                  {detail.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-0 flex flex-col gap-3">
        {socialLinks.length > 0 && (
          <div className="flex gap-3 w-full">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                target="_blank"
                className="flex items-center gap-2.5 justify-center px-2.5 py-4 bg-[#1F1F1F] rounded-[10px] text-[#ccc] text-sm font-medium cursor-pointer w-full"
              >
                <div>{link.icon}</div>
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <Link
          href={"/"}
          className="flex md:hidden items-center gap-2.5 justify-center px-2.5 py-2 bg-[#1F1F1F] rounded-[10px] text-[#ccc] text-sm font-medium cursor-pointer w-full"
        >
          <div>
            <ResumeIcon />
          </div>
          <p>Resume</p>
        </Link>
      </CardFooter>
    </Card>
  );
};
