import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, Briefcase } from 'lucide-react';

interface ProviderAboutUsProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

export function ProviderAboutUs({ navigate, currentUser }: ProviderAboutUsProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">About XTRAA</h1>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-white rounded-2xl p-6 text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-[#3164E6]" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">XTRAA Business</h2>
          <p className="text-gray-600">Version 1.0.0</p>
        </div>
        <div className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>XTRAA connects businesses with talented students and freelancers for part-time work.</p>
          <p>Our mission is to make hiring flexible workers simple, fast, and reliable.</p>
        </div>
      </div>
    </div>
  );
}