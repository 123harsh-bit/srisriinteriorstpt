import { motion } from "framer-motion";

// Existing imports
import ttd from "@/assets/ttd.png";
import svim from "@/assets/svim.png";
import iaa from "@/assets/iaa.png";

// New imports for your logos
import amaraRajaGroup from "@/assets/Amara_raja_group.png";
import amaraHospital from "@/assets/amarahospital.png";
import atlantis from "@/assets/atlantis.png";
import celkon from "@/assets/celkon.png";
import credaiLogo from "@/assets/CREDAI-Logo.jpg";
import ekanteBliss from "@/assets/ekante bliss.jpg";
import iitt from "@/assets/iitt.png";
import isser from "@/assets/isser.png";
import jmc from "@/assets/jmc.jpeg";
import kps from "@/assets/kps.png";
import manasain from "@/assets/manasain.png";
import plr from "@/assets/plr.png";
import pvgn from "@/assets/pvgn.png";
import sainik from "@/assets/sainik.png";
import tcl from "@/assets/tcl.png";
import yamaha from "@/assets/yamaha.png";

const clients = [
  { name: "TTD", logo: ttd },
  { name: "SVIM", logo: svim },
  { name: "IAA", logo: iaa },
  { name: "Amara Raja Group", logo: amaraRajaGroup },
  { name: "Amara Hospital", logo: amaraHospital },
  { name: "Atlantis", logo: atlantis },
  { name: "Celkon", logo: celkon },
  { name: "CREDAI", logo: credaiLogo },
  { name: "Ekante Bliss", logo: ekanteBliss },
  { name: "IITT", logo: iitt },
  { name: "ISSER", logo: isser },
  { name: "JMC", logo: jmc },
  { name: "KPS", logo: kps },
  { name: "Manasain", logo: manasain },
  { name: "PLR", logo: plr },
  { name: "PVGN", logo: pvgn },
  { name: "Sainik", logo: sainik },
  { name: "TCL", logo: tcl },
  { name: "Yamaha", logo: yamaha },
];

const ClientLogos = () => {
  // Duplicate clients to create a seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    // Outer wrapper with gradient background and padding (creates the border)
    <div className="relative bg-gradient-to-r from-pink-400 to-purple-400 p-1 rounded-2xl overflow-hidden shadow-lg">
      {/* Inner white container with same border-radius – holds the carousel */}
      <div className="bg-white rounded-2xl py-8 overflow-hidden">
        {/* Scrolling container with max-content width and flex layout */}
        <motion.div
          className="flex items-center gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-36 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogos;
