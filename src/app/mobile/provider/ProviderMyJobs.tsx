import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  Clock, MapPin, DollarSign, ChevronRight,
  CheckCircle, AlertCircle, XCircle, User, RefreshCw, Users, Play,
  MoreVertical, Edit2, Trash2, Copy, X
} from 'lucide-react';

interface ProviderMyJobsProps {
  navigate: (route: ProviderRoute, jobId?: string, workerId?: string) => void;
  currentUser: any;
}

type JobStatus = 'draft' | 'posted' | 'assigned' | 'in-progress' | 'pending-review' | 'completed' | 'cancelled';

const myJobs = {
  active: [
    {
      id: 'J001',
      title: 'Event Waiter',
      date: 'Dec 31, 2025',
      time: '2:00 PM',
      duration: '6 hours',
      payment: 120,
      location: 'Downtown Event Center',
      status: 'in-progress' as JobStatus,
      worker: {
        name: 'John Student',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
        rating: 4.8,
      },
      startedAt: '2h ago',
    },
    {
      id: 'J002',
      title: 'Warehouse Assistant',
      date: 'Today',
      time: '3:00 PM',
      duration: '4 hours',
      payment: 85,
      location: 'QuickShip Warehouse',
      status: 'assigned' as JobStatus,
      worker: {
        name: 'Maria Garcia',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        rating: 4.9,
      },
      startsIn: '2 hours',
    },
  ],
  posted: [
    {
      id: 'J003',
      title: 'Weekend Server',
      date: 'Jan 11, 2026',
      time: '6:00 PM',
      duration: '5 hours',
      payment: 95,
      location: 'The Coffee House',
      status: 'posted' as JobStatus,
      applicants: 5,
    },
    {
      id: 'J004',
      title: 'Retail Associate',
      date: 'Jan 15, 2026',
      time: '10:00 AM',
      duration: '8 hours',
      payment: 150,
      location: 'Fashion Store',
      status: 'posted' as JobStatus,
      applicants: 2,
    },
  ],
  pending: [
    {
      id: 'J005',
      title: 'Private Nurse',
      date: 'Dec 28, 2025',
      time: 'Completed',
      duration: '6 hours',
      payment: 180,
      location: 'Uptown',
      status: 'pending-review' as JobStatus,
      worker: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
        rating: 5.0,
      },
    },
  ],
  completed: [
    {
      id: 'J006',
      title: 'Cook',
      date: 'Dec 20, 2025',
      payment: 110,
      status: 'completed' as JobStatus,
      worker: {
        name: 'Alex Chen',
        rating: 4.7,
      },
      yourRating: 5,
    },
    {
      id: 'J007',
      title: 'Security Guard',
      date: 'Dec 15, 2025',
      payment: 95,
      status: 'completed' as JobStatus,
      worker: {
        name: 'Mike Brown',
        rating: 4.5,
      },
      yourRating: 4,
    },
  ],
  cancelled: [
    {
      id: 'J008',
      title: 'Cleaner',
      date: 'Dec 10, 2025',
      payment: 65,
      status: 'cancelled' as JobStatus,
      cancelledBy: 'You',
      reason: 'No longer needed',
    },
  ],
};

