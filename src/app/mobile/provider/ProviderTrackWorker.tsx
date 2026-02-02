import { ProviderRoute } from '../ProviderApp';
import { 
  ChevronLeft, MapPin, Navigation, Clock, Phone, MessageSquare,
  CheckCircle, User, Star
} from 'lucide-react';

interface ProviderTrackWorkerProps {
  navigate: (route: ProviderRoute, jobId?: string) => void;
  jobId: string;
  currentUser: any;
}

export function ProviderTrackWorker({ navigate, jobId, currentUser }: ProviderTrackWorkerProps) {
  // Mock data
  const job = {
    id: jobId,
    title: 'Event Waiter',
    status: 'in-progress',
    worker: {
      name: 'John Student',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
      rating: 4.8,
      phone: '+1 (555) 123-4567',
    },
    location: 'Downtown Event Center',
    address: '123 Main St, Downtown',
    checkInTime: '2:05 PM',
    workingHours: '2h 15m',
    eta: '5 mins',
    workerLocation: 'Approaching job site',
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm px-6 pt-12 pb-4 border-b border-gray-100">
        <button 
          onClick={() => navigate('job-details', jobId)}
          className="text-gray-600 flex items-center gap-2 mb-3"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-xl font-bold text-gray-900">Track Worker</h2>
      </div>

      {/* Map Area */}
      <div className="h-[450px] bg-gradient-to-br from-blue-100 to-green-100 relative mt-[120px]">
        {/* Mock Map with markers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              {/* Worker Location Marker */}
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <p className="font-semibold text-gray-900">{job.worker.name}</p>
            <p className="text-sm text-gray-600">{job.workerLocation}</p>
          </div>
        </div>

        {/* Job Location Marker */}
        <div className="absolute bottom-12 right-12 w-12 h-12 bg-[#3164E6] rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6 text-white" />
        </div>

        {/* Distance/ETA Badge */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
          <Navigation className="w-4 h-4 text-blue-600" />
          <span className="font-semibold text-gray-900">ETA: {job.eta}</span>
        </div>
      </div>

      {/* Worker Info Card */}
      <div className="p-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={job.worker.avatar} 
              alt={job.worker.name}
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{job.worker.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < Math.floor(job.worker.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{job.worker.rating}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('inbox')}
                className="w-10 h-10 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div>
              <p className="text-sm text-gray-500 mb-1">Check-in Time</p>
              <p className="font-semibold text-gray-900">{job.checkInTime}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Working Time</p>
              <p className="font-semibold text-green-600">{job.workingHours}</p>
            </div>
          </div>
        </div>

        {/* Job Location */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-[#3164E6]" />
            <h3 className="font-bold text-gray-900">Job Location</h3>
          </div>
          <p className="text-gray-900 font-medium">{job.location}</p>
          <p className="text-sm text-gray-600">{job.address}</p>
        </div>

        {/* Status Timeline */}
        <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-4">
          <h3 className="font-bold text-gray-900 mb-4">Status Timeline</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Worker Checked In</p>
                <p className="text-sm text-gray-500">{job.checkInTime}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 ml-4">
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Currently Working</p>
                <p className="text-sm text-gray-500">Started {job.workingHours} ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 ml-4">
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>

            <div className="flex items-start gap-3 opacity-40">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Check Out</p>
                <p className="text-sm text-gray-500">Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}