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
  const duplicated = [...clients, ...clients];

  return (
    <section className="py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto overflow-hidden">

        {/* Edge fade that blends naturally */}
        <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none 
                        bg-gradient-to-r from-[inherit] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none 
                        bg-gradient-to-l from-[inherit] to-transparent z-10" />

        <motion.div
          className="flex items-center gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 14,
            repeat: Infinity,
          }}
        >
          {duplicated.map((client, index) => (
            <img
              key={`${client.name}-${index}`}
              src={client.logo}
              alt={client.name}
              className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ClientLogos;
