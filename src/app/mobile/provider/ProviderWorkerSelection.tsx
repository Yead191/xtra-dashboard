import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { ChevronLeft, Star, MapPin, Briefcase, CheckCircle, ChevronRight } from 'lucide-react';

interface ProviderWorkerSelectionProps {
  navigate: (route: ProviderRoute, jobId?: string) => void;
  jobId: string;
  currentUser: any;
}

const applicants = [
  {
    id: 'W001',
    name: 'John Student',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    rating: 4.8,
    reviewCount: 24,
    jobsCompleted: 12,
    distance: '2.3 miles',
    skills: ['Waiter', 'Event Service'],
    onTimeRate: 98,
  },
  {
    id: 'W002',
    name: 'Maria Garcia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 4.9,
    reviewCount: 42,
    jobsCompleted: 24,
    distance: '1.8 miles',
    skills: ['Waiter', 'Customer Service'],
    onTimeRate: 100,
  },
  {
    id: 'W003',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
    rating: 5.0,
    reviewCount: 58,
    jobsCompleted: 36,
    distance: '3.1 miles',
    skills: ['Waiter', 'Fine Dining'],
    onTimeRate: 100,
  },
  {
    id: 'W004',
    name: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 4.7,
    reviewCount: 18,
    jobsCompleted: 8,
    distance: '4.2 miles',
    skills: ['Waiter'],
    onTimeRate: 95,
  },
  {
    id: 'W005',
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 4.6,
    reviewCount: 12,
    jobsCompleted: 6,
    distance: '2.9 miles',
    skills: ['Waiter', 'Bartending'],
    onTimeRate: 92,
  },
];

export function ProviderWorkerSelection({ navigate, jobId, currentUser }: ProviderWorkerSelectionProps) {
  const [sortBy, setSortBy] = useState<'rating' | 'distance' | 'experience'>('rating');
  const [selectedWorker, setSelectedWorker] = useState<string | null>(null);

  const sortedApplicants = [...applicants].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
        return parseFloat(a.distance) - parseFloat(b.distance);
      case 'experience':
        return b.jobsCompleted - a.jobsCompleted;
      default:
        return 0;
    }
  });

  const handleSelectWorker = () => {
    if (selectedWorker) {
      alert(`${applicants.find(w => w.id === selectedWorker)?.name} has been assigned to this job!`);
      navigate('job-details', jobId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-32">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <button 
          onClick={() => navigate('job-details', jobId)}
          className="text-gray-600 flex items-center gap-2 mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Select Worker</h2>
        <p className="text-gray-500">{applicants.length} applicants</p>
      </div>

      {/* Filters */}
      <div className="bg-white px-6 py-3 border-b border-gray-100">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setSortBy('rating')}
            className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
              sortBy === 'rating' ? 'bg-[#3164E6] text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Highest Rated
          </button>
          <button
            onClick={() => setSortBy('distance')}
            className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
              sortBy === 'distance' ? 'bg-[#3164E6] text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Closest
          </button>
          <button
            onClick={() => setSortBy('experience')}
            className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
              sortBy === 'experience' ? 'bg-[#3164E6] text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Most Experienced
          </button>
        </div>
      </div>

      {/* Applicants List */}
      <div className="p-6 space-y-3">
        {sortedApplicants.map((worker) => (
          <button
            key={worker.id}
            onClick={() => setSelectedWorker(worker.id)}
            className={`w-full bg-white rounded-2xl p-4 border-2 transition-all text-left ${
              selectedWorker === worker.id
                ? 'border-[#3164E6] bg-blue-50'
                : 'border-gray-100 hover:border-blue-200'
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <img 
                src={worker.avatar} 
                alt={worker.name}
                className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900">{worker.name}</h3>
                  {selectedWorker === worker.id && (
                    <div className="w-6 h-6 bg-[#3164E6] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(worker.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{worker.rating}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{worker.reviewCount} reviews</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{worker.jobsCompleted} jobs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{worker.distance}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {worker.skills.map((skill) => (
                <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="text-center flex-1">
                <p className="text-xs text-gray-500">On-Time Rate</p>
                <p className="font-bold text-gray-900">{worker.onTimeRate}%</p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center flex-1">
                <p className="text-xs text-gray-500">Completed Jobs</p>
                <p className="font-bold text-gray-900">{worker.jobsCompleted}</p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <button className="text-center flex-1 text-[#3164E6] font-semibold text-sm flex items-center justify-center gap-1">
                View Profile
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Action */}
      {selectedWorker && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
          <div className="max-w-[430px] mx-auto">
            <button
              onClick={handleSelectWorker}
              className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Select Worker
            </button>
          </div>
        </div>
      )}
    </div>
  );
}