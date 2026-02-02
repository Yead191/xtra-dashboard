import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Bell, CheckCircle, DollarSign, Clock, MessageSquare, Briefcase } from 'lucide-react';

interface WorkerNotificationsProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

const NOTIFICATIONS = [
  {
    id: '1',
    type: 'approval',
    title: 'Application Approved',
    message: 'Your application for Event Waiter at Grand Hotel was approved.',
    time: '2m ago',
    read: false,
    icon: CheckCircle,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  {
    id: '2',
    type: 'message',
    title: 'New Message',
    message: 'Sarah from Grand Hotel sent you a message about tonight\'s shift.',
    time: '1h ago',
    read: false,
    icon: MessageSquare,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: '3',
    type: 'payment',
    title: 'Payment Received',
    message: 'You received $60.00 for your shift at City Cafe.',
    time: '5h ago',
    read: true,
    icon: DollarSign,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: '4',
    type: 'reminder',
    title: 'Shift Reminder',
    message: 'Upcoming shift: Dishwasher at 6:00 PM tomorrow.',
    time: '1d ago',
    read: true,
    icon: Clock,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: '5',
    type: 'job',
    title: 'New Job Match',
    message: 'A new Security Guard position matches your preferences.',
    time: '2d ago',
    read: true,
    icon: Briefcase,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

export function WorkerNotifications({ navigate, currentUser }: WorkerNotificationsProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('home')}
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
        </div>
      </div>

      {/* List */}
      <div className="p-4 space-y-3">
        {NOTIFICATIONS.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-gray-900 font-bold mb-1">No notifications</h3>
            <p className="text-gray-500 text-sm">You're all caught up!</p>
          </div>
        ) : (
          NOTIFICATIONS.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className={`bg-white p-4 rounded-2xl border ${item.read ? 'border-gray-100' : 'border-blue-100 shadow-sm'} flex gap-4 transition-all active:scale-[0.99]`}
              >
                <div className={`w-12 h-12 rounded-full ${item.bg} flex-shrink-0 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className={`font-bold ${item.read ? 'text-gray-900' : 'text-[#3164E6]'}`}>{item.title}</h3>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{item.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.message}</p>
                </div>
                {!item.read && (
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
