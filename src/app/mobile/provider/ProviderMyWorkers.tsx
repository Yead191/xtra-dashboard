import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Star, MapPin, Clock, DollarSign, TrendingUp,
  Heart, ChevronRight, Filter, Search, Briefcase, CheckCircle
} from 'lucide-react';

interface ProviderMyWorkersProps {
  navigate: (route: ProviderRoute, jobId?: string, workerId?: string) => void;
  currentUser: any;
}

const pastWorkers = [
  {
    id: 'W001',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 4.9,
    completedJobs: 8,
    totalEarned: 680,
    categories: ['Waiter', 'Event Staff'],
    lastWorked: '3 days ago',
    reliability: 98,
    responseTime: '5 min',
    distance: '2.3 km',
    favorite: true,
    skills: ['Professional', 'Punctual', 'Friendly'],
  },
  {
    id: 'W002',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.8,
    completedJobs: 5,
    totalEarned: 425,
    categories: ['Security', 'Warehouse'],
    lastWorked: '1 week ago',
    reliability: 95,
    responseTime: '12 min',
    distance: '4.1 km',
    favorite: true,
    skills: ['Reliable', 'Strong', 'Experienced'],
  },
  {
    id: 'W003',
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5.0,
    completedJobs: 12,
    totalEarned: 1020,
    categories: ['Nurse', 'Caregiver'],
    lastWorked: 'Yesterday',
    reliability: 100,
    responseTime: '3 min',
    distance: '1.8 km',
    favorite: true,
    skills: ['Certified', 'Caring', 'Experienced'],
  },
  {
    id: 'W004',
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    rating: 4.7,
    completedJobs: 3,
    totalEarned: 255,
    categories: ['Cook', 'Kitchen Help'],
    lastWorked: '2 weeks ago',
    reliability: 92,
    responseTime: '15 min',
    distance: '5.2 km',
    favorite: false,
    skills: ['Quick Learner', 'Clean', 'Efficient'],
  },
];

export function ProviderMyWorkers({ navigate, currentUser }: ProviderMyWorkersProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('favorites');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkers = pastWorkers
    .filter(w => activeTab === 'all' || w.favorite)
    .filter(w => w.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleRebook = (workerId: string, workerName: string) => {
    // Pre-fill job posting with worker already selected
    navigate('rebook-worker', undefined, workerId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate('home')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">My Workers</h1>
            <p className="text-sm text-gray-500">Your trusted team</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search workers..."
            className="w-full bg-gray-50 pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'favorites'
                ? 'bg-[#3164E6] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Heart className={`w-4 h-4 ${activeTab === 'favorites' ? 'fill-white' : ''}`} />
              Favorites ({pastWorkers.filter(w => w.favorite).length})
            </div>
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'all'
                ? 'bg-[#3164E6] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            All Workers ({pastWorkers.length})
          </button>
        </div>
      </div>

      {/* Workers List */}
      <div className="p-6 space-y-4">
        {filteredWorkers.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">No workers found</h3>
            <p className="text-gray-500 text-sm">
              {activeTab === 'favorites' 
                ? 'Add workers to favorites for quick access'
                : 'Complete jobs to build your worker network'}
            </p>
          </div>
        ) : (
          filteredWorkers.map((worker) => (
            <div key={worker.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {/* Worker Header */}
              <div className="p-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="relative">
                    <img
                      src={worker.avatar}
                      alt={worker.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    {worker.favorite && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                        <Heart className="w-3 h-3 text-white fill-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">{worker.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-sm text-gray-900">{worker.rating}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-600">{worker.completedJobs} jobs together</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {worker.categories.map((cat) => (
                        <span key={cat} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-blue-50 rounded-xl p-2 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="w-3 h-3 text-[#3164E6]" />
                      <p className="text-xs text-gray-600">Reliability</p>
                    </div>
                    <p className="font-bold text-[#3164E6]">{worker.reliability}%</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-2 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <DollarSign className="w-3 h-3 text-green-600" />
                      <p className="text-xs text-gray-600">Earned</p>
                    </div>
                    <p className="font-bold text-green-600">${worker.totalEarned}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-2 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-purple-600" />
                      <p className="text-xs text-gray-600">Response</p>
                    </div>
                    <p className="font-bold text-purple-600">{worker.responseTime}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {worker.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {worker.distance} away
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Last worked {worker.lastWorked}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => navigate('worker-profile-details', undefined, worker.id)}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-200 font-semibold text-sm text-gray-700 active:scale-95 transition-transform"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => handleRebook(worker.id, worker.name)}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3164E6] text-white font-bold text-sm shadow-lg shadow-blue-200 active:scale-95 transition-transform"
                  >
                    <Briefcase className="w-4 h-4" />
                    Hire Again
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}