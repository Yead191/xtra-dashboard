import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { 
  CheckCircle, Clock, Utensils, Heart, Shield, ChefHat, Sparkles,
  ArrowRight, Smartphone, User, Briefcase, Mail, Lock, Eye, EyeOff
} from 'lucide-react';

interface WorkerAuthProps {
  navigate: (route: WorkerRoute) => void;
  login: (user: any) => void;
}

const JOB_CATEGORIES = [
  { id: 'waiter', label: 'Waiter', icon: Utensils },
  { id: 'nurse', label: 'Nurse', icon: Heart },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'cook', label: 'Cook', icon: ChefHat },
  { id: 'cleaner', label: 'Cleaner', icon: Sparkles },
];

export function WorkerAuth({ navigate, login }: WorkerAuthProps) {
  const [step, setStep] = useState<'welcome' | 'role-selection' | 'login' | 'register-phone' | 'otp' | 'register-details' | 'categories' | 'pending'>('welcome');
  const [role, setRole] = useState<'worker' | 'provider' | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    otp: '',
    categories: [] as string[],
  });

  // Simplified flow:
  // 1. Welcome Screen -> Login or Sign Up
  // 2. Sign Up -> Role Selection
  // 3. Role Selection (Worker) -> Phone Input
  // 4. Phone Input -> OTP
  // 5. OTP -> Name/Details
  // 6. Name -> Categories
  // 7. Categories -> Pending/Home

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate OTP step for login too
    setStep('otp');
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    // If we came from registration flow (new user signing up)
    if (role === 'worker') {
        setStep('register-details');
        return;
    }

    // Mock login success for existing users
    login({
      id: '1',
      name: formData.firstName + ' ' + formData.lastName || 'John Student',
      email: formData.email || 'student@example.com',
      phone: formData.phone,
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
      verified: true,
      approvalStatus: 'approved',
      rating: 4.8,
      jobsCompleted: 12,
      onTimeRate: 98,
      walletBalance: 120.50,
      penalties: 0,
      categories: ['waiter', 'cleaner'],
    });
  };

  const handleCategorySelect = (categoryId: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-white flex flex-col p-6 pt-20">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
           <div className="w-24 h-24 bg-[#3164E6]/10 rounded-3xl flex items-center justify-center mb-8 rotate-3">
            <Briefcase className="w-10 h-10 text-[#3164E6]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">XTRAA</h1>
          <p className="text-gray-500 text-lg max-w-xs">
            The easiest way for students to find part-time work and earn extra cash.
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
              setRole('worker');
              setStep('register-phone');
            }}
            className="w-full bg-white p-6 rounded-3xl shadow-sm border-2 border-transparent hover:border-[#3164E6] transition-all text-left group"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <User className="w-6 h-6 text-[#3164E6]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">I want to find work</h3>
            <p className="text-gray-500 text-sm">For students and freelancers looking for part-time jobs.</p>
          </button>

          <button
            onClick={() => {
              // In a real app, this would redirect to Client App
              alert("Please download the XTRAA Client App to post jobs.");
            }}
            className="w-full bg-white p-6 rounded-3xl shadow-sm border-2 border-transparent hover:border-[#3164E6] transition-all text-left group"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">I want to give work</h3>
            <p className="text-gray-500 text-sm">For businesses and individuals looking to hire help.</p>
          </button>
        </div>
      </div>
    );
  }

  if (step === 'login' || step === 'register-phone') {
    return (
      <div className="min-h-screen bg-white p-6 pt-12">
        <button onClick={() => setStep('welcome')} className="text-gray-400 mb-8">← Back</button>
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

  if (step === 'register-details') {
    return (
      <div className="min-h-screen bg-white p-6 pt-12">
        <button onClick={() => setStep('otp')} className="text-gray-400 mb-8">← Back</button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Enter Details</h1>
        <p className="text-gray-500 mb-8">
          Please provide your personal information.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); setStep('categories'); }} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">First Name</label>
            <input 
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              placeholder="John"
              className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input 
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              placeholder="Doe"
              className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john.doe@example.com"
              className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="••••••••"
                className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none font-medium"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200"
          >
            Continue
          </button>
        </form>
      </div>
    );
  }

  if (step === 'categories') {
    return (
      <div className="min-h-screen bg-white flex flex-col p-6 pt-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Skills</h1>
        <p className="text-gray-500 mb-8">What kind of work are you interested in?</p>

        <div className="flex-1 overflow-y-auto -mx-2 px-2 pb-4">
          <div className="grid grid-cols-2 gap-4">
            {JOB_CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isSelected = formData.categories.includes(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-3 aspect-square ${
                    isSelected
                      ? 'border-[#3164E6] bg-blue-50 text-[#3164E6]'
                      : 'border-gray-100 bg-white text-gray-600 hover:border-blue-100'
                  }`}
                >
                  <Icon className={`w-8 h-8 ${isSelected ? 'text-[#3164E6]' : 'text-gray-400'}`} />
                  <span className="font-medium text-sm">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleOtpVerify} // Finish flow
          className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200"
        >
          Finish Setup
        </button>
      </div>
    );
  }

  return null;
}