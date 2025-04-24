import { Card } from "../ui/card";

interface ExperienceCardProps {
  company: string;
  date: string;
  icon: React.ReactNode;
}

export const ExperienceCard = ({
  company,
  date,
  icon,
}: ExperienceCardProps) => {
  return (
    <Card className="flex flex-row items-start gap-2.5 py-3 px-2.5 rounded-[12px] bg-[#191919]">
      <div className="flex items-center justify-center h-[40px] min-w-[40px] bg-[#282828] rounded-md shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#CCCCCC] text-sm font-medium">{company}</p>
        <span className="text-[#999999] text-xs">{date}</span>
      </div>
    </Card>
  );
};
