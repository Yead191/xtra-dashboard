import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { User, Globe, MapPin, Award, LogOut, ChevronRight, Star, AlertTriangle, ShieldCheck, Bell, Lock, Briefcase, FileText, Shield, HelpCircle, Info, LifeBuoy, MessageSquare } from 'lucide-react';

interface WorkerProfileProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
  logout: () => void;
}

export function WorkerProfile({ navigate, currentUser, logout }: WorkerProfileProps) {
  const [language, setLanguage] = useState('English');
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans pb-24">
      {/* Header Profile */}
      <div className="bg-white pt-12 pb-8 px-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <button 
            onClick={() => navigate('edit-profile')}
            className="px-4 py-2 bg-[#3164E6] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors active:scale-95"
          >
            Edit Profile
          </button>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
               <img src={currentUser.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
            {currentUser.verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{currentUser.name}</h2>
            <p className="text-gray-500 text-sm mb-1">{currentUser.phone}</p>
            <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-0.5 rounded-md inline-flex">
               <Star className="w-3 h-3 fill-yellow-500" />
               <span className="text-xs font-bold">{currentUser.rating} Rating</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <p className="text-xl font-bold text-[#3164E6]">{currentUser.jobsCompleted}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Jobs Done</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <p className="text-xl font-bold text-green-600">{currentUser.onTimeRate}%</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">On Time</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <p className="text-xl font-bold text-orange-500">{currentUser.penalties}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Penalties</p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="flex-1 px-6 py-6 space-y-6">
        
        {currentUser.penalties > 0 && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <h4 className="font-bold text-red-700 text-sm">Warning: High Cancellation Rate</h4>
              <p className="text-xs text-red-600 mt-1">
                You have cancelled 2 jobs recently. Further cancellations may lead to account suspension.
              </p>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Account Settings</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <button 
               onClick={() => navigate('personal-info')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-blue-50 text-[#3164E6] rounded-lg flex items-center justify-center">
                   <User className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Personal Information</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>
             
             <button 
               onClick={() => navigate('notification-settings')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                   <Bell className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Notifications</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>

             <button 
               onClick={() => navigate('change-password')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                   <Lock className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Change Password</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>

             <button 
               onClick={() => navigate('change-preferences')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center">
                   <Briefcase className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Job Preferences</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-gray-500 text-xs">{currentUser.categories.length} selected</span>
                 <ChevronRight className="w-4 h-4 text-gray-400" />
               </div>
             </button>
             
             <button 
               onClick={() => navigate('language-settings')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                   <Globe className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Language</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-gray-500 text-sm">{language}</span>
                 <ChevronRight className="w-4 h-4 text-gray-400" />
               </div>
             </button>
             
             <button 
               onClick={() => navigate('location-settings')}
               className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                   <MapPin className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Location</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-gray-500 text-sm">New York, USA</span>
                 <ChevronRight className="w-4 h-4 text-gray-400" />
               </div>
             </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Legal & Information</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <button 
               onClick={() => navigate('terms-conditions')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-slate-50 text-slate-600 rounded-lg flex items-center justify-center">
                   <FileText className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Terms & Conditions</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>

             <button 
               onClick={() => navigate('privacy-policy')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center">
                   <Shield className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Privacy Policy</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>

             <button 
               onClick={() => navigate('about-us')}
               className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
                   <Info className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">About Us</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Support</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <button 
               onClick={() => navigate('faq')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                   <HelpCircle className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">FAQ</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>

             <button 
               onClick={() => navigate('help-support')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-violet-50 text-violet-600 rounded-lg flex items-center justify-center">
                   <LifeBuoy className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Help & Support</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>

             <button 
               onClick={() => navigate('contact-support')}
               className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-blue-50 text-[#3164E6] rounded-lg flex items-center justify-center">
                   <MessageSquare className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Contact Support</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>

             <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                   <Award className="w-4 h-4" />
                 </div>
                 <span className="text-gray-900 font-medium">Get Verified</span>
               </div>
               <ChevronRight className="w-4 h-4 text-gray-400" />
             </button>
          </div>
        </div>

        <button 
          onClick={logout}
          className="w-full bg-red-50 text-red-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </div>
  );
}