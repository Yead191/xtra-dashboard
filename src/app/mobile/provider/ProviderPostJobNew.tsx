import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  X, Calendar, Clock, DollarSign, MapPin, FileText,
  Utensils, Heart, Shield, ChefHat, Sparkles, Briefcase, Check, Users
} from 'lucide-react';

interface ProviderPostJobProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

const JOB_CATEGORIES = [
  { id: 'waiter', label: 'Waiter', icon: Utensils },
  { id: 'nurse', label: 'Nurse', icon: Heart },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'cook', label: 'Cook', icon: ChefHat },
  { id: 'cleaner', label: 'Cleaner', icon: Sparkles },
  { id: 'other', label: 'Other', icon: Briefcase },
];

export function ProviderPostJob({ navigate, currentUser }: ProviderPostJobProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    payment: '',
    location: '',
    requirements: '',
    workersNeeded: '1',
    address: '',
  });

  // Auto-calculate duration
  const calculateDuration = () => {
    if (!formData.startTime || !formData.endTime) return '';
    
    const [startHour, startMin] = formData.startTime.split(':').map(Number);
    const [endHour, endMin] = formData.endTime.split(':').map(Number);
    
    let hours = endHour - startHour;
    let minutes = endMin - startMin;
    
    if (minutes < 0) {
      hours -= 1;
      minutes += 60;
    }
    
    if (hours < 0) hours += 24; // Handle overnight shifts
    
    if (minutes === 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''}`;
    }
    return `${hours}h ${minutes}m`;
  };

  const duration = calculateDuration();

  const handleSubmit = () => {
    alert(`Job posted! Looking for ${formData.workersNeeded} worker(s)`);
    navigate('my-jobs');
  };

  const isFormValid = () => {
    return formData.title && 
           formData.category && 
           formData.date && 
           formData.startTime && 
           formData.endTime && 
           formData.payment && 
           formData.location &&
           formData.workersNeeded &&
           parseInt(formData.workersNeeded) > 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header - Not Fixed */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Post New Job</h1>
          <button 
            onClick={() => navigate('home')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-1">Fill in the details below</p>
      </div>

      {/* Form - Scrollable */}
      <div className="p-6 pb-48 space-y-6">
        {/* Job Title & Category */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#3164E6]" />
            Job Details
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Job Title *</label>
              <input 
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="e.g., Event Waiter"
                className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Category *</label>
              <div className="relative">
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none appearance-none text-gray-900"
                >
                  <option value="" disabled>Select a category</option>
                  {JOB_CATEGORIES.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                  <option value="hospice">Hospice Care Caregiver</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#3164E6]" />
            Schedule
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Date *</label>
              <input 
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Start Time *</label>
                <input 
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                  className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">End Time *</label>
                <input 
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                  className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
                />
              </div>
            </div>

            {duration && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3164E6]" />
                <div>
                  <p className="text-xs text-gray-600">Duration (Auto-calculated)</p>
                  <p className="font-bold text-[#3164E6]">{duration}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Workers Needed */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#3164E6]" />
            Team Size
          </h3>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm">How many workers needed? *</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const current = parseInt(formData.workersNeeded) || 1;
                  if (current > 1) setFormData({...formData, workersNeeded: String(current - 1)});
                }}
                className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-xl text-gray-700 active:scale-95 transition-transform"
              >
                -
              </button>
              
              <input 
                type="number"
                min="1"
                max="50"
                value={formData.workersNeeded}
                onChange={(e) => setFormData({...formData, workersNeeded: e.target.value})}
                className="flex-1 bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none text-center font-bold text-xl"
              />
              
              <button
                type="button"
                onClick={() => {
                  const current = parseInt(formData.workersNeeded) || 1;
                  if (current < 50) setFormData({...formData, workersNeeded: String(current + 1)});
                }}
                className="w-12 h-12 bg-[#3164E6] text-white rounded-xl flex items-center justify-center font-bold text-xl active:scale-95 transition-transform"
              >
                +
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Job will auto-close when all positions are filled</p>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#3164E6]" />
            Payment
          </h3>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm">Total Payment *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
              <input 
                type="number"
                value={formData.payment}
                onChange={(e) => setFormData({...formData, payment: e.target.value})}
                placeholder="0"
                className="w-full bg-gray-50 pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-bold text-lg"
              />
            </div>
            {duration && formData.payment && (
              <p className="text-xs text-gray-500 mt-2">
                ≈ ${(parseFloat(formData.payment) / parseFloat(duration.split('h')[0] || '1')).toFixed(2)}/hour
              </p>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#3164E6]" />
            Location
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Venue/Institution Name *</label>
              <input 
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="e.g., Marriott Hotel, City Hospital, ABC Restaurant"
                className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Street Address *</label>
              <input 
                type="text"
                value={formData.address || ''}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="e.g., 123 Main Street, Downtown"
                className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Optional Details */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#3164E6]" />
            Additional Details (Optional)
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Description</label>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe the job responsibilities..."
                rows={3}
                className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Requirements</label>
              <input 
                type="text"
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                placeholder="e.g., Experience required, Formal attire"
                className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action - Now visible */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 max-w-[430px] mx-auto">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid()}
          className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all ${
            isFormValid()
              ? 'bg-[#3164E6] text-white shadow-blue-200 active:scale-95'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Check className="w-5 h-5" />
            Post Job
          </div>
        </button>
      </div>
    </div>
  );
}