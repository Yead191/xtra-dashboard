import { ProviderRoute } from '../ProviderApp';
import { 
  User, MapPin, CreditCard, Bell, Globe, LogOut, 
  ChevronRight, Settings, Building, FileText, Shield, HelpCircle,
  Info, Mail, Sparkles, Star, Store, LifeBuoy, MessageSquare
} from 'lucide-react';

interface ProviderProfileProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
  logout: () => void;
}

export function ProviderProfile({ navigate, currentUser, logout }: ProviderProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans pb-24">
      {/* Header Profile */}
      <div className="bg-white pt-12 pb-8 px-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-2xl overflow-hidden flex items-center justify-center">
            {currentUser.logo ? (
              <img src={currentUser.logo} alt="Business Logo" className="w-full h-full object-cover" />
            ) : (
              <Store className="w-10 h-10 text-[#3164E6]" />
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{currentUser.businessName}</h2>
            <p className="text-gray-500 text-sm mb-1">{currentUser.ownerName}</p>
            <button onClick={() => navigate('reviews')} className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-0.5 rounded-md inline-flex active:scale-95 transition-transform">
              <Star className="w-3 h-3 fill-yellow-500" />
              <span className="text-xs font-bold">{currentUser.rating?.toFixed(1) || '0.0'} Rating</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <p className="text-xl font-bold text-[#3164E6]">{currentUser.jobsPosted || 0}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Jobs Posted</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <p className="text-xl font-bold text-green-600">${currentUser.totalSpent?.toFixed(0) || 0}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Total Spent</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center" onClick={() => navigate('reviews')}>
            <p className="text-xl font-bold text-blue-600">{currentUser.rating?.toFixed(1) || 0}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Rating</p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="flex-1 px-6 py-6 space-y-6">
        
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Business Settings</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button 
              onClick={() => navigate('business-profile')}
              className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-50 text-[#3164E6] rounded-lg flex items-center justify-center">
                  <Store className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">Business Profile</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            
            <button 
              onClick={() => navigate('payment-methods')}
              className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">Payment Methods</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            
            <button 
              onClick={() => navigate('notification-settings')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">Notifications</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Preferences</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
                <span className="text-gray-500 text-sm">English</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </button>
            
            <button 
              onClick={() => navigate('location-settings')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">Location</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Legal & Support</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button 
              onClick={() => navigate('feature-guide')}
              className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors bg-blue-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#3164E6] text-white rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-gray-900 font-bold block">New Features Guide</span>
                  <span className="text-xs text-gray-600">Discover what's new!</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#3164E6]" />
            </button>

            <button 
              onClick={() => navigate('terms-conditions')}
              className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
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
                <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">Privacy Policy</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            
            <button 
              onClick={() => navigate('faq')}
              className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">FAQ</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            
            <button 
              onClick={() => navigate('about-us')}
              className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
                  <Info className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">About Us</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            
            <button 
              onClick={() => navigate('help-support')}
              className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
                  <LifeBuoy className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">Help & Support</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>

            <button 
              onClick={() => navigate('contact-support')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-50 text-[#3164E6] rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-gray-900 font-medium">Contact Support</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button 
          onClick={logout}
          className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 border-2 border-red-100 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>

        <p className="text-center text-gray-400 text-xs mt-4">
          XTRAA Business v1.0.0
        </p>
      </div>
    </div>
  );
}