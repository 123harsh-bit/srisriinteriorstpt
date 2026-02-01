import { motion } from "framer-motion";

import ttd from "@/assets/ttd.png";
import svim from "@/assets/svim.png";
import iaa from "@/assets/iaa.png";

const clients = [
  { name: "TTD", logo: ttd },
  { name: "SVIM", logo: svim },
  { name: "IAA", logo: iaa },
];

const ClientLogos = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-10 bg-muted/30">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10" />

      <motion.div
        className="flex items-center gap-20"
        animate={{ x: [0, -300 * clients.length] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 px-10 py-5 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center"
          >
            <img
  src={client.logo}
  alt={client.name}
  className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition duration-300"
/>

          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientLogos;
