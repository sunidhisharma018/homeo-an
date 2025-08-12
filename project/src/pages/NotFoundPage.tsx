import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="text-9xl font-bold text-emerald-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            <Home className="w-5 h-5" />
            <span>Go to Homepage</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-gray-600 mb-6">Or search for what you need:</p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, articles, or clinics..."
                className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              to="/products"
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h4 className="font-medium text-gray-900">Products</h4>
              <p className="text-sm text-gray-600">Browse remedies</p>
            </Link>
            <Link
              to="/consultation"
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h4 className="font-medium text-gray-900">Consultation</h4>
              <p className="text-sm text-gray-600">Book with doctors</p>
            </Link>
            <Link
              to="/clinics"
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h4 className="font-medium text-gray-900">Find Clinics</h4>
              <p className="text-sm text-gray-600">Locate nearby</p>
            </Link>
            <Link
              to="/blog"
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h4 className="font-medium text-gray-900">Health Blog</h4>
              <p className="text-sm text-gray-600">Wellness tips</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;