import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ChevronLeft, Calendar, Clock, DollarSign, MapPin, User, Star,
  Edit, XCircle, CheckCircle, AlertCircle, Phone, MessageSquare,
  Navigation, Play, Ban
} from 'lucide-react';

interface ProviderJobDetailsProps {
  navigate: (route: ProviderRoute, jobId?: string) => void;
  jobId: string;
  currentUser: any;
}

// Mock job data
const jobsData: any = {
  'J001': {
    id: 'J001',
    title: 'Event Waiter',
    category: 'Waiter',
    date: 'Dec 31, 2025',
    time: '2:00 PM - 8:00 PM',
    duration: '6 hours',
    payment: 120,
    location: 'Downtown Event Center',
    address: '123 Main St, Downtown',
    status: 'in-progress',
    description: 'Need experienced waiter for New Year\'s Eve event. Must be professional and punctual.',
    requirements: 'Experience required, Formal attire',
    workersNeeded: 3,
    workers: [
      {
        id: 'W001',
        name: 'John Student',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
        rating: 4.8,
        jobsCompleted: 12,
        phone: '+1 (555) 123-4567',
        checkInStatus: 'approved', // approved, pending, not-checked-in
        checkInTime: '2:05 PM',
        checkInPhoto: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400',
      },
      {
        id: 'W002',
        name: 'Maria Garcia',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        rating: 4.9,
        jobsCompleted: 24,
        phone: '+1 (555) 234-5678',
        checkInStatus: 'pending', // Waiting for your approval!
        checkInTime: '2:03 PM',
        checkInPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      },
      {
        id: 'W003',
        name: 'Emma Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        rating: 5.0,
        jobsCompleted: 36,
        phone: '+1 (555) 345-6789',
        checkInStatus: 'not-checked-in', // Haven't arrived yet
      },
    ],
  },
  'J002': {
    id: 'J002',
    title: 'Warehouse Assistant',
    category: 'Warehouse',
    date: 'Today',
    time: '3:00 PM - 7:00 PM',
    duration: '4 hours',
    payment: 85,
    location: 'QuickShip Warehouse',
    address: '456 Industrial Ave',
    status: 'assigned',
    worker: {
      id: 'W002',
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 4.9,
      jobsCompleted: 24,
      phone: '+1 (555) 234-5678',
    },
    startsIn: '2 hours',
  },
  'J003': {
    id: 'J003',
    title: 'Weekend Server',
    category: 'Waiter',
    date: 'Jan 11, 2026',
    time: '6:00 PM - 11:00 PM',
    duration: '5 hours',
    payment: 95,
    location: 'The Coffee House',
    address: '789 Cafe Street',
    status: 'posted',
    applicants: 5,
  },
  'J005': {
    id: 'J005',
    title: 'Private Nurse',
    category: 'Nurse',
    date: 'Dec 28, 2025',
    time: 'Completed',
    duration: '6 hours',
    payment: 180,
    location: 'Uptown',
    status: 'pending-review',
    worker: {
      id: 'W003',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
      rating: 5.0,
      jobsCompleted: 36,
    },
    checkInTime: '9:00 AM',
    checkOutTime: '3:00 PM',
    totalHours: '6 hours',
  },
};

