import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Clock, MapPin, Star, Users, CheckCircle2, XCircle, Calendar, DollarSign, Building2, TrendingUp, MessageCircle, Shield, Award, Briefcase, ChevronRight } from 'lucide-react';

interface WorkerJobSummaryProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
  jobId: string;
}

const JOB_DATA: { [key: string]: any } = {
  '1': {
    id: '1',
    title: 'Waitstaff for Wedding',
    business: 'Grand Plaza Hotel',
    payment: 120,
    time: '4:00 PM - 10:00 PM',
    duration: '6 hrs',
    distance: '1.2 km',
    rating: 4.8,
    type: 'Waiter',
    address: '123 Plaza Ave, Downtown',
    applicants: 12,
    description: 'Looking for professional waitstaff for a wedding reception. Must have experience with formal events and be able to work in a fast-paced environment.',
    requirements: [
      'Professional appearance',
      'Experience with formal events',
      'Ability to work 6+ hours standing',
      'Customer service skills'
    ],
    date: 'Saturday, Jan 15, 2026',
    client: {
      name: 'Sarah Johnson',
      role: 'Event Manager',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      verified: true,
      jobsPosted: 24,
      hireRate: 92,
      responseTime: '< 1 hour',
      rating: 4.8
    }
  },
  '2': {
    id: '2',
    title: 'Private Nurse (Night Shift)',
    business: 'Elderly Care Home',
    payment: 180,
    time: '8:00 PM - 6:00 AM',
    duration: '10 hrs',
    distance: '3.5 km',
    rating: 4.9,
    type: 'Nurse',
    address: '456 Care Lane, Northside',
    applicants: 5,
    description: 'Experienced nurse needed for night shift care. CPR certified required. Will be responsible for monitoring patient vitals and administering medication.',
    requirements: [
      'Valid nursing license',
      'CPR certified',
      'Night shift experience',
      'Medication administration experience'
    ],
    date: 'Monday, Jan 10, 2026',
    client: {
      name: 'Michael Chen',
      role: 'Facility Director',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      verified: true,
      jobsPosted: 45,
      hireRate: 95,
      responseTime: '< 2 hours',
      rating: 4.9
    }
  },
  '3': {
    id: '3',
    title: 'Security Guard',
    business: 'City Mall',
    payment: 95,
    time: '2:00 PM - 8:00 PM',
    duration: '6 hrs',
    distance: '0.8 km',
    rating: 4.5,
    type: 'Security',
    address: '789 Mall Street, Central',
    applicants: 20,
    description: 'Security guard needed for evening shift at busy shopping center. Must be vigilant and professional.',
    requirements: [
      'Security license',
      'Clean background check',
      'Physical fitness',
      'Communication skills'
    ],
    date: 'Today',
    client: {
      name: 'David Martinez',
      role: 'Security Supervisor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      verified: true,
      jobsPosted: 67,
      hireRate: 88,
      responseTime: '< 3 hours',
      rating: 4.5
    }
  },
  '4': {
    id: '4',
    title: 'House Cleaning',
    business: 'Private Residence',
    payment: 60,
    time: '10:00 AM - 1:00 PM',
    duration: '3 hrs',
    distance: '2.1 km',
    rating: 4.7,
    type: 'Cleaner',
    address: '321 Residential Blvd, Westside',
    applicants: 8,
    description: 'Deep cleaning needed for 3-bedroom house. Supplies provided. Focus on kitchen and bathrooms.',
    requirements: [
      'Cleaning experience',
      'Attention to detail',
      'Own transportation',
      'References preferred'
    ],
    date: 'Tomorrow',
    client: {
      name: 'Emily Roberts',
      role: 'Homeowner',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      verified: true,
      jobsPosted: 12,
      hireRate: 100,
      responseTime: '< 30 min',
      rating: 4.9
    }
  }
};

