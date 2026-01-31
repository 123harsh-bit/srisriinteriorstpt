import { motion } from "framer-motion";

const clients = [
  "Prestige Estates",
  "Sobha Developers",
  "Brigade Group",
  "Godrej Properties",
  "Puravankara",
  "Salarpuria Sattva",
  "Embassy Group",
  "Mantri Developers",
];

const ClientLogos = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-8 bg-muted/30">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

      <motion.div
        className="flex items-center gap-16"
        animate={{ x: [0, -50 * clients.length * 3] }}
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
            key={`${client}-${index}`}
            className="flex-shrink-0 px-8 py-3 rounded-full bg-background shadow-sm border border-border"
          >
            <span className="text-muted-foreground font-medium whitespace-nowrap text-sm">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientLogos;
