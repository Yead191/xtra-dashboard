import { ProviderRoute } from '../ProviderApp';
import { 
  TrendingUp, DollarSign, Star, ChevronRight, Clock, MapPin,
  CheckCircle, User, PlusCircle, Heart, Users, Bell, Play, AlertCircle,
  Utensils, Shield, Briefcase, Heart as HeartIcon
} from 'lucide-react';

interface ProviderHomeProps {
  navigate: (route: ProviderRoute, jobId?: string, workerId?: string) => void;
  currentUser: any;
}

const activeJobs = [
  {
    id: 'J001',
    title: 'Event Waiter',
    category: 'waiter',
    status: 'in-progress',
    date: 'Today',
    time: '2:00 PM - 8:00 PM',
    location: 'Downtown Event Center',
    workersAccepted: 2,
    workersNeeded: 3,
    pendingApplications: 2,
    pendingCheckIn: 1, // NEW: indicates check-in waiting for approval
  },
  {
    id: 'J002',
    title: 'Security Guard',
    category: 'security',
    status: 'upcoming',
    date: 'Today',
    time: '6:00 PM - 2:00 AM',
    location: 'Mall Plaza',
    startsIn: '30 min',
    workersAccepted: 1,
    workersNeeded: 1,
  },
];

const postedJobs = [
  {
    id: 'J003',
    title: 'Private Nurse',
    category: 'nurse',
    date: 'Dec 15',
    time: '9:00 AM - 5:00 PM',
    acceptedWorkers: 2,
    workersNeeded: 3,
    location: 'Medical Center',
    pendingApplications: 2,
  },
  {
    id: 'J004',
    title: 'Cook Assistant',
    category: 'cook',
    date: 'Dec 16',
    time: '10:00 AM - 6:00 PM',
    acceptedWorkers: 1,
    workersNeeded: 2,
    location: 'Restaurant',
    pendingApplications: 2,
  },
];

const recentActivity = [
  {
    id: 'A001',
    type: 'payment-issue',
    message: 'Jennifer Lee disputed hours - Nurse job',
    time: '1h ago',
    icon: AlertCircle,
    color: 'red',
    urgent: true,
  },
  {
    id: 'A002',
    type: 'accepted',
    message: 'Emma Rodriguez accepted your Event Waiter job',
    time: '2h ago',
    icon: CheckCircle,
    color: 'green',
  },
  {
    id: 'A003',
    type: 'completed',
    message: 'Cook Assistant job completed - Confirm payment',
    time: '5h ago',
    icon: DollarSign,
    color: 'blue',
  },
];

const favoriteWorkers = [
  {
    id: 'W001',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 4.9,
    category: 'Waiter',
    available: true,
  },
  {
    id: 'W003',
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5.0,
    category: 'Nurse',
    available: true,
  },
  {
    id: 'W002',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.8,
    category: 'Security',
    available: false,
  },
];

