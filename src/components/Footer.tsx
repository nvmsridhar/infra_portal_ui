import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BuildRight Construction</h3>
            <p className="text-gray-400">
              Building dreams into reality with quality, integrity, and innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>info@buildright.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>123 Construction Ave, Builder's City, BC 12345</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BuildRight Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;