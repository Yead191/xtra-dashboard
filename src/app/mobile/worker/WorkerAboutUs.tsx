import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Info, Target, Users, Heart, Award, Globe } from 'lucide-react';

interface WorkerAboutUsProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

export function WorkerAboutUs({ navigate, currentUser }: WorkerAboutUsProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">About Xtra</h1>
            <p className="text-xs text-gray-500">Connecting talent with opportunity</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-6 text-white">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
            <Info className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Empowering the Future of Work</h2>
          <p className="text-blue-100 leading-relaxed">
            Xtra is more than just a freelance marketplace—we're building a community where students and part-time workers can find meaningful opportunities while businesses access qualified, flexible talent.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-[#3164E6]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To create a seamless connection between talented individuals seeking flexible work and businesses needing reliable part-time help. We believe everyone deserves access to quality job opportunities that fit their lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Our Values</h3>
          <div className="space-y-3">
            <ValueCard
              icon={Users}
              title="Community First"
              description="We prioritize the needs and success of our workers and clients, building a supportive ecosystem."
              color="bg-purple-50 text-purple-600"
            />
            <ValueCard
              icon={Heart}
              title="Trust & Safety"
              description="Every interaction is protected by our verification system, insurance coverage, and dedicated support team."
              color="bg-red-50 text-red-600"
            />
            <ValueCard
              icon={Award}
              title="Quality & Excellence"
              description="We maintain high standards through ratings, reviews, and continuous improvement of our platform."
              color="bg-amber-50 text-amber-600"
            />
            <ValueCard
              icon={Globe}
              title="Accessibility"
              description="Making flexible work opportunities accessible to everyone, regardless of background or location."
              color="bg-green-50 text-green-600"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Xtra by the Numbers</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#3164E6] mb-1">50K+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Active Workers</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#3164E6] mb-1">5K+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Businesses</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#3164E6] mb-1">200K+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Jobs Completed</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#3164E6] mb-1">4.8</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Avg Rating</p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Our Story</h3>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Xtra was founded in 2024 by a group of former students who experienced firsthand the challenges of finding flexible, part-time work while pursuing their education and other commitments.
            </p>
            <p>
              We noticed that traditional job platforms weren't designed for the needs of students and part-time workers. Businesses also struggled to find reliable, vetted talent for short-term positions.
            </p>
            <p>
              Today, Xtra has grown into a thriving community serving thousands of workers and businesses across the country. We continue to innovate and improve our platform to better serve our community.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Join Our Growing Community</h3>
          <p className="text-sm text-gray-600 mb-4">
            Whether you're looking for flexible work or need reliable talent, Xtra is here to help you succeed.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('help-support')}
              className="flex-1 bg-white text-gray-700 py-3 rounded-xl font-bold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('faq')}
              className="flex-1 bg-[#3164E6] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          <p className="mb-1">Xtra - Freelance Marketplace</p>
          <p>Version 1.0.0 • © 2026 Xtra Inc.</p>
        </div>
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: any;
  title: string;
  description: string;
  color: string;
}

function ValueCard({ icon: Icon, title, description, color }: ValueCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
