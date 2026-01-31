import { cn } from "@/lib/utils";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const ServiceCard = ({
  image,
  title,
  description,
  className,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white shadow-lg hover-lift opacity-0 animate-fade-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="gold-line mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
