import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  className?: string;
  delay?: number;
}

const PortfolioCard = ({
  image,
  title,
  category,
  className,
  delay = 0,
}: PortfolioCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer opacity-0 animate-fade-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay - Hidden by default, shown on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content - Hidden by default */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-accent text-xs font-medium uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
