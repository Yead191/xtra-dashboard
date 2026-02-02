import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, MapPin } from 'lucide-react';

interface ProviderLocationSettingsProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

export function ProviderLocationSettings({ navigate, currentUser }: ProviderLocationSettingsProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Location Settings</h1>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-white rounded-2xl p-6 text-center">
          <MapPin className="w-12 h-12 text-[#3164E6] mx-auto mb-4" />
          <p className="text-gray-600">Location settings coming soon</p>
        </div>
      </div>
    </div>
  );
}