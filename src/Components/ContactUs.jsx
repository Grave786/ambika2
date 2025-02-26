import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-primary text-xl" />
                <p className="text-gray-700">+91 1234567890</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-primary text-xl" />
                <p className="text-gray-700">info@ambikahero.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-primary text-xl" />
                <p className="text-gray-700">123 Hero Street, Bike City, State - 123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;