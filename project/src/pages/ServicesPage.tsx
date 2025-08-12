import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import { services } from '../data/mockData';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive homeopathic healthcare services tailored to your unique needs. 
              Experience natural healing with our expert practitioners.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold">₹{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.shortDescription}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <Link
                    to="/consultation"
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 font-heading">
            Why Choose Our Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Practitioners</h3>
              <p className="text-gray-600">
                Our certified homeopathic doctors have years of experience and proven track records in natural healing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                Every treatment plan is tailored to your unique constitution, symptoms, and health goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Natural</h3>
              <p className="text-gray-600">
                All our treatments use natural remedies with no side effects, suitable for all ages.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Start Your Healing Journey?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Book a consultation with our expert homeopathic practitioners and discover 
            personalized natural solutions for your health concerns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/consultation"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesPage;