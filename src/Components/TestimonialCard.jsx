import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial = {} }) => {
  // Default values to avoid undefined errors
  const { review = "No review available", image = "", name = "Anonymous", rating = 0 } = testimonial;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white bg-opacity-75 rounded-[var(--radius-2xl)] shadow-lg backdrop-blur-lg border border-gray-200 text-center transition-all duration-300"
    >
      <p className="text-gray-600 italic mb-4">"{review}"</p>
      <div className="flex flex-col items-center">
        <img
          src={image || "https://via.placeholder.com/64"}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-md mb-2"
        />
        <p className="font-semibold text-gray-900">{name}</p>
        <div className="flex text-yellow-500 mt-1">
          {[...Array(rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
