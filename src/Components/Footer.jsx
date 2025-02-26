import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Ambika Hero</h4>
              <p>Your trusted Hero MotoCorp dealer</p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-primary transition-all">Home</a></li>
                <li><a href="#bikes" className="hover:text-primary transition-all">Bikes</a></li>
                <li><a href="#services" className="hover:text-primary transition-all">Services</a></li>
                <li><a href="#contact" className="hover:text-primary transition-all">Contact</a></li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary text-xl"><FaFacebookF /></a>
                <a href="#" className="text-gray-400 hover:text-primary text-xl"><FaTwitter /></a>
                <a href="#" className="text-gray-400 hover:text-primary text-xl"><FaInstagram /></a>
                <a href="#" className="text-gray-400 hover:text-primary text-xl"><FaLinkedinIn /></a>
              </div>
            </div>
  
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Working Hours</h4>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>© 2024 Ambika Hero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;