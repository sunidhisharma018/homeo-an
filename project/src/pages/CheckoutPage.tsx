import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Shield, ArrowLeft, MapPin, Phone, User } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { motion } from 'framer-motion';

const CheckoutPage: React.FC = () => {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const subtotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal >= 75 ? 0 : 50;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = () => {
    // Simulate order placement
    dispatch({ type: 'CLEAR_CART' });
    navigate('/orders');
    // In real app, you would process payment and create order
  };

  if (state.cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/cart')}
              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Cart</span>
            </button>
            <div className="text-gray-300">|</div>
            <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  <span className={`ml-2 font-medium ${
                    currentStep >= step ? 'text-emerald-600' : 'text-gray-400'
                  }`}>
                    {step === 1 ? 'Shipping' : step === 2 ? 'Payment' : 'Review'}
                  </span>
                  {step < 3 && <div className="w-12 h-1 bg-gray-200 mx-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={shippingInfo.name}
                          onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                          placeholder="Enter your full name"
                        />
                        <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={shippingInfo.phone}
                          onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                          placeholder="Enter your phone number"
                        />
                        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <div className="relative">
                      <textarea
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="Enter your complete address"
                      />
                      <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="City"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="State"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.pincode}
                        onChange={(e) => setShippingInfo({...shippingInfo, pincode: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                
                <div className="space-y-4 mb-6">
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-emerald-300 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-emerald-600"
                    />
                    <CreditCard className="w-6 h-6 text-gray-600" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-emerald-300 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-emerald-600"
                    />
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">U</span>
                    </div>
                    <span className="font-medium">UPI Payment</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-emerald-300 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-emerald-600"
                    />
                    <Truck className="w-6 h-6 text-gray-600" />
                    <span className="font-medium">Cash on Delivery</span>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardInfo.number}
                        onChange={(e) => setCardInfo({...cardInfo, number: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={cardInfo.expiry}
                          onChange={(e) => setCardInfo({...cardInfo, expiry: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                          placeholder="MM/YY"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cardInfo.cvv}
                          onChange={(e) => setCardInfo({...cardInfo, cvv: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        value={cardInfo.name}
                        onChange={(e) => setCardInfo({...cardInfo, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="Name as on card"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* Shipping Details */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
                  <div className="text-gray-700">
                    <p className="font-medium">{shippingInfo.name}</p>
                    <p>{shippingInfo.address}</p>
                    <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.pincode}</p>
                    <p>{shippingInfo.phone}</p>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                  <p className="text-gray-700 capitalize">{paymentMethod.replace('-', ' ')}</p>
                </div>

                {/* Order Items */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
                  <div className="space-y-4">
                    {state.cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                          <p className="text-sm text-gray-600">₹{item.price} each</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <button
                onClick={currentStep === 3 ? handlePlaceOrder : handleNext}
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                {currentStep === 3 ? 'Place Order' : 'Continue'}
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal ({state.cart.length} items)</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                    {shipping === 0 ? 'Free' : `₹${shipping}`}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tax (GST)</span>
                  <span className="font-medium">₹{tax.toLocaleString()}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-emerald-600">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Security Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">Secure Checkout</p>
                    <p className="text-sm text-green-700">Your payment information is encrypted and secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;