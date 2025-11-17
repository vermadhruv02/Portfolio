import { Link } from "react-router-dom";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ReactNode } from "react";

interface CardActionProps {
  link: string;
  icon: ReactNode;
  color: string;
}

export default function CardAction({ link, icon, color }: CardActionProps) {
  return (
    <Link
      to={link}
      target="_blank"
      className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <HoverBorderGradient
        containerClassName="rounded-lg"
        as="button"
        className={`${color} text-white dark:text-slate-100 p-2 rounded-lg flex items-center justify-center`}
      >
        {icon}
      </HoverBorderGradient>
    </Link>
  );
}
