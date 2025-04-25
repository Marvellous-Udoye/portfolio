interface MiniCardProps {
  icon: React.ReactNode;
  text: string;
}

export const MiniCard = ({ icon, text }: MiniCardProps) => {
  return (
    <div className="flex gap-1.5 w-full p-[7px] items-center rounded-[12px] bg-[#191919] flex-1">
      <div className="flex items-center justify-center h-[35px] w-[35px] bg-[#282828] rounded-md">
        {icon}
      </div>
      <span className="text-[#CCC] text-sm font-medium flex-1">{text}</span>
    </div>
  );
};
