import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, Bell } from 'lucide-react';

interface ProviderNotificationSettingsProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

export function ProviderNotificationSettings({ navigate, currentUser }: ProviderNotificationSettingsProps) {
  const [settings, setSettings] = useState({
    jobApplications: true,
    workerArrival: true,
    jobCompletion: true,
    payments: true,
    messages: true,
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Notifications</h1>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="bg-white rounded-2xl p-4 flex items-center justify-between">
            <span className="text-gray-900 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={value}
                onChange={() => setSettings({...settings, [key]: !value})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3164E6]"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}