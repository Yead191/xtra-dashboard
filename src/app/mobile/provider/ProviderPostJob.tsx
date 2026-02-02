import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ChevronLeft, Calendar, Clock, DollarSign, MapPin, FileText,
  Utensils, Heart, Shield, ChefHat, Sparkles, Briefcase, Check
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
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    duration: '',
    payment: '',
    location: '',
    requirements: '',
  });

  const totalSteps = 5;

  const handleSubmit = () => {
    // Save as posted job
    alert('Job posted successfully!');
    navigate('my-jobs');
  };

  const handleSaveDraft = () => {
    alert('Job saved as draft');
    navigate('my-jobs');
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.title && formData.category;
      case 2:
        return formData.date && formData.startTime && formData.endTime;
      case 3:
        return formData.duration && formData.payment;
      case 4:
        return formData.location;
      case 5:
        return true; // Review step
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Job Title *</label>
              <input 
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="e.g., Event Waiter"
                className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-3">Category *</label>
              <div className="grid grid-cols-2 gap-3">
                {JOB_CATEGORIES.map((category) => {
                  const Icon = category.icon;
                  const isSelected = formData.category === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setFormData({...formData, category: category.id})}
                      className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                        isSelected
                          ? 'border-[#3164E6] bg-blue-50 text-[#3164E6]'
                          : 'border-gray-100 bg-white text-gray-600 hover:border-blue-100'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-[#3164E6]' : 'text-gray-400'}`} />
                      <span className="font-medium text-sm">{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Job Description (Optional)</label>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe the job duties and responsibilities..."
                rows={4}
                className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium resize-none"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date *</label>
              <div className="relative">
                <input 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-gray-50 px-4 py-4 pl-12 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                />
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Start Time *</label>
                <div className="relative">
                  <input 
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                    className="w-full bg-gray-50 px-4 py-4 pl-12 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                  />
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">End Time *</label>
                <div className="relative">
                  <input 
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                    className="w-full bg-gray-50 px-4 py-4 pl-12 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                  />
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {formData.startTime && formData.endTime && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Duration:</span> {
                    (() => {
                      const start = new Date(`2000-01-01T${formData.startTime}`);
                      const end = new Date(`2000-01-01T${formData.endTime}`);
                      const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
                      return `${diff} hours`;
                    })()
                  }
                </p>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Duration (hours) *</label>
              <input 
                type="number"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                placeholder="e.g., 6"
                min="1"
                step="0.5"
                className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Total Payment ($) *</label>
              <div className="relative">
                <input 
                  type="number"
                  value={formData.payment}
                  onChange={(e) => setFormData({...formData, payment: e.target.value})}
                  placeholder="e.g., 120"
                  min="0"
                  step="5"
                  className="w-full bg-gray-50 px-4 py-4 pl-12 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                />
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {formData.payment && formData.duration && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Hourly Rate:</span>
                  <span className="font-semibold text-gray-900">
                    ${(parseFloat(formData.payment) / parseFloat(formData.duration)).toFixed(2)}/hr
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Platform Fee (15%):</span>
                  <span className="font-semibold text-gray-900">
                    ${(parseFloat(formData.payment) * 0.15).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-blue-300">
                  <span className="font-semibold text-gray-900">Total Cost:</span>
                  <span className="font-bold text-[#3164E6] text-lg">
                    ${(parseFloat(formData.payment) * 1.15).toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Job Location *</label>
              <div className="relative">
                <input 
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Enter address or location"
                  className="w-full bg-gray-50 px-4 py-4 pl-12 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Mock Map */}
            <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Map will appear here</p>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Special Requirements (Optional)</label>
              <textarea 
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                placeholder="e.g., Must have experience, Uniform required, etc."
                rows={3}
                className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium resize-none"
              />
            </div>
          </div>
        );

      case 5:
        const category = JOB_CATEGORIES.find(c => c.id === formData.category);
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-50 p-4 border-b border-blue-200">
                <h3 className="font-bold text-gray-900 text-lg">{formData.title}</h3>
                <p className="text-sm text-gray-600">{category?.label}</p>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="text-sm text-gray-700">{formData.startTime} - {formData.endTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">{formData.duration} hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Payment</p>
                    <p className="font-semibold text-gray-900">${formData.payment}</p>
                    <p className="text-xs text-gray-500">
                      ${(parseFloat(formData.payment) / parseFloat(formData.duration)).toFixed(2)}/hour
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{formData.location}</p>
                  </div>
                </div>

                {formData.description && (
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Description</p>
                      <p className="text-sm text-gray-700">{formData.description}</p>
                    </div>
                  </div>
                )}

                {formData.requirements && (
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Requirements</p>
                      <p className="text-sm text-gray-700">{formData.requirements}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Worker Payment:</span>
                  <span className="font-semibold text-gray-900">${formData.payment}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Platform Fee (15%):</span>
                  <span className="font-semibold text-gray-900">${(parseFloat(formData.payment) * 0.15).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-300">
                  <span className="font-semibold text-gray-900">Total Cost:</span>
                  <span className="font-bold text-[#3164E6] text-xl">${(parseFloat(formData.payment) * 1.15).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => step === 1 ? navigate('my-jobs') : setStep(step - 1)}
            className="text-gray-600 flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
          <button
            onClick={handleSaveDraft}
            className="text-[#3164E6] font-semibold text-sm"
          >
            Save Draft
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Post a Job</h2>
        
        {/* Progress */}
        <div className="flex items-center gap-2 mt-4">
          {[...Array(totalSteps)].map((_, i) => (
            <div 
              key={i}
              className={`h-1 flex-1 rounded-full transition-all ${
                i < step ? 'bg-[#3164E6]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Step {step} of {totalSteps}: {
            ['Job Details', 'Date & Time', 'Payment', 'Location', 'Review'][step - 1]
          }
        </p>
      </div>

      {/* Form Content */}
      <div className="p-6 pb-32">
        {renderStep()}
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
        <div className="max-w-[430px] mx-auto">
          {step < totalSteps ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={!isStepValid()}
              className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all ${
                isStepValid()
                  ? 'bg-[#3164E6] text-white shadow-blue-200 active:scale-[0.98]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Post Job
            </button>
          )}
        </div>
      </div>
    </div>
  );
}