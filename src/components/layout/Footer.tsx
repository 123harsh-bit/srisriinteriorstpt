import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"; // Removed Linkedin import
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/srisriinteriors",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
    },
    {
      icon: Facebook,
      label: "Facebook", 
      url: "https://facebook.com/srisriinteriors",
      color: "hover:bg-blue-600"
    },
    // LinkedIn has been removed
  ];

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
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 ${social.color} flex items-center justify-center transition-all duration-300 hover:text-white`}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-white/70 hover:text-white" />
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
                <a 
                  href="tel:+919490876503" 
                  className="flex items-start gap-4 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-accent/20 flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone size={16} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs mb-1">Call Us</span>
                    <span className="block">+91 9490876503</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:srisriinteriorstpt@gmail.com" // Updated email
                  className="flex items-start gap-4 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-accent/20 flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs mb-1">Email</span>
                    <span className="block">srisriinteriorstpt@gmail.com</span>
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
                    <span className="block">Near Dmart, opposite Bharath petroleum, Mangalam Road, Tirupati, Andhra Pradesh 517501</span>
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
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            {/* Social Links in Footer Bottom */}
            <div className="flex items-center gap-3 ml-4">
              <a 
                href="https://instagram.com/srisriinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://facebook.com/srisriinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
