import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Camera, Check } from 'lucide-react';

interface WorkerPersonalInfoProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

export function WorkerPersonalInfo({ navigate, currentUser }: WorkerPersonalInfoProps) {
  const [formData, setFormData] = useState({
    firstName: currentUser.name.split(' ')[0] || '',
    lastName: currentUser.name.split(' ')[1] || '',
    email: currentUser.email || '',
    phone: currentUser.phone || '',
    dateOfBirth: '1995-06-15',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      // In production: API call to update personal info
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('profile');
      }, 1500);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Personal Information</h1>
            <p className="text-xs text-gray-500">Update your account details</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Profile Photo */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Profile Photo</h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                <img src={currentUser.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-[#3164E6] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <button className="w-full bg-blue-50 text-[#3164E6] py-3 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors">
                Change Photo
              </button>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-4">
          <h3 className="text-sm font-bold text-gray-900 mb-2">Basic Information</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="First Name"
              value={formData.firstName}
              onChange={(value) => updateField('firstName', value)}
              icon={User}
              error={errors.firstName}
            />
            <InputField
              label="Last Name"
              value={formData.lastName}
              onChange={(value) => updateField('lastName', value)}
              icon={User}
              error={errors.lastName}
            />
          </div>

          <InputField
            label="Email Address"
            value={formData.email}
            onChange={(value) => updateField('email', value)}
            icon={Mail}
            type="email"
            error={errors.email}
          />

          <InputField
            label="Phone Number"
            value={formData.phone}
            onChange={(value) => updateField('phone', value)}
            icon={Phone}
            type="tel"
            error={errors.phone}
          />

          <InputField
            label="Date of Birth"
            value={formData.dateOfBirth}
            onChange={(value) => updateField('dateOfBirth', value)}
            icon={Calendar}
            type="date"
          />
        </div>

        {/* Address Information */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-4">
          <h3 className="text-sm font-bold text-gray-900 mb-2">Address</h3>
          
          <InputField
            label="Street Address"
            value={formData.address}
            onChange={(value) => updateField('address', value)}
            icon={MapPin}
          />

          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="City"
              value={formData.city}
              onChange={(value) => updateField('city', value)}
            />
            <InputField
              label="State"
              value={formData.state}
              onChange={(value) => updateField('state', value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="ZIP Code"
              value={formData.zipCode}
              onChange={(value) => updateField('zipCode', value)}
            />
            <InputField
              label="Country"
              value={formData.country}
              onChange={(value) => updateField('country', value)}
            />
          </div>
        </div>

        {/* Verification Status */}
        <div className="bg-green-50 border-2 border-green-100 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-green-900 text-sm mb-1">Verified Account</h4>
              <p className="text-sm text-green-800 leading-relaxed">
                Your identity has been verified. Changes to email or phone number will require re-verification.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
          <h4 className="font-bold text-amber-900 text-sm mb-2">Important</h4>
          <ul className="space-y-1 text-sm text-amber-800">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Ensure all information is accurate for payment processing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Changes to legal name may require document verification</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Your phone number is used for job alerts and 2FA security</span>
            </li>
          </ul>
        </div>

        {/* Save Button */}
        <div className="sticky bottom-0 pt-4 pb-2 bg-gray-50">
          <button
            onClick={handleSave}
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
          >
            Save Changes
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Profile Updated!</h3>
              <p className="text-sm text-gray-600 text-center">
                Your personal information has been saved successfully.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: any;
  type?: string;
  error?: string;
}

function InputField({ label, value, onChange, icon: Icon, type = 'text', error }: InputFieldProps) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent text-sm ${
            error ? 'border-red-300 bg-red-50' : 'border-gray-200'
          }`}
        />
      </div>
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
