import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({
  children,
  className,
  dark = false,
  hover = false,
  style,
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        dark ? "glass-card-dark" : "glass-card",
        hover && "hover-lift cursor-pointer",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
