import { useState } from 'react';
import { ClientRoute } from '../ClientApp';
import { Clock, CheckCircle, XCircle, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ClientBookingsProps {
  navigate: (route: ClientRoute, params?: any) => void;
  currentUser: any;
}

const bookings = {
  upcoming: [
    {
      id: 'ORD-001',
      service: 'Professional House Cleaning',
      provider: 'CleanPro Services',
      providerAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
      date: 'Dec 20, 2025',
      time: '10:00 AM',
      status: 'confirmed',
      price: 53.90,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop',
    },
    {
      id: 'ORD-002',
      service: 'AC Repair & Maintenance',
      provider: 'CoolAir Experts',
      providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      date: 'Dec 22, 2025',
      time: '2:00 PM',
      status: 'pending',
      price: 86.90,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop',
    },
  ],
  completed: [
    {
      id: 'ORD-003',
      service: 'Plumbing Services',
      provider: 'QuickFix Plumbing',
      providerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      date: 'Dec 10, 2025',
      time: '11:00 AM',
      status: 'completed',
      price: 71.50,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=300&h=200&fit=crop',
    },
    {
      id: 'ORD-004',
      service: 'Interior Design Consultation',
      provider: 'DesignStudio Co',
      providerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      date: 'Dec 5, 2025',
      time: '3:00 PM',
      status: 'completed',
      price: 132.00,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=200&fit=crop',
    },
  ],
  cancelled: [
    {
      id: 'ORD-005',
      service: 'Car Detailing Service',
      provider: 'AutoShine Pro',
      providerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      date: 'Nov 28, 2025',
      time: '1:00 PM',
      status: 'cancelled',
      price: 97.90,
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=300&h=200&fit=crop',
    },
  ],
};

export function ClientBookings({ navigate, currentUser }: ClientBookingsProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-600';
      case 'pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'completed':
        return 'bg-blue-100 text-blue-600';
      case 'cancelled':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const currentBookings = bookings[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
        <h2 className="text-2xl mb-4">My Bookings</h2>
        
        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'upcoming'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-600'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'completed'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-600'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('cancelled')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'cancelled'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-600'
            }`}
          >
            Cancelled
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="px-6 py-6">
        {currentBookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">No {activeTab} bookings</h3>
            <p className="text-gray-500 mb-6">You don't have any {activeTab} bookings yet</p>
            <button
              onClick={() => navigate('home')}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl"
            >
              Browse Services
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {currentBookings.map((booking) => (
              <button
                key={booking.id}
                onClick={() => navigate('order-tracking', { orderId: booking.id })}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 p-4">
                  <img
                    src={booking.image}
                    alt={booking.service}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="line-clamp-1 pr-2">{booking.service}</h4>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{booking.provider}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{booking.date}</span>
                        <span>•</span>
                        <span>{booking.time}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          <span className="capitalize">{booking.status}</span>
                        </div>
                        <span className="text-blue-600">${booking.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 self-center" />
                </div>

                {/* Action Buttons for Upcoming */}
                {activeTab === 'upcoming' && (
                  <div className="border-t border-gray-100 px-4 py-3 flex gap-3">
                    {booking.status === 'confirmed' && (
                      <>
                        <button className="flex-1 py-2 border border-gray-200 rounded-xl text-sm">
                          Cancel
                        </button>
                        <button className="flex-1 py-2 bg-blue-600 text-white rounded-xl text-sm">
                          Reschedule
                        </button>
                      </>
                    )}
                    {booking.status === 'pending' && (
                      <div className="flex-1 text-center py-2 text-sm text-gray-500">
                        Waiting for provider confirmation
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons for Completed */}
                {activeTab === 'completed' && !booking.rating && (
                  <div className="border-t border-gray-100 px-4 py-3">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-xl text-sm">
                      Rate Service
                    </button>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}