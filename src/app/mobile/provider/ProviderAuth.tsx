import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  Briefcase, Store, Coffee, ShoppingBag, Utensils, Home, 
  Eye, EyeOff, Clock, CheckCircle, AlertCircle, Upload, MapPin
} from 'lucide-react';

interface ProviderAuthProps {
  navigate: (route: ProviderRoute) => void;
  login: (user: any) => void;
}

const BUSINESS_TYPES = [
  { id: 'restaurant', label: 'Restaurant', icon: Utensils },
  { id: 'cafe', label: 'Café', icon: Coffee },
  { id: 'retail', label: 'Retail Store', icon: ShoppingBag },
  { id: 'hotel', label: 'Hotel', icon: Home },
  { id: 'event', label: 'Event Venue', icon: Store },
  { id: 'other', label: 'Other', icon: Briefcase },
];

export function ProviderAuth({ navigate, login }: ProviderAuthProps) {
  const [step, setStep] = useState<'welcome' | 'role-selection' | 'login' | 'register-phone' | 'otp' | 'business-profile' | 'pending'>('welcome');
  const [role, setRole] = useState<'worker' | 'provider' | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    ownerName: '',
    email: '',
    password: '',
    phone: '',
    otp: '',
    address: '',
    bio: '',
  });

  // Provider Flow:
  // 1. Welcome -> Login or Sign Up
  // 2. Sign Up -> Role Selection
  // 3. Role Selection (Provider) -> Phone Input
  // 4. Phone Input -> OTP
  // 5. OTP -> Business Profile Setup
  // 6. Business Profile -> Admin Approval Pending
  // 7. Admin Approves -> Home

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    // If we came from registration flow (new provider signing up)
    if (role === 'provider') {
      setStep('business-profile');
      return;
    }

    // Mock login success for existing users (approved)
    login({
      id: '1',
      businessName: 'The Coffee House',
      businessType: 'cafe',
      ownerName: 'Sarah Johnson',
      email: 'sarah@coffeehouse.com',
      phone: formData.phone,
      logo: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=100&h=100&fit=crop',
      verified: true,
      approvalStatus: 'approved',
      rating: 4.7,
      jobsPosted: 24,
      totalSpent: 2450.00,
      address: '123 Main St, Downtown',
    });
  };

  const handleBusinessProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to admin for approval
    setStep('pending');
  };

  const handleApprovalCheck = () => {
    // Simulate admin approval (in real app, this would be a status check)
    login({
      id: '1',
      businessName: formData.businessName,
      businessType: formData.businessType,
      ownerName: formData.ownerName,
      email: formData.email,
      phone: formData.phone,
      logo: null,
      verified: true,
      approvalStatus: 'approved',
      rating: 0,
      jobsPosted: 0,
      totalSpent: 0,
      address: formData.address,
    });
  };

  const handleBusinessTypeSelect = (typeId: string) => {
    setFormData(prev => ({ ...prev, businessType: typeId }));
  };

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-white flex flex-col p-6 pt-20">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center mb-8 rotate-3">
            <Briefcase className="w-10 h-10 text-[#3164E6]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">XTRAA Business</h1>
          <p className="text-gray-500 text-lg max-w-xs">
            Post jobs and hire talented students for part-time work.
          </p>
        </div>
        
        <div className="space-y-4 mb-8">
          <button
            onClick={() => setStep('login')}
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform"
          >
            Log In
          </button>
          <button
            onClick={() => setStep('role-selection')}
            className="w-full bg-white text-[#3164E6] border-2 border-[#3164E6]/20 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 active:scale-[0.98] transition-all"
          >
            Create Account
          </button>
        </div>
      </div>
    );
  }

  if (step === 'role-selection') {
    return (
      <div className="min-h-screen bg-gray-50 p-6 pt-12">
        <button onClick={() => setStep('welcome')} className="text-gray-400 mb-8">← Back</button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose your role</h1>
        <p className="text-gray-500 mb-8">How do you want to use XTRAA?</p>

        <div className="space-y-4">
          <button
            onClick={() => {
              alert("Please download the XTRAA Worker App to find jobs.");
            }}
            className="w-full bg-white p-6 rounded-3xl shadow-sm border-2 border-transparent hover:border-[#3164E6] transition-all text-left group"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6 text-[#3164E6]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">I want to find work</h3>
            <p className="text-gray-500 text-sm">For students and freelancers looking for part-time jobs.</p>
          </button>

          <button
            onClick={() => {
              setRole('provider');
              setStep('register-phone');
            }}
            className="w-full bg-white p-6 rounded-3xl shadow-sm border-2 border-transparent hover:border-[#3164E6] transition-all text-left group"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Store className="w-6 h-6 text-[#3164E6]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">I want to hire workers</h3>
            <p className="text-gray-500 text-sm">For businesses looking to post jobs and hire help.</p>
          </button>
        </div>
      </div>
    );
  }

  if (step === 'login' || step === 'register-phone') {
    return (
      <div className="min-h-screen bg-white p-6 pt-12">
        <button onClick={() => setStep(step === 'login' ? 'welcome' : 'role-selection')} className="text-gray-400 mb-8">← Back</button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {step === 'login' ? 'Welcome Back' : 'Enter Phone Number'}
        </h1>
        <p className="text-gray-500 mb-8">
          We'll send a verification code to this number.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); setStep('otp'); }} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <div className="flex gap-3">
              <div className="w-24 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-900 font-medium">
                🇺🇸 +1
              </div>
              <input 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="(555) 000-0000"
                className="flex-1 bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 mt-auto"
          >
            Continue
          </button>
        </form>
      </div>
    );
  }

  if (step === 'otp') {
    return (
      <div className="min-h-screen bg-white p-6 pt-12">
        <button onClick={() => setStep('register-phone')} className="text-gray-400 mb-8">← Back</button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Verification</h1>
        <p className="text-gray-500 mb-8">
          Enter the 6-digit code sent to your phone.
        </p>

        <form onSubmit={handleOtpVerify} className="space-y-8">
          <div className="flex justify-between gap-2">
            {[1,2,3,4,5,6].map((_, i) => (
              <div key={i} className="w-12 h-14 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center text-xl font-bold text-gray-900">
                {formData.otp[i] || ''}
              </div>
            ))}
          </div>
          
          {/* Hidden input for real typing */}
          <input 
            type="text"
            className="absolute opacity-0 inset-0 h-64"
            maxLength={6}
            value={formData.otp}
            onChange={(e) => setFormData({...formData, otp: e.target.value})}
            autoFocus
          />

          <div className="text-center">
            <button type="button" className="text-[#3164E6] font-semibold text-sm">Resend Code</button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200"
          >
            Verify
          </button>
        </form>
      </div>
    );
  }

  if (step === 'business-profile') {
    return (
      <div className="min-h-screen bg-white p-6 pt-12 pb-32 overflow-y-auto">
        <button onClick={() => setStep('otp')} className="text-gray-400 mb-8">← Back</button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Profile</h1>
        <p className="text-gray-500 mb-8">
          Tell us about your business. This will be reviewed by our team.
        </p>

        <form onSubmit={handleBusinessProfileSubmit} className="space-y-6">
          {/* Business Logo */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Business Logo (Optional)</label>
            <div className="w-24 h-24 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-[#3164E6] transition-colors">
              <Upload className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Business Name *</label>
            <input 
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              placeholder="The Coffee House"
              className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              required
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-3">Business Type *</label>
            <div className="grid grid-cols-2 gap-3">
              {BUSINESS_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = formData.businessType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleBusinessTypeSelect(type.id)}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                      isSelected
                        ? 'border-[#3164E6] bg-blue-50 text-[#3164E6]'
                        : 'border-gray-100 bg-white text-gray-600 hover:border-blue-100'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-[#3164E6]' : 'text-gray-400'}`} />
                    <span className="font-medium text-sm">{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Owner Name *</label>
            <input 
              type="text"
              value={formData.ownerName}
              onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
              placeholder="Sarah Johnson"
              className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email *</label>
            <input 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="sarah@coffeehouse.com"
              className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              required
            />
          </div>

          {/* Business Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Business Address *</label>
            <div className="relative">
              <input 
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="123 Main St, Downtown"
                className="w-full bg-gray-50 px-4 py-4 pl-12 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                required
              />
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">About Business (Optional)</label>
            <textarea 
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              placeholder="Tell workers about your business..."
              rows={4}
              className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200"
          >
            Submit for Review
          </button>
        </form>
      </div>
    );
  }

  if (step === 'pending') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
          <Clock className="w-10 h-10 text-amber-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Application Under Review</h1>
        <p className="text-gray-500 mb-2 max-w-sm">
          We're reviewing your business profile. This typically takes 24-48 hours.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Submitted on: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Status Timeline */}
        <div className="w-full max-w-sm mb-12">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Application Submitted</p>
                <p className="text-sm text-gray-500">Your details have been received</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 ml-4">
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Under Review</p>
                <p className="text-sm text-gray-500">Our team is verifying your business</p>
              </div>
            </div>

            <div className="flex items-start gap-3 ml-4">
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>

            <div className="flex items-start gap-3 opacity-40">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Approved</p>
                <p className="text-sm text-gray-500">You can start posting jobs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 w-full max-w-sm">
          <button
            onClick={handleApprovalCheck}
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200"
          >
            Check Status (Demo: Approve Now)
          </button>
          <button
            onClick={() => navigate('help-support')}
            className="w-full text-[#3164E6] font-semibold"
          >
            Contact Support
          </button>
          <button
            onClick={() => setStep('welcome')}
            className="w-full text-gray-500 font-medium text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return null;
}