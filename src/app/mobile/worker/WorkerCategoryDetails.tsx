import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, MapPin, Clock, DollarSign, Utensils, Heart, Shield, ChefHat, Sparkles, TrendingUp, Users } from 'lucide-react';

interface WorkerCategoryDetailsProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
  categoryId: string;
}

const CATEGORY_INFO: Record<string, {
  name: string;
  icon: any;
  color: string;
  description: string;
  avgPay: string;
  activeJobs: number;
}> = {
  waiter: {
    name: 'Waiter',
    icon: Utensils,
    color: 'from-blue-500 to-blue-600',
    description: 'Serve customers at restaurants, events, and catering services',
    avgPay: '$12-18',
    activeJobs: 24,
  },
  nurse: {
    name: 'Nurse',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    description: 'Provide healthcare assistance and patient care support',
    avgPay: '$18-25',
    activeJobs: 18,
  },
  security: {
    name: 'Security',
    icon: Shield,
    color: 'from-indigo-500 to-indigo-600',
    description: 'Monitor and protect properties, events, and establishments',
    avgPay: '$15-22',
    activeJobs: 15,
  },
  cook: {
    name: 'Cook',
    icon: ChefHat,
    color: 'from-orange-500 to-orange-600',
    description: 'Prepare meals at restaurants, cafes, and catering events',
    avgPay: '$14-20',
    activeJobs: 21,
  },
  cleaner: {
    name: 'Cleaner',
    icon: Sparkles,
    color: 'from-purple-500 to-purple-600',
    description: 'Maintain cleanliness in homes, offices, and commercial spaces',
    avgPay: '$12-16',
    activeJobs: 32,
  },
};

const CATEGORY_JOBS: Record<string, any[]> = {
  waiter: [
    {
      id: '1',
      title: 'Restaurant Server',
      business: 'Bella Vista Restaurant',
      date: 'Dec 31, 2025',
      time: '6:00 PM - 11:00 PM',
      duration: '5 hours',
      payment: 55,
      distance: '0.8 km',
      location: 'Main Street',
    },
    {
      id: '4',
      title: 'Event Waiter',
      business: 'Grand Hotel',
      date: 'Jan 2, 2026',
      time: '5:00 PM - 10:00 PM',
      duration: '5 hours',
      payment: 60,
      distance: '1.5 km',
      location: 'Downtown',
    },
    {
      id: '7',
      title: 'Banquet Server',
      business: 'Elite Catering',
      date: 'Jan 3, 2026',
      time: '12:00 PM - 8:00 PM',
      duration: '8 hours',
      payment: 95,
      distance: '2.1 km',
      location: 'Convention Center',
    },
  ],
  nurse: [
    {
      id: '2',
      title: 'Healthcare Assistant',
      business: 'City Hospital',
      date: 'Jan 1, 2026',
      time: '8:00 AM - 5:00 PM',
      duration: '9 hours',
      payment: 125,
      distance: '2.8 km',
      location: 'Medical District',
    },
    {
      id: '5',
      title: 'Patient Care Helper',
      business: 'Sunrise Care Home',
      date: 'Jan 2, 2026',
      time: '7:00 AM - 3:00 PM',
      duration: '8 hours',
      payment: 110,
      distance: '1.2 km',
      location: 'North Side',
    },
  ],
  security: [
    {
      id: '6',
      title: 'Event Security',
      business: 'SecureGuard Services',
      date: 'Jan 1, 2026',
      time: '6:00 PM - 2:00 AM',
      duration: '8 hours',
      payment: 100,
      distance: '1.8 km',
      location: 'Event Center',
    },
    {
      id: '8',
      title: 'Night Security',
      business: 'Metro Mall',
      date: 'Jan 3, 2026',
      time: '10:00 PM - 6:00 AM',
      duration: '8 hours',
      payment: 95,
      distance: '2.5 km',
      location: 'Shopping District',
    },
  ],
  cook: [
    {
      id: '9',
      title: 'Line Cook',
      business: 'The Bistro',
      date: 'Jan 1, 2026',
      time: '11:00 AM - 9:00 PM',
      duration: '10 hours',
      payment: 120,
      distance: '1.1 km',
      location: 'Food District',
    },
    {
      id: '10',
      title: 'Prep Cook',
      business: 'Fresh Eats Cafe',
      date: 'Jan 2, 2026',
      time: '6:00 AM - 2:00 PM',
      duration: '8 hours',
      payment: 85,
      distance: '0.9 km',
      location: 'Downtown',
    },
  ],
  cleaner: [
    {
      id: '11',
      title: 'Office Cleaner',
      business: 'CleanPro Services',
      date: 'Jan 1, 2026',
      time: '6:00 PM - 10:00 PM',
      duration: '4 hours',
      payment: 50,
      distance: '1.3 km',
      location: 'Business Park',
    },
    {
      id: '12',
      title: 'Deep Cleaning',
      business: 'SparkleClean',
      date: 'Jan 2, 2026',
      time: '8:00 AM - 4:00 PM',
      duration: '8 hours',
      payment: 90,
      distance: '2.0 km',
      location: 'Residential Area',
    },
  ],
};

export function WorkerCategoryDetails({ navigate, currentUser, categoryId }: WorkerCategoryDetailsProps) {
  const category = CATEGORY_INFO[categoryId];
  const jobs = CATEGORY_JOBS[categoryId] || [];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Category not found</p>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className={`bg-gradient-to-br ${category.color} px-6 pt-12 pb-8`}>
        <button
          onClick={() => navigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-9 h-9 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-white text-3xl mb-2" style={{ fontFamily: 'var(--font-title)' }}>
              {category.name}
            </h1>
            <p className="text-white/90 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              {category.description}
            </p>
          </div>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
            <div className="text-white text-xl mb-1">{category.activeJobs}</div>
            <p className="text-white/80 text-xs">Active Jobs</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
            <div className="text-white text-xl mb-1">{category.avgPay}</div>
            <p className="text-white/80 text-xs">Avg. Pay/hr</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
            <div className="text-white text-xl mb-1">4.5★</div>
            <p className="text-white/80 text-xs">Avg. Rating</p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="px-6 -mt-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">In Demand</span>
            </div>
            <p className="text-xs text-gray-500">High hiring rate this week</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Flexible</span>
            </div>
            <p className="text-xs text-gray-500">Part-time & full shifts</p>
          </div>
        </div>
      </div>

      {/* Available Jobs */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg" style={{ fontFamily: 'var(--font-title)' }}>
            Available Jobs ({jobs.length})
          </h3>
        </div>

        <div className="space-y-3">
          {jobs.map((job) => (
            <button
              key={job.id}
              onClick={() => navigate('job-details', { jobId: job.id })}
              className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                    {job.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">{job.business}</p>
                </div>
                <div className="text-right">
                  <p className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    ${job.payment}
                  </p>
                  <p className="text-gray-500 text-xs">{job.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs">{job.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs">{job.distance}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <div className="flex-1">
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <span className="text-xs text-gray-500">75% filled</span>
              </div>
            </button>
          ))}
        </div>

        {jobs.length === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="text-gray-900 mb-2">No Jobs Available</h4>
            <p className="text-gray-500 text-sm">Check back later for new {category.name.toLowerCase()} opportunities</p>
          </div>
        )}
      </div>
    </div>
  );
}