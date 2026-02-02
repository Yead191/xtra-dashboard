import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { Clock, ChevronRight, CheckCircle, ArrowRight, Radio, Play, Repeat } from 'lucide-react';

interface WorkerMyJobsProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
}

// Helper to determine if a job's shift time has arrived (can check in)
const isShiftActive = (date: string, time: string): boolean => {
  // For demo purposes: "Today" or jobs on current date and within 30 min of start time
  if (date === 'Today') return true;
  // In production: compare actual date/time
  return false;
};

// Helper to parse job status
type JobStatus = 'upcoming' | 'ready-to-start' | 'in-progress' | 'completed';

const myJobs = {
  upcoming: [
    {
      id: 'J001',
      title: 'Event Waiter',
      business: 'ABC Events',
      date: 'Dec 31, 2025',
      time: '2:00 PM',
      payment: 45,
      location: 'Downtown Event Center',
      status: 'upcoming' as JobStatus,
    },
    {
      id: 'J004',
      title: 'Retail Associate',
      business: 'Fashion Store',
      date: 'Today',
      time: '3:00 PM',
      payment: 65,
      location: 'City Mall',
      status: 'ready-to-start' as JobStatus, // Shift time arrived, can check in
    },
    {
      id: 'J005',
      title: 'Weekend Server - Saturday',
      business: 'Grand Hotel',
      date: 'Jan 11, 2026',
      time: '6:00 PM',
      payment: 85,
      location: 'Grand Hotel Restaurant',
      status: 'upcoming' as JobStatus,
      isRecurring: true,
      recurringGroup: 'weekend-server-jan',
    },
    {
      id: 'J006',
      title: 'Weekend Server - Sunday',
      business: 'Grand Hotel',
      date: 'Jan 12, 2026',
      time: '6:00 PM',
      payment: 85,
      location: 'Grand Hotel Restaurant',
      status: 'upcoming' as JobStatus,
      isRecurring: true,
      recurringGroup: 'weekend-server-jan',
    },
  ],
  active: [
      {
      id: 'J003',
      title: 'Private Nurse',
      business: 'Elderly Care',
      date: 'Today',
      time: 'Started 2h ago',
      payment: 120,
      location: 'Uptown',
      status: 'in-progress' as JobStatus,
      workingHours: '2h 15m',
    }
  ],
  completed: [
    {
      id: 'J002',
      title: 'Warehouse Assistant',
      business: 'QuickShip',
      date: 'Dec 28, 2025',
      payment: 85,
      rating: 5,
      status: 'completed' as JobStatus,
    },
  ],
};

export function WorkerMyJobs({ navigate, currentUser }: WorkerMyJobsProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'active' | 'completed'>('upcoming');

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">My Jobs</h2>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'upcoming' ? 'bg-white text-[#3164E6] shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'active' ? 'bg-white text-[#3164E6] shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'completed' ? 'bg-white text-[#3164E6] shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="px-6 py-6">
        {myJobs[activeTab].length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No {activeTab} jobs</h3>
            <p className="text-gray-500 mb-6 text-sm">Browse available jobs to get started</p>
            <button
              onClick={() => navigate('browse-jobs')}
              className="px-6 py-3 bg-[#3164E6] text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200"
            >
              Browse Jobs
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {myJobs[activeTab].map((job) => {
              const isReadyToStart = job.status === 'ready-to-start';
              const isInProgress = job.status === 'in-progress';
              
              return (
                <div
                  key={job.id}
                  className={`w-full bg-white rounded-2xl p-5 shadow-sm border transition-all relative ${
                    isReadyToStart ? 'border-l-4 border-l-orange-500 border-orange-100' : 
                    isInProgress ? 'border-l-4 border-l-green-500 border-green-100' : 
                    'border-gray-100'
                  } ${activeTab === 'completed' ? 'cursor-pointer hover:shadow-md' : ''}`}
                  onClick={activeTab === 'completed' ? () => navigate('shift-details', { jobId: job.id }) : undefined}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                          {job.business}
                        </span>
                        {job.isRecurring && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-wider">
                            <Repeat className="w-3 h-3" />
                            Multi-Day
                          </span>
                        )}
                        {isReadyToStart && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                            <Radio className="w-3 h-3" />
                            Ready
                          </span>
                        )}
                        {isInProgress && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Live
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{job.title}</h3>
                    </div>
                    <span className="text-[#3164E6] text-lg font-bold">${job.payment}</span>
                  </div>
                  
                  {activeTab !== 'completed' && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>
                        {isInProgress && job.workingHours ? `Working • ${job.workingHours}` : `${job.date} • ${job.time}`}
                      </span>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-3 border-t border-gray-50">
                    {isReadyToStart && (
                      <>
                        <button
                          onClick={() => navigate('attendance', { jobId: job.id })}
                          className="flex-1 bg-[#3164E6] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-200 flex items-center justify-center gap-2 active:scale-95 transition-all"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          Check In Now
                        </button>
                        <button
                          onClick={() => navigate('shift-details', { jobId: job.id })}
                          className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                      </>
                    )}
                    
                    {isInProgress && (
                      <button
                        onClick={() => navigate('attendance', { jobId: job.id })}
                        className="flex-1 bg-green-50 text-green-700 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border border-green-200 hover:bg-green-100 transition-all"
                      >
                        <ArrowRight className="w-4 h-4" />
                        View Attendance
                      </button>
                    )}
                    
                    {!isReadyToStart && !isInProgress && activeTab === 'upcoming' && (
                      <button
                        onClick={() => navigate('shift-details', { jobId: job.id })}
                        className="flex-1 bg-gray-50 text-gray-700 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                    
                    {activeTab === 'completed' && (
                      <div className="flex-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-xs font-bold text-green-600">Completed</span>
                        </div>
                        {job.rating && (
                          <div className="flex items-center gap-1 text-sm">
                            <span className="text-gray-500">Rating:</span>
                            <span className="font-bold text-yellow-500">{job.rating}⭐</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}