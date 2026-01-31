import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Decorative Top Border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="squircle w-12 h-12 shadow-lg ring-1 ring-white/10">
                <img
                  src={logo}
                  alt="Sri Sri Interiors"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">
                Sri Sri Interiors
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Crafting luxurious, personalized interiors that transform houses into 
              dream homes. Where your vision meets our expertise.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent/20 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} className="text-white/70" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-luxury mb-6 text-accent">
              Navigate
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-luxury mb-6 text-accent">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white/80 transition-colors cursor-default">Residential Interiors</li>
              <li className="hover:text-white/80 transition-colors cursor-default">Modular Kitchen Design</li>
              <li className="hover:text-white/80 transition-colors cursor-default">Office & Commercial</li>
              <li className="hover:text-white/80 transition-colors cursor-default">Custom Furniture</li>
              <li className="hover:text-white/80 transition-colors cursor-default">Turnkey Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-luxury mb-6 text-accent">
              Get in Touch
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-4 text-sm text-white/60 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-accent/20 flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone size={16} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs mb-1">Call Us</span>
                    <span className="block">+91 98765 43210</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@srisriinteriors.com" className="flex items-start gap-4 text-sm text-white/60 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-accent/20 flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs mb-1">Email</span>
                    <span className="block">info@srisriinteriors.com</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4 text-sm text-white/60">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs mb-1">Location</span>
                    <span className="block">Hyderabad, Telangana</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} Sri Sri Interiors. Crafted with passion.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
