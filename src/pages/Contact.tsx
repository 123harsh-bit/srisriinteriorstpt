import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, Sparkles, Loader2, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import heroImage from "@/assets/hero-living-room.jpg";

const contactInfo = [
  { icon: Phone, title: "Phone", details: ["+91 94908 76503"] },
  { icon: Mail, title: "Email", details: ["srisriinteriorstpt@gmail.com"] },
  { icon: MapPin, title: "Office", details: ["Near Dmart , opposite Bharath petroleum, Mangalam Road, Tirupati,Andhra Pradesh 517501"] },
  { icon: Clock, title: "Working Hours", details: ["Mon - Sun: 9:00 AM - 7:00 PM"] },
];

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log("Form submit triggered");
    
    // Format the WhatsApp message
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:*
${formData.message}

_This message was sent via Sri Sri Interiors website_
    `.trim();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (remove spaces and special characters)
    const whatsappNumber = "919490876503";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Set submitting state
    setIsSubmitting(true);
    
    // Show toast notification
    toast.success("Redirecting to WhatsApp...");
    
    // Open WhatsApp in a new tab after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      // Reset form
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleMapsRedirect = () => {
    console.log("Google Maps button clicked");
    const latitude = 13.648881217170862;
    const longitude = 79.4486234730164;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  // CORRECT COORDINATES from provided: 13.648881217170862, 79.4486234730164
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.246285714286!2d79.4486234730164!3d13.648881217170862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM4JzU2LjAiTiA3OcKwMjYnNTUuMCJF!5e0!3m2!1sen!2sin!4v1700000000000&zoom=17`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Contact us" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-primary/40 to-secondary/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="text-accent w-5 h-5" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                GET IN TOUCH
              </span>
              <Sparkles className="text-accent w-5 h-5" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Let's Start Your<br />
              <span className="text-gradient-gold">Dream Project</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Ready to transform your space? Reach out to us and let's discuss how we can bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button 
                onClick={() => {
                  const formSection = document.getElementById('contact-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="hero" 
                size="lg" 
                className="group"
              >
                Send Message
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form - Left Side */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Send Us a Message
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                        className="w-full h-12 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                        className="w-full h-12 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        disabled={isSubmitting}
                        className="w-full h-12 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        disabled={isSubmitting}
                        className="w-full h-12 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="w-full min-h-[150px] focus:border-primary focus:ring-primary"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Redirecting to WhatsApp...
                        </>
                      ) : (
                        <>
                          Send via WhatsApp
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-gray-500 text-sm text-center mt-4">
                    We'll respond to your message via WhatsApp within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Reach out to us through any of these channels.
                </p>
              </div>
              
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Find Our Office
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Visit us at our location in Tirupati
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg h-[400px]">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Sri Interiors Location - Tirupati"
                  className="rounded-lg"
                />
              </div>
            </div>
            
            {/* Location Details */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Office Location
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    Address -  Near dmart,opposite Bharath petroleum, Mangalam Road, Tirupati Andhra Pradesh 517501
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Get Directions
                  </h4>
                  <Button
                    onClick={handleGoogleMapsRedirect}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Landmarks Nearby
                  </h4>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Opposite Bharath Petroleum & D Mart
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      On Karakambadi Road
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      In Mangalam area of Tirupati
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Parking
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Ample parking space available opposite the office
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss your project and create a space that reflects your style and personality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const formSection = document.getElementById('contact-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="hero" 
                size="lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={handleGoogleMapsRedirect}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Visit Our Office
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;