import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Utensils, BedDouble, Armchair, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/service-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import officeImage from "@/assets/service-office.jpg";
import furnitureImage from "@/assets/service-furniture.jpg";
import turnkeyImage from "@/assets/service-turnkey.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

const categories = [
  {
    id: "residential",
    name: "Residential",
    icon: Home,
    image: heroImage,
    title: "Residential Interiors",
    description: "Transform your home into a sanctuary of comfort and style. From cozy living rooms to elegant bedrooms, we create spaces that reflect your personality and enhance your daily life.",
    features: ["Living Room Design", "Bedroom Interiors", "Complete Home Makeover", "Space Optimization"],
  },
  {
    id: "commercial",
    name: "Commercial",
    icon: Building2,
    image: officeImage,
    title: "Office & Commercial",
    description: "Create inspiring workspaces that boost productivity and impress clients. Professional environments designed for success, from startups to corporate headquarters.",
    features: ["Office Interiors", "Reception Design", "Conference Rooms", "Retail Spaces"],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: Utensils,
    image: kitchenImage,
    title: "Modular Kitchen Design",
    description: "Smart, stylish kitchens designed for modern living. Premium materials, innovative storage solutions, and sleek finishes that make cooking a pleasure.",
    features: ["Modular Kitchens", "Custom Cabinets", "Smart Storage", "Premium Finishes"],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    icon: BedDouble,
    image: bedroomImage,
    title: "Bedroom & Living Spaces",
    description: "Peaceful bedrooms and inviting living areas crafted for relaxation. Custom wardrobes, elegant furniture, and thoughtful lighting create your perfect retreat.",
    features: ["Master Bedrooms", "Kids Rooms", "Walk-in Wardrobes", "Lighting Design"],
  },
  {
    id: "furniture",
    name: "Custom Furniture",
    icon: Armchair,
    image: furnitureImage,
    title: "Bespoke Furniture & Woodwork",
    description: "Handcrafted furniture made to your exact specifications. Premium wood, expert craftsmanship, and timeless designs that become family heirlooms.",
    features: ["Custom Furniture", "Woodwork", "Upholstery", "Restoration"],
  },
  {
    id: "turnkey",
    name: "Turnkey",
    icon: Wrench,
    image: turnkeyImage,
    title: "Turnkey Interior Solutions",
    description: "End-to-end interior solutions from concept to completion. We handle everything—design, execution, and finishing—so you can simply move in and enjoy.",
    features: ["Complete Solutions", "Project Management", "Quality Assurance", "Timely Delivery"],
  },
];

const ServiceCategorySelector = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory.id === category.id;
          
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={`relative flex items-center gap-2 px-5 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-2xl"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={18} />
                {category.name}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={activeCategory.image}
              alt={activeCategory.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="glass-card-dark p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <activeCategory.icon size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Premium {activeCategory.name}</p>
                  <p className="text-white/60 text-xs">Expert craftsmanship guaranteed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                {activeCategory.name} Solutions
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                {activeCategory.title}
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {activeCategory.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-3"
            >
              {activeCategory.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Quote
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Projects</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceCategorySelector;
