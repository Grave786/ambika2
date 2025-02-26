import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    { id: 1, title: "Bike Rentals", description: "Rent premium bikes at the best rates.", icon: "🏍️" },
    { id: 2, title: "24/7 Support", description: "We're here for you anytime, anywhere.", icon: "🛠️" },
    { id: 3, title: "Custom Modifications", description: "Upgrade and customize your ride.", icon: "⚙️" },
    { id: 4, title: "Insurance & Safety", description: "Comprehensive insurance coverage.", icon: "🛡️" },
    { id: 5, title: "Test Rides", description: "Experience before you buy.", icon: "🛑" },
    { id: 6, title: "EMI Options", description: "Flexible financing available.", icon: "💰" },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
