import { useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "Bikes", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white shadow-md z-50 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Brand Name */}
          <div className="text-2xl font-bold text-[var(--color-primary)]">Ambika Hero</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black font-bold relative group transition-colors duration-300 ease-in-out"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out" />
              </a>
            ))}
            <button onClick={openModal} className="btn-primary">Book a Test Ride</button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-black text-lg font-bold hover:text-red-600 transition-colors duration-300 ease-in-out"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={openModal} 
                className="w-full bg-red-600 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
              >
                Book a Test Ride
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Test Ride Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Book a Test Ride</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-red-600"
              >
                <FaTimes />
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <select
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              >
                <option value="">Select Bike Model</option>
                <option value="splendor">Hero Splendor Plus</option>
                <option value="hf">Hero HF Deluxe</option>
                <option value="glamour">Hero Glamour</option>
              </select>
              <input
                type="date"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded w-full hover:bg-opacity-90"
              >
                Schedule Test Ride
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;