import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../data/mockData';
import { motion } from 'framer-motion';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              {service.name}
            </h1>
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-lg font-semibold">₹{service.price}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{service.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Service Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

              {/* What to Expect */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Comprehensive health assessment and consultation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Personalized treatment plan based on your unique constitution</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Natural remedies with no side effects</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Follow-up support and guidance throughout your healing journey</p>
                  </div>
                </div>
              </div>

              {/* Preparation Guidelines */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Prepare</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bring a list of current medications and supplements</li>
                  <li>• Note down your symptoms and when they occur</li>
                  <li>• Prepare questions about your health concerns</li>
                  <li>• Arrive 10 minutes early for paperwork</li>
                  <li>• Bring your medical history and previous test results</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Service</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-primary-600 text-xl">₹{service.price}</span>
                </div>
              </div>

              <Link
                to="/consultation"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="mt-4 text-center">
                <Link
                  to="/contact"
                  className="text-primary-600 hover:text-primary-700 transition-colors font-medium"
                >
                  Have questions? Contact us
                </Link>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-primary-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Our team is here to answer any questions about this service.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Email:</strong> info@home-en-live.com</p>
                <p><strong>Hours:</strong> Mon-Fri 9AM-7PM</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Services */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.filter(s => s.id !== service.id).slice(0, 3).map((relatedService) => (
              <Link
                key={relatedService.id}
                to={`/services/${relatedService.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={relatedService.image}
                  alt={relatedService.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {relatedService.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {relatedService.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary-600">₹{relatedService.price}</span>
                    <span className="text-sm text-gray-500">{relatedService.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServiceDetailPage;