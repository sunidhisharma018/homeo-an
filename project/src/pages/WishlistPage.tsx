import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const WishlistPage: React.FC = () => {
  const { state, dispatch } = useApp();

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  if (state.wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Save your favorite remedies for later</p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-semibold"
          >
            <ShoppingBag className="w-6 h-6" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">{state.wishlist.length} items saved for later</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {state.wishlist.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group"
              >
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-red-500" />
                </button>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;