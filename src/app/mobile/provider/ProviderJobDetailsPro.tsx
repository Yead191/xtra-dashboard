import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Calendar, Clock, DollarSign, MapPin, Star,
  Edit, CheckCircle, AlertCircle, Phone, MessageSquare, Users,
  X, Eye, Pause, ChevronRight, Shield, Camera, Award,
  ThumbsUp, ThumbsDown, Info, ExternalLink, TrendingUp
} from 'lucide-react';

interface ProviderJobDetailsProps {
  navigate: (route: ProviderRoute, jobId?: string) => void;
  jobId: string;
  currentUser: any;
}

type WorkerStatus = 'pending' | 'accepted' | 'rejected' | 'reconciliation' | 'checkin-pending' | 'working' | 'completed';

interface Worker {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  jobsCompleted: number;
  status: WorkerStatus;
  appliedAt?: string;
  acceptedAt?: string;
  checkInTime?: string;
  checkOutTime?: string;
  workedHours?: string;
  claimedHours?: string;
  expectedHours?: string;
  reconciliationReason?: string;
  phone?: string;
  badge?: 'top-rated' | 'reliable' | 'new';
  previouslyWorked?: boolean;
}

// Mock comprehensive job data
const jobsData: any = {
  'J001': {
    id: 'J001',
    title: 'Event Waiter',
    category: 'Waiter',
    date: 'Today',
    time: '2:00 PM - 8:00 PM',
    payment: 120,
    location: 'Downtown Event Center',
    address: '123 Main St, Downtown',
    status: 'in-progress',
    workersNeeded: 3,
    description: 'Need experienced waiters for corporate event',
    workers: [
      {
        id: 'W001',
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        rating: 4.9,
        jobsCompleted: 24,
        status: 'working' as WorkerStatus,
        acceptedAt: '2 days ago',
        checkInTime: '2:03 PM',
        workedHours: '2h 15m',
        badge: 'top-rated',
        previouslyWorked: true,
      },
      {
        id: 'W002',
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        rating: 4.7,
        jobsCompleted: 18,
        status: 'checkin-pending' as WorkerStatus,
        appliedAt: '1 day ago',
        acceptedAt: '1 day ago',
        checkInTime: '1:58 PM',
        badge: 'reliable',
      },
      {
        id: 'W003',
        name: 'Emma Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
        rating: 5.0,
        jobsCompleted: 36,
        status: 'accepted' as WorkerStatus,
        appliedAt: '3 hours ago',
        acceptedAt: '2 hours ago',
        badge: 'top-rated',
        previouslyWorked: true,
      },
      {
        id: 'W004',
        name: 'James Wilson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
        rating: 4.5,
        jobsCompleted: 12,
        status: 'pending' as WorkerStatus,
        appliedAt: '2 hours ago',
      },
      {
        id: 'W005',
        name: 'Lisa Anderson',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
        rating: 3.8,
        jobsCompleted: 5,
        status: 'rejected' as WorkerStatus,
        appliedAt: '5 hours ago',
        badge: 'new',
      },
    ],
  },
  'J003': {
    id: 'J003',
    title: 'Private Nurse',
    category: 'Nurse',
    date: 'Yesterday',
    time: '9:00 AM - 5:00 PM',
    payment: 180,
    location: 'Medical Center',
    address: '789 Health Street',
    status: 'reconciliation',
    workersNeeded: 2,
    workers: [
      {
        id: 'W006',
        name: 'Dr. Patricia Moore',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200',
        rating: 4.9,
        jobsCompleted: 42,
        status: 'completed' as WorkerStatus,
        acceptedAt: '3 days ago',
        checkInTime: '9:00 AM',
        checkOutTime: '5:00 PM',
        workedHours: '8h 0m',
        expectedHours: '8h 0m',
        badge: 'top-rated',
      },
      {
        id: 'W007',
        name: 'Jennifer Lee',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
        rating: 4.6,
        jobsCompleted: 28,
        status: 'reconciliation' as WorkerStatus,
        acceptedAt: '3 days ago',
        checkInTime: '9:15 AM',
        checkOutTime: '4:30 PM',
        workedHours: '7h 15m',
        claimedHours: '8h 0m',
        expectedHours: '8h 0m',
        reconciliationReason: 'Worker claims full 8 hours worked, check-out shows 7h 15m',
      },
    ],
  },
  'J004': {
    id: 'J004',
    title: 'Security Guard - Night Shift',
    category: 'Security',
    date: 'Tomorrow',
    time: '10:00 PM - 6:00 AM',
    payment: 160,
    location: 'Corporate Plaza',
    address: '456 Business Ave',
    status: 'posted',
    workersNeeded: 2,
    workers: [
      {
        id: 'W008',
        name: 'Robert Taylor',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
        rating: 4.8,
        jobsCompleted: 31,
        status: 'accepted' as WorkerStatus,
        appliedAt: '1 hour ago',
        acceptedAt: '30 min ago',
        badge: 'reliable',
        previouslyWorked: true,
      },
      {
        id: 'W009',
        name: 'David Martinez',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
        rating: 4.4,
        jobsCompleted: 15,
        status: 'pending' as WorkerStatus,
        appliedAt: '45 min ago',
      },
      {
        id: 'W010',
        name: 'Chris Anderson',
        avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200',
        rating: 4.1,
        jobsCompleted: 8,
        status: 'pending' as WorkerStatus,
        appliedAt: '20 min ago',
        badge: 'new',
      },
    ],
  },
};