export function ProviderJobDetails({ navigate, jobId, currentUser }: ProviderJobDetailsProps) {
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [workers, setWorkers] = useState(jobsData[jobId]?.workers || []);
  
  const job = { ...jobsData[jobId] || jobsData['J001'], workers };

  const handleApproveCheckIn = (workerId: string) => {
    setWorkers(workers.map((w: any) => 
      w.id === workerId ? { ...w, checkInStatus: 'approved' } : w
    ));
    alert('Check-in approved! Worker can now start working.');
  };

  const handleRejectCheckIn = (workerId: string) => {
    if (confirm('Reject this check-in? The worker will be notified.')) {
      setWorkers(workers.map((w: any) => 
        w.id === workerId ? { ...w, checkInStatus: 'not-checked-in', checkInTime: undefined } : w
      ));
      alert('Check-in rejected. Worker has been notified.');
    }
  };

  const pendingCount = workers.filter((w: any) => w.checkInStatus === 'pending').length;
  const approvedCount = workers.filter((w: any) => w.checkInStatus === 'approved').length;

  const renderStatusHeader = () => {
    switch (job.status) {
      case 'posted':
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-blue-900">Awaiting Workers</h3>
            </div>
            <p className="text-sm text-blue-700">
              {job.applicants} worker{job.applicants !== 1 ? 's' : ''} applied to this job
            </p>
          </div>
        );

      case 'assigned':
        return (
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-purple-600" />
              <h3 className="font-bold text-purple-900">Worker Assigned</h3>
            </div>
            <p className="text-sm text-purple-700">
              {job.worker.name} will start in {job.startsIn}
            </p>
          </div>
        );

      case 'in-progress':
        return (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Play className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-green-900">Job In Progress</h3>
            </div>
            <p className="text-sm text-green-700">
              {job.worker.name} checked in at {job.checkInTime} • Working for {job.workingHours}
            </p>
          </div>
        );

      case 'pending-review':
        return (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-amber-900">Confirm & Pay</h3>
            </div>
            <p className="text-sm text-amber-700">
              Job completed. Please review and confirm payment.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const renderWorkerInfo = () => {
    if (!job.worker) return null;

    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
        <h3 className="font-bold text-gray-900 mb-3">Worker Information</h3>
        
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={job.worker.avatar} 
            alt={job.worker.name}
            className="w-16 h-16 rounded-2xl object-cover"
          />
          <div className="flex-1">
            <h4 className="font-bold text-gray-900">{job.worker.name}</h4>
            <div className="flex items-center gap-1 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(job.worker.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{job.worker.rating}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">{job.worker.jobsCompleted} jobs</span>
            </div>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-3 rounded-xl font-semibold">
            <Phone className="w-4 h-4" />
            Call
          </button>
          <button 
            onClick={() => navigate('inbox')}
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
          >
            <MessageSquare className="w-4 h-4" />
            Message
          </button>
        </div>
      </div>
    );
  };

  const renderActions = () => {
    switch (job.status) {
      case 'posted':
        return (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
            <div className="max-w-[430px] mx-auto space-y-3">
              <button
                onClick={() => navigate('worker-selection', jobId)}
                className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200"
              >
                View Applicants ({job.applicants})
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold">
                  <Edit className="w-4 h-4" />
                  Edit Job
                </button>
                <button 
                  onClick={() => setShowCancelDialog(true)}
                  className="flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-semibold"
                >
                  <XCircle className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );

      case 'assigned':
        return (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
            <div className="max-w-[430px] mx-auto space-y-3">
              <button
                onClick={() => navigate('track-worker', jobId)}
                className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Track Worker
              </button>
              <button 
                onClick={() => setShowCancelDialog(true)}
                className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-semibold"
              >
                <Ban className="w-4 h-4" />
                Cancel Job (Penalty applies)
              </button>
            </div>
          </div>
        );

      case 'in-progress':
        return (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
            <div className="max-w-[430px] mx-auto">
              <button
                onClick={() => navigate('track-worker', jobId)}
                className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Track Live Location
              </button>
            </div>
          </div>
        );

      case 'pending-review':
        return (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
            <div className="max-w-[430px] mx-auto space-y-3">
              <button
                onClick={() => navigate('confirm-payment', jobId)}
                className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm & Pay
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-semibold">
                <AlertCircle className="w-4 h-4" />
                Report Issue
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-32">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <button 
          onClick={() => navigate('my-jobs')}
          className="text-gray-600 flex items-center gap-2 mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
        <p className="text-gray-500">{job.category}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {renderStatusHeader()}
        {renderWorkerInfo()}

        {/* Job Details */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Job Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-semibold text-gray-900">{job.date}</p>
                <p className="text-sm text-gray-700">{job.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold text-gray-900">{job.duration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Payment</p>
                <p className="font-semibold text-gray-900">${job.payment}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-900">{job.location}</p>
                {job.address && <p className="text-sm text-gray-600">{job.address}</p>}
              </div>
            </div>

            {job.description && (
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <p className="text-sm text-gray-700">{job.description}</p>
              </div>
            )}

            {job.requirements && (
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Requirements</p>
                <p className="text-sm text-gray-700">{job.requirements}</p>
              </div>
            )}
          </div>
        </div>

        {/* Time Tracking (for in-progress/completed) */}
        {(job.status === 'in-progress' || job.status === 'pending-review') && (
          <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Time Tracking</h3>
            
            <div className="space-y-3">
              {job.checkInTime && (
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Check-in</span>
                  <span className="font-semibold text-gray-900">{job.checkInTime}</span>
                </div>
              )}
              {job.checkOutTime && (
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Check-out</span>
                  <span className="font-semibold text-gray-900">{job.checkOutTime}</span>
                </div>
              )}
              {job.totalHours && (
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Total Hours</span>
                  <span className="font-bold text-green-600">{job.totalHours}</span>
                </div>
              )}
              {job.workingHours && !job.checkOutTime && (
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Working Time</span>
                  <span className="font-bold text-green-600 animate-pulse">{job.workingHours}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Attendance Verification - Multi-Worker Jobs */}
        {job.workers && job.workers.length > 0 && (
          <div className="space-y-4 mb-6">
            {/* Worker Roster - Who Accepted the Job */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">Worker Roster</h3>
                <span className="text-sm text-gray-500">{job.workersNeeded} assigned</span>
              </div>
              
              <div className="space-y-2">
                {workers.map((worker: any) => (
                  <div 
                    key={worker.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                  >
                    <img 
                      src={worker.avatar} 
                      alt={worker.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm">{worker.name}</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-gray-600">{worker.rating}</span>
                        <span className="text-gray-300 text-xs">•</span>
                        <span className="text-xs text-gray-600">{worker.jobsCompleted} jobs</span>
                      </div>
                    </div>
                    
                    {/* Roster Status Badge */}
                    {worker.checkInStatus === 'approved' && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-lg">
                        <CheckCircle className="w-3.5 h-3.5 text-green-700" />
                        <span className="text-xs font-bold text-green-700">Present</span>
                      </div>
                    )}
                    
                    {worker.checkInStatus === 'pending' && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 rounded-lg">
                        <AlertCircle className="w-3.5 h-3.5 text-orange-700" />
                        <span className="text-xs font-bold text-orange-700">At Door</span>
                      </div>
                    )}
                    
                    {worker.checkInStatus === 'not-checked-in' && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-gray-600" />
                        <span className="text-xs font-medium text-gray-600">Expected</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Check-In Verification - Only Pending Arrivals */}
            {pendingCount > 0 && (
              <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {pendingCount}
                  </div>
                  <h3 className="font-bold text-orange-900">Verify Arrival</h3>
                </div>
                
                <p className="text-xs text-orange-700 mb-4 bg-orange-100 border border-orange-200 rounded-lg p-2.5">
                  👋 <strong>Workers at the door:</strong> Check their face matches the photo, then approve or reject.
                </p>

                <div className="space-y-3">
                  {workers
                    .filter((w: any) => w.checkInStatus === 'pending')
                    .map((worker: any) => (
                      <div 
                        key={worker.id}
                        className="bg-white rounded-xl p-4 border-2 border-orange-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <img 
                            src={worker.avatar} 
                            alt={worker.name}
                            className="w-14 h-14 rounded-xl object-cover ring-2 ring-orange-400"
                          />
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">{worker.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-600">Checked in at {worker.checkInTime}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-xs text-gray-600">{worker.rating} • {worker.jobsCompleted} jobs</span>
                            </div>
                          </div>
                        </div>

                        {/* Verification Actions */}
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleRejectCheckIn(worker.id)}
                            className="flex items-center justify-center gap-2 bg-red-100 text-red-700 py-3 rounded-xl font-bold active:scale-95 transition-transform"
                          >
                            <XCircle className="w-4 h-4" />
                            Reject
                          </button>
                          <button
                            onClick={() => handleApproveCheckIn(worker.id)}
                            className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-bold active:scale-95 transition-transform shadow-lg shadow-green-200"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Approve
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Summary Stats */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">{approvedCount}</strong> verified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">{workers.filter((w: any) => w.checkInStatus === 'not-checked-in').length}</strong> waiting
                  </span>
                </div>
                {pendingCount > 0 && (
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-orange-700">
                      <strong>{pendingCount}</strong> at door
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {renderActions()}

      {/* Cancel Dialog */}
      {showCancelDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-3xl p-6 w-full max-w-[430px] animate-slide-up">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Cancel Job?</h3>
            <p className="text-gray-600 mb-6">
              {job.status === 'assigned' 
                ? 'Cancelling after worker assignment may result in a penalty fee.'
                : 'Are you sure you want to cancel this job posting?'}
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  alert('Job cancelled');
                  navigate('my-jobs');
                }}
                className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold"
              >
                Yes, Cancel Job
              </button>
              <button
                onClick={() => setShowCancelDialog(false)}
                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-bold"
              >
                Keep Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}