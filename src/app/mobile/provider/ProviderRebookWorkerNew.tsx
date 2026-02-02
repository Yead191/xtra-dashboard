import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Calendar, Clock, DollarSign, MapPin, 
  Star, CheckCircle, Zap, Copy, Users, Lock, Globe,
  Edit2, ChevronRight
} from 'lucide-react';

interface ProviderRebookWorkerNewProps {
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
  responseTime: '< 2 hours',
  reliability: 98,
};

// Mock last job with this worker
const lastJob = {
  title: 'Event Waiter',
  category: 'waiter',
  duration: '6',
  payment: '120',
  location: '123 Event Center, Downtown',
  description: 'Need experienced waiter for corporate event. Must be professional and punctual.',
  date: '2025-12-31',
};

type HiringMode = 'choose' | 'direct' | 'open-priority' | 'review';

export function ProviderRebookWorkerNew({ navigate, currentUser, workerId }: ProviderRebookWorkerNewProps) {
  const [hiringMode, setHiringMode] = useState<HiringMode>('choose');
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
  });

  const handleChoiceSelect = (mode: 'direct' | 'open-priority') => {
    setHiringMode(mode);
  };

  const handleContinueToReview = () => {
    if (formData.date && formData.startTime && formData.endTime) {
      setHiringMode('review');
    }
  };

  const handleSubmit = () => {
    if (hiringMode === 'direct') {
      // Create job and send directly to worker
      alert(`✅ Job sent directly to ${workerData.name}!`);
    } else {
      // Create job, send priority notification to worker, but keep open for others
      alert(`✅ Job posted! ${workerData.name} gets priority notification + others can apply.`);
    }
    navigate('my-jobs');
  };

  const isFormValid = formData.date && formData.startTime && formData.endTime;

  // STEP 1: Choose Hiring Mode
  if (hiringMode === 'choose') {
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
              <h1 className="text-xl font-bold text-gray-900">Rebook Worker</h1>
              <p className="text-sm text-gray-500">Choose how to hire {workerData.name.split(' ')[0]}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Worker Card */}
          <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-5 text-white">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={workerData.avatar}
                alt={workerData.name}
                className="w-16 h-16 rounded-xl object-cover border-2 border-white/30"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{workerData.name}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 fill-white" />
                    <span className="text-xs font-semibold">{workerData.rating}</span>
                  </div>
                  <span className="text-xs text-blue-100">{workerData.completedJobs} jobs together</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <p className="text-xs text-blue-100 mb-1">Response Time</p>
                <p className="font-bold text-sm">{workerData.responseTime}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <p className="text-xs text-blue-100 mb-1">Reliability</p>
                <p className="font-bold text-sm">{workerData.reliability}%</p>
              </div>
            </div>
          </div>

          {/* Previous Job Reference */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <Copy className="w-5 h-5 text-[#3164E6] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Last Job Together</h3>
                <div className="bg-white rounded-xl p-3 border border-blue-200">
                  <p className="font-semibold text-sm text-gray-900 mb-2">{lastJob.title}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded-lg">${lastJob.payment}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-lg">{lastJob.duration}h</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg font-semibold">✓ Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hiring Mode Selection */}
          <div className="space-y-3">
            <h2 className="font-bold text-gray-900 text-lg">How would you like to hire?</h2>
            
            {/* Option 1: Direct Hire (Invite Only) */}
            <button
              onClick={() => handleChoiceSelect('direct')}
              className="w-full bg-white rounded-2xl p-5 border-2 border-gray-200 hover:border-[#3164E6] transition-all text-left group active:scale-[0.98]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">Direct Hire</h3>
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-lg font-bold">FASTEST</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Send job directly to {workerData.name.split(' ')[0]} only. Private invitation.
                  </p>
                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-700 font-semibold">⚡ Instant notification</p>
                      <p>🔒 Only {workerData.name.split(' ')[0]} sees this job</p>
                      <p>⏱️ {workerData.name.split(' ')[0]} responds in {workerData.responseTime}</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#3164E6] flex-shrink-0 mt-1" />
              </div>
            </button>

            {/* Option 2: Post & Invite (Priority) */}
            <button
              onClick={() => handleChoiceSelect('open-priority')}
              className="w-full bg-white rounded-2xl p-5 border-2 border-gray-200 hover:border-[#3164E6] transition-all text-left group active:scale-[0.98]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">Post & Give Priority</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg font-bold">FLEXIBLE</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {workerData.name.split(' ')[0]} gets priority notification, but others can apply too.
                  </p>
                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-blue-700 font-semibold">🎯 {workerData.name.split(' ')[0]} gets notified first</p>
                      <p>👥 Other workers can also apply</p>
                      <p>🔄 Compare candidates & choose best fit</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#3164E6] flex-shrink-0 mt-1" />
              </div>
            </button>
          </div>

          {/* Help Text */}
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>💡 Recommendation:</strong> Use <strong>Direct Hire</strong> for trusted workers you've worked with before. 
              Use <strong>Post & Give Priority</strong> if you want backup options or need to compare rates.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // STEP 2: Job Details Form
  if (hiringMode === 'direct' || hiringMode === 'open-priority') {
    return (
      <div className="min-h-screen bg-gray-50 pb-32 font-sans">
        {/* Header */}
        <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <button 
              onClick={() => setHiringMode('choose')}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">
                {hiringMode === 'direct' ? 'Direct Hire' : 'Post & Give Priority'}
              </h1>
              <p className="text-sm text-gray-500">Set job details</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Mode Badge */}
          <div className={`rounded-2xl p-4 border-2 ${
            hiringMode === 'direct' 
              ? 'bg-purple-50 border-purple-200' 
              : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-center gap-3">
              {hiringMode === 'direct' ? (
                <Lock className="w-5 h-5 text-purple-600" />
              ) : (
                <Users className="w-5 h-5 text-blue-600" />
              )}
              <div>
                <p className={`font-bold text-sm ${
                  hiringMode === 'direct' ? 'text-purple-900' : 'text-blue-900'
                }`}>
                  {hiringMode === 'direct' 
                    ? `Private invite to ${workerData.name}`
                    : `${workerData.name} gets priority + others can apply`
                  }
                </p>
                <p className={`text-xs ${
                  hiringMode === 'direct' ? 'text-purple-700' : 'text-blue-700'
                }`}>
                  {hiringMode === 'direct' 
                    ? 'Only this worker will see your job'
                    : 'Worker gets notified first, job posted publicly'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Copy Previous Job */}
          {!useLastJobDetails && (
            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  title: lastJob.title,
                  duration: lastJob.duration,
                  payment: lastJob.payment,
                  location: lastJob.location,
                  description: lastJob.description,
                });
                setUseLastJobDetails(true);
              }}
              className="w-full bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-left hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Copy className="w-5 h-5 text-[#3164E6]" />
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-sm">Copy from last job</p>
                  <p className="text-xs text-gray-600">{lastJob.title} • ${lastJob.payment}</p>
                </div>
              </div>
            </button>
          )}

          {/* Date & Time */}
          <div className="space-y-4">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#3164E6]" />
              When do you need them?
            </h2>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Date *</label>
              <input 
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-white px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3164E6] focus:ring-2 focus:ring-blue-100 outline-none font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Start Time *</label>
                <input 
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                  className="w-full bg-white px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3164E6] focus:ring-2 focus:ring-blue-100 outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">End Time *</label>
                <input 
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                  className="w-full bg-white px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3164E6] focus:ring-2 focus:ring-blue-100 outline-none font-medium"
                />
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900">Job Details</h2>
              {useLastJobDetails && (
                <button
                  onClick={() => setUseLastJobDetails(false)}
                  className="text-[#3164E6] text-sm font-semibold flex items-center gap-1"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Job Title</label>
              <input 
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                disabled={useLastJobDetails}
                className="w-full bg-white px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3164E6] focus:ring-2 focus:ring-blue-100 outline-none font-medium disabled:bg-gray-50 disabled:text-gray-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Duration (hours)</label>
                <input 
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  disabled={useLastJobDetails}
                  className="w-full bg-white px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3164E6] focus:ring-2 focus:ring-blue-100 outline-none font-medium disabled:bg-gray-50 disabled:text-gray-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Payment ($)</label>
                <input 
                  type="number"
                  value={formData.payment}
                  onChange={(e) => setFormData({...formData, payment: e.target.value})}
                  disabled={useLastJobDetails}
                  className="w-full bg-white px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3164E6] focus:ring-2 focus:ring-blue-100 outline-none font-medium disabled:bg-gray-50 disabled:text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  disabled={useLastJobDetails}
                  className="w-full bg-white pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3164E6] focus:ring-2 focus:ring-blue-100 outline-none font-medium disabled:bg-gray-50 disabled:text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Cost Summary */}
          {formData.payment && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900">Total Cost</h3>
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
                <div className="flex justify-between pt-2 border-t-2 border-green-300">
                  <span className="font-bold text-gray-900">Total:</span>
                  <span className="font-bold text-[#3164E6] text-xl">${(parseFloat(formData.payment) * 1.15).toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
          <button
            onClick={handleContinueToReview}
            disabled={!isFormValid}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
              isFormValid
                ? 'bg-[#3164E6] text-white shadow-blue-200 active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Review & Send
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // STEP 3: Review & Confirm
  if (hiringMode === 'review') {
    return (
      <div className="min-h-screen bg-gray-50 pb-32 font-sans">
        {/* Header */}
        <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <button 
              onClick={() => setHiringMode('direct')}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">Review Job</h1>
              <p className="text-sm text-gray-500">Check details before sending</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Worker Preview */}
          <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-5 text-white">
            <p className="text-xs text-blue-100 mb-2 uppercase tracking-wide font-semibold">Hiring</p>
            <div className="flex items-center gap-3">
              <img
                src={workerData.avatar}
                alt={workerData.name}
                className="w-14 h-14 rounded-xl object-cover border-2 border-white/30"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{workerData.name}</h3>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="text-sm font-semibold">{workerData.rating}</span>
                  <span className="text-blue-100">•</span>
                  <span className="text-sm text-blue-100">{workerData.completedJobs} jobs</span>
                </div>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>

          {/* Job Summary */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Job Summary</h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Title</p>
                <p className="font-bold text-gray-900 text-lg">{formData.title}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Date</p>
                  <p className="font-semibold text-gray-900">{new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Time</p>
                  <p className="font-semibold text-gray-900">{formData.startTime}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-gray-900">{formData.duration}h</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Location</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-900">{formData.location}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Payment</p>
                <div className="bg-green-50 rounded-xl p-3 border border-green-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Worker Gets:</span>
                    <span className="font-bold text-green-600 text-2xl">${formData.payment}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-green-200">
                    <span className="text-sm text-gray-600">You Pay (incl. 15% fee):</span>
                    <span className="font-bold text-gray-900">${(parseFloat(formData.payment) * 1.15).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#3164E6]" />
              What happens next?
            </h3>
            <div className="space-y-2 text-sm">
              {hiringMode === 'direct' ? (
                <>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3164E6] font-bold">1.</span>
                    <p className="text-gray-700">{workerData.name} gets instant notification</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3164E6] font-bold">2.</span>
                    <p className="text-gray-700">They can accept within 24 hours</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3164E6] font-bold">3.</span>
                    <p className="text-gray-700">You'll be notified once accepted</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3164E6] font-bold">4.</span>
                    <p className="text-gray-700">Job remains private (invite-only)</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3164E6] font-bold">1.</span>
                    <p className="text-gray-700">{workerData.name} gets priority notification</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3164E6] font-bold">2.</span>
                    <p className="text-gray-700">Job also posted publicly for other workers</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3164E6] font-bold">3.</span>
                    <p className="text-gray-700">You can review all applicants</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#3164E6] font-bold">4.</span>
                    <p className="text-gray-700">Choose the best fit & hire</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
          <button
            onClick={handleSubmit}
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-6 h-6" />
            {hiringMode === 'direct' ? 'Send to Worker' : 'Post Job'}
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            {hiringMode === 'direct' 
              ? `${workerData.name} typically responds in ${workerData.responseTime}`
              : `${workerData.name} and other workers will be notified`
            }
          </p>
        </div>
      </div>
    );
  }

  return null;
}
