import { ProviderRoute } from '../ProviderApp';
import { 
  TrendingUp, DollarSign, Star, ChevronRight, Clock, MapPin,
  CheckCircle, AlertCircle, User, Navigation, PlusCircle, Heart, Users,
  Bell, Camera, Play, AlertTriangle, Eye, Shield, UserCheck
} from 'lucide-react';

interface ProviderHomeProps {
  navigate: (route: ProviderRoute, jobId?: string, workerId?: string) => void;
  currentUser: any;
}

// Critical actions requiring immediate attention
const urgentActions = [
  {
    id: 'CI001',
    type: 'check-in-approval',
    title: 'Check-In Pending Approval',
    job: 'Event Waiter',
    worker: 'Sarah Johnson',
    workerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    time: 'Requested 2 min ago',
    icon: Camera,
    color: 'red',
    badge: 'URGENT',
    action: 'Review Now',
  },
  {
    id: 'CO001',
    type: 'check-out-approval',
    title: 'Check-Out Pending Approval',
    job: 'Warehouse Assistant',
    worker: 'Michael Chen',
    workerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    time: 'Requested 5 min ago',
    icon: CheckCircle,
    color: 'orange',
    badge: 'URGENT',
    action: 'Review Now',
  },
  {
    id: 'J005',
    type: 'new-applicants',
    title: '5 New Applicants',
    job: 'Private Nurse',
    time: 'Posted 1h ago',
    icon: Users,
    color: 'blue',
    badge: 'NEW',
    action: 'View Applicants',
  },
  {
    id: 'J001',
    type: 'starting-soon',
    title: 'Job Starting Soon',
    job: 'Security Guard',
    worker: 'James Wilson',
    workerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    time: 'Starts in 30 min',
    icon: Play,
    color: 'purple',
    badge: 'SOON',
    action: 'Track',
  },
];

const recentActivity = [
  {
    id: 'A001',
    type: 'application',
    message: '3 workers applied to Event Waiter',
    time: '2h ago',
    icon: User,
    actionText: 'View',
    actionRoute: 'worker-selection' as ProviderRoute,
    jobId: 'J003',
  },
  {
    id: 'A002',
    type: 'completed',
    message: 'Private Nurse job completed',
    time: '5h ago',
    icon: CheckCircle,
    actionText: 'Confirm',
    actionRoute: 'confirm-payment' as ProviderRoute,
    jobId: 'J002',
  },
  {
    id: 'A003',
    type: 'payment',
    message: 'Payment processed - $85.00',
    time: 'Yesterday',
    icon: DollarSign,
    actionText: 'Receipt',
    actionRoute: 'transaction-details' as ProviderRoute,
  },
];

const favoriteWorkers = [
  {
    id: 'W001',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 4.9,
    jobsCompleted: 8,
    category: 'Waiter',
    available: true,
  },
  {
    id: 'W003',
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5.0,
    jobsCompleted: 12,
    category: 'Nurse',
    available: true,
  },
  {
    id: 'W002',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.8,
    jobsCompleted: 5,
    category: 'Security',
    available: false,
  },
];

