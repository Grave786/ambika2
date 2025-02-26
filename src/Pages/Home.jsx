import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMotorcycle, FaTools, FaFileContract, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bikes = [
    {
      id: 1,
      name: "Hero Splendor Plus",
      price: "₹72,000",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Hero HF Deluxe",
      price: "₹65,000",
      image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Hero Glamour",
      price: "₹82,000",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "Excellent service and great selection of bikes!",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Professional staff and competitive prices.",
      rating: 4
    },
    {
      id: 3,
      name: "Mike Johnson",
      review: "Best bike showroom in the city!",
      rating: 5
    }
  ];

  const services = [
    {
      id: 1,
      title: "Bike Sales",
      description: "Wide range of Hero bikes",
      icon: <FaMotorcycle />
    },
    {
      id: 2,
      title: "Servicing & Repairs",
      description: "Professional maintenance",
      icon: <FaTools />
    },
    {
      id: 3,
      title: "Insurance",
      description: "Hassle-free insurance",
      icon: <FaFileContract />
    },
    {
      id: 4,
      title: "Finance Assistance",
      description: "Easy EMI options",
      icon: <FaHandshake />
    }
  ];

  return (
    <div className="font-sans bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-card shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Ambika Hero</div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary">Home</a>
            <a href="#bikes" className="text-foreground hover:text-primary">Bikes</a>
            <a href="#services" className="text-foreground hover:text-primary">Services</a>
            <a href="#about" className="text-foreground hover:text-primary">About Us</a>
            <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-opacity-90"
            >
              Book a Test Ride
            </button>
          </div>
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-card z-40 md:hidden pt-16">
          <div className="flex flex-col items-center space-y-4 p-4">
            <a href="#home" className="text-foreground hover:text-primary">Home</a>
            <a href="#bikes" className="text-foreground hover:text-primary">Bikes</a>
            <a href="#services" className="text-foreground hover:text-primary">Services</a>
            <a href="#about" className="text-foreground hover:text-primary">About Us</a>
            <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-opacity-90 w-full"
            >
              Book a Test Ride
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-foreground bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Find Your Dream Ride with Ambika Hero
          </h1>
          <p className="text-xl text-primary-foreground mb-8">
            Your trusted Hero MotoCorp showroom for the latest and most powerful rides.
          </p>
          <a
            href="#bikes"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg hover:bg-opacity-90"
          >
            Explore Bikes
          </a>
        </div>
      </section>

      {/* Featured Bikes */}
      <section id="bikes" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Bikes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikes.map((bike) => (
              <motion.div
                key={bike.id}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{bike.name}</h3>
                  <p className="text-accent mb-4">Starting from {bike.price}</p>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded w-full hover:bg-opacity-90">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-lg text-center"
              >
                <div className="text-4xl text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-accent">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-sm">
                <p className="text-accent mb-4">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex text-chart-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded w-full hover:bg-opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p>Phone: +91 1234567890</p>
                <p>Email: info@ambikahero.com</p>
                <p>Address: 123 Hero Street, Bike City, State - 123456</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Ambika Hero</h4>
              <p className="text-accent">Your trusted Hero MotoCorp dealer</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-accent hover:text-primary">Home</a>
                <a href="#bikes" className="block text-accent hover:text-primary">Bikes</a>
                <a href="#services" className="block text-accent hover:text-primary">Services</a>
                <a href="#contact" className="block text-accent hover:text-primary">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-accent hover:text-primary"><FaFacebookF /></a>
                <a href="#" className="text-accent hover:text-primary"><FaTwitter /></a>
                <a href="#" className="text-accent hover:text-primary"><FaInstagram /></a>
                <a href="#" className="text-accent hover:text-primary"><FaLinkedinIn /></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
              <p className="text-accent">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-accent">Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-accent">© 2024 Ambika Hero. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Test Ride Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-foreground bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-card p-8 rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Book a Test Ride</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-accent hover:text-primary"
              >
                <FaTimes />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <select
                  className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select Bike Model</option>
                  <option value="splendor">Hero Splendor Plus</option>
                  <option value="hf">Hero HF Deluxe</option>
                  <option value="glamour">Hero Glamour</option>
                </select>
              </div>
              <div>
                <input
                  type="date"
                  className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded w-full hover:bg-opacity-90"
              >
                Schedule Test Ride
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;