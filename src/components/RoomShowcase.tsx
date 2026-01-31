import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlassCard from "./GlassCard";

interface Room {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
}

interface RoomShowcaseProps {
  rooms: Room[];
  title: string;
  subtitle: string;
}

const RoomShowcase = ({ rooms, title, subtitle }: RoomShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % rooms.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + rooms.length) % rooms.length);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={rooms[activeIndex].image}
              alt={rooms[activeIndex].name}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-secondary hover:bg-white transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-secondary hover:bg-white transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Room Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-white"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              {title}
            </h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {rooms[activeIndex].name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {rooms[activeIndex].description}
                </p>
                <div className="space-y-3">
                  {rooms[activeIndex].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RoomShowcase;
