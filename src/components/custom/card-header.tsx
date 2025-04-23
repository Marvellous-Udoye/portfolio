import { CardDescription, CardHeader, CardTitle } from "../ui/card";

interface HeaderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Header = ({ title, description, icon }: HeaderProps) => {
  return (
    <CardHeader className="flex flex-col items-center">
      <div className="flex items-center gap-2 py-1.5 px-2.5">
        {icon}
        <CardTitle className="text-[#999] font-medium text-sm">
          {title}
        </CardTitle>
      </div>
      <CardDescription className="text-[#E6E6E6] font-semibold text-base leading-6">
        {description}
      </CardDescription>
    </CardHeader>
  );
};
