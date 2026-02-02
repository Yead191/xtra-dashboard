import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, Upload, Save } from 'lucide-react';

interface ProviderBusinessProfileProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

export function ProviderBusinessProfile({ navigate, currentUser }: ProviderBusinessProfileProps) {
  const [formData, setFormData] = useState({
    businessName: currentUser.businessName || '',
    ownerName: currentUser.ownerName || '',
    email: currentUser.email || '',
    phone: currentUser.phone || '',
    address: currentUser.address || '',
    bio: '',
  });

  const handleSave = () => {
    alert('Business profile updated!');
    navigate('profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-32">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Business Profile</h1>
            <p className="text-xs text-gray-500">Edit your business information</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Logo */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Business Logo</label>
          <div className="w-24 h-24 bg-blue-100 rounded-2xl border-2 border-dashed border-blue-300 flex items-center justify-center cursor-pointer">
            <Upload className="w-6 h-6 text-[#3164E6]" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Business Name</label>
          <input 
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({...formData, businessName: e.target.value})}
            className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Owner Name</label>
          <input 
            type="text"
            value={formData.ownerName}
            onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
            className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input 
            type="tel"
            value={formData.phone}
            disabled
            className="w-full bg-gray-100 px-4 py-4 rounded-2xl border border-gray-200 text-gray-500"
          />
          <p className="text-xs text-gray-500 mt-1">Phone number cannot be changed</p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Business Address</label>
          <input 
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">About Business</label>
          <textarea 
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
            rows={4}
            className="w-full bg-gray-50 px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none resize-none"
            placeholder="Tell workers about your business..."
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
        >
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
}