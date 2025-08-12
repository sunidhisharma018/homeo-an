import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">HomeoVital</h3>
                <p className="text-sm text-gray-400">Natural Wellness Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Dedicated to providing natural, safe, and effective homeopathic remedies for your family's health and wellness needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-400 hover:text-emerald-400 transition-colors">All Products</Link></li>
              <li><Link to="/consultation" className="text-gray-400 hover:text-emerald-400 transition-colors">Book Consultation</Link></li>
              <li><Link to="/clinics" className="text-gray-400 hover:text-emerald-400 transition-colors">Find Clinic</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">Health Blog</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><Link to="/products?category=common-ailments" className="text-gray-400 hover:text-emerald-400 transition-colors">Common Ailments</Link></li>
              <li><Link to="/products?category=childrens-health" className="text-gray-400 hover:text-emerald-400 transition-colors">Children's Health</Link></li>
              <li><Link to="/products?category=immunity-boosters" className="text-gray-400 hover:text-emerald-400 transition-colors">Immunity Boosters</Link></li>
              <li><Link to="/products?category=chronic-care" className="text-gray-400 hover:text-emerald-400 transition-colors">Chronic Care</Link></li>
              <li><Link to="/products?category=skin-hair" className="text-gray-400 hover:text-emerald-400 transition-colors">Skin & Hair</Link></li>
              <li><Link to="/products?category=womens-health" className="text-gray-400 hover:text-emerald-400 transition-colors">Women's Health</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <p className="text-gray-400">123 Main Street</p>
                  <p className="text-gray-400">Downtown, City 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <p className="text-gray-400">info@homeovital.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <p className="text-gray-400">Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-400">Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for health tips and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-emerald-500"
              />
              <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 HomeoVital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/returns" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;