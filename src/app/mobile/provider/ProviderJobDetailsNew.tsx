import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Calendar, Clock, DollarSign, MapPin, User, Star,
  Edit, CheckCircle, AlertCircle, Phone, MessageSquare, Users,
  Navigation, Play, Ban, Camera, Eye, Pause, EyeOff, ChevronRight, Shield
} from 'lucide-react';

interface ProviderJobDetailsProps {
  navigate: (route: ProviderRoute, jobId?: string) => void;
  jobId: string;
  currentUser: any;
}

// Mock job data with accepted workers
const jobsData: any = {
  'J001': {
    id: 'J001',
    title: 'Event Waiter',
    category: 'Waiter',
    date: 'Today',
    time: '2:00 PM - 8:00 PM',
    payment: 120,
    location: 'Downtown Event Center',
    address: '123 Main St, Downtown',
    status: 'in-progress',
    workersNeeded: 1,
    acceptedWorkers: [
      {
        id: 'W001',
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        rating: 4.9,
        checkInStatus: 'pending', // pending, approved, none
        checkInTime: '2:03 PM',
        workingHours: '2h 15m',
      }
    ],
  },
  'J003': {
    id: 'J003',
    title: 'Private Nurse',
    category: 'Nurse',
    date: 'Dec 15',
    time: '9:00 AM - 5:00 PM',
    payment: 180,
    location: 'The Coffee House',
    address: '789 Cafe Street',
    status: 'posted',
    workersNeeded: 3,
    acceptedWorkers: [
      {
        id: 'W001',
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        rating: 4.9,
        acceptedAt: '2h ago',
      },
      {
        id: 'W003',
        name: 'Emma Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
        rating: 5.0,
        acceptedAt: '1h ago',
      }
    ],
  },
  'J004': {
    id: 'J004',
    title: 'Cook Assistant',
    category: 'Cook',
    date: 'Dec 16',
    time: '10:00 AM - 6:00 PM',
    payment: 85,
    location: 'Restaurant',
    address: '456 Food Street',
    status: 'posted',
    workersNeeded: 1,
    acceptedWorkers: [],
  },
};

export function ProviderJobDetails({ navigate, jobId, currentUser }: ProviderJobDetailsProps) {
  const [isPaused, setIsPaused] = useState(false);
  const job = jobsData[jobId] || jobsData['J001'];

  const handlePauseJob = () => {
    setIsPaused(!isPaused);
    alert(isPaused ? 'Job is now visible to workers' : 'Job paused - hidden from workers');
  };

  const handleCheckInApproval = (worker: any) => {
    navigate('check-in-approval', 'CI001');
  };

  const spotsRemaining = job.workersNeeded - job.acceptedWorkers.length;
  const isFull = spotsRemaining === 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('my-jobs')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">{job.title}</h1>
            <p className="text-sm text-gray-500">{job.category}</p>
          </div>
          {job.status === 'posted' && (
            <button
              onClick={() => navigate('post-job')}
              className="w-10 h-10 rounded-full bg-blue-50 text-[#3164E6] flex items-center justify-center active:scale-95 transition-transform"
            >
              <Edit className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Check-In Approval Section - Only for active jobs */}
        {job.status === 'in-progress' && job.acceptedWorkers.some((w: any) => w.checkInStatus === 'pending') && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-900">Action Required</h3>
                <p className="text-xs text-amber-700">Check-in needs approval</p>
              </div>
            </div>

            {job.acceptedWorkers.filter((w: any) => w.checkInStatus === 'pending').map((worker: any) => (
              <button
                key={worker.id}
                onClick={() => handleCheckInApproval(worker)}
                className="w-full bg-white rounded-xl p-3 flex items-center gap-3 active:scale-95 transition-transform"
              >
                <img
                  src={worker.avatar}
                  alt={worker.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 text-left">
                  <p className="font-bold text-gray-900">{worker.name}</p>
                  <p className="text-xs text-gray-600">Requested at {worker.checkInTime}</p>
                </div>
                <div className="flex items-center gap-2 bg-amber-100 px-3 py-2 rounded-lg">
                  <Camera className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-bold text-amber-700">Review</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Job Status */}
        {job.status === 'posted' && (
          <div className={`rounded-2xl p-4 border-2 ${
            isFull 
              ? 'bg-green-50 border-green-200' 
              : isPaused 
              ? 'bg-gray-50 border-gray-200'
              : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users className={`w-5 h-5 ${isFull ? 'text-green-600' : isPaused ? 'text-gray-600' : 'text-blue-600'}`} />
                <h3 className={`font-bold ${isFull ? 'text-green-900' : isPaused ? 'text-gray-900' : 'text-blue-900'}`}>
                  {isFull ? 'All Positions Filled' : isPaused ? 'Job Paused' : 'Open for Workers'}
                </h3>
              </div>
              {isFull && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Full
                </span>
              )}
              {isPaused && (
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Hidden
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <p className={`text-sm ${isFull ? 'text-green-700' : isPaused ? 'text-gray-700' : 'text-blue-700'}`}>
                {job.acceptedWorkers.length} of {job.workersNeeded} workers accepted
              </p>
              {!isFull && (
                <span className="text-xs font-semibold text-[#3164E6]">
                  {spotsRemaining} spot{spotsRemaining !== 1 ? 's' : ''} left
                </span>
              )}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-3 bg-white rounded-full h-2 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all ${
                  isFull ? 'bg-green-500' : 'bg-[#3164E6]'
                }`}
                style={{ width: `${(job.acceptedWorkers.length / job.workersNeeded) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Accepted Workers Section */}
        {job.acceptedWorkers.length > 0 && (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900">
                Accepted Workers ({job.acceptedWorkers.length}/{job.workersNeeded})
              </h3>
            </div>
            
            <div className="space-y-2">
              {job.acceptedWorkers.map((worker: any) => (
                <div
                  key={worker.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                >
                  <img
                    src={worker.avatar}
                    alt={worker.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{worker.name}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-semibold text-gray-700">{worker.rating}</span>
                      </div>
                      {worker.acceptedAt && (
                        <>
                          <span className="text-gray-300">•</span>
                          <span className="text-xs text-gray-500">Accepted {worker.acceptedAt}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {worker.checkInStatus === 'approved' && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Working
                    </span>
                  )}
                  {worker.checkInStatus === 'pending' && (
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-lg text-xs font-bold">
                      Pending
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Job Details */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3">Job Details</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-semibold text-gray-900">{job.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Time</p>
                <p className="font-semibold text-gray-900">{job.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Payment</p>
                <p className="font-semibold text-gray-900">${job.payment.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-semibold text-gray-900">{job.location}</p>
                <p className="text-xs text-gray-500">{job.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Controls - Posted Jobs Only */}
        {job.status === 'posted' && (
          <div className="space-y-3">
            <button
              onClick={handlePauseJob}
              className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 ${
                isPaused
                  ? 'bg-[#3164E6] text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {isPaused ? <Eye className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              {isPaused ? 'Resume Job Posting' : 'Pause Job Posting'}
            </button>

            {!isFull && !isPaused && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
                <p className="text-xs text-blue-700">
                  Workers can still accept this job. It will auto-hide when full.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