export function ProviderMyJobs({ navigate, currentUser }: ProviderMyJobsProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'posted' | 'pending' | 'completed' | 'cancelled'>('active');

  const renderJobCard = (job: any) => {
    const getStatusBadge = () => {
      switch (job.status) {
        case 'posted':
          return (
            <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              <Users className="w-3 h-3" />
              {job.applicants} applicants
            </div>
          );
        case 'assigned':
          return (
            <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
              <User className="w-3 h-3" />
              Assigned
            </div>
          );
        case 'in-progress':
          return (
            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              <Play className="w-3 h-3" />
              In Progress
            </div>
          );
        case 'pending-review':
          return (
            <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
              <AlertCircle className="w-3 h-3" />
              Confirm & Pay
            </div>
          );
        case 'completed':
          return (
            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              <CheckCircle className="w-3 h-3" />
              Completed
            </div>
          );
        case 'cancelled':
          return (
            <div className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
              <XCircle className="w-3 h-3" />
              Cancelled
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div
        key={job.id}
        onClick={() => navigate('job-details', job.id)}
        className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3 text-left active:scale-[0.98] transition-transform cursor-pointer"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">{job.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{job.date} • {job.time}</span>
            </div>
          </div>
          {getStatusBadge()}
        </div>

        {/* Worker Info (if assigned/in-progress/pending/completed) */}
        {job.worker && (
          <div className="flex items-center gap-3 mb-3 p-3 bg-gray-50 rounded-xl">
            {job.worker.avatar && (
              <img 
                src={job.worker.avatar} 
                alt={job.worker.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm">{job.worker.name}</p>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xs ${i < Math.floor(job.worker.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
                <span className="text-xs text-gray-500">{job.worker.rating}</span>
              </div>
            </div>
            {/* Rebook Button for Completed Jobs */}
            {job.status === 'completed' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('rebook-worker', undefined, job.worker.id);
                }}
                className="flex items-center gap-1 bg-[#3164E6] text-white px-3 py-2 rounded-lg text-xs font-semibold active:scale-95 transition-transform"
              >
                <RefreshCw className="w-3 h-3" />
                Rebook
              </button>
            )}
          </div>
        )}

        {/* Additional Info */}
        {job.location && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="font-bold text-gray-900">${job.payment}</span>
            {job.duration && <span className="text-sm text-gray-500">• {job.duration}</span>}
          </div>
          
          {job.status === 'in-progress' && job.startedAt && (
            <span className="text-xs text-green-600 font-semibold">Started {job.startedAt}</span>
          )}
          {job.status === 'assigned' && job.startsIn && (
            <span className="text-xs text-purple-600 font-semibold">Starts in {job.startsIn}</span>
          )}
          {job.status === 'pending-review' && (
            <ChevronRight className="w-5 h-5 text-[#3164E6]" />
          )}
          {job.status === 'posted' && (
            <ChevronRight className="w-5 h-5 text-gray-300" />
          )}
        </div>

        {/* Cancelled Info */}
        {job.status === 'cancelled' && job.reason && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">Cancelled by {job.cancelledBy}</p>
            <p className="text-xs text-gray-400">{job.reason}</p>
          </div>
        )}
      </div>
    );
  };

  const getCurrentJobs = () => {
    switch (activeTab) {
      case 'active':
        return myJobs.active;
      case 'posted':
        return myJobs.posted;
      case 'pending':
        return myJobs.pending;
      case 'completed':
        return myJobs.completed;
      case 'cancelled':
        return myJobs.cancelled;
      default:
        return [];
    }
  };

  const currentJobs = getCurrentJobs();

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">My Jobs</h2>
        
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-6 px-6">
          <TabButton 
            label="Active" 
            count={myJobs.active.length}
            active={activeTab === 'active'} 
            onClick={() => setActiveTab('active')} 
          />
          <TabButton 
            label="Posted" 
            count={myJobs.posted.length}
            active={activeTab === 'posted'} 
            onClick={() => setActiveTab('posted')} 
          />
          <TabButton 
            label="Pending" 
            count={myJobs.pending.length}
            active={activeTab === 'pending'} 
            onClick={() => setActiveTab('pending')} 
          />
          <TabButton 
            label="Completed" 
            count={myJobs.completed.length}
            active={activeTab === 'completed'} 
            onClick={() => setActiveTab('completed')} 
          />
          <TabButton 
            label="Cancelled" 
            count={myJobs.cancelled.length}
            active={activeTab === 'cancelled'} 
            onClick={() => setActiveTab('cancelled')} 
          />
        </div>
      </div>

      <div className="p-6">
        {currentJobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">No jobs here yet</h3>
            <p className="text-gray-500 text-sm mb-6">
              {activeTab === 'posted' ? 'Post a job to find workers' : `You don't have any ${activeTab} jobs`}
            </p>
            {activeTab === 'posted' && (
              <button
                onClick={() => navigate('post-job')}
                className="bg-[#3164E6] text-white px-6 py-3 rounded-xl font-semibold"
              >
                Post a Job
              </button>
            )}
          </div>
        ) : (
          currentJobs.map(renderJobCard)
        )}
      </div>
    </div>
  );
}

interface TabButtonProps {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}

function TabButton({ label, count, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
        active 
          ? 'bg-[#3164E6] text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label} {count > 0 && `(${count})`}
    </button>
  );
}