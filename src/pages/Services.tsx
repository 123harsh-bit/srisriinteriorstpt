import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Zap, Clock, Shield, HeartHandshake } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCategorySelector from "@/components/ServiceCategorySelector";
import FloatingParticles from "@/components/FloatingParticles";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import kitchenImage from "@/assets/service-kitchen.jpg";
import turnkeyImage from "@/assets/service-turnkey.jpg";
import heroLiving from "@/assets/hero-luxury-living.jpg";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "We begin with an in-depth consultation to understand your vision, lifestyle, preferences, and budget. This foundation shapes everything that follows.",
    icon: Zap,
  },
  {
    step: "02",
    title: "Design & Visualization",
    description: "Our design team creates detailed 3D renderings and material boards, allowing you to experience your space before construction begins.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Precision Execution",
    description: "Expert craftsmen bring designs to life with meticulous attention to detail. We source only premium materials and maintain strict quality control.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Seamless Handover",
    description: "Final walkthrough, quality inspection, and handover of your dream space—complete with our industry-leading 10-year warranty.",
    icon: HeartHandshake,
  },
];

const guarantees = [
  { text: "Premium Italian & German Materials", highlight: true },
  { text: "On-Time Delivery Guarantee", highlight: false },
  { text: "Transparent, Fixed Pricing", highlight: true },
  { text: "10-Year Comprehensive Warranty", highlight: false },
  { text: "Dedicated Project Manager", highlight: true },
  { text: "Post-Project Support & Care", highlight: false },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden hero-gradient">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={heroLiving}
            alt="Luxury interior services"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard dark className="p-12 md:p-20 border-gradient">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <Sparkles size={16} className="text-accent" />
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
                  Our Services
                </span>
                <Sparkles size={16} className="text-accent" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Comprehensive Interior
                <br />
                <span className="text-gradient-gold">Design Excellence</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/85 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
              >
                From conceptual design to flawless execution, we offer end-to-end interior 
                solutions that transform spaces into living works of art.
              </motion.p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Interactive Service Selector */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Tailored Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Design Your Dream Space
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Whether it's a cozy home or a professional workspace, choose your category 
              and discover our specialized design solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ServiceCategorySelector />
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              From Vision to Reality
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Our streamlined 4-step process ensures a smooth, stress-free journey from 
              initial consultation to the final reveal of your transformed space.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <GlassCard className="p-8 h-full relative overflow-hidden border-gradient">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                      className="text-7xl font-bold text-primary/5 absolute -top-2 -right-2"
                    >
                      {item.step}
                    </motion.span>
                    <div className="relative z-10">
                      <motion.div 
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                      >
                        <item.icon size={22} className="text-primary" />
                      </motion.div>
                      <div className="text-sm font-semibold text-primary mb-2">{item.step}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <AnimatedSection className="text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Trusted by 500+ Families
            </h2>
          </AnimatedSection>
        </div>
        <TestimonialMarquee />
      </section>

      {/* Guarantees Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                The Sri Sri Promise
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Excellence isn't just a goal—it's our standard. When you choose Sri Sri Interiors, 
                you're choosing uncompromising quality, transparent pricing, and a partner 
                dedicated to exceeding your expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guarantees.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="mt-0.5"
                    >
                      <CheckCircle 
                        size={20} 
                        className={item.highlight ? "text-primary" : "text-accent"} 
                      />
                    </motion.div>
                    <span className="text-foreground text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square"
              >
                <img
                  src={turnkeyImage}
                  alt="Premium quality interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                <GlassCard
                  dark
                  className="absolute bottom-6 left-6 right-6 p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Clock size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">45-Day Delivery</p>
                      <p className="text-white/60 text-sm">Average project completion</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-15">
          <img
            src={kitchenImage}
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
                transition={{ type: "spring" }}
                className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles size={28} className="text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Take the first step towards your dream space. Book a free consultation 
                and receive a personalized design proposal within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
