import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Sparkles, ZoomIn } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingParticles from "@/components/FloatingParticles";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import RoomShowcase from "@/components/RoomShowcase";
import ImageLightbox from "@/components/ImageLightbox";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import heroImage from "@/assets/hero-living-room.jpg";
import kitchenImage from "@/assets/service-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import officeImage from "@/assets/service-office.jpg";
import turnkeyImage from "@/assets/service-turnkey.jpg";
import furnitureImage from "@/assets/service-furniture.jpg";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import bedroomBefore from "@/assets/bedroom-before.jpg";
import bedroomAfter from "@/assets/bedroom-after.jpg";

const categories = ["All", "Residential", "Kitchen", "Bedroom", "Commercial"];

const projects = [
  { image: portfolio1, title: "Luxury Villa Interiors", category: "Residential", description: "Complete transformation of a 4000 sq.ft villa with contemporary design elements." },
  { image: portfolio2, title: "Modern Penthouse", category: "Residential", description: "A stunning penthouse makeover featuring panoramic city views." },
  { image: portfolio3, title: "Elegant Dining Space", category: "Residential", description: "Open-concept dining area with custom Italian marble flooring." },
  { image: heroImage, title: "Contemporary Living Room", category: "Residential", description: "Minimalist living space with premium fabric upholstery." },
  { image: kitchenImage, title: "Premium Kitchen Design", category: "Kitchen", description: "German modular kitchen with smart appliance integration." },
  { image: bedroomImage, title: "Master Bedroom Suite", category: "Bedroom", description: "Luxurious master suite with walk-in closet and ensuite spa." },
  { image: officeImage, title: "Corporate Headquarters", category: "Commercial", description: "5000 sq.ft corporate office for a leading tech company." },
  { image: turnkeyImage, title: "Complete Home Makeover", category: "Residential", description: "End-to-end transformation of a traditional home to modern luxury." },
  { image: furnitureImage, title: "Custom Woodwork Studio", category: "Commercial", description: "Artisanal woodwork studio showcasing premium craftsmanship." },
];

const transformations = [
  { before: kitchenBefore, after: kitchenAfter, title: "Modern Kitchen Transformation" },
  { before: bedroomBefore, after: bedroomAfter, title: "Master Bedroom Makeover" },
];

const rooms = [
  {
    id: "living",
    name: "Living Room",
    image: heroImage,
    description: "The heart of your home deserves extraordinary design. Our living room interiors blend comfort with sophistication, creating spaces perfect for both entertaining and relaxation.",
    features: ["Custom modular seating", "Ambient lighting design", "Premium fabric upholstery", "Smart home integration"],
  },
  {
    id: "kitchen",
    name: "Modern Kitchen",
    image: kitchenImage,
    description: "Where culinary dreams come alive. We design kitchens that are as beautiful as they are functional, with German engineering and premium finishes.",
    features: ["Soft-close mechanisms", "Premium countertops", "Built-in appliances", "Ergonomic layout design"],
  },
  {
    id: "bedroom",
    name: "Master Bedroom",
    image: bedroomImage,
    description: "Your personal sanctuary awaits. Every bedroom we design prioritizes comfort, serenity, and style—creating the perfect retreat after a long day.",
    features: ["Custom wardrobe systems", "Mood lighting control", "Premium mattress solutions", "Soundproofing options"],
  },
  {
    id: "office",
    name: "Home Office",
    image: officeImage,
    description: "Productivity meets elegance in our home office designs. We create workspaces that inspire creativity while maintaining the comforts of home.",
    features: ["Ergonomic furniture", "Cable management", "Acoustic treatment", "Natural light optimization"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  const lightboxImages = filteredProjects.map(p => ({
    src: p.image,
    title: p.title,
    description: p.description,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden hero-gradient">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.15 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 2 }} 
            src={portfolio1} 
            alt="Portfolio showcase" 
            className="w-full h-full object-cover opacity-25" 
          />
        </div>
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <GlassCard dark className="p-12 md:p-20 border-gradient">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles size={16} className="text-accent" />
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">Our Portfolio</span>
                <Sparkles size={16} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Spaces That Tell
                <br />
                <span className="text-gradient-gold">Beautiful Stories</span>
              </h1>
              <p className="text-white/85 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
                Every project is a unique journey. Explore our collection of 500+ transformations 
                that have turned ordinary spaces into extraordinary experiences.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Before/After Transformations */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">The Transformation</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">Before & After Magic</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Slide to reveal the incredible transformations. See how we turn outdated spaces 
              into stunning modern interiors.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformations.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  title={item.title}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Room-by-Room Showcase */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <RoomShowcase
              rooms={rooms}
              title="Explore Room by Room"
              subtitle="Design Gallery"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Featured Projects</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">Our Completed Work</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Browse through our diverse portfolio of residential and commercial projects, 
              each crafted with precision and passion.
            </p>
          </AnimatedSection>

          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <motion.button 
                key={cat} 
                onClick={() => setActiveCategory(cat)} 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className={`relative px-6 py-3 rounded-2xl font-medium text-sm transition-all ${
                  activeCategory === cat 
                    ? "text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground bg-muted/50"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activePortfolio" 
                    className="absolute inset-0 bg-primary rounded-2xl" 
                    initial={false} 
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            ))}
          </AnimatedSection>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.title} 
                  layout 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }} 
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }} 
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer image-zoom"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => openLightbox(index)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredProject === index ? 0 : 10, 
                      opacity: 1 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </motion.div>

                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={18} className="text-secondary" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden hero-gradient">
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <GlassCard dark className="p-12 md:p-20 border-gradient">
              <Sparkles size={28} className="text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Want Your Space Featured Here?
              </h2>
              <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Join 500+ happy clients who have transformed their spaces with Sri Sri Interiors. 
                Your dream home could be our next masterpiece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Start Your Transformation<ArrowRight size={18} /></Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </Layout>
  );
};

export default Portfolio;
