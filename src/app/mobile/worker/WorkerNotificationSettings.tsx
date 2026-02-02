import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Bell } from 'lucide-react';

interface WorkerNotificationSettingsProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

export function WorkerNotificationSettings({ navigate, currentUser }: WorkerNotificationSettingsProps) {
  const [settings, setSettings] = useState({
    jobAlerts: true,
    jobReminders: true,
    shiftReminders: true,
    messageNotifications: true,
    paymentNotifications: true,
    promotions: false,
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Notification Settings</h1>
            <p className="text-xs text-gray-500">Manage your alerts and preferences</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Job Notifications */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Job Notifications</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <ToggleItem
              label="New Job Alerts"
              description="Get notified when new jobs matching your preferences are posted"
              isEnabled={settings.jobAlerts}
              onToggle={() => toggleSetting('jobAlerts')}
            />
            <ToggleItem
              label="Application Updates"
              description="Receive updates about your job applications"
              isEnabled={settings.jobReminders}
              onToggle={() => toggleSetting('jobReminders')}
              showBorder
            />
            <ToggleItem
              label="Shift Reminders"
              description="Get reminded 30 minutes before your shift starts"
              isEnabled={settings.shiftReminders}
              onToggle={() => toggleSetting('shiftReminders')}
              showBorder
            />
          </div>
        </div>

        {/* Communication */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Communication</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <ToggleItem
              label="Messages"
              description="New messages from clients or support"
              isEnabled={settings.messageNotifications}
              onToggle={() => toggleSetting('messageNotifications')}
            />
            <ToggleItem
              label="Payment Alerts"
              description="Notifications when you receive payments"
              isEnabled={settings.paymentNotifications}
              onToggle={() => toggleSetting('paymentNotifications')}
              showBorder
            />
          </div>
        </div>

        {/* Marketing */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Marketing</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <ToggleItem
              label="Promotions & Offers"
              description="Receive special offers and promotional content"
              isEnabled={settings.promotions}
              onToggle={() => toggleSetting('promotions')}
            />
          </div>
        </div>

        {/* Delivery Channels */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Delivery Channels</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <ToggleItem
              label="Push Notifications"
              description="Receive notifications in-app"
              isEnabled={settings.pushNotifications}
              onToggle={() => toggleSetting('pushNotifications')}
            />
            <ToggleItem
              label="Email"
              description="Receive notifications via email"
              isEnabled={settings.emailNotifications}
              onToggle={() => toggleSetting('emailNotifications')}
              showBorder
            />
            <ToggleItem
              label="SMS"
              description="Receive text message notifications"
              isEnabled={settings.smsNotifications}
              onToggle={() => toggleSetting('smsNotifications')}
              showBorder
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-blue-900 text-sm mb-1">Stay Updated</h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                We recommend keeping job alerts and shift reminders enabled to never miss opportunities and stay on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ToggleItemProps {
  label: string;
  description: string;
  isEnabled: boolean;
  onToggle: () => void;
  showBorder?: boolean;
}

function ToggleItem({ label, description, isEnabled, onToggle, showBorder }: ToggleItemProps) {
  return (
    <div className={`p-4 ${showBorder ? 'border-t border-gray-50' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-sm mb-1">{label}</h4>
          <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
        </div>
        <button
          onClick={onToggle}
          className={`relative w-12 h-7 rounded-full transition-all duration-300 ${
            isEnabled ? 'bg-[#3164E6]' : 'bg-gray-200'
          }`}
        >
          <div
            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 ${
              isEnabled ? 'right-1' : 'left-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
