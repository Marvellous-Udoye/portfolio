import Link from "next/link";
import { FaHtml5 } from "react-icons/fa";
import { Header } from "../custom/card-header";
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

const highlights = [
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
  {
    icon: <FaHtml5 color="#CCCCCC" size={24} />,
    text: "HTML",
  },
];

export const ThirdGrid = () => {
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

        <Card className="flex flex-col rounded-[20px] md:max-w-[225px] w-full gap-4">
          <Header
            title="Work Process"
            description="Workflow Highlights"
            icon={<WorkIcon />}
          />
          <div className="h-[1px] bg-[rgba(255,255,255,0.06)]"></div>
          <CardContent className="grid grid-cols-1 gap-2 px-5">
            {highlights.map((stack, index) => (
              <div key={index}>
                <MiniCard icon={stack.icon} text={stack.text} />
              </div>
            ))}
          </CardContent>
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
                Let&apos;s Work Together
              </CardTitle>
              <CardDescription className="py-1.5 px-2.5 text-[#999] font-medium text-sm">
                Let&apos;s Make Magic Happen!
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-3 px-0">
            <Link
              href={"mailto:marveldoc17@gmail.com"}
              className="flex items-center gap-2.5 justify-center px-2.5 py-4 bg-[#1F1F1F] rounded-[10px] text-[#ccc] text-sm font-medium cursor-pointer w-full"
            >
              <div>
                <EmailIcon />
              </div>
              <p>Email Me</p>
            </Link>
            <Link
              href={"https://wa.link/opsfaw"}
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
