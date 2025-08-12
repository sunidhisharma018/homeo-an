import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, Heart, ShoppingBag, ArrowLeft, Tag } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartPage: React.FC = () => {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, quantity: newQuantity } });
    }
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const moveToWishlist = (product: any) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
  };

  const subtotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = appliedCoupon === 'WELCOME10' ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 75 ? 0 : 50;
  const total = subtotal - discount + shipping;

  const applyCoupon = () => {
    if (couponCode === 'WELCOME10') {
      setAppliedCoupon(couponCode);
    }
    setCouponCode('');
  };

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Discover our natural remedies and start your wellness journey</p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-semibold"
          >
            <ShoppingBag className="w-6 h-6" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/products')}
              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Continue Shopping</span>
            </button>
            <div className="text-gray-300">|</div>
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart ({state.cart.length})</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {state.cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    {/* Product Image */}
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg hover:scale-105 transition-transform"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-emerald-600 font-medium mb-1">{item.brand}</p>
                          <Link 
                            to={`/product/${item.id}`}
                            className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">{item.form}</p>
                          
                          <div className="flex items-center space-x-4 mt-3">
                            <span className="text-xl font-bold text-gray-900">₹{item.price}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                            )}
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Quantity Controls & Actions */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => moveToWishlist(item)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
                          >
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">Move to Wishlist</span>
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            ₹{item.price} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon Code */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Tag className="w-5 h-5" />
                <span>Apply Coupon</span>
              </h3>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="Enter coupon code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    onClick={applyCoupon}
                    disabled={!couponCode}
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">Coupon "{appliedCoupon}" applied!</span>
                  </div>
                )}
                <p className="text-sm text-gray-600">Try: WELCOME10 for 10% off</p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal ({state.cart.length} items)</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex items-center justify-between text-green-600">
                    <span>Discount ({appliedCoupon})</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                    {shipping === 0 ? 'Free' : `₹${shipping}`}
                  </span>
                </div>
                
                {shipping > 0 && (
                  <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                    Add ₹{(75 - subtotal).toLocaleString()} more for free shipping!
                  </div>
                )}
                
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-emerald-600">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full mt-6 bg-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors hover:shadow-lg"
              >
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <Link
                  to="/products"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-gray-100 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Secure Checkout</p>
                  <p className="text-sm text-gray-600">SSL encrypted payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;