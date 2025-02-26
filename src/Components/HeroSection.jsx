// import { useState, useEffect } from "react";

// const HeroSection = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3",
//     "https://images.unsplash.com/photo-1513708928762-9e8b7bb77e3b",
//     "https://images.unsplash.com/photo-1558980664-10ec60c7e62b",
//     "https://images.unsplash.com/photo-1517609347977-201ad53d8a19"
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section
//       id="home"
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
//         style={{ backgroundImage: `url(${images[currentImage]})` }}
//       ></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           Find Your Dream Ride with <span className="text-red-500">Ambika Hero</span>
//         </h1>
//         <p className="text-xl text-gray-200 mb-8">
//           Your trusted Hero MotoCorp showroom for the latest and most powerful rides.
//         </p>
//         <a
//           href="#bikes"
//           className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition duration-300"
//         >
//           Explore Bikes
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80",
    "https://hgpmart.wordpress.com/wp-content/uploads/2019/07/xtreem-200r-banner-new-1.png",
    "https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/executive/content-fragments/super-splendor/assets/Super_sSplendor_bbanner-01.png",
    "https://4.imimg.com/data4/AA/AA/GLADMIN-/en-in-uploads-bike-bike_banner-20161019104823-bike-banner-super-splendor-121-1000x1000.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    console.log("Current Image:", images[currentImage]); // Debugging

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/1600x900?text=Image+Not+Found")
            }
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Find Your Dream Ride with{" "}
          <span className="text-red-500">Ambika Hero</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Your trusted Hero MotoCorp showroom for the latest and most powerful
          rides.
        </p>
        <a
          href="#bikes"
          className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition duration-300"
        >
          Explore Bikes
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