export function WorkerJobSummary({ navigate, currentUser, jobId }: WorkerJobSummaryProps) {
  const job = JOB_DATA[jobId];

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Job not found</p>
          <button 
            onClick={() => navigate('browse-jobs')}
            className="text-[#3164E6] font-bold"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  const handleAccept = () => {
    navigate('job-details', { jobId });
  };

  const handleReject = () => {
    navigate('browse-jobs');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col font-sans">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="px-6 pt-12 pb-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('browse-jobs')} 
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Job Details</h1>
              <p className="text-xs text-gray-500">Review before applying</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#3164E6] to-[#4F7BF7] px-6 py-8 text-white">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wide mb-3">
                {job.type}
              </span>
              <h2 className="text-2xl font-bold mb-2 leading-tight">{job.title}</h2>
              <div className="flex items-center gap-2 text-white/90">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{job.business}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <span className="font-bold">{job.rating}</span>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-white/70 mb-1">Total Payment</div>
                <div className="text-4xl font-bold">${job.payment}</div>
                <div className="text-xs text-white/70 mt-1">${Math.round(job.payment / parseInt(job.duration))} per hour</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/70 mb-1">Duration</div>
                <div className="text-2xl font-bold">{job.duration}</div>
                <div className="text-xs text-white/70 mt-1">{job.date}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Info Section */}
        <div className="px-6 -mt-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#3164E6]" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">Schedule</div>
                <div className="font-bold text-gray-900">{job.time}</div>
                <div className="text-xs text-gray-500 mt-0.5">{job.duration} shift</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#3164E6]" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">Location</div>
                <div className="font-bold text-gray-900">{job.address}</div>
                <div className="text-xs text-[#3164E6] font-semibold mt-0.5">{job.distance} from you</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#3164E6]" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">Competition</div>
                <div className="font-bold text-gray-900">{job.applicants} applicants so far</div>
                {job.applicants < 10 && (
                  <div className="flex items-center gap-1 text-xs text-green-600 font-semibold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Low competition - Apply now!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 mt-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-[#3164E6] rounded-full"></div>
              Job Description
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">{job.description}</p>
          </div>
        </div>

        {/* Requirements */}
        <div className="px-6 mt-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-[#3164E6] rounded-full"></div>
              Requirements
            </h3>
            <ul className="space-y-2">
              {job.requirements.map((req: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600 flex-1">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="px-6 mt-4 mb-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-green-900 text-sm">Verified Employer</div>
                <div className="text-xs text-green-700">Payment guaranteed through Xtra escrow</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Info */}
        <div className="px-6 mt-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-1.5 h-5 bg-[#3164E6] rounded-full"></div>
                Posted By
              </h3>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <img 
                    src={job.client.avatar} 
                    alt={job.client.name} 
                    className="w-16 h-16 rounded-full border-2 border-gray-100" 
                  />
                  {job.client.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-base mb-0.5">{job.client.name}</div>
                  <div className="text-sm text-gray-500 mb-3">{job.client.role} • {job.client.jobsPosted} jobs posted</div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                        <span className="text-xs font-bold text-gray-900">{job.client.rating}</span>
                      </div>
                      <div className="text-[10px] text-gray-500">Rating</div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Award className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-xs font-bold text-gray-900">{job.client.hireRate}%</span>
                      </div>
                      <div className="text-[10px] text-gray-500">Hire Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-4">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#3164E6]" />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-gray-900">Usually responds in {job.client.responseTime}</div>
                    <div className="text-[10px] text-gray-500">You can message before applying</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Button */}
            <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => navigate('business-profile-details', undefined, undefined, undefined, 'B001')}
                  className="bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform hover:bg-gray-50"
                >
                  <Building2 className="w-5 h-5" />
                  View Profile
                </button>
                <button 
                  onClick={() => navigate('inbox')}
                  className="bg-white border-2 border-[#3164E6] text-[#3164E6] py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform hover:bg-blue-50"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-5 shadow-2xl">
        <div className="max-w-[430px] mx-auto">
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="flex-1 bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform hover:border-gray-300"
            >
              <XCircle className="w-5 h-5" />
              Pass
            </button>
            <button
              onClick={handleAccept}
              className="flex-[2] bg-gradient-to-r from-[#3164E6] to-[#4F7BF7] text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
            >
              <CheckCircle2 className="w-5 h-5" />
              Accept Job
            </button>
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">
            Clicking "Accept Job" takes you to the application form. Client reviews your profile and decides whether to hire you.
          </p>
        </div>
      </div>
    </div>
  );
}