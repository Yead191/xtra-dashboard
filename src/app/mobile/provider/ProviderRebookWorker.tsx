import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Calendar, Clock, DollarSign, MapPin, 
  Star, CheckCircle, Zap, Copy
} from 'lucide-react';

interface ProviderRebookWorkerProps {
  navigate: (route: ProviderRoute, jobId?: string) => void;
  currentUser: any;
  workerId?: string;
}

// Mock worker data - in real app, fetch based on workerId
const workerData = {
  id: 'W001',
  name: 'Sarah Johnson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  rating: 4.9,
  completedJobs: 8,
};

// Mock last job with this worker
const lastJob = {
  title: 'Event Waiter',
  category: 'waiter',
  duration: '6',
  payment: '120',
  location: '123 Event Center, Downtown',
  description: 'Need experienced waiter for corporate event. Must be professional and punctual.',
  requirements: 'Black & white uniform, Experience with formal events',
};

export function ProviderRebookWorker({ navigate, currentUser, workerId }: ProviderRebookWorkerProps) {
  const [useLastJobDetails, setUseLastJobDetails] = useState(true);
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    title: lastJob.title,
    duration: lastJob.duration,
    payment: lastJob.payment,
    location: lastJob.location,
    description: lastJob.description,
    requirements: lastJob.requirements,
  });

  const handleSubmit = () => {
    // Create job with worker pre-selected
    alert(`Job posted! ${workerData.name} will be notified.`);
    navigate('my-jobs');
  };

  const handleCopyLastJob = () => {
    setFormData({
      ...formData,
      title: lastJob.title,
      duration: lastJob.duration,
      payment: lastJob.payment,
      location: lastJob.location,
      description: lastJob.description,
      requirements: lastJob.requirements,
    });
    setUseLastJobDetails(true);
  };

  const isValid = formData.date && formData.startTime && formData.endTime;

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate('my-workers')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">Quick Rebook</h1>
            <p className="text-sm text-gray-500">Hire {workerData.name} again</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Worker Card */}
        <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={workerData.avatar}
              alt={workerData.name}
              className="w-14 h-14 rounded-xl object-cover border-2 border-white/30"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{workerData.name}</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="text-sm font-semibold">{workerData.rating}</span>
                </div>
                <span className="text-blue-200">•</span>
                <span className="text-sm text-blue-100">{workerData.completedJobs} jobs together</span>
              </div>
            </div>
            <CheckCircle className="w-6 h-6 text-green-400" />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-yellow-300" />
              <p className="text-sm font-semibold">Pre-Selected Worker</p>
            </div>
            <p className="text-xs text-blue-100">
              This job will be sent directly to {workerData.name.split(' ')[0]} for instant booking
            </p>
          </div>
        </div>

        {/* Quick Copy Previous Job */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3 mb-3">
            <Copy className="w-5 h-5 text-[#3164E6] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Use Previous Job Details?</h3>
              <p className="text-sm text-gray-600 mb-2">Save time by copying details from your last job with {workerData.name.split(' ')[0]}</p>
              <div className="bg-white rounded-xl p-3 border border-blue-200">
                <p className="font-semibold text-sm text-gray-900 mb-1">{lastJob.title}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                  <span>${lastJob.payment}</span>
                  <span>•</span>
                  <span>{lastJob.duration}h</span>
                  <span>•</span>
                  <span className="truncate max-w-[150px]">{lastJob.location}</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleCopyLastJob}
            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
              useLastJobDetails
                ? 'bg-[#3164E6] text-white'
                : 'bg-white text-[#3164E6] border-2 border-[#3164E6]'
            }`}
          >
            {useLastJobDetails ? '✓ Using Previous Details' : 'Copy Previous Job Details'}
          </button>
        </div>

        {/* Date & Time - Always Required */}
        <div className="space-y-4">
          <h2 className="font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#3164E6]" />
            When do you need them?
          </h2>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Date *</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input 
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-white px-4 py-4 pl-12 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Start Time *</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <input 
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                  className="w-full bg-white px-4 py-4 pl-12 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">End Time *</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <input 
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                  className="w-full bg-white px-4 py-4 pl-12 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Job Details - Editable */}
        {useLastJobDetails && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900">Job Details</h2>
              <button
                onClick={() => setUseLastJobDetails(false)}
                className="text-[#3164E6] text-sm font-semibold"
              >
                Edit Details
              </button>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Job Title</p>
                <p className="font-semibold text-gray-900">{formData.title}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-gray-900">{formData.duration} hours</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Payment</p>
                  <p className="font-semibold text-green-600">${formData.payment}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Location</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-900">{formData.location}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom Job Details */}
        {!useLastJobDetails && (
          <div className="space-y-4">
            <h2 className="font-bold text-gray-900">Customize Job Details</h2>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Job Title</label>
              <input 
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full bg-white px-4 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Duration (hours)</label>
                <input 
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="w-full bg-white px-4 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Payment ($)</label>
                <input 
                  type="number"
                  value={formData.payment}
                  onChange={(e) => setFormData({...formData, payment: e.target.value})}
                  className="w-full bg-white px-4 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Location</label>
              <input 
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full bg-white px-4 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              />
            </div>
          </div>
        )}

        {/* Cost Summary */}
        {formData.payment && (
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-gray-900">Cost Summary</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Worker Payment:</span>
                <span className="font-semibold text-gray-900">${parseFloat(formData.payment).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Platform Fee (15%):</span>
                <span className="font-semibold text-gray-900">${(parseFloat(formData.payment) * 0.15).toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-300">
                <span className="font-bold text-gray-900">Total:</span>
                <span className="font-bold text-[#3164E6] text-lg">${(parseFloat(formData.payment) * 1.15).toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
            isValid
              ? 'bg-[#3164E6] text-white shadow-blue-200 active:scale-[0.98]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <CheckCircle className="w-5 h-5" />
          Send Job to {workerData.name.split(' ')[0]}
        </button>

        <p className="text-center text-xs text-gray-500">
          {workerData.name.split(' ')[0]} will be notified immediately and can accept within 24 hours
        </p>
      </div>
    </div>
  );
}
