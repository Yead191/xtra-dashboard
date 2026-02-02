import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, MapPin, Clock, DollarSign, Calendar, Phone, Mail, Navigation, AlertCircle, FileText, CheckCircle2, User, Play, Star, Award, TrendingUp } from 'lucide-react';

interface WorkerShiftDetailsProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
  jobId: string;
}

// Mock data for all job statuses
const ALL_JOBS: { [key: string]: any } = {
  'J001': {
    id: 'J001',
    title: 'Event Waiter',
    business: 'ABC Events',
    date: 'Dec 31, 2025',
    startTime: '2:00 PM',
    endTime: '8:00 PM',
    duration: '6 hrs',
    payment: 45,
    location: 'Downtown Event Center',
    address: '456 Downtown Ave, Central District',
    distance: '3.2 km',
    description: 'Serve guests at a corporate year-end celebration. Professional attire required.',
    status: 'upcoming',
    client: {
      name: 'Jennifer Williams',
      role: 'Event Coordinator',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      phone: '+1 (555) 123-4567',
      email: 'j.williams@abcevents.com',
    },
    requirements: [
      'Black formal attire (shirt & pants)',
      'Closed-toe shoes',
      'Arrive 15 minutes early',
      'Bring a notepad',
    ],
    instructions: 'Check in at the main entrance and ask for Jennifer. You will be briefed on your station assignment.',
  },
  'J002': {
    id: 'J002',
    title: 'Warehouse Assistant',
    business: 'QuickShip',
    date: 'Dec 28, 2025',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    duration: '8 hrs',
    payment: 85,
    location: 'QuickShip Warehouse',
    address: '789 Industrial Blvd, East District',
    distance: '4.5 km',
    description: 'Assisted with inventory management and package sorting during peak season.',
    status: 'completed',
    completedDate: 'Dec 28, 2025',
    hoursWorked: '7h 45m',
    earningsReceived: 85,
    clientRating: 5,
    clientFeedback: 'Excellent work! Very punctual and efficient. Would love to work with you again.',
    client: {
      name: 'Robert Thompson',
      role: 'Warehouse Manager',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      phone: '+1 (555) 234-5678',
      email: 'r.thompson@quickship.com',
    },
    requirements: [
      'Comfortable work clothes',
      'Steel-toe boots',
      'Ability to lift 50 lbs',
    ],
    instructions: 'Report to the main office upon arrival.',
  },
  'J003': {
    id: 'J003',
    title: 'Private Nurse',
    business: 'Elderly Care',
    date: 'Today',
    startTime: '8:00 AM',
    endTime: '6:00 PM',
    duration: '10 hrs',
    payment: 120,
    location: 'Uptown Residence',
    address: '321 Senior Lane, Uptown',
    distance: '2.8 km',
    description: 'Providing care and medical assistance to elderly patient. Monitor vitals and administer medications.',
    status: 'in-progress',
    checkedInAt: '8:05 AM',
    currentWorkTime: '2h 15m',
    estimatedEarnings: 27,
    client: {
      name: 'Dr. Lisa Chen',
      role: 'Family Physician',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      phone: '+1 (555) 345-6789',
      email: 'l.chen@elderlycare.com',
    },
    requirements: [
      'Medical scrubs',
      'Valid nursing license',
      'CPR certified',
      'Professional demeanor',
    ],
    instructions: 'Ring the doorbell and introduce yourself. The patient is expecting you.',
  },
  'J004': {
    id: 'J004',
    title: 'Retail Associate',
    business: 'Fashion Store',
    date: 'Today',
    startTime: '3:00 PM',
    endTime: '8:00 PM',
    duration: '5 hrs',
    payment: 65,
    location: 'City Mall',
    address: '123 Mall Street, Central District',
    distance: '2.5 km',
    description: 'Assist customers with finding products and maintaining store organization during evening rush.',
    status: 'ready-to-start',
    client: {
      name: 'Marcus Chen',
      role: 'Store Manager',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      phone: '+1 (555) 987-6543',
      email: 'm.chen@fashionstore.com',
    },
    requirements: [
      'Business casual attire',
      'Comfortable shoes',
      'Friendly demeanor',
    ],
    instructions: 'Enter through the employee entrance at the back of the store. Ask for Marcus at the counter.',
  },
  'J005': {
    id: 'J005',
    title: 'Weekend Server - Saturday',
    business: 'Grand Hotel',
    date: 'Jan 11, 2026',
    startTime: '6:00 PM',
    endTime: '11:00 PM',
    duration: '5 hrs',
    payment: 85,
    location: 'Grand Hotel Restaurant',
    address: '789 Luxury Blvd, Uptown',
    distance: '5.1 km',
    description: 'Fine dining service for weekend guests. Experience with upscale restaurants preferred.',
    status: 'upcoming',
    client: {
      name: 'Sophie Anderson',
      role: 'Restaurant Manager',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
      phone: '+1 (555) 456-7890',
      email: 's.anderson@grandhotel.com',
    },
    requirements: [
      'Black dress shirt & pants',
      'Black closed-toe shoes',
      'Hair tied back neatly',
    ],
    instructions: 'Use the staff entrance on the west side. Check in at the host stand 20 minutes before your shift.',
  },
  'J006': {
    id: 'J006',
    title: 'Weekend Server - Sunday',
    business: 'Grand Hotel',
    date: 'Jan 12, 2026',
    startTime: '6:00 PM',
    endTime: '11:00 PM',
    duration: '5 hrs',
    payment: 85,
    location: 'Grand Hotel Restaurant',
    address: '789 Luxury Blvd, Uptown',
    distance: '5.1 km',
    description: 'Fine dining service for weekend guests. Experience with upscale restaurants preferred.',
    status: 'upcoming',
    client: {
      name: 'Sophie Anderson',
      role: 'Restaurant Manager',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
      phone: '+1 (555) 456-7890',
      email: 's.anderson@grandhotel.com',
    },
    requirements: [
      'Black dress shirt & pants',
      'Black closed-toe shoes',
      'Hair tied back neatly',
    ],
    instructions: 'Use the staff entrance on the west side. Check in at the host stand 20 minutes before your shift.',
  },
};

export function WorkerShiftDetails({ navigate, currentUser, jobId }: WorkerShiftDetailsProps) {
  const job = ALL_JOBS[jobId] || ALL_JOBS['J001'];
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const handleGetDirections = () => {
    // In production, open maps app
    alert(`Opening directions to ${job.address}`);
  };

  const handleContactClient = (method: 'phone' | 'email') => {
    if (method === 'phone') {
      alert(`Calling ${job.client.phone}`);
    } else {
      alert(`Opening email to ${job.client.email}`);
    }
  };

  const handleCancelJob = () => {
    // In production, API call to cancel
    alert('Job cancelled. Please note: Cancelling may affect your reliability rating.');
    setShowCancelDialog(false);
    navigate('my-jobs');
  };

  const getStatusConfig = () => {
    switch (job.status) {
      case 'ready-to-start':
        return { color: 'orange', label: 'Ready to Start', bgGradient: 'from-orange-500 to-orange-600' };
      case 'in-progress':
        return { color: 'green', label: 'In Progress', bgGradient: 'from-green-500 to-green-600' };
      case 'completed':
        return { color: 'gray', label: 'Completed', bgGradient: 'from-gray-600 to-gray-700' };
      default:
        return { color: 'blue', label: 'Upcoming', bgGradient: 'from-blue-500 to-blue-600' };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('my-jobs')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Job Details</h1>
            <p className="text-xs text-gray-500">{statusConfig.label}</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Job Header */}
        <div className={`bg-gradient-to-br ${statusConfig.bgGradient} rounded-2xl p-6 shadow-lg text-white`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <span className="inline-block px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                {job.business}
              </span>
              <h2 className="text-2xl font-bold leading-tight mb-2">{job.title}</h2>
              <div className="flex items-center gap-1.5 text-white/90">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium">{statusConfig.label}</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
              <div className="flex items-center gap-1 font-bold text-xl">
                <DollarSign className="w-5 h-5" />
                {job.payment}
              </div>
            </div>
          </div>

          {/* In-Progress Stats */}
          {job.status === 'in-progress' && (
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs text-white/70 mb-1">Working Time</p>
                <p className="text-lg font-bold">{job.currentWorkTime}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs text-white/70 mb-1">Earned So Far</p>
                <p className="text-lg font-bold">${job.estimatedEarnings}</p>
              </div>
            </div>
          )}

          {/* Completed Stats */}
          {job.status === 'completed' && (
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs text-white/70 mb-1">Hours Worked</p>
                <p className="text-lg font-bold">{job.hoursWorked}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs text-white/70 mb-1">Total Earned</p>
                <p className="text-lg font-bold">${job.earningsReceived}</p>
              </div>
            </div>
          )}
        </div>

        {/* Client Rating (Completed Only) */}
        {job.status === 'completed' && job.clientRating && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Client Rating
            </h3>
            <div className="flex items-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= job.clientRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 font-bold text-lg text-gray-900">{job.clientRating}.0</span>
            </div>
            {job.clientFeedback && (
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="text-sm text-gray-700 italic">"{job.clientFeedback}"</p>
                <p className="text-xs text-gray-500 mt-2">— {job.client.name}</p>
              </div>
            )}
          </div>
        )}

        {/* Primary Action Button */}
        {job.status === 'ready-to-start' && (
          <button
            onClick={() => navigate('attendance', { jobId: job.id })}
            className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-200 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Play className="w-5 h-5 fill-current" />
            Check In Now
          </button>
        )}

        {job.status === 'in-progress' && (
          <button
            onClick={() => navigate('attendance', { jobId: job.id })}
            className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-200 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <TrendingUp className="w-5 h-5" />
            View Attendance
          </button>
        )}

        {/* Date & Time */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#3164E6]" />
            {job.status === 'completed' ? 'Completed On' : 'Schedule'}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Date</span>
              <span className="font-bold text-gray-900">{job.status === 'completed' ? job.completedDate : job.date}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Time</span>
              <span className="font-bold text-gray-900">{job.startTime} - {job.endTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Duration</span>
              <span className="font-bold text-gray-900">{job.duration}</span>
            </div>
            {job.status === 'in-progress' && (
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-sm text-gray-500">Checked In</span>
                <span className="font-bold text-green-600">{job.checkedInAt}</span>
              </div>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#3164E6]" />
            Location
          </h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-gray-900">{job.location}</p>
              <p className="text-sm text-gray-500 mt-1">{job.address}</p>
            </div>
            {job.status !== 'completed' && (
              <button
                onClick={handleGetDirections}
                className="w-full bg-blue-50 text-[#3164E6] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions ({job.distance})
              </button>
            )}
          </div>
        </div>

        {/* Client Contact */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#3164E6]" />
            Contact Person
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={job.client.avatar} 
              alt={job.client.name}
              className="w-14 h-14 rounded-full border-2 border-gray-100"
            />
            <div className="flex-1">
              <p className="font-bold text-gray-900">{job.client.name}</p>
              <p className="text-sm text-gray-500">{job.client.role}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleContactClient('phone')}
              className="flex-1 bg-gray-50 text-gray-700 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call
            </button>
            <button
              onClick={() => handleContactClient('email')}
              className="flex-1 bg-gray-50 text-gray-700 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#3164E6]" />
            Description
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#3164E6]" />
            {job.status === 'completed' ? 'Requirements Met' : 'What to Bring'}
          </h3>
          <ul className="space-y-2">
            {job.requirements.map((req: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3164E6]" />
                </div>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions (Not for completed jobs) */}
        {job.status !== 'completed' && (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
            <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Important Instructions
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">{job.instructions}</p>
          </div>
        )}

        {/* Cancel Job (Only for upcoming/ready-to-start) */}
        {(job.status === 'upcoming' || job.status === 'ready-to-start') && (
          <button
            onClick={() => setShowCancelDialog(true)}
            className="w-full bg-white border-2 border-red-200 text-red-600 py-3.5 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors"
          >
            Cancel This Job
          </button>
        )}
      </div>

      {/* Cancel Confirmation Dialog */}
      {showCancelDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cancel Job?</h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to cancel this job? This may affect your reliability rating and the client will be notified.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCancelDialog(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                Keep Job
              </button>
              <button
                onClick={handleCancelJob}
                className="flex-1 bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors"
              >
                Cancel Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}