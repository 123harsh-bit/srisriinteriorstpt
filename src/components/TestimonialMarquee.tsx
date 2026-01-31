import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    content: "Sri Sri Interiors transformed our 3BHK into a luxury haven. Every detail was perfect, from the modular kitchen to the master bedroom.",
    rating: 5,
    location: "Hyderabad",
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "Our new office space looks incredible! The team understood our brand identity and created a workspace that impresses every visitor.",
    rating: 5,
    location: "Bangalore",
  },
  {
    name: "Anitha Reddy",
    role: "Homeowner",
    content: "The attention to detail is remarkable. They delivered on time, within budget, and the quality exceeded our expectations.",
    rating: 5,
    location: "Chennai",
  },
  {
    name: "Vikram Singh",
    role: "Restaurant Owner",
    content: "Our restaurant interior is now the talk of the town. Sri Sri Interiors brought our vision to life beautifully.",
    rating: 5,
    location: "Mumbai",
  },
  {
    name: "Deepa Nair",
    role: "Homeowner",
    content: "From concept to completion, the experience was seamless. Our home feels like a luxury resort now!",
    rating: 5,
    location: "Kochi",
  },
  {
    name: "Suresh Menon",
    role: "IT Professional",
    content: "Best investment we made for our home. The team's creativity and professionalism are unmatched.",
    rating: 5,
    location: "Pune",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 w-[380px] mx-3">
    <div className="glass-card p-6 h-full">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-accent fill-accent" />
        ))}
      </div>
      <Quote size={24} className="text-primary/30 mb-3" />
      <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
          <p className="text-muted-foreground text-xs">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialMarquee = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* First Row - Moving Left */}
      <motion.div
        className="flex mb-6"
        animate={{ x: [0, -50 * testimonials.length * 6.5] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>

      {/* Second Row - Moving Right */}
      <motion.div
        className="flex"
        animate={{ x: [-50 * testimonials.length * 6.5, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {duplicatedTestimonials.reverse().map((testimonial, index) => (
          <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialMarquee;
