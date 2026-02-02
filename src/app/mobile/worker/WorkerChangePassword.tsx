import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Lock, Eye, EyeOff, Check } from 'lucide-react';

interface WorkerChangePasswordProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

export function WorkerChangePassword({ navigate, currentUser }: WorkerChangePasswordProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordRequirements = [
    { label: 'At least 8 characters', met: newPassword.length >= 8 },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(newPassword) },
    { label: 'Contains lowercase letter', met: /[a-z]/.test(newPassword) },
    { label: 'Contains number', met: /[0-9]/.test(newPassword) },
    { label: 'Contains special character', met: /[!@#$%^&*]/.test(newPassword) },
  ];

  const allRequirementsMet = passwordRequirements.every(req => req.met);
  const passwordsMatch = newPassword === confirmPassword && newPassword !== '';
  const canSubmit = currentPassword !== '' && allRequirementsMet && passwordsMatch;

  const handleSubmit = () => {
    if (canSubmit) {
      alert('Password changed successfully!');
      navigate('profile');
    }
  };

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
            <h1 className="text-lg font-bold text-gray-900">Change Password</h1>
            <p className="text-xs text-gray-500">Update your account password</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Current Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showCurrent ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent"
            />
            <button
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showCurrent ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">New Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showNew ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent"
            />
            <button
              onClick={() => setShowNew(!showNew)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showNew ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Password Requirements */}
        {newPassword && (
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Password Requirements</h4>
            <div className="space-y-2">
              {passwordRequirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    req.met ? 'bg-green-500' : 'bg-gray-200'
                  }`}>
                    {req.met && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-sm ${req.met ? 'text-green-700' : 'text-gray-500'}`}>
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Confirm New Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent ${
                confirmPassword && !passwordsMatch ? 'border-red-300 bg-red-50' : 'border-gray-200'
              }`}
            />
            <button
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {confirmPassword && !passwordsMatch && (
            <p className="text-red-600 text-xs mt-2">Passwords do not match</p>
          )}
          {passwordsMatch && (
            <p className="text-green-600 text-xs mt-2 flex items-center gap-1">
              <Check className="w-3 h-3" /> Passwords match
            </p>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
          <h4 className="font-bold text-amber-900 text-sm mb-2">Security Tips</h4>
          <ul className="space-y-1 text-sm text-amber-800">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Never share your password with anyone</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Use a unique password for this account</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Change your password regularly for better security</span>
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={`w-full py-4 rounded-2xl font-bold text-white transition-all ${
            canSubmit
              ? 'bg-[#3164E6] hover:bg-blue-700 shadow-lg shadow-blue-200'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Update Password
        </button>
      </div>
    </div>
  );
}