export function ProviderHome({ navigate, currentUser }: ProviderHomeProps) {
  const stats = {
    activeJobs: 3,
    totalSpent: currentUser.totalSpent || 2450.00,
    averageRating: currentUser.rating || 4.7,
    pendingApprovals: 2,
  };

  const handleActionClick = (action: any) => {
    switch (action.type) {
      case 'check-in-approval':
      case 'check-out-approval':
        navigate('check-in-approval', action.id);
        break;
      case 'new-applicants':
        navigate('worker-selection', action.id);
        break;
      case 'starting-soon':
        navigate('job-details', action.id);
        break;
      default:
        navigate('job-details', action.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 px-6 pt-12 pb-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-blue-100 text-sm mb-1">Welcome back,</p>
            <h1 className="text-2xl font-bold">{currentUser.businessName}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('notification-center')}
              className="relative w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center active:scale-95 transition-transform"
            >
              <Bell className="w-5 h-5" />
              {stats.pendingApprovals > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-blue-700">
                  <span className="text-white text-xs font-bold">{stats.pendingApprovals}</span>
                </div>
              )}
            </button>
            {currentUser.logo && (
              <img 
                src={currentUser.logo} 
                alt="Business Logo" 
                className="w-10 h-10 rounded-xl bg-white/20 object-cover"
              />
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-blue-200" />
              <p className="text-xs text-blue-100">Active Jobs</p>
            </div>
            <p className="text-2xl font-bold">{stats.activeJobs}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-blue-200" />
              <p className="text-xs text-blue-100">Total Spent</p>
            </div>
            <p className="text-2xl font-bold">${stats.totalSpent.toFixed(0)}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-blue-200" />
              <p className="text-xs text-blue-100">Rating</p>
            </div>
            <p className="text-2xl font-bold">{stats.averageRating.toFixed(1)}</p>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <div className="px-6 -mt-4 mb-6">
        <button
          onClick={() => navigate('post-job')}
          className="w-full bg-gradient-to-r from-[#3164E6] to-blue-700 text-white p-4 rounded-2xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <PlusCircle className="w-6 h-6" />
          <span className="font-bold text-lg">Post New Job</span>
        </button>
      </div>

      {/* Urgent Actions - Requires Immediate Attention */}
      {urgentActions.length > 0 && (
        <div className="px-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-gray-900">Requires Your Attention</h2>
              {stats.pendingApprovals > 0 && (
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{stats.pendingApprovals}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-3">
            {urgentActions.map((action) => {
              const Icon = action.icon;
              const colorClasses = {
                red: { bg: 'bg-red-100', text: 'text-red-600', badge: 'bg-red-500' },
                orange: { bg: 'bg-orange-100', text: 'text-orange-600', badge: 'bg-orange-500' },
                blue: { bg: 'bg-blue-100', text: 'text-blue-600', badge: 'bg-blue-500' },
                purple: { bg: 'bg-purple-100', text: 'text-purple-600', badge: 'bg-purple-500' },
              }[action.color];

              return (
                <div
                  key={action.id}
                  className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 overflow-hidden"
                >
                  {/* Badge */}
                  <div className={`${colorClasses.badge} px-3 py-1 text-white text-xs font-bold flex items-center justify-between`}>
                    <span>{action.badge}</span>
                    <span className="opacity-75">{action.time}</span>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 ${colorClasses.bg} ${colorClasses.text} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 mb-1">{action.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">{action.job}</p>
                        {action.worker && (
                          <div className="flex items-center gap-2">
                            {action.workerAvatar && (
                              <img 
                                src={action.workerAvatar}
                                alt={action.worker}
                                className="w-5 h-5 rounded-full object-cover"
                              />
                            )}
                            <p className="text-xs text-gray-500">{action.worker}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleActionClick(action)}
                      className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 ${
                        action.color === 'red' || action.color === 'orange'
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-200'
                          : 'bg-[#3164E6] text-white shadow-lg shadow-blue-200'
                      } active:scale-95 transition-transform`}
                    >
                      {action.color === 'red' || action.color === 'orange' ? (
                        <>
                          <Shield className="w-4 h-4" />
                          {action.action}
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4" />
                          {action.action}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Favorite Workers */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-900">Quick Hire</h2>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>
          <button 
            onClick={() => navigate('my-workers')}
            className="text-[#3164E6] text-sm font-semibold flex items-center gap-1"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {favoriteWorkers.map((worker) => (
            <button
              key={worker.id}
              onClick={() => navigate('rebook-worker', undefined, worker.id)}
              disabled={!worker.available}
              className={`w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 text-left transition-all ${
                worker.available 
                  ? 'active:scale-[0.98]' 
                  : 'opacity-50'
              }`}
            >
              <div className="relative">
                <img
                  src={worker.avatar}
                  alt={worker.name}
                  className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                />
                {worker.available && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1">{worker.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-semibold text-gray-700">{worker.rating}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-600">{worker.jobsCompleted} jobs</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs bg-blue-50 text-[#3164E6] px-2 py-0.5 rounded-lg font-medium">{worker.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {worker.available ? (
                  <>
                    <span className="text-xs text-[#3164E6] font-semibold">Hire</span>
                    <ChevronRight className="w-4 h-4 text-[#3164E6]" />
                  </>
                ) : (
                  <span className="text-xs text-gray-400 font-semibold">Busy</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity with Actions */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">Recent Activity</h2>
          <button 
            onClick={() => navigate('my-jobs')}
            className="text-[#3164E6] text-sm font-semibold"
          >
            View All
          </button>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {recentActivity.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div 
                key={activity.id}
                className={`p-4 flex items-center gap-3 ${
                  index !== recentActivity.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <button
                  onClick={() => navigate(activity.actionRoute, activity.jobId)}
                  className="text-[#3164E6] text-xs font-semibold px-3 py-1.5 bg-blue-50 rounded-lg active:scale-95 transition-transform"
                >
                  {activity.actionText}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-6 pb-6">
        <h2 className="font-bold text-gray-900 mb-3">Quick Links</h2>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('my-jobs')}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left active:scale-[0.98] transition-transform"
          >
            <Clock className="w-6 h-6 text-[#3164E6] mb-2" />
            <p className="font-semibold text-gray-900 text-sm">My Jobs</p>
            <p className="text-xs text-gray-500">Manage postings</p>
          </button>

          <button
            onClick={() => navigate('payments')}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left active:scale-[0.98] transition-transform"
          >
            <DollarSign className="w-6 h-6 text-green-600 mb-2" />
            <p className="font-semibold text-gray-900 text-sm">Payments</p>
            <p className="text-xs text-gray-500">View history</p>
          </button>

          <button
            onClick={() => navigate('my-workers')}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left active:scale-[0.98] transition-transform"
          >
            <Users className="w-6 h-6 text-purple-600 mb-2" />
            <p className="font-semibold text-gray-900 text-sm">My Workers</p>
            <p className="text-xs text-gray-500">Trusted team</p>
          </button>

          <button
            onClick={() => navigate('profile')}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left active:scale-[0.98] transition-transform"
          >
            <User className="w-6 h-6 text-orange-600 mb-2" />
            <p className="font-semibold text-gray-900 text-sm">Profile</p>
            <p className="text-xs text-gray-500">Settings</p>
          </button>
        </div>
      </div>
    </div>
  );
}