import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Share2, Minus, Plus, Truck, Shield, RefreshCw, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { useApp } from '../contexts/AppContext';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const product = mockProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const isInWishlist = state.wishlist.some(item => item.id === product.id);
  const isInCart = state.cart.some(item => item.id === product.id);
  const relatedProducts = mockProducts.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const images = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <span className="cursor-pointer hover:text-emerald-600" onClick={() => navigate('/')}>
              Home
            </span>
            <span className="mx-2">/</span>
            <span className="cursor-pointer hover:text-emerald-600" onClick={() => navigate('/products')}>
              Products
            </span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
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
                  {product.originalPrice && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                      SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index 
                          ? 'border-emerald-600' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand & Title */}
              <div>
                <p className="text-sm text-emerald-600 font-medium mb-2">{product.brand}</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium text-gray-900">{product.rating}</span>
                    <span className="text-gray-600">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Form & Usage */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-500">Form:</span>
                  <p className="text-gray-900 font-medium">{product.form}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Category:</span>
                  <p className="text-gray-900 font-medium">{product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      product.inStock
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingBag className="w-6 h-6" />
                    <span>{isInCart ? `Add More to Cart` : 'Add to Cart'}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleToggleWishlist}
                      className={`py-3 px-4 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isInWishlist
                          ? 'border-red-500 bg-red-50 text-red-600'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                      <span>{isInWishlist ? 'Wishlisted' : 'Add to Wishlist'}</span>
                    </button>

                    <button className="py-3 px-4 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors flex items-center justify-center space-x-2">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Free Shipping</p>
                    <p className="text-sm text-gray-600">On orders above ₹75</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">100% Natural</p>
                    <p className="text-sm text-gray-600">Pure homeopathic remedy</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Easy Returns</p>
                    <p className="text-sm text-gray-600">30-day return policy</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Quality Assured</p>
                    <p className="text-sm text-gray-600">Certified & tested</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex space-x-8 px-8 border-b border-gray-200">
              {[
                { id: 'description', label: 'Description' },
                { id: 'ingredients', label: 'Ingredients' },
                { id: 'usage', label: 'Usage Instructions' },
                { id: 'reviews', label: 'Reviews' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 transition-colors font-medium ${
                    activeTab === tab.id
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This homeopathic remedy is carefully prepared following traditional methods and 
                    modern quality standards. It's designed to support your body's natural healing 
                    process without causing any side effects when used as directed.
                  </p>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Active Ingredients</h3>
                  <p className="text-gray-700 mb-4">{product.ingredients}</p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> This product contains homeopathically prepared ingredients. 
                      Please consult with a healthcare professional before use if you are pregnant, 
                      nursing, or have any medical conditions.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'usage' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">How to Use</h3>
                  <p className="text-gray-700 mb-4">{product.usage}</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-emerald-600 font-bold text-sm">1</span>
                      </div>
                      <p className="text-gray-700">Take the recommended dosage as mentioned above</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-emerald-600 font-bold text-sm">2</span>
                      </div>
                      <p className="text-gray-700">Take 30 minutes before or after meals for best results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-emerald-600 font-bold text-sm">3</span>
                      </div>
                      <p className="text-gray-700">Store in a cool, dry place away from direct sunlight</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{product.rating}</span>
                      <span className="text-gray-600">({product.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Sample Reviews */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium text-gray-900">Excellent product!</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        This remedy worked wonderfully for my condition. Noticed improvement within a few days 
                        of regular use. Highly recommend!
                      </p>
                      <p className="text-sm text-gray-500">By Sarah M. - Verified Purchase</p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="w-4 h-4 text-gray-300" />
                        </div>
                        <span className="font-medium text-gray-900">Good quality</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        Good product with fast shipping. The packaging was excellent and the product 
                        quality is as expected.
                      </p>
                      <p className="text-sm text-gray-500">By Mike R. - Verified Purchase</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;