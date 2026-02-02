import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { Search, Map, List, MapPin, Clock, Star, Filter, ArrowLeft, TrendingUp, Zap } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface WorkerBrowseJobsProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
}

const JOBS = [
  {
    id: '1',
    title: 'Waitstaff for Wedding',
    business: 'Grand Plaza Hotel',
    payment: 120,
    time: '4:00 PM - 10:00 PM',
    duration: '6 hrs',
    distance: '1.2 km',
    rating: 4.8,
    type: 'Waiter',
    location: { lat: 40.7128, lng: -74.0060 },
    address: '123 Plaza Ave, Downtown',
    applicants: 12,
    description: 'Looking for professional waitstaff for a wedding reception. Must have experience with formal events.',
    hourlyRate: 20
  },
  {
    id: '2',
    title: 'Private Nurse (Night Shift)',
    business: 'Elderly Care Home',
    payment: 180,
    time: '8:00 PM - 6:00 AM',
    duration: '10 hrs',
    distance: '3.5 km',
    rating: 4.9,
    type: 'Nurse',
    location: { lat: 40.7150, lng: -74.0080 },
    address: '456 Care Lane, Northside',
    applicants: 5,
    description: 'Experienced nurse needed for night shift care. CPR certified required.',
    hourlyRate: 18
  },
  {
    id: '3',
    title: 'Security Guard',
    business: 'City Mall',
    payment: 95,
    time: '2:00 PM - 8:00 PM',
    duration: '6 hrs',
    distance: '0.8 km',
    rating: 4.5,
    type: 'Security',
    location: { lat: 40.7110, lng: -74.0030 },
    address: '789 Mall Street, Central',
    applicants: 20,
    description: 'Security guard needed for evening shift at busy shopping center.',
    hourlyRate: 16
  },
  {
    id: '4',
    title: 'House Cleaning',
    business: 'Private Residence',
    payment: 60,
    time: '10:00 AM - 1:00 PM',
    duration: '3 hrs',
    distance: '2.1 km',
    rating: 4.7,
    type: 'Cleaner',
    location: { lat: 40.7180, lng: -74.0090 },
    address: '321 Residential Blvd, Westside',
    applicants: 8,
    description: 'Deep cleaning needed for 3-bedroom house. Supplies provided.',
    hourlyRate: 20
  }
];

export function WorkerBrowseJobs({ navigate, currentUser }: WorkerBrowseJobsProps) {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm z-10 sticky top-0">
        <div className="flex items-center gap-3 mb-4">
           <button onClick={() => navigate('home')} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center active:scale-95 transition-transform">
             <ArrowLeft className="w-5 h-5 text-gray-600" />
           </button>
           <div>
             <h1 className="text-xl font-bold text-gray-900">Find Jobs</h1>
             <p className="text-xs text-gray-500">{JOBS.length} opportunities nearby</p>
           </div>
        </div>
        
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:bg-white transition-all"
            />
          </div>
          <button 
            onClick={() => navigate('job-filters')}
            className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 active:scale-95 transition-transform"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="px-6 py-4">
        <div className="bg-gray-200 p-1 rounded-xl flex">
          <button 
            onClick={() => setViewMode('list')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
              viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            <List className="w-4 h-4" /> List
          </button>
          <button 
            onClick={() => setViewMode('map')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
              viewMode === 'map' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            <Map className="w-4 h-4" /> Map
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        {viewMode === 'list' ? (
          <div className="space-y-4">
            {JOBS.map((job) => (
              <div 
                key={job.id} 
                onClick={() => navigate('job-summary', { jobId: job.id })}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 active:scale-[0.98] transition-all cursor-pointer hover:shadow-md"
              >
                {/* Card Header */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1.5 rounded-full bg-blue-50 text-[#3164E6] text-xs font-bold">
                          {job.type}
                        </span>
                        {job.applicants < 10 && (
                          <span className="px-2 py-1 rounded-full bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 text-[10px] font-bold flex items-center gap-1">
                            <Zap className="w-3 h-3 fill-current" />
                            HOT
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1.5">{job.title}</h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('business-profile-details', undefined, undefined, undefined, 'B001');
                        }}
                        className="text-gray-500 text-sm font-medium hover:text-[#3164E6] transition-colors flex items-center gap-1 group"
                      >
                        {job.business}
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </div>
                  </div>

                  {/* Payment Section */}
                  <div className="bg-gradient-to-br from-[#3164E6] to-[#4F7BF7] rounded-xl p-4 mb-4">
                    <div className="flex items-end justify-between text-white">
                      <div>
                        <div className="text-xs opacity-90 mb-1">Total Pay</div>
                        <div className="text-3xl font-bold">${job.payment}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-90 mb-1">Per Hour</div>
                        <div className="text-xl font-bold">${job.hourlyRate}</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="w-full bg-gray-50 rounded-xl py-3">
                        <Clock className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                        <div className="text-xs font-bold text-gray-900">{job.duration}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-full bg-gray-50 rounded-xl py-3">
                        <MapPin className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                        <div className="text-xs font-bold text-gray-900">{job.distance}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-full bg-yellow-50 rounded-xl py-3">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mx-auto mb-1" />
                        <div className="text-xs font-bold text-gray-900">{job.rating}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-green-200 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-purple-200 border-2 border-white"></div>
                    </div>
                    <span className="text-xs text-gray-600">
                      <span className="font-bold text-gray-900">{job.applicants}</span> applied
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#3164E6] font-bold text-sm">
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[400px] bg-gray-200 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Mock Map */}
            <div className="absolute inset-0 bg-blue-50 opacity-50" style={{
              backgroundImage: 'radial-gradient(#3164E6 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            
            {JOBS.map((job, index) => (
              <div 
                key={job.id}
                className="absolute bg-white p-2 rounded-xl shadow-lg flex items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
                style={{ 
                  top: `${50 + (index % 2 === 0 ? 20 : -20)}%`, 
                  left: `${50 + (index % 3 === 0 ? 20 : -20)}%` 
                }}
                onClick={() => navigate('job-details', { jobId: job.id })}
              >
                <div className="w-8 h-8 bg-[#3164E6] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  ${job.payment}
                </div>
                <div className="text-[10px] font-bold text-gray-900 pr-1 max-w-[80px] truncate">
                  {job.title}
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-sm">
              Current Location
            </div>
          </div>
        )}
      </div>
    </div>
  );
}