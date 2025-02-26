// import { useState } from "react";
// import { motion } from "framer-motion";

// const FeaturedBikeCard = ({ bike }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       {/* Bike Card */}
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
//       >
//         {/* Image with Click to Enlarge */}
//         <div 
//           className="relative cursor-pointer" 
//           onClick={() => setIsModalOpen(true)}
//         >
//           <img
//             src={bike.image || "https://via.placeholder.com/300?text=No+Image"}
//             alt={bike.name}
//             className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
//             loading="lazy"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "https://via.placeholder.com/300?text=No+Image";
//             }}
//           />
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 hover:bg-opacity-50 transition-opacity duration-300">
//             <span className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
//               Click to View
//             </span>
//           </div>
//         </div>

//         {/* Card Content */}
//         <div className="p-5 text-center">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">{bike.name}</h3>
//           <p className="text-red-600 text-lg font-medium">Starting from {bike.price}</p>
//           <button 
//             className="mt-4 w-full bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300"
//             onClick={() => setIsModalOpen(true)}
//           >
//             View Details
//           </button>
//         </div>
//       </motion.div>

//       {/* Modal Popup */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
//           onClick={() => setIsModalOpen(false)}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             className="relative bg-white p-5 rounded-lg shadow-lg max-w-lg"
//             onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
//               onClick={() => setIsModalOpen(false)}
//             >
//               &times;
//             </button>
//             <img
//               src={bike.image || "https://via.placeholder.com/500?text=No+Image"}
//               alt={bike.name}
//               className="w-full h-auto rounded-lg"
//               loading="lazy"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://via.placeholder.com/500?text=No+Image";
//               }}
//             />
//             <h3 className="text-xl font-semibold text-gray-900 mt-4">{bike.name}</h3>
//             <p className="text-red-600 text-lg font-medium mt-2">Starting from {bike.price}</p>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default FeaturedBikeCard;

// import { useState } from "react";
// import { motion } from "framer-motion";

// const FeaturedBikeCard = ({ bike }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       {/* Bike Card */}
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
//       >
//         {/* Image with Click to Enlarge */}
//         <div 
//           className="relative cursor-pointer" 
//           onClick={() => setIsModalOpen(true)}
//         >
//           <img
//             src={bike.image || "https://via.placeholder.com/300?text=No+Image"}
//             alt={bike.name}
//             className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
//             loading="lazy"
//             onError={(e) => (e.target.src = "https://via.placeholder.com/300?text=No+Image")}
//           />
//         </div>

//         {/* Card Content */}
//         <div className="p-5 text-center">
//           <h3 className="text-xl font-semibold text-gray-900">{bike.name}</h3>
//           <p className="text-red-600 text-lg font-medium">{bike.price}</p>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default FeaturedBikeCard;
import { useState } from "react";
import { motion } from "framer-motion";

const FeaturedBikeCard = ({ bike }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Bike Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
      >
        {/* Image with Click to Enlarge */}
        <div 
          className="relative cursor-pointer" 
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={bike.image || "https://via.placeholder.com/300?text=No+Image"}
            alt={bike.name}
            className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            onError={(e) => (e.target.src = "https://via.placeholder.com/300?text=No+Image")}
          />
        </div>

        {/* Card Content */}
        <div className="p-5 text-center">
          <h3 className="text-xl font-semibold text-gray-900">{bike.name}</h3>
          <p className="text-red-600 text-lg font-medium">{bike.price}</p>
        </div>
      </motion.div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-white p-5 rounded-lg shadow-lg max-w-lg"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <img
              src={bike.image || "https://via.placeholder.com/500?text=No+Image"}
              alt={bike.name}
              className="w-full h-auto rounded-lg"
              loading="lazy"
              onError={(e) => (e.target.src = "https://via.placeholder.com/500?text=No+Image")}
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{bike.name}</h3>
            <p className="text-red-600 text-lg font-medium mt-2">{bike.price}</p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default FeaturedBikeCard;