export function ProviderJobDetails({ navigate, jobId, currentUser }: ProviderJobDetailsProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'workers' | 'attendance' | 'details'>('workers');
  const [expandedWorker, setExpandedWorker] = useState<string | null>(null);
  
  const job = jobsData[jobId] || jobsData['J001'];

  // Categorize workers
  const pendingWorkers = job.workers.filter((w: Worker) => w.status === 'pending');
  const acceptedWorkers = job.workers.filter((w: Worker) => 
    ['accepted', 'checkin-pending', 'working', 'completed'].includes(w.status)
  );
  const issueWorkers = job.workers.filter((w: Worker) => 
    w.status === 'reconciliation' || w.status === 'rejected'
  );
  const activeWorkers = job.workers.filter((w: Worker) => 
    ['accepted', 'working'].includes(w.status)
  );

  const spotsRemaining = job.workersNeeded - acceptedWorkers.length;
  const isFull = spotsRemaining === 0;
  const hasPendingActions = pendingWorkers.length > 0 || issueWorkers.length > 0;

  const handleAcceptWorker = (workerId: string) => {
    alert(`Worker accepted! They've been notified.`);
  };

  const handleRejectWorker = (workerId: string) => {
    alert(`Worker declined. They won't be notified to maintain professionalism.`);
  };

  const handleResolveReconciliation = (workerId: string, action: 'approve' | 'dispute') => {
    if (action === 'approve') {
      alert('Payment approved as claimed by worker');
    } else {
      alert('Dispute opened - Support team will review');
    }
  };

  const getStatusBadge = (status: WorkerStatus) => {
    const badges = {
      pending: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Pending Review', icon: Clock },
      accepted: { bg: 'bg-green-100', text: 'text-green-700', label: 'Accepted', icon: CheckCircle },
      rejected: { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Declined', icon: X },
      reconciliation: { bg: 'bg-red-100', text: 'text-red-700', label: 'Payment Issue', icon: AlertCircle },
      'checkin-pending': { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Check-in Pending', icon: Shield },
      working: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Working Now', icon: TrendingUp },
      completed: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Completed', icon: CheckCircle },
    };
    return badges[status];
  };

  const renderWorkerCard = (worker: Worker, showActions: boolean = false) => {
    const statusBadge = getStatusBadge(worker.status);
    const StatusIcon = statusBadge.icon;
    const isExpanded = expandedWorker === worker.id;

    return (
      <div key={worker.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => setExpandedWorker(isExpanded ? null : worker.id)}
          className="w-full p-4 flex items-start gap-3 active:bg-gray-50 transition-colors text-left"
        >
          <div className="relative">
            <img
              src={worker.avatar}
              alt={worker.name}
              className="w-14 h-14 rounded-xl object-cover"
            />
            {worker.badge && (
              <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                worker.badge === 'top-rated' ? 'bg-yellow-500' : 
                worker.badge === 'reliable' ? 'bg-blue-500' : 'bg-green-500'
              }`}>
                <Award className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{worker.name}</h3>
                {worker.previouslyWorked && (
                  <span className="text-xs text-[#3164E6] font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3" />
                    Worked with you before
                  </span>
                )}
              </div>
              <span className={`px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 ${statusBadge.bg} ${statusBadge.text}`}>
                <StatusIcon className="w-3 h-3" />
                {statusBadge.label}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-600 mb-1">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">{worker.rating.toFixed(1)}</span>
              </div>
              <span>•</span>
              <span>{worker.jobsCompleted} jobs</span>
              {worker.badge && (
                <>
                  <span>•</span>
                  <span className="capitalize">{worker.badge.replace('-', ' ')}</span>
                </>
              )}
            </div>

            <p className="text-xs text-gray-500">
              Applied {worker.appliedAt}
              {worker.acceptedAt && ` • Accepted ${worker.acceptedAt}`}
            </p>
          </div>

          <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
            isExpanded ? 'rotate-90' : ''
          }`} />
        </button>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="px-4 pb-4 space-y-3 border-t border-gray-100">
            {/* Working Hours Info */}
            {worker.workedHours && (
              <div className="bg-blue-50 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-semibold text-gray-900">{worker.checkInTime}</span>
                </div>
                {worker.checkOutTime && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Check-out:</span>
                    <span className="font-semibold text-gray-900">{worker.checkOutTime}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Hours Worked:</span>
                  <span className="font-bold text-[#3164E6]">{worker.workedHours}</span>
                </div>
              </div>
            )}

            {/* Reconciliation Issue */}
            {worker.status === 'reconciliation' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-red-900">Payment Dispute</p>
                    <p className="text-xs text-red-700 mt-1">{worker.reconciliationReason}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                  <div className="bg-white rounded p-2">
                    <p className="text-gray-600">System Tracked</p>
                    <p className="font-bold text-gray-900">{worker.workedHours}</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-gray-600">Worker Claims</p>
                    <p className="font-bold text-gray-900">{worker.claimedHours}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Contact */}
            <div className="flex gap-2">
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <Phone className="w-4 h-4" />
                Call
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <MessageSquare className="w-4 h-4" />
                Message
              </button>
              <button 
                onClick={() => navigate('my-workers', worker.id)}
                className="px-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold text-sm flex items-center justify-center active:scale-95 transition-transform"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Action Buttons */}
            {showActions && worker.status === 'pending' && (
              <div className="flex gap-2 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAcceptWorker(worker.id);
                  }}
                  className="flex-1 bg-[#3164E6] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <ThumbsUp className="w-4 h-4" />
                  Accept
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRejectWorker(worker.id);
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <ThumbsDown className="w-4 h-4" />
                  Decline
                </button>
              </div>
            )}

            {worker.status === 'reconciliation' && (
              <div className="flex gap-2 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleResolveReconciliation(worker.id, 'approve');
                  }}
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold text-sm active:scale-95 transition-transform"
                >
                  Approve {worker.claimedHours}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleResolveReconciliation(worker.id, 'dispute');
                  }}
                  className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold text-sm active:scale-95 transition-transform"
                >
                  Open Dispute
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const filteredWorkers = () => {
    switch (selectedTab) {
      case 'pending': return pendingWorkers;
      case 'accepted': return acceptedWorkers;
      case 'issues': return issueWorkers;
      default: return job.workers;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate('my-jobs')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">{job.title}</h1>
            <p className="text-sm text-gray-500">{job.category}</p>
          </div>
          {job.status === 'posted' && (
            <button
              onClick={() => navigate('post-job')}
              className="w-10 h-10 rounded-full bg-blue-50 text-[#3164E6] flex items-center justify-center active:scale-95 transition-transform"
            >
              <Edit className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-6 px-6">
          <button
            onClick={() => setSelectedTab('workers')}
            className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors ${
              selectedTab === 'workers'
                ? 'bg-[#3164E6] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Workers ({job.workers.length})
          </button>
          <button
            onClick={() => setSelectedTab('attendance')}
            className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors relative ${
              selectedTab === 'attendance'
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Attendance ({activeWorkers.length})
            {activeWorkers.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {activeWorkers.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setSelectedTab('details')}
            className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors ${
              selectedTab === 'details'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Details
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* TAB CONTENT: WORKERS */}
        {selectedTab === 'workers' && (
          <>
            {/* Action Required Banner */}
            {hasPendingActions && (
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Action Required</h3>
                    <p className="text-sm text-white/90">
                      {pendingWorkers.length > 0 && `${pendingWorkers.length} worker${pendingWorkers.length > 1 ? 's' : ''} waiting for response`}
                      {pendingWorkers.length > 0 && issueWorkers.length > 0 && ' • '}
                      {issueWorkers.length > 0 && `${issueWorkers.length} issue${issueWorkers.length > 1 ? 's' : ''}`}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            )}

            {/* Job Capacity Status */}
            <div className={`rounded-2xl p-4 border-2 ${
              isFull 
                ? 'bg-green-50 border-green-200' 
                : isPaused 
                ? 'bg-gray-50 border-gray-200'
                : 'bg-blue-50 border-blue-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className={`w-5 h-5 ${isFull ? 'text-green-600' : isPaused ? 'text-gray-600' : 'text-blue-600'}`} />
                  <h3 className={`font-bold ${isFull ? 'text-green-900' : isPaused ? 'text-gray-900' : 'text-blue-900'}`}>
                    {acceptedWorkers.length} of {job.workersNeeded} Positions
                  </h3>
                </div>
                {isFull && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Full
                  </span>
                )}
              </div>
              
              {/* Progress Bar */}
              <div className="bg-white rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    isFull ? 'bg-green-500' : 'bg-[#3164E6]'
                  }`}
                  style={{ width: `${(acceptedWorkers.length / job.workersNeeded) * 100}%` }}
                ></div>
              </div>

              {!isFull && (
                <p className={`text-xs mt-2 ${isPaused ? 'text-gray-600' : 'text-blue-700'}`}>
                  {spotsRemaining} more worker{spotsRemaining !== 1 ? 's' : ''} needed
                </p>
              )}
            </div>

            {/* Mini Tabs for Worker Filtering */}
            <div className="flex gap-2">
              <button className="flex-1 bg-white border-2 border-blue-500 text-blue-600 py-2 rounded-xl font-bold text-sm">
                All ({job.workers.length})
              </button>
              {pendingWorkers.length > 0 && (
                <button className="flex-1 bg-amber-50 border-2 border-amber-200 text-amber-700 py-2 rounded-xl font-bold text-sm relative">
                  Pending ({pendingWorkers.length})
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
                </button>
              )}
              <button className="flex-1 bg-green-50 border-2 border-green-200 text-green-700 py-2 rounded-xl font-bold text-sm">
                Hired ({acceptedWorkers.length})
              </button>
            </div>

            {/* Workers List */}
            <div className="space-y-3">
              {job.workers.map((worker: Worker) => 
                renderWorkerCard(worker, worker.status === 'pending')
              )}
            </div>
          </>
        )}

        {/* TAB CONTENT: ATTENDANCE */}
        {selectedTab === 'attendance' && (
          <>
            {/* Attendance Header Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-2xl font-bold text-green-900">
                    {acceptedWorkers.filter((w: Worker) => w.status === 'working').length}
                  </span>
                </div>
                <p className="text-xs text-green-700 font-semibold">Verified</p>
              </div>
              
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                  <span className="text-2xl font-bold text-orange-900">
                    {acceptedWorkers.filter((w: Worker) => w.status === 'checkin-pending').length}
                  </span>
                </div>
                <p className="text-xs text-orange-700 font-semibold">At Door</p>
              </div>
              
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    {acceptedWorkers.filter((w: Worker) => w.status === 'accepted').length}
                  </span>
                </div>
                <p className="text-xs text-gray-700 font-semibold">Expected</p>
              </div>
            </div>

            {/* Verify Arrivals - Priority Section */}
            {acceptedWorkers.some((w: Worker) => w.status === 'checkin-pending') && (
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold animate-pulse">
                      {acceptedWorkers.filter((w: Worker) => w.status === 'checkin-pending').length}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Workers at Door - Verify Now!</h3>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-orange-900">
                      <strong>🔐 Physical Verification Required:</strong> Workers have checked in digitally. 
                      Verify they are physically present before approving.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {acceptedWorkers
                      .filter((w: Worker) => w.status === 'checkin-pending')
                      .map((worker: Worker) => (
                        <div 
                          key={worker.id}
                          className="bg-orange-50 rounded-xl p-4 border-2 border-orange-300"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <img 
                              src={worker.avatar} 
                              alt={worker.name}
                              className="w-16 h-16 rounded-xl object-cover ring-4 ring-orange-400"
                            />
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 text-lg">{worker.name}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="w-3.5 h-3.5 text-gray-600" />
                                <span className="text-sm text-gray-600">Checked in {worker.checkInTime}</span>
                              </div>
                              <div className="flex items-center gap-1 mt-1">
                                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                <span className="text-sm text-gray-600 font-semibold">
                                  {worker.rating} ({worker.jobsCompleted} jobs)
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Verification Actions */}
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              onClick={() => alert(`Rejected ${worker.name}'s check-in`)}
                              className="flex items-center justify-center gap-2 bg-white border-2 border-red-300 text-red-700 py-3.5 rounded-xl font-bold active:scale-95 transition-transform"
                            >
                              <X className="w-5 h-5" />
                              Reject
                            </button>
                            <button
                              onClick={() => alert(`Approved ${worker.name}'s check-in!`)}
                              className="flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-bold active:scale-95 transition-transform shadow-lg"
                            >
                              <CheckCircle className="w-5 h-5" />
                              Approve
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* Verified Workers - Present on Site */}
            {acceptedWorkers.some((w: Worker) => w.status === 'working') && (
              <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Verified & Working
                  </h3>
                  <span className="text-sm text-gray-500">
                    {acceptedWorkers.filter((w: Worker) => w.status === 'working').length} present
                  </span>
                </div>
                
                <div className="space-y-2">
                  {acceptedWorkers
                    .filter((w: Worker) => w.status === 'working')
                    .map((worker: Worker) => (
                      <div 
                        key={worker.id}
                        className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-xl"
                      >
                        <img 
                          src={worker.avatar} 
                          alt={worker.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900">{worker.name}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
                            <span>Arrived: {worker.checkInTime}</span>
                            <span>•</span>
                            <span className="text-green-700 font-semibold">Working {worker.workedHours}</span>
                          </div>
                        </div>
                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ✓ Present
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Expected Workers - Not Yet Arrived */}
            {acceptedWorkers.some((w: Worker) => w.status === 'accepted') && (
              <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    Expected to Arrive
                  </h3>
                  <span className="text-sm text-gray-500">
                    {acceptedWorkers.filter((w: Worker) => w.status === 'accepted').length} waiting
                  </span>
                </div>
                
                <div className="space-y-2">
                  {acceptedWorkers
                    .filter((w: Worker) => w.status === 'accepted')
                    .map((worker: Worker) => (
                      <div 
                        key={worker.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                      >
                        <img 
                          src={worker.avatar} 
                          alt={worker.name}
                          className="w-12 h-12 rounded-lg object-cover opacity-60"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900">{worker.name}</h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            <span>{worker.rating} • {worker.jobsCompleted} jobs</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          Not arrived
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {acceptedWorkers.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">No workers assigned yet</p>
                <p className="text-sm text-gray-400 mt-1">Accept workers in the Workers tab</p>
              </div>
            )}
          </>
        )}

        {/* TAB CONTENT: DETAILS */}
        {selectedTab === 'details' && (
          <>
            {/* Job Capacity Status */}
            <div className={`rounded-2xl p-4 border-2 ${
              isFull 
                ? 'bg-green-50 border-green-200' 
                : isPaused 
                ? 'bg-gray-50 border-gray-200'
                : 'bg-blue-50 border-blue-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className={`w-5 h-5 ${isFull ? 'text-green-600' : isPaused ? 'text-gray-600' : 'text-blue-600'}`} />
                  <h3 className={`font-bold ${isFull ? 'text-green-900' : isPaused ? 'text-gray-900' : 'text-blue-900'}`}>
                    {acceptedWorkers.length} of {job.workersNeeded} Positions Filled
                  </h3>
                </div>
                {isFull && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Full
                  </span>
                )}
              </div>
              
              {/* Progress Bar */}
              <div className="bg-white rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    isFull ? 'bg-green-500' : 'bg-[#3164E6]'
                  }`}
                  style={{ width: `${(acceptedWorkers.length / job.workersNeeded) * 100}%` }}
                ></div>
              </div>

              {!isFull && (
                <p className={`text-xs mt-2 ${isPaused ? 'text-gray-600' : 'text-blue-700'}`}>
                  {spotsRemaining} more worker{spotsRemaining !== 1 ? 's' : ''} needed
                </p>
              )}
            </div>

            {/* Job Details Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="space-y-4">
                {/* Job Header */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                      {job.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Users className="w-3.5 h-3.5" />
                      <span className="font-semibold">{job.workersNeeded} workers needed</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-blue-700 font-semibold">Date & Time</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">{job.date}</p>
                    <p className="text-xs text-gray-600">{job.time}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-700 font-semibold">Payment</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">${job.payment.toFixed(2)}</p>
                    <p className="text-xs text-gray-600">per worker</p>
                  </div>
                </div>

                {/* View Details Section */}
                <div className="pt-3 border-t border-gray-100">
                  <button 
                    onClick={() => setExpandedWorker(expandedWorker === 'job-details' ? null : 'job-details')}
                    className="w-full flex items-center justify-between text-left active:bg-gray-50 rounded-lg p-2 -m-2 transition-colors"
                  >
                    <span className="font-bold text-gray-900">View Full Details</span>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedWorker === 'job-details' ? 'rotate-90' : ''
                    }`} />
                  </button>

                  {expandedWorker === 'job-details' && (
                    <div className="mt-3 space-y-3 pt-3 border-t border-gray-100">
                      {/* Location */}
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <MapPin className="w-4 h-4 text-red-600" />
                          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Location</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{job.location}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{job.address}</p>
                      </div>

                      {/* Budget Breakdown */}
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Budget Breakdown</span>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Rate per worker:</span>
                            <span className="font-bold text-gray-900">${job.payment.toFixed(2)}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Workers hired:</span>
                            <span className="font-bold text-gray-900">{acceptedWorkers.length} of {job.workersNeeded}</span>
                          </div>
                          <div className="border-t border-green-200 pt-2 flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-700">Total Budget:</span>
                            <span className="text-lg font-bold text-green-700">
                              ${(job.payment * acceptedWorkers.length).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {job.description && (
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <Info className="w-4 h-4 text-gray-600" />
                            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Description</span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{job.description}</p>
                        </div>
                      )}

                      {/* Job Status */}
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Job Status</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1.5 rounded-full text-sm font-bold ${
                            job.status === 'posted' ? 'bg-blue-100 text-blue-700' :
                            job.status === 'in-progress' ? 'bg-green-100 text-green-700' :
                            job.status === 'reconciliation' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {job.status === 'posted' ? 'Posted' :
                             job.status === 'in-progress' ? 'In Progress' :
                             job.status === 'reconciliation' ? 'Reconciliation' :
                             'Completed'}
                          </span>
                          {isPaused && (
                            <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-bold">
                              Paused
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Job Controls */}
            {job.status === 'posted' && (
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${
                  isPaused
                    ? 'bg-[#3164E6] text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {isPaused ? <Eye className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
                {isPaused ? 'Resume Job' : 'Pause Job'}
              </button>
            )}

            {job.status === 'posted' && (
              <button
                onClick={() => navigate('post-job')}
                className="w-full bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Edit className="w-5 h-5" />
                Edit Job Details
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}