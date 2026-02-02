import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Camera, Users, Clock, CheckCircle, DollarSign,
  Bell, Shield, AlertTriangle, Play, XCircle, Filter
} from 'lucide-react';

interface ProviderNotificationCenterProps {
  navigate: (route: ProviderRoute, jobId?: string, workerId?: string) => void;
  currentUser: any;
}

type NotificationType = 'all' | 'urgent' | 'applications' | 'approvals' | 'payments';

const notifications = [
  {
    id: 'N001',
    type: 'check-in-approval',
    category: 'urgent',
    title: 'Check-In Requires Approval',
    message: 'Sarah Johnson requested check-in for Event Waiter job',
    time: '2 min ago',
    icon: Camera,
    color: 'red',
    unread: true,
    actionText: 'Review Now',
    actionRoute: 'check-in-approval' as ProviderRoute,
    jobId: 'CI001',
  },
  {
    id: 'N002',
    type: 'check-out-approval',
    category: 'urgent',
    title: 'Check-Out Requires Approval',
    message: 'Michael Chen completed work and submitted check-out',
    time: '5 min ago',
    icon: CheckCircle,
    color: 'orange',
    unread: true,
    actionText: 'Review & Pay',
    actionRoute: 'check-in-approval' as ProviderRoute,
    jobId: 'CO001',
  },
  {
    id: 'N003',
    type: 'new-applicants',
    category: 'applications',
    title: '5 New Applicants',
    message: 'Workers applied to your Private Nurse posting',
    time: '1h ago',
    icon: Users,
    color: 'blue',
    unread: true,
    actionText: 'View Applicants',
    actionRoute: 'worker-selection' as ProviderRoute,
    jobId: 'J005',
  },
  {
    id: 'N004',
    type: 'starting-soon',
    category: 'urgent',
    title: 'Job Starting in 30 Minutes',
    message: 'Security Guard job with James Wilson starts soon',
    time: '10 min ago',
    icon: Play,
    color: 'purple',
    unread: true,
    actionText: 'Track Worker',
    actionRoute: 'track-worker' as ProviderRoute,
    jobId: 'J001',
  },
  {
    id: 'N005',
    type: 'payment-completed',
    category: 'payments',
    title: 'Payment Processed',
    message: 'Payment of $85.00 sent to Maria Garcia',
    time: '2h ago',
    icon: DollarSign,
    color: 'green',
    unread: false,
    actionText: 'View Receipt',
    actionRoute: 'transaction-details' as ProviderRoute,
    jobId: 'T001',
  },
  {
    id: 'N006',
    type: 'application',
    category: 'applications',
    title: 'New Application',
    message: 'Emma Rodriguez applied to Warehouse Assistant job',
    time: '3h ago',
    icon: Users,
    color: 'blue',
    unread: false,
    actionText: 'View Profile',
    actionRoute: 'worker-selection' as ProviderRoute,
    jobId: 'J003',
  },
  {
    id: 'N007',
    type: 'job-completed',
    category: 'approvals',
    title: 'Job Completed - Confirm Payment',
    message: 'Cook Assistant job completed, awaiting confirmation',
    time: '5h ago',
    icon: CheckCircle,
    color: 'green',
    unread: false,
    actionText: 'Confirm',
    actionRoute: 'confirm-payment' as ProviderRoute,
    jobId: 'J004',
  },
];

export function ProviderNotificationCenter({ navigate, currentUser }: ProviderNotificationCenterProps) {
  const [filter, setFilter] = useState<NotificationType>('all');
  
  const filteredNotifications = notifications.filter(n => 
    filter === 'all' || n.category === filter
  );

  const unreadCount = notifications.filter(n => n.unread).length;
  const urgentCount = notifications.filter(n => n.category === 'urgent' && n.unread).length;

  const handleNotificationClick = (notification: any) => {
    navigate(notification.actionRoute, notification.jobId);
  };

  const filterButtons = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'urgent', label: 'Urgent', count: notifications.filter(n => n.category === 'urgent').length },
    { id: 'applications', label: 'Applications', count: notifications.filter(n => n.category === 'applications').length },
    { id: 'approvals', label: 'Approvals', count: notifications.filter(n => n.category === 'approvals').length },
    { id: 'payments', label: 'Payments', count: notifications.filter(n => n.category === 'payments').length },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 px-6 pt-12 pb-6 text-white sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate('home')}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-blue-100 text-sm">
              {unreadCount} unread {unreadCount === 1 ? 'notification' : 'notifications'}
            </p>
          </div>
          {urgentCount > 0 && (
            <div className="bg-red-500 px-3 py-1.5 rounded-full">
              <p className="text-xs font-bold">{urgentCount} Urgent</p>
            </div>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as NotificationType)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                filter === btn.id
                  ? 'bg-white text-[#3164E6]'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
              }`}
            >
              {btn.label}
              {btn.count > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  filter === btn.id
                    ? 'bg-[#3164E6] text-white'
                    : 'bg-white/20 text-white'
                }`}>
                  {btn.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="p-6 space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-500 text-sm">You're all caught up!</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const Icon = notification.icon;
            const colorClasses = {
              red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
              orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
              blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
              purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
              green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
            }[notification.color];

            return (
              <div
                key={notification.id}
                className={`bg-white rounded-2xl shadow-sm border-2 transition-all ${
                  notification.unread 
                    ? `${colorClasses.border} border-l-4` 
                    : 'border-gray-100'
                }`}
              >
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-12 h-12 ${colorClasses.bg} ${colorClasses.text} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{notification.title}</h3>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-[#3164E6] rounded-full flex-shrink-0 ml-2 mt-1.5"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNotificationClick(notification)}
                    className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      notification.category === 'urgent'
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-200'
                        : 'bg-[#3164E6] text-white shadow-lg shadow-blue-200'
                    }`}
                  >
                    {notification.category === 'urgent' && <Shield className="w-4 h-4" />}
                    {notification.actionText}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Clear All Button */}
      {filteredNotifications.length > 0 && (
        <div className="px-6 pb-6">
          <button
            onClick={() => alert('All notifications marked as read')}
            className="w-full py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold active:scale-95 transition-transform"
          >
            Mark All as Read
          </button>
        </div>
      )}
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
