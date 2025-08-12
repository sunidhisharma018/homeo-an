import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../contexts/AppContext';
import { useApp } from '../contexts/AppContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { state, dispatch } = useApp();

  const isInWishlist = state.wishlist.some(item => item.id === product.id);
  const isInCart = state.cart.some(item => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}>
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
        {product.isNew && (
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="px-3 py-1 bg-orange-600 text-white text-xs font-medium rounded-full">
            BESTSELLER
          </span>
        )}
        {discountPercentage > 0 && (
          <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
            -{discountPercentage}%
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleToggleWishlist}
        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
      >
        <Heart 
          className={`w-5 h-5 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        />
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <Eye className="w-5 h-5 text-gray-700" />
          </Link>
          <button
            onClick={handleAddToCart}
            className="p-3 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        {/* Brand */}
        <p className="text-sm text-emerald-600 font-medium mb-2">{product.brand}</p>
        
        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        {/* Form & Stock Status */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">{product.form}</span>
          <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
            product.inStock
              ? isInCart
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isInCart 
            ? 'Added to Cart' 
            : product.inStock 
              ? 'Add to Cart' 
              : 'Out of Stock'
          }
        </button>
      </div>
    </div>
  );
};

export default ProductCard;