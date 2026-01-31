import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Lightbulb, Sparkles, Star, Clock, Shield, HeartHandshake } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingParticles from "@/components/FloatingParticles";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import ClientLogos from "@/components/ClientLogos";
import heroImage from "@/assets/hero-luxury-living.jpg";
import kitchenImage from "@/assets/service-kitchen.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import officeImage from "@/assets/service-office.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const services = [
  {
    image: kitchenImage,
    title: "Modular Kitchen",
    description: "Where culinary dreams come to life. Sleek, ergonomic designs with premium finishes that make cooking a joy.",
  },
  {
    image: bedroomImage,
    title: "Bedroom Interiors",
    description: "Your personal sanctuary. Thoughtfully designed spaces that blend comfort with sophistication for restful nights.",
  },
  {
    image: officeImage,
    title: "Office Interiors",
    description: "Workspaces that inspire brilliance. Modern, functional designs that boost productivity and impress clients.",
  },
];

const features = [
  {
    icon: Award,
    title: "Premium Craftsmanship",
    description: "Every piece is meticulously crafted using the finest materials sourced from trusted suppliers worldwide.",
  },
  {
    icon: Users,
    title: "Award-Winning Team",
    description: "50+ experienced designers and craftsmen with a collective expertise of over 200 years in interior design.",
  },
  {
    icon: Lightbulb,
    title: "Bespoke Designs",
    description: "No templates, no shortcuts. Every project is custom-designed to reflect your unique personality and lifestyle.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. 98% of our projects are delivered on or before the promised deadline.",
  },
  {
    icon: Shield,
    title: "10-Year Warranty",
    description: "Complete peace of mind with our industry-leading warranty on all materials and workmanship.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "A personal project manager and post-completion support ensure your experience is seamless.",
  },
];

const stats = [
  { number: "500+", label: "Projects Delivered", suffix: "" },
  { number: "15+", label: "Years of Excellence", suffix: "" },
  { number: "98%", label: "Happy Clients", suffix: "" },
  { number: "₹50Cr+", label: "Projects Value", suffix: "" },
];

const portfolioPreview = [
  { image: portfolio1, title: "Luxury Villa", category: "Residential" },
  { image: portfolio2, title: "Modern Penthouse", category: "Residential" },
  { image: portfolio3, title: "Elegant Dining", category: "Dining Room" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Full Screen with Stunning Visual */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={heroImage}
            alt="Luxury interior design showcase"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-primary/40 to-secondary/80" />
        </div>

        <FloatingParticles />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassCard dark className="p-10 md:p-16 lg:p-20 border-gradient">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center gap-2 mb-6"
              >
                <Sparkles size={16} className="text-accent" />
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
                  The Complete Interior Solutions
                </span>
                <Sparkles size={16} className="text-accent" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]"
              >
                Where Vision Meets
                <br />
                <span className="text-gradient-gold">Extraordinary Design</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="text-white/85 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
              >
                Transform your space into a living masterpiece. We craft interiors that 
                tell your story—blending timeless elegance with modern functionality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
              >
                <Button asChild variant="hero" size="lg" className="group">
                  <Link to="/services">
                    Explore Our Services
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/80 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-secondary overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="stat-card rounded-2xl"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white block"
                  >
                    {stat.number}
                  </motion.span>
                  <p className="text-white/70 mt-2 text-sm">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <ClientLogos />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              The Sri Sri Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Why 500+ Families Trust Us
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              We don't just design interiors—we create experiences. Every project is a testament 
              to our commitment to excellence, innovation, and your complete satisfaction.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -8 }} 
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <GlassCard hover className="p-8 h-full border-gradient">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                    >
                      <feature.icon size={26} className="text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Tailored Solutions for Every Space
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              From intimate bedrooms to grand living spaces, we bring your vision to life 
              with meticulous attention to detail and uncompromising quality.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl h-[450px] image-zoom"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >
                    <div className="gold-line mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/85 leading-relaxed text-sm">{service.description}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Link to="/services">
                      <Button variant="hero" size="lg">
                        Explore
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button asChild size="lg" className="group">
              <Link to="/services">
                View All Services
                <motion.span className="inline-block" whileHover={{ x: 5 }}>
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <AnimatedSection className="text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Client Love
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what families across India 
              have to say about their Sri Sri Interiors experience.
            </p>
          </AnimatedSection>
        </div>
        <TestimonialMarquee />
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Spaces That Inspire
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Every project tells a unique story. Explore our collection of 
              transformations that have turned houses into dream homes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioPreview.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer image-zoom"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/portfolio">
                View Complete Portfolio
                <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-15">
          <motion.img
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={heroImage}
            alt="Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <GlassCard dark className="p-12 md:p-20 border-gradient">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles size={28} className="text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Dream Space?
              </h2>
              <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Take the first step towards your dream interior. Book a free consultation 
                with our design experts and let's bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Get Free Quote
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/portfolio">Explore Our Work</Link>
                </Button>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
