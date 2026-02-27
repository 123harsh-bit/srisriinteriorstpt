import { motion } from "framer-motion";

// your existing imports stay same

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
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 px-6">
      
      {/* Gradient Border Wrapper */}
      <div
        className="rounded-3xl p-[2px]"
        style={{
          background: "linear-gradient(90deg, #ff6ec4, #7873f5)",
        }}
      >
        {/* Inner White Container */}
        <div className="bg-white rounded-3xl overflow-hidden py-12">
          
          <div className="relative overflow-hidden">
            
            {/* Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            
            {/* Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              className="flex items-center gap-24"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gray-50 px-12 py-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
