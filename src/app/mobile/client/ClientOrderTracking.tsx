import { useState } from 'react';
import { ClientRoute } from '../ClientApp';
import { ArrowLeft, MapPin, Phone, MessageCircle, Clock, CheckCircle, User } from 'lucide-react';

interface ClientOrderTrackingProps {
  navigate: (route: ClientRoute, params?: any) => void;
  currentUser: any;
  orderId: string;
}

const orderStatuses = [
  { id: 1, label: 'Booking Confirmed', time: '10:30 AM', completed: true },
  { id: 2, label: 'Provider Assigned', time: '10:45 AM', completed: true },
  { id: 3, label: 'Provider On The Way', time: '11:20 AM', completed: true },
  { id: 4, label: 'Service In Progress', time: '', completed: false },
  { id: 5, label: 'Service Completed', time: '', completed: false },
];

export function ClientOrderTracking({ navigate, currentUser, orderId }: ClientOrderTrackingProps) {
  const [activeStatus, setActiveStatus] = useState(3);

  const orderDetails = {
    id: orderId,
    service: 'Professional House Cleaning',
    provider: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
      rating: 4.9,
      phone: '+1 234 567 8900',
    },
    date: 'Dec 20, 2025',
    time: '10:00 AM',
    address: '123 Main Street, Apt 4B, New York, NY 10001',
    estimatedArrival: '15 mins',
    price: 53.90,
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 pt-12 pb-6">
        <button
          onClick={() => navigate('bookings')}
          className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        
        <h2 className="text-white text-2xl mb-2">Order Tracking</h2>
        <p className="text-blue-100">Order #{orderDetails.id}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Provider Info */}
        <div className="bg-white px-6 py-6 -mt-4 rounded-t-3xl relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={orderDetails.provider.avatar}
                alt={orderDetails.provider.name}
                className="w-16 h-16 rounded-full border-2 border-blue-100"
              />
              <div>
                <h3 className="text-lg mb-1">{orderDetails.provider.name}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span>⭐ {orderDetails.provider.rating}</span>
                  <span className="text-gray-400">•</span>
                  <span>Service Provider</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 border border-blue-600 text-blue-600 rounded-2xl">
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </button>
            <button
              onClick={() => navigate('messages')}
              className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Message</span>
            </button>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="px-6 py-6">
          <h3 className="text-lg mb-6">Order Status</h3>
          <div className="space-y-6">
            {orderStatuses.map((status, index) => (
              <div key={status.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      status.completed
                        ? 'bg-green-100'
                        : index === activeStatus
                        ? 'bg-blue-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    {status.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : index === activeStatus ? (
                      <Clock className="w-6 h-6 text-blue-600" />
                    ) : (
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    )}
                  </div>
                  {index < orderStatuses.length - 1 && (
                    <div
                      className={`w-0.5 h-12 ${
                        status.completed ? 'bg-green-200' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h4
                    className={`mb-1 ${
                      status.completed || index === activeStatus
                        ? 'text-gray-900'
                        : 'text-gray-400'
                    }`}
                  >
                    {status.label}
                  </h4>
                  {status.time && (
                    <p className="text-sm text-gray-500">{status.time}</p>
                  )}
                  {index === activeStatus && !status.completed && (
                    <div className="mt-2 flex items-center gap-2 text-blue-600 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <span>In Progress</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="px-6 pb-6">
          <h3 className="text-lg mb-4">Service Details</h3>
          <div className="bg-gray-50 rounded-2xl p-4 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Service</span>
              <span className="text-gray-900">{orderDetails.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time</span>
              <span className="text-gray-900">
                {orderDetails.date} at {orderDetails.time}
              </span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-gray-600">Location</span>
              <span className="text-gray-900 text-right max-w-[200px]">
                {orderDetails.address}
              </span>
            </div>
            <div className="pt-4 border-t border-gray-200 flex justify-between">
              <span className="text-lg">Total Amount</span>
              <span className="text-2xl text-blue-600">
                ${orderDetails.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Estimated Arrival (if provider is on the way) */}
        {activeStatus === 3 && (
          <div className="px-6 pb-6">
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Provider is on the way</h3>
              <p className="text-gray-600 mb-2">Estimated arrival in</p>
              <p className="text-3xl text-blue-600">{orderDetails.estimatedArrival}</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="bg-white border-t border-gray-100 p-6 safe-area-bottom">
        <button className="w-full border-2 border-red-500 text-red-500 py-4 rounded-2xl">
          Cancel Booking
        </button>
      </div>
    </div>
  );
}