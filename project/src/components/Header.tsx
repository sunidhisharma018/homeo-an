import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Search, ShoppingBag, User, Menu, X, ChevronDown, Phone, MapPin, Globe } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { categories, services, knowledgeHubCategories } from '../data/mockData';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' }
  ];
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <Link to="/clinics" className="hover:underline">Find Clinic Near You</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Free Shipping on Orders $75+</span>
            <Link to="/consultation" className="hover:underline">Book Consultation</Link>
            <div className="relative">
              <button className="flex items-center space-x-1 hover:underline">
                <Globe className="w-4 h-4" />
                <span>{currentLanguage}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-700 font-heading">Home-En-Live</h1>
                <p className="text-xs text-gray-600">Natural Wellness Solutions</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for remedies, conditions, or brands..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <User className="w-6 h-6" />
                  <span className="hidden md:block">Account</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                    {state.user ? (
                      <>
                        <Link 
                          to="/dashboard" 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Dashboard
                        </Link>
                        <Link 
                          to="/orders" 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Orders
                        </Link>
                        <button 
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link 
                          to="/login" 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Login
                        </Link>
                        <Link 
                          to="/register" 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link 
                to="/wishlist" 
                className="relative text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Heart className="w-6 h-6" />
                {state.wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link 
                to="/cart" 
                className="relative text-gray-700 hover:text-primary-600 transition-colors"
              >
                <ShoppingBag className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 hover:text-primary-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex border-t border-gray-200 py-3">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </Link>
              
              <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border p-4 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/services"
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 border-b border-gray-100"
                      >
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-bold">All</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">All Services</h3>
                          <p className="text-sm text-gray-600">View complete service list</p>
                        </div>
                      </Link>
                      {services.slice(0, 4).map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                        >
                          <img 
                            src={service.image} 
                            alt={service.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">{service.name}</h3>
                            <p className="text-sm text-gray-600">{service.shortDescription}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Knowledge Hub Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsKnowledgeOpen(true)}
                  onMouseLeave={() => setIsKnowledgeOpen(false)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  <span>Knowledge Hub</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isKnowledgeOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border p-4 z-50"
                    onMouseEnter={() => setIsKnowledgeOpen(true)}
                    onMouseLeave={() => setIsKnowledgeOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to="/knowledge-hub"
                        className="col-span-2 flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 border-b border-gray-100 mb-2"
                      >
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-bold text-sm">All</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">All Categories</h3>
                          <p className="text-sm text-gray-600">Browse all health topics</p>
                        </div>
                      </Link>
                      {knowledgeHubCategories.slice(0, 6).map((category) => (
                        <Link
                          key={category.id}
                          to={`/category/${category.id}`}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50"
                        >
                          <img 
                            src={category.image} 
                            alt={category.name}
                            className="w-8 h-8 object-cover rounded"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{category.name}</h4>
                            <p className="text-xs text-gray-600">{category.articleCount} articles</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/products" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Products
              </Link>
              
              <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Contact Us
              </Link>
              
              <Link to="/consultation" className="text-gray-700 hover:text-emerald-600 font-medium">
                Consultation
              </Link>
              
              <Link to="/careers" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Careers
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-2">
                <Link to="/" className="block py-2 text-gray-700 hover:text-primary-600">
                  Home
                </Link>
                <Link to="/about" className="block py-2 text-gray-700 hover:text-primary-600">
                  About Us
                </Link>
                <Link to="/services" className="block py-2 text-gray-700 hover:text-primary-600">
                  Services
                </Link>
                <Link to="/knowledge-hub" className="block py-2 text-gray-700 hover:text-primary-600">
                  Knowledge Hub
                </Link>
                <Link to="/products" className="block py-2 text-gray-700 hover:text-emerald-600">
                  Products
                </Link>
                <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary-600">
                  Contact Us
                </Link>
                <Link to="/consultation" className="block py-2 text-gray-700 hover:text-emerald-600">
                  Consultation
                </Link>
                <Link to="/careers" className="block py-2 text-gray-700 hover:text-primary-600">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;