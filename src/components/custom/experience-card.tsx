import Image from "next/image";
import { Card } from "../ui/card";

interface ExperienceCardProps {
  company: string;
  date: string;
  image: string;
}

export const ExperienceCard = ({
  company,
  date,
  image,
}: ExperienceCardProps) => {
  return (
    <Card className="flex flex-row items-start gap-2.5 py-3 px-2.5 rounded-[12px] bg-[#191919] cursor-pointer">
      <div className="flex items-center justify-center h-[40px] min-w-[40px] bg-[#282828] rounded-md shrink-0">
        <Image
          src={image}
          alt={`${company} logo`}
          width={40}
          height={40}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#916CE7] text-sm font-medium">{company}</p>
        <span className="text-[#999999] text-xs">{date}</span>
      </div>
    </Card>
  );
};