export function ProviderHome({ navigate, currentUser }: ProviderHomeProps) {
  const stats = {
    activeJobs: activeJobs.length,
    totalSpent: currentUser.totalSpent || 2450.00,
    averageRating: currentUser.rating || 4.7,
    totalJobs: 48,
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'waiter': return Utensils;
      case 'security': return Shield;
      case 'nurse': return HeartIcon;
      case 'cook': return Utensils;
      default: return Briefcase;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 px-6 pt-12 pb-8 text-white rounded-b-[32px] shadow-xl shadow-blue-900/10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-blue-100 text-sm mb-1 font-medium">Welcome back,</p>
            <h1 className="text-2xl font-bold">{currentUser.businessName}</h1>
          </div>
          <button 
            onClick={() => navigate('notification-center')}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center active:scale-95 transition-transform border border-white/20"
          >
            <div className="relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#3164E6]"></div>
            </div>
          </button>
        </div>

        {/* Business Dashboard Stats */}
        <div className="grid grid-cols-2 gap-3 mb-2">
          {/* Active Jobs */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-100" />
              </div>
              <span className="text-xs font-medium text-blue-100 bg-blue-500/20 px-2 py-1 rounded-lg">Now</span>
            </div>
            <p className="text-3xl font-bold mb-1">{stats.activeJobs}</p>
            <p className="text-xs text-blue-200">Active Jobs</p>
          </div>

          {/* Total Spent */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20" onClick={() => navigate('payments')}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-emerald-100" />
              </div>
              <TrendingUp className="w-4 h-4 text-emerald-300" />
            </div>
            <p className="text-3xl font-bold mb-1">${(stats.totalSpent/1000).toFixed(1)}k</p>
            <p className="text-xs text-blue-200">Total Spent</p>
          </div>

          {/* Total Jobs Posted */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20" onClick={() => navigate('my-jobs')}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-purple-100" />
              </div>
              <span className="text-xs text-purple-200">+12%</span>
            </div>
            <p className="text-3xl font-bold mb-1">{stats.totalJobs}</p>
            <p className="text-xs text-blue-200">Total Posts</p>
          </div>

          {/* Rating */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20" onClick={() => navigate('reviews')}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-amber-100" />
              </div>
              <div className="flex text-amber-300">
                <Star className="w-3 h-3 fill-amber-300" />
                <Star className="w-3 h-3 fill-amber-300" />
                <Star className="w-3 h-3 fill-amber-300" />
              </div>
            </div>
            <p className="text-3xl font-bold mb-1">{stats.averageRating}</p>
            <p className="text-xs text-blue-200">Avg Rating</p>
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

      {/* Today's Jobs / Active Jobs */}
      {activeJobs.length > 0 && (
        <div className="px-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Today's Jobs</h2>
            <button 
              onClick={() => navigate('my-jobs')}
              className="text-[#3164E6] text-sm font-semibold flex items-center gap-1"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {activeJobs.map((job) => {
              const CategoryIcon = getCategoryIcon(job.category);
              return (
                <button
                  key={job.id}
                  onClick={() => navigate('job-details', job.id)}
                  className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3164E6] to-blue-600 flex items-center justify-center flex-shrink-0">
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{job.title}</h3>
                        {job.status === 'in-progress' && (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            Active
                          </span>
                        )}
                        {job.startsIn && (
                          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-lg text-xs font-bold">
                            Starts {job.startsIn}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{job.time}</span>
                        <span>•</span>
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">
                          {job.workersAccepted} of {job.workersNeeded} workers
                        </span>
                      </div>
                      {job.pendingCheckIn > 0 && (
                        <div className="flex items-center gap-2 mt-2">
                          <Play className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-blue-500">
                            {job.pendingCheckIn} check-in pending
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Posted Jobs - Waiting for Workers */}
      {postedJobs.length > 0 && (
        <div className="px-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Posted Jobs</h2>
            <button 
              onClick={() => navigate('my-jobs')}
              className="text-[#3164E6] text-sm font-semibold flex items-center gap-1"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {postedJobs.map((job) => (
              <button
                key={job.id}
                onClick={() => navigate('job-details', job.id)}
                className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left active:scale-[0.98] transition-transform"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Clock className="w-3 h-3" />
                      <span>{job.date} • {job.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {job.acceptedWorkers} of {job.workersNeeded} accepted
                    </span>
                  </div>
                  
                  {job.acceptedWorkers < job.workersNeeded ? (
                    <span className="text-xs bg-blue-100 text-[#3164E6] px-3 py-1 rounded-full font-bold">
                      Open
                    </span>
                  ) : (
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
                      Full
                    </span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-[#3164E6] h-full rounded-full transition-all"
                    style={{ width: `${(job.acceptedWorkers / job.workersNeeded) * 100}%` }}
                  ></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Hire Favorites */}
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

        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-6 px-6">
          {favoriteWorkers.map((worker) => (
            <button
              key={worker.id}
              onClick={() => navigate('rebook-worker', undefined, worker.id)}
              disabled={!worker.available}
              className={`flex-shrink-0 w-32 bg-white rounded-2xl p-3 shadow-sm border border-gray-100 ${
                worker.available ? 'active:scale-95' : 'opacity-50'
              } transition-transform`}
            >
              <div className="relative mb-2">
                <img
                  src={worker.avatar}
                  alt={worker.name}
                  className="w-full h-24 rounded-xl object-cover"
                />
                {worker.available && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <h3 className="font-bold text-sm text-gray-900 truncate">{worker.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-semibold text-gray-700">{worker.rating}</span>
              </div>
              <span className="text-xs text-gray-500 block mt-1">{worker.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 mb-6">
        <h2 className="font-bold text-gray-900 mb-3">Recent Activity</h2>
        
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
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  activity.color === 'green' ? 'bg-green-100' : 
                  activity.color === 'red' ? 'bg-red-100' : 
                  'bg-blue-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    activity.color === 'green' ? 'text-green-600' : 
                    activity.color === 'red' ? 'text-red-600' :
                    'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                {activity.urgent && (
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}