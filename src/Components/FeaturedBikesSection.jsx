import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeaturedBikeCard from "./FeaturedBikeCard";

const FeaturedBikesSection = () => {
  const bikes = [
    { id: 1, name: "Hero Xtreme 160R", price: "$1,200", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/motorcycle/i/r/o/double-disc-premium-self-xtreme-160r-4v-disc-booking-for-ex-original-imagtnkyktds3zuk.jpeg?q=90&crop=false" },
    { id: 2, name: "Hero Splendor Plus", price: "$1,000", image: "https://cdn.bikedekho.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor6594f14be4e7a.jpg" },
    { id: 3, name: "Hero Passion Pro", price: "$1,150", image: "https://www.otocapital.in/_next/image?url=https%3A%2F%2Fassets.otocapital.in%2Fprod%2Fblack-with-frost-blue-hero-passionpro-image.jpeg&w=1536&q=75" },
    { id: 4, name: "Hero Glamour", price: "$1,250", image: "https://www.otocapital.in/_next/image?url=https%3A%2F%2Fassets.otocapital.in%2Fprod%2Fcandy-blazing-red-hero-glamour-right-side-view.png&w=1536&q=75" },
    { id: 5, name: "Hero Maestro Edge", price: "$1,300", image: "https://images.unsplash.com/photo-1597484663257-3205bba4e9ec" },
    { id: 6, name: "Hero HF Deluxe", price: "$1,050", image: "https://images.unsplash.com/photo-1514474959185-14e65497c57e" },
    { id: 7, name: "Hero Super Splendor", price: "$1,400", image: "https://images.unsplash.com/photo-1570342455457-6b9e6c5e16c1" },
    { id: 8, name: "Hero Destini 125", price: "$1,350", image: "https://images.unsplash.com/photo-1620771387432-3fcd84406a34" }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const bikesPerPage = 4;

  // Auto-cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 50000);
    return () => clearInterval(interval);
  }, [startIndex]);

  // Show next set of bikes
  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + bikesPerPage) % bikes.length);
  };

  // Show previous set of bikes
  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - bikesPerPage < 0 ? bikes.length - bikesPerPage : prevIndex - bikesPerPage
    );
  };

  return (
    <section id="bikes" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Bikes</h2>

        {/* Bikes Grid */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-red-600 text-white px-3 py-2 rounded-full shadow-md hover:bg-red-700 transition duration-300"
          >
            &#9665;
          </button>

          {/* Bike Cards with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 overflow-hidden">
            <AnimatePresence mode="wait">
              {bikes.slice(startIndex, startIndex + bikesPerPage).map((bike) => (
                <motion.div
                  key={bike.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <FeaturedBikeCard bike={bike} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 bg-red-600 text-white px-3 py-2 rounded-full shadow-md hover:bg-red-700 transition duration-300"
          >
            &#9655;
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikesSection;
