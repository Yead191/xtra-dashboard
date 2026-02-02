import { useState, useEffect } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, MapPin, Clock, DollarSign, Star, CheckCircle2, Upload, FileText, ChevronRight, ShieldCheck, Info, Building } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface WorkerJobDetailsProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
  jobId: string;
}

// Data shared with WorkerJobSummary for consistency
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
    description: 'Looking for professional waitstaff for a wedding reception. Must have experience with formal events.',
    date: 'Saturday, Jan 15, 2026',
    client: { name: 'Sarah Johnson', role: 'Event Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }
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
    description: 'Experienced nurse needed for night shift care. CPR certified required.',
    date: 'Monday, Jan 10, 2026',
    client: { name: 'Michael Chen', role: 'Facility Director', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' }
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
    description: 'Security guard needed for evening shift at busy shopping center.',
    date: 'Today',
    client: { name: 'David Martinez', role: 'Security Supervisor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' }
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
    description: 'Deep cleaning needed for 3-bedroom house.',
    date: 'Tomorrow',
    client: { name: 'Emily Roberts', role: 'Homeowner', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' }
  }
};

export function WorkerJobDetails({ navigate, currentUser, jobId }: WorkerJobDetailsProps) {
  const job = JOB_DATA[jobId] || JOB_DATA['1'];
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [note, setNote] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [attachments, setAttachments] = useState<string[]>([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      toast.error("Please confirm you can make the shift");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast.success("Application submitted successfully!");
    
    // Navigate to success page or back to jobs
    // ideally we'd have a success state/page, for now going back to jobs with a delay
    setTimeout(() => {
      navigate('my-jobs');
    }, 500);
  };

  const addAttachment = () => {
    // Mock attachment
    const newFile = `Resume_${new Date().getTime()}.pdf`;
    setAttachments([...attachments, newFile]);
    toast.success("File attached");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('job-summary', { jobId })}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Apply for Job</h1>
            <p className="text-xs text-gray-500">Step 2 of 2</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 pb-32 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Job Recap Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-bold text-gray-900 text-lg leading-tight mb-1">{job.title}</h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="font-medium">{job.business}</span>
                  <span>•</span>
                  <span>{job.date}</span>
                </div>
              </div>
              <div className="bg-blue-50 px-3 py-1.5 rounded-lg">
                <span className="text-[#3164E6] font-bold">${job.payment}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl mb-3">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>{job.time} ({job.duration})</span>
            </div>

            {/* View Business Profile Button */}
            <button
              onClick={() => navigate('business-profile-details', undefined, undefined, undefined, 'B001')}
              className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#3164E6]" />
                <span className="text-sm font-bold text-[#3164E6]">View {job.business} Profile</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#3164E6] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Availability Confirmation */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#3164E6]" />
                Confirm Availability
             </h3>
             <label className="flex items-start gap-3 cursor-pointer group">
               <div className="relative flex items-center mt-0.5">
                 <input 
                   type="checkbox" 
                   className="peer sr-only"
                   checked={agreedToTerms}
                   onChange={(e) => setAgreedToTerms(e.target.checked)}
                 />
                 <div className="w-6 h-6 border-2 border-gray-300 rounded-lg peer-checked:bg-[#3164E6] peer-checked:border-[#3164E6] transition-all flex items-center justify-center">
                   <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" />
                 </div>
               </div>
               <span className="text-sm text-gray-600 leading-snug group-hover:text-gray-900 transition-colors">
                 I confirm that I am available to work on <span className="font-bold text-gray-900">{job.date}</span> from <span className="font-bold text-gray-900">{job.time}</span>.
               </span>
             </label>
          </div>

          {/* Profile Preview */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Your Profile</h3>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={currentUser?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
                alt="Profile" 
                className="w-14 h-14 rounded-full border-2 border-gray-100"
              />
              <div className="flex-1">
                <div className="font-bold text-gray-900">{currentUser?.name || "Alex Morgan"}</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span>{currentUser?.rating || "4.9"}</span>
                  </div>
                  <span>•</span>
                  <span>{currentUser?.completedJobs || "24"} jobs completed</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded-xl flex gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              The client will see your profile, past ratings, and verification status.
            </div>
          </div>

          {/* Cover Note */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Cover Note</h3>
            <p className="text-xs text-gray-500 mb-4">Introduce yourself to {job.client.name.split(' ')[0]} and explain why you're a good fit.</p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Hi, I'm interested in this role because..."
              className="w-full h-32 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:bg-white transition-all resize-none text-sm"
            />
          </div>

          {/* Attachments */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
               <h3 className="font-bold text-gray-900">Attachments</h3>
               <span className="text-xs text-gray-400">Optional</span>
            </div>
            
            <div className="space-y-3">
              {attachments.map((file, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <FileText className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 flex-1 truncate">{file}</span>
                  <button onClick={() => setAttachments(prev => prev.filter((_, i) => i !== idx))} className="text-gray-400 hover:text-red-500">
                    <CheckCircle2 className="w-5 h-5" /> 
                  </button>
                </div>
              ))}
              
              <button 
                onClick={addAttachment}
                className="w-full border-2 border-dashed border-gray-200 rounded-xl p-4 flex items-center justify-center gap-2 text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <Upload className="w-5 h-5" />
                <span className="font-medium text-sm">Upload Resume or Certificate</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 safe-area-bottom shadow-xl z-30">
        <div className="max-w-[430px] mx-auto">
          <button
            onClick={handleSubmit}
            disabled={!agreedToTerms || isSubmitting}
            className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
              agreedToTerms 
                ? 'bg-[#3164E6] text-white shadow-blue-200 active:scale-[0.98]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}