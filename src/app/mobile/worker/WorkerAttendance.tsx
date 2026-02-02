import { useState, useEffect } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { MapPin, Clock, CheckCircle, ArrowLeft, Play, Square, DollarSign, Calendar } from 'lucide-react';

interface WorkerAttendanceProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
  jobId?: string;
}

// Mock job data - in production this would be fetched based on jobId
const getJobDetails = (jobId?: string) => {
  return {
    id: jobId || 'J004',
    title: 'Retail Associate',
    business: 'Fashion Store',
    date: 'Today, Jan 9',
    startTime: '3:00 PM',
    endTime: '8:00 PM',
    payment: 65,
    location: 'City Mall, 2.5 km away',
    address: '123 Mall Street, Central District',
  };
};

export function WorkerAttendance({ navigate, currentUser, jobId }: WorkerAttendanceProps) {
  const job = getJobDetails(jobId);
  const [status, setStatus] = useState<'pending' | 'working' | 'completed'>('pending');
  const [timer, setTimer] = useState(0);
  const [isNearLocation, setIsNearLocation] = useState(false);

  // Mock checking location
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsNearLocation(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'working') {
      interval = setInterval(() => {
        setTimer(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCheckIn = () => {
    if (!isNearLocation) {
      alert("You need to be at the job location to check in.");
      return;
    }
    setStatus('working');
  };

  const handleCheckOut = () => {
    setStatus('completed');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm z-10 sticky top-0">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={() => navigate('my-jobs')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Attendance</h1>
            <p className="text-xs text-gray-500">Track your work hours</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 pb-8">
        {/* Job Information Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <span className="inline-block px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                {job.business}
              </span>
              <h2 className="font-bold text-gray-900 text-xl leading-tight mb-2">{job.title}</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>{job.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{job.startTime} - {job.endTime}</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 px-3 py-2 rounded-lg">
              <div className="flex items-center gap-1 text-[#3164E6] font-bold">
                <DollarSign className="w-4 h-4" />
                <span>{job.payment}</span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Status</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                status === 'working' ? 'bg-green-100 text-green-700' : 
                status === 'completed' ? 'bg-gray-100 text-gray-700' :
                'bg-orange-100 text-orange-700'
              }`}>
                {status === 'working' ? 'In Progress' : status === 'completed' ? 'Completed' : 'Ready to Start'}
              </span>
            </div>
          </div>
        </div>

        {/* Location Verification Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <h3 className="font-bold text-gray-900 mb-3 text-sm">Location Verification</h3>
          <div className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
            isNearLocation ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              isNearLocation ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <MapPin className={`w-5 h-5 ${isNearLocation ? 'text-green-600' : 'text-red-600'}`} />
            </div>
            <div className="flex-1">
              <p className={`text-sm font-bold ${isNearLocation ? 'text-green-900' : 'text-red-900'}`}>
                {isNearLocation ? "You're at the location!" : "Getting closer..."}
              </p>
              <p className="text-xs text-gray-600 mt-0.5">{job.location}</p>
            </div>
            {isNearLocation && <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />}
          </div>
        </div>

        {/* Timer Card (only when working) */}
        {status === 'working' && (
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg mb-4 text-white">
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-3 text-center">Work Timer</p>
            <p className="text-5xl font-black text-center font-mono tracking-tight">{formatTime(timer)}</p>
            <p className="text-blue-100 text-xs text-center mt-3">Earning ${(job.payment / 5 * (timer / 3600)).toFixed(2)}</p>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-auto">
          {status === 'pending' && (
            <button 
              onClick={handleCheckIn}
              disabled={!isNearLocation}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                isNearLocation 
                  ? 'bg-[#3164E6] text-white shadow-blue-200 active:scale-95' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Play className="w-5 h-5 fill-current" />
              Check In
            </button>
          )}

          {status === 'working' && (
            <button 
              onClick={handleCheckOut}
              className="w-full bg-red-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-200 active:scale-95 transition-all"
            >
              <Square className="w-5 h-5 fill-current" />
              Check Out
            </button>
          )}

          {status === 'completed' && (
            <div className="space-y-3">
              <div className="text-center p-5 bg-green-50 rounded-xl border-2 border-green-200">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-green-900 mb-1">Job Completed!</h3>
                <p className="text-sm text-green-700">Worked for {formatTime(timer)}</p>
                <p className="text-2xl font-bold text-green-900 mt-3">${job.payment}</p>
                <p className="text-xs text-green-600">Added to your wallet</p>
              </div>
              <button
                onClick={() => navigate('my-jobs')}
                className="w-full bg-[#3164E6] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200"
              >
                Back to My Jobs
              </button>
            </div>
          )}
        </div>

        {/* Map Placeholder */}
        {status !== 'completed' && (
          <div className="w-full bg-gray-100 rounded-2xl overflow-hidden relative h-48 mt-6">
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-[#3164E6]/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 bg-[#3164E6] rounded-full border-2 border-white"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
              <p className="text-xs font-bold text-gray-900">{job.address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}