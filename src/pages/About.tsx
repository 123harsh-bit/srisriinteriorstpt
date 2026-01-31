import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, CheckCircle, Sparkles, Users, Award, Clock, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingParticles from "@/components/FloatingParticles";
import heroImage from "@/assets/hero-luxury-living.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

const values = [
  { 
    icon: Target, 
    title: "Precision", 
    description: "Every measurement, every joint, every finish is executed with surgical precision. We believe details make the design." 
  },
  { 
    icon: Eye, 
    title: "Vision", 
    description: "We see beyond walls and furniture. We envision how you'll live, work, and create memories in your space." 
  },
  { 
    icon: Heart, 
    title: "Passion", 
    description: "Interior design isn't just our profession—it's our calling. Every project receives our complete creative devotion." 
  },
];

const achievements = [
  { number: "500+", label: "Happy Families", icon: Users },
  { number: "15+", label: "Years of Excellence", icon: Award },
  { number: "98%", label: "On-Time Delivery", icon: Clock },
  { number: "10 Yr", label: "Warranty Provided", icon: Shield },
];

const milestones = [
  { year: "2009", title: "Founded with a Vision", description: "Started with a small team of 3 passionate designers in Hyderabad." },
  { year: "2014", title: "100th Project Milestone", description: "Completed our 100th residential project, establishing our reputation." },
  { year: "2018", title: "Expanded Operations", description: "Opened offices in Bangalore and Chennai, serving South India." },
  { year: "2022", title: "500+ Projects", description: "Achieved 500+ completed projects with 98% client satisfaction." },
  { year: "2024", title: "Industry Recognition", description: "Awarded 'Best Interior Design Firm' by Interior Design Association." },
];

const differentiators = [
  { title: "Customized designs tailored to your lifestyle", description: "No templates. Every design is created specifically for you." },
  { title: "Premium Italian & German materials", description: "We source only from trusted European manufacturers." },
  { title: "Transparent pricing with no hidden costs", description: "What you see is what you pay. Period." },
  { title: "On-time project delivery guaranteed", description: "Delays are not in our vocabulary." },
  { title: "Dedicated project manager for seamless experience", description: "Your single point of contact throughout the journey." },
  { title: "Post-project support and maintenance", description: "Our relationship doesn't end at handover." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden hero-gradient">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.15 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 2 }} 
            src={heroImage} 
            alt="Luxury interior design" 
            className="w-full h-full object-cover opacity-25" 
          />
        </div>
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <GlassCard dark className="p-12 md:p-20 border-gradient">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles size={16} className="text-accent" />
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">Our Story</span>
                <Sparkles size={16} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Crafting Spaces That
                <br />
                <span className="text-gradient-gold">Inspire Living</span>
              </h1>
              <p className="text-white/85 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
                For over 15 years, Sri Sri Interiors has been transforming ordinary spaces 
                into extraordinary experiences. We don't just design interiors—we design lifestyles.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                The Beginning
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Legacy Built on Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small design studio in 2009 has grown into one of South India's 
                  most trusted interior design firms. Our founder's vision was simple yet powerful: 
                  create spaces that don't just look beautiful, but feel like home.
                </p>
                <p>
                  Over 500 projects later, that vision remains at the heart of everything we do. 
                  From intimate apartments to sprawling villas, from modern offices to boutique 
                  retail spaces—we approach each project with the same dedication to excellence.
                </p>
                <p>
                  Our team of 50+ designers, architects, and craftsmen share a common passion: 
                  transforming your vision into a living, breathing reality that surpasses 
                  your wildest expectations.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img src={portfolio1} alt="Our journey" className="w-full h-[450px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                </motion.div>
                <GlassCard className="absolute -bottom-8 -left-8 p-6 shadow-xl">
                  <span className="text-5xl font-bold text-primary">15+</span>
                  <p className="text-muted-foreground text-sm mt-1">Years of<br />Excellence</p>
                </GlassCard>
                <GlassCard className="absolute -top-4 -right-4 p-4 shadow-xl">
                  <span className="text-3xl font-bold text-accent">500+</span>
                  <p className="text-muted-foreground text-xs mt-1">Projects</p>
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Core Values</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">What Drives Us Forward</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Our values aren't just words on a wall—they're the principles that guide 
              every decision, every design, and every interaction.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <motion.div whileHover={{ y: -8 }} className="h-full">
                  <GlassCard hover className="p-8 text-center h-full border-gradient">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} 
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    >
                      <value.icon size={28} className="text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Achievements</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <motion.div whileHover={{ scale: 1.05, y: -4 }} className="stat-card rounded-2xl">
                  <item.icon size={28} className="text-accent mb-3 mx-auto" />
                  <motion.span 
                    initial={{ scale: 0.5 }} 
                    whileInView={{ scale: 1 }} 
                    viewport={{ once: true }} 
                    className="text-3xl md:text-4xl font-bold text-white block"
                  >
                    {item.number}
                  </motion.span>
                  <p className="text-white/70 mt-2 text-sm">{item.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">Milestones That Define Us</h2>
          </AnimatedSection>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <GlassCard className="p-6">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{milestone.description}</p>
                    </GlassCard>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                The Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
                Why Choose Sri Sri Interiors?
              </h2>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: index * 0.1 }} 
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={22} />
                    <div>
                      <span className="text-foreground font-medium">{item.title}</span>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src={portfolio2} alt="Our work" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
              </motion.div>
              <GlassCard className="relative -mt-20 mx-6 p-8 border-gradient z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">Let's Create Together</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Ready to transform your space? Our team is here to bring your vision to life 
                  with unmatched expertise and dedication.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact">Start Your Project<ArrowRight size={18} /></Link>
                </Button>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
