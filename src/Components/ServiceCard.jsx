import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-8 bg-white bg-opacity-75 rounded-[var(--radius-2xl)] shadow-lg backdrop-blur-lg border border-gray-200 text-center transition-all duration-300"
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[var(--color-primary)] text-white rounded-full shadow-md">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
