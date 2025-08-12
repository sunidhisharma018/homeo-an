import React from 'react';
import { Package, Truck, CheckCircle, Clock, Eye } from 'lucide-react';

const OrdersPage: React.FC = () => {
  const orders = [
    {
      id: 'HV001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 899,
      items: [
        { name: 'Arnica Montana 200C', quantity: 2, price: 299 },
        { name: 'Belladonna 30C', quantity: 1, price: 199 }
      ],
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-17'
    },
    {
      id: 'HV002',
      date: '2024-01-10',
      status: 'In Transit',
      total: 1299,
      items: [
        { name: 'Echinacea Immunity Boost', quantity: 1, price: 599 },
        { name: 'Chamomilla 200C', quantity: 2, price: 250 }
      ],
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2024-01-18'
    },
    {
      id: 'HV003',
      date: '2024-01-05',
      status: 'Processing',
      total: 549,
      items: [
        { name: 'Sulphur 30C', quantity: 1, price: 225 },
        { name: 'Sepia 200C', quantity: 1, price: 350 }
      ],
      trackingNumber: null,
      estimatedDelivery: '2024-01-20'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'In Transit':
        return <Truck className="w-5 h-5 text-blue-600" />;
      case 'Processing':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Order Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      {getStatusIcon(order.status)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                      <p className="text-sm text-gray-600">Placed on {order.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">₹{order.total}</p>
                      <p className="text-sm text-gray-600">{order.items.length} items</p>
                    </div>
                  </div>
                </div>

                {/* Tracking Info */}
                {order.trackingNumber && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Tracking Number</p>
                        <p className="text-sm text-gray-600">{order.trackingNumber}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">Estimated Delivery</p>
                        <p className="text-sm text-gray-600">{order.estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Items */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Order Items</h4>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">₹{item.price * item.quantity}</p>
                        <p className="text-sm text-gray-600">₹{item.price} each</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Actions */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  
                  {order.trackingNumber && (
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                      <Truck className="w-4 h-4" />
                      <span>Track Order</span>
                    </button>
                  )}
                  
                  {order.status === 'Delivered' && (
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                      <Package className="w-4 h-4" />
                      <span>Reorder</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
            <a
              href="/products"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Start Shopping
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;