import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Shield, Camera, Users, Heart, RefreshCw, 
  CheckCircle, Bell, Eye, X, ChevronRight, Sparkles
} from 'lucide-react';

interface ProviderFeatureGuideProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

const features = [
  {
    id: 1,
    icon: Shield,
    title: 'Check-In/Check-Out Approval',
    description: 'Review and approve worker check-ins with photo, GPS, and time verification to prevent fraud',
    color: 'from-red-500 to-orange-500',
    benefits: ['Photo verification', 'GPS location tracking', 'Timestamp validation', 'Fraud prevention'],
    location: 'Home → Requires Your Attention',
  },
  {
    id: 2,
    icon: Heart,
    title: 'Quick Hire Favorites',
    description: 'Save your trusted workers as favorites and rehire them instantly with one tap',
    color: 'from-pink-500 to-red-500',
    benefits: ['One-tap rebooking', 'Pre-filled job details', 'Worker history', 'Reliability scores'],
    location: 'Home → Quick Hire',
  },
  {
    id: 3,
    icon: RefreshCw,
    title: 'Rebook Workers',
    description: 'Instantly rebook past workers with pre-filled job details. Just pick a new date and time',
    color: 'from-[#3164E6] to-blue-700',
    benefits: ['Smart defaults', 'Saved time', 'Consistent team', 'Job history tracking'],
    location: 'My Workers → Hire Again',
  },
  {
    id: 4,
    icon: Users,
    title: 'My Workers Network',
    description: 'Build and manage your trusted worker network with detailed stats and performance metrics',
    color: 'from-purple-500 to-indigo-500',
    benefits: ['Worker profiles', 'Performance stats', 'Search & filter', 'Favorites management'],
    location: 'Quick Links → My Workers',
  },
  {
    id: 5,
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Organized notification center with filters for urgent actions, applications, and approvals',
    color: 'from-blue-500 to-cyan-500',
    benefits: ['Priority sorting', 'Category filters', 'Quick actions', 'Unread tracking'],
    location: 'Home → Bell Icon',
  },
  {
    id: 6,
    icon: Eye,
    title: 'View Job Applicants',
    description: 'Review all applicants for your posted jobs with ratings, experience, and worker profiles',
    color: 'from-green-500 to-emerald-500',
    benefits: ['Applicant sorting', 'Profile reviews', 'Quick selection', 'Rating comparison'],
    location: 'My Jobs → Posted Jobs → View Applicants',
  },
];

export function ProviderFeatureGuide({ navigate, currentUser }: ProviderFeatureGuideProps) {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 px-6 pt-12 pb-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate('home')}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <h1 className="text-2xl font-bold">New Features</h1>
            </div>
            <p className="text-blue-100 text-sm">Discover what's new in Xtra</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Welcome Card */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6 text-[#3164E6]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Welcome to the new Xtra!</h3>
              <p className="text-sm text-gray-700 mb-3">
                We've added powerful new features to help you manage your workforce more efficiently and securely.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#3164E6] font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>{features.length} New Features Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isExpanded = selectedFeature === feature.id;

            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedFeature(isExpanded ? null : feature.id)}
                  className="w-full p-4 text-left active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`} />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 space-y-3 animate-slide-down">
                    {/* Benefits */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Key Benefits:</p>
                      <div className="space-y-1.5">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Where to find it:</p>
                      <div className="flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5 text-[#3164E6] flex-shrink-0" />
                        <span className="text-xs text-gray-700">{feature.location}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('home')}
          className="w-full bg-gradient-to-r from-[#3164E6] to-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          Got It! Take Me to Home
        </button>

        <p className="text-center text-xs text-gray-500">
          You can always access this guide from Profile → Help & Support
        </p>
      </div>
    </div>
  );
}
