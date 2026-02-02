import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Clock, MapPin, CheckCircle, XCircle, 
  Camera, Navigation, AlertTriangle, User, Calendar,
  MapPinned, Smartphone, Shield, Eye
} from 'lucide-react';

interface ProviderCheckInApprovalProps {
  navigate: (route: ProviderRoute, jobId?: string) => void;
  currentUser: any;
  checkInId?: string;
}

// Mock check-in data
const checkInData = {
  id: 'CI001',
  jobId: 'J001',
  jobTitle: 'Event Waiter',
  worker: {
    id: 'W001',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 4.9,
    jobsCompleted: 8,
  },
  type: 'check-in', // or 'check-out'
  requestedTime: '2:03 PM',
  scheduledTime: '2:00 PM',
  timeDifference: '+3 min',
  location: {
    name: 'Downtown Event Center',
    address: '123 Main St, Downtown',
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
  workerLocation: {
    coordinates: { lat: 40.7129, lng: -74.0061 },
    distance: '15 meters from job site',
    accuracy: 'High (±5m)',
  },
  photo: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=600',
  deviceInfo: {
    deviceId: 'iPhone 12',
    ipAddress: '192.168.1.x',
    timestamp: 'Jan 9, 2026 2:03:45 PM',
  },
  previousCheckIns: 8,
  reliabilityScore: 98,
};

export function ProviderCheckInApproval({ navigate, currentUser, checkInId }: ProviderCheckInApprovalProps) {
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectDialog, setShowRejectDialog] = useState(false);

  const handleApprove = () => {
    alert(`Check-in approved! ${checkInData.worker.name} can now start working.`);
    navigate('home');
  };

  const handleReject = () => {
    if (!rejectionReason) {
      alert('Please provide a reason for rejection');
      return;
    }
    alert(`Check-in rejected. ${checkInData.worker.name} will be notified.`);
    navigate('home');
  };

  const isLateCheckIn = checkInData.timeDifference.includes('+');
  const isLocationVerified = checkInData.workerLocation.distance.includes('meters');

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <button 
            onClick={() => navigate('home')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">
              {checkInData.type === 'check-in' ? 'Approve Check-In' : 'Approve Check-Out'}
            </h1>
            <p className="text-sm text-gray-500">Review and verify</p>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="mt-4 bg-amber-50 border-2 border-amber-200 rounded-xl p-3 flex items-start gap-2">
          <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-900 mb-1">Security Check Required</p>
            <p className="text-xs text-amber-700">
              Verify photo, location, and time before approving to prevent fraud
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Worker Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={checkInData.worker.avatar}
              alt={checkInData.worker.name}
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{checkInData.worker.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{checkInData.jobTitle}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span className="text-gray-600">{checkInData.previousCheckIns} successful check-ins</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-xs font-semibold text-green-600">{checkInData.reliabilityScore}% reliable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Photo */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Camera className="w-5 h-5 text-[#3164E6]" />
            <h3 className="font-bold text-gray-900">Verification Photo</h3>
            <div className="ml-auto bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Live Photo
            </div>
          </div>
          
          <div 
            className="relative rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setShowFullPhoto(true)}
          >
            <img
              src={checkInData.photo}
              alt="Check-in photo"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="bg-white/90 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
              Tap to enlarge
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <Smartphone className="w-3 h-3" />
            Taken at {checkInData.deviceInfo.timestamp}
          </p>
        </div>

        {/* Time Verification */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-[#3164E6]" />
            <h3 className="font-bold text-gray-900">Time Verification</h3>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Scheduled Time:</span>
              <span className="text-sm font-semibold text-gray-900">{checkInData.scheduledTime}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Actual Check-In:</span>
              <span className="text-sm font-semibold text-gray-900">{checkInData.requestedTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Time Difference:</span>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                isLateCheckIn 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {isLateCheckIn ? <AlertTriangle className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                {checkInData.timeDifference}
              </div>
            </div>
          </div>
        </div>

        {/* Location Verification */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Navigation className="w-5 h-5 text-[#3164E6]" />
            <h3 className="font-bold text-gray-900">Location Verification</h3>
            <div className={`ml-auto px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 ${
              isLocationVerified 
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {isLocationVerified ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
              {isLocationVerified ? 'Verified' : 'Not Verified'}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">Job Location:</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{checkInData.location.name}</p>
                  <p className="text-xs text-gray-600">{checkInData.location.address}</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-1">Worker's Location:</p>
              <div className="flex items-start gap-2">
                <MapPinned className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-700">{checkInData.workerLocation.distance}</p>
                  <p className="text-xs text-gray-600">GPS Accuracy: {checkInData.workerLocation.accuracy}</p>
                </div>
              </div>
            </div>

            {/* Mock Map Preview */}
            <div className="bg-gray-100 rounded-xl h-32 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
              <div className="relative z-10 text-center">
                <MapPinned className="w-8 h-8 text-[#3164E6] mx-auto mb-1" />
                <p className="text-xs text-gray-600">Location Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Device Info */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Smartphone className="w-4 h-4 text-gray-500" />
            <h4 className="font-semibold text-sm text-gray-700">Device Information</h4>
          </div>
          <div className="space-y-1 text-xs text-gray-600">
            <p>Device: {checkInData.deviceInfo.deviceId}</p>
            <p>IP: {checkInData.deviceInfo.ipAddress}</p>
            <p>Timestamp: {checkInData.deviceInfo.timestamp}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button
            onClick={() => setShowRejectDialog(true)}
            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-white border-2 border-red-500 text-red-600 font-bold text-sm active:scale-95 transition-transform"
          >
            <XCircle className="w-5 h-5" />
            Reject
          </button>
          <button
            onClick={handleApprove}
            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#3164E6] text-white font-bold text-sm shadow-lg shadow-blue-200 active:scale-95 transition-transform"
          >
            <CheckCircle className="w-5 h-5" />
            Approve
          </button>
        </div>

        <p className="text-center text-xs text-gray-500">
          Worker will be notified of your decision immediately
        </p>
      </div>

      {/* Reject Dialog */}
      {showRejectDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 animate-slide-up">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Reason for Rejection</h3>
            
            <div className="space-y-2 mb-4">
              {['Wrong location', 'Wrong person in photo', 'Too late', 'Other reason'].map((reason) => (
                <button
                  key={reason}
                  onClick={() => setRejectionReason(reason)}
                  className={`w-full p-3 rounded-xl text-left font-medium transition-all ${
                    rejectionReason === reason
                      ? 'bg-[#3164E6] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {reason}
                </button>
              ))}
            </div>

            {rejectionReason === 'Other reason' && (
              <textarea
                placeholder="Explain the reason..."
                className="w-full bg-gray-50 p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none mb-4"
                rows={3}
              />
            )}

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setShowRejectDialog(false);
                  setRejectionReason('');
                }}
                className="py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                className="py-3 rounded-xl bg-red-600 text-white font-semibold"
              >
                Confirm Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Photo Modal */}
      {showFullPhoto && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
          onClick={() => setShowFullPhoto(false)}
        >
          <img
            src={checkInData.photo}
            alt="Full size verification"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center"
            onClick={() => setShowFullPhoto(false)}
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
