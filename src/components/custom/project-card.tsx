import Image from "next/image";

interface ProjectCardProps {
  image: string;
}

export const ProjectCard = ({ image }: ProjectCardProps) => {
  return (
    <div className="h-20 w-[126px]">
      <Image
        src={image}
        alt="Project Card"
        width={126}
        height={80}
        className="w-full h-full rounded-[10px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        onError={(e) => {
          e.currentTarget.src = "/next.svg";
          e.currentTarget.alt = "Error loading image";
        }}
      />
    </div>
  );
};
