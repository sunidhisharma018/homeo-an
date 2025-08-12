import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package, Heart, Calendar, MapPin, User, Settings, LogOut, ShoppingBag, Clock } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { motion } from 'framer-motion';

const UserDashboard: React.FC = () => {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  if (!state.user) {
    navigate('/login');
    return null;
  }

  const recentOrders = [
    { id: '1', date: '2024-01-15', total: 899, status: 'Delivered', items: 3 },
    { id: '2', date: '2024-01-10', total: 1299, status: 'In Transit', items: 2 },
    { id: '3', date: '2024-01-05', total: 549, status: 'Processing', items: 1 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{state.user.name}</h3>
                <p className="text-gray-600">{state.user.email}</p>
              </div>

              <nav className="space-y-2">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-3 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-lg font-medium"
                >
                  <User className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/orders"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Package className="w-5 h-5" />
                  <span>My Orders</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  <span>Wishlist ({state.wishlist.length})</span>
                </Link>
                <Link
                  to="/consultation"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Consultations</span>
                </Link>
                <Link
                  to="/clinics"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Find Clinics</span>
                </Link>
                <Link
                  to="/profile/settings"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white"
            >
              <h1 className="text-3xl font-bold mb-2">Welcome back, {state.user.name.split(' ')[0]}!</h1>
              <p className="text-emerald-100 mb-6">
                Continue your natural wellness journey with our premium homeopathic remedies
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Shop Now
                </Link>
                <Link
                  to="/consultation"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-gray-600">Total Orders</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{state.wishlist.length}</p>
                    <p className="text-gray-600">Wishlist Items</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                    <p className="text-gray-600">Consultations</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                <Link
                  to="/orders"
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Order #{order.id}</p>
                        <p className="text-sm text-gray-600">{order.items} items • {order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">₹{order.total}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'In Transit'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/products?category=common-ailments"
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Shop Common Ailments</p>
                    <p className="text-sm text-gray-600">Browse everyday remedies</p>
                  </div>
                </Link>

                <Link
                  to="/consultation"
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Book Consultation</p>
                    <p className="text-sm text-gray-600">Consult with expert doctors</p>
                  </div>
                </Link>

                <Link
                  to="/clinics"
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Find Nearby Clinic</p>
                    <p className="text-sm text-gray-600">Locate clinics near you</p>
                  </div>
                </Link>

                <Link
                  to="/blog"
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Read Health Tips</p>
                    <p className="text-sm text-gray-600">Latest wellness articles</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;