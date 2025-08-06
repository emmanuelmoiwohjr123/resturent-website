import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Restaurant</h3>
            <p className="mb-2">123 Restaurant Street</p>
            <p className="mb-2">Foodie City, FC 12345</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: info@restaurant.com</p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p className="mb-2">Monday - Friday</p>
            <p className="mb-4">11:00 AM - 10:00 PM</p>
            <p className="mb-2">Saturday - Sunday</p>
            <p>12:00 PM - 11:00 PM</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} M-Tech Solutions. Built by innovators. Visit us at <a className='hover:text-white transition-colors' href="https://www.mtechsolution.online">www.mtechsolution.online</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
