import { useState } from 'react';
import { ClientRoute } from '../ClientApp';
import {
  User,
  MapPin,
  Phone,
  Mail,
  Heart,
  CreditCard,
  Bell,
  Shield,
  CircleHelp,
  FileText,
  LogOut,
  ChevronRight,
  Camera,
  Star,
} from 'lucide-react';

interface ClientProfileProps {
  navigate: (route: ClientRoute, params?: any) => void;
  currentUser: any;
  logout: () => void;
}

export function ClientProfile({ navigate, currentUser, logout }: ClientProfileProps) {
  const [showEditProfile, setShowEditProfile] = useState(false);

  const stats = [
    { label: 'Bookings', value: '12' },
    { label: 'Favorites', value: '8' },
    { label: 'Reviews', value: '5' },
  ];

  const menuItems = [
    {
      icon: User,
      label: 'Edit Profile',
      color: 'text-blue-600',
      onClick: () => setShowEditProfile(true),
    },
    {
      icon: MapPin,
      label: 'Saved Addresses',
      color: 'text-green-600',
      onClick: () => {},
    },
    {
      icon: Heart,
      label: 'Favorite Services',
      color: 'text-red-600',
      onClick: () => {},
    },
    {
      icon: CreditCard,
      label: 'Payment Methods',
      color: 'text-purple-600',
      onClick: () => {},
    },
    {
      icon: Bell,
      label: 'Notifications',
      color: 'text-yellow-600',
      onClick: () => {},
    },
    {
      icon: Shield,
      label: 'Privacy & Security',
      color: 'text-gray-600',
      onClick: () => {},
    },
    {
      icon: CircleHelp,
      label: 'Help & Support',
      color: 'text-blue-600',
      onClick: () => {},
    },
    {
      icon: FileText,
      label: 'Terms & Conditions',
      color: 'text-gray-600',
      onClick: () => {},
    },
  ];

  if (showEditProfile) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setShowEditProfile(false)}
              className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center"
            >
              ←
            </button>
            <h2 className="text-xl">Edit Profile</h2>
          </div>
        </div>

        {/* Edit Form */}
        <div className="px-6 py-6">
          {/* Avatar Upload */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-32 h-32 rounded-full"
              />
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue={currentUser.name}
                className="w-full px-4 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue={currentUser.email}
                className="w-full px-4 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                defaultValue={currentUser.phone}
                className="w-full px-4 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                defaultValue="New York, NY"
                className="w-full px-4 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl mt-6">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 pt-12 pb-8">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 right-0 w-7 h-7 bg-green-500 border-4 border-white rounded-full"></div>
          </div>
          <h2 className="text-white text-2xl mb-1">{currentUser.name}</h2>
          <p className="text-blue-100">{currentUser.email}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-8 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl text-blue-600 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <span className="flex-1 text-left text-gray-900">{item.label}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-6 mt-6">
        <button
          onClick={logout}
          className="w-full bg-red-50 text-red-600 rounded-2xl p-4 flex items-center justify-center gap-3 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Version Info */}
      <div className="px-6 mt-6 text-center">
        <p className="text-gray-400 text-sm">Version 1.0.0</p>
      </div>
    </div>
  );
}