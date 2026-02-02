import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft } from 'lucide-react';

interface ProviderPrivacyPolicyProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

export function ProviderPrivacyPolicy({ navigate, currentUser }: ProviderPrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Privacy Policy</h1>
        </div>
      </div>
      <div className="p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
        <p>Last updated: January 2026</p>
        <h3 className="font-bold text-gray-900">1. Information We Collect</h3>
        <p>We collect information you provide directly to us...</p>
        <h3 className="font-bold text-gray-900">2. How We Use Your Information</h3>
        <p>We use the information we collect to provide and improve our services...</p>
      </div>
    </div>
  );
}
