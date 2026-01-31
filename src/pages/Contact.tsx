import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, Sparkles, Loader2, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingParticles from "@/components/FloatingParticles";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import heroImage from "@/assets/hero-living-room.jpg";

const contactInfo = [
  { icon: Phone, title: "Phone", details: ["+91 98765 43210", "+91 98765 43211"] },
  { icon: Mail, title: "Email", details: ["info@srisriinteriors.com", "projects@srisriinteriors.com"] },
  { icon: MapPin, title: "Office", details: ["123 Design Street", "Hyderabad, Telangana 500001"] },
  { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"] },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <section className="relative py-32 md:py-40 overflow-hidden hero-gradient">
        <div className="absolute inset-0">
          <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src={heroImage} alt="Contact us" className="w-full h-full object-cover opacity-20" />
        </div>
        <FloatingParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <GlassCard dark className="p-12 md:p-20 border-gradient">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles size={16} className="text-accent" />
                <span className="text-accent text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
                <Sparkles size={16} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Let's Start Your<br /><span className="text-gradient-gold">Dream Project</span></h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto">Ready to transform your space? Reach out to us and let's discuss how we can bring your vision to life.</p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <GlassCard className="p-8 md:p-10 border-gradient">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle size={40} className="text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll get back to you within 24-48 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                          <Input 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="John Doe" 
                            className="h-12 rounded-xl bg-muted/50 border-border focus:border-primary" 
                            required 
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                          <Input 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="john@example.com" 
                            className="h-12 rounded-xl bg-muted/50 border-border focus:border-primary" 
                            required 
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                          <Input 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            placeholder="+91 98765 43210" 
                            className="h-12 rounded-xl bg-muted/50 border-border focus:border-primary" 
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                          <Input 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            placeholder="Project Inquiry" 
                            className="h-12 rounded-xl bg-muted/50 border-border focus:border-primary" 
                            required 
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Your Message</label>
                        <Textarea 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange} 
                          placeholder="Tell us about your project..." 
                          className="min-h-[150px] rounded-xl bg-muted/50 border-border focus:border-primary resize-none" 
                          required 
                          disabled={isSubmitting}
                        />
                      </div>
                      <motion.div whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                        <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send size={18} />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </GlassCard>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection className="mb-8">
                <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
                <p className="text-muted-foreground mt-2">Reach out to us through any of these channels.</p>
              </AnimatedSection>
              {contactInfo.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <motion.div whileHover={{ x: 8 }}>
                    <GlassCard hover className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon size={22} className="text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          {item.details.map((detail, i) => (<p key={i} className="text-muted-foreground text-sm">{detail}</p>))}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-muted/30 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection>
            <GlassCard className="p-8 text-center border-gradient">
              <motion.div whileHover={{ scale: 1.1 }}><MapPin size={48} className="text-primary mx-auto mb-4" /></motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Visit Our Office</h3>
              <p className="text-muted-foreground">123 Design Street, Hyderabad, Telangana</p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
