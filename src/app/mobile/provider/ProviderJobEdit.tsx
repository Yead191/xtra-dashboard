import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import {
  ArrowLeft, Edit2, Trash2, MoreVertical, X,
  Calendar, Clock, DollarSign, MapPin, Users, Save,
  AlertTriangle, CheckCircle
} from 'lucide-react';

interface ProviderJobEditProps {
  navigate: (route: ProviderRoute) => void;
  jobId?: string;
  currentUser: any;
}

export function ProviderJobEdit({ navigate, jobId, currentUser }: ProviderJobEditProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Sample job data - in production, fetch based on jobId
  const [jobData, setJobData] = useState({
    title: 'Event Waiter',
    category: 'waiter',
    date: '2026-01-14',
    startTime: '14:00',
    endTime: '20:00',
    payment: '120',
    workers: '3',
    location: 'Downtown Event Center',
    address: '456 Downtown Ave, Central District',
    description: 'Looking for professional waitstaff for a wedding reception. Must have experience with formal events and be able to work in a fast-paced environment.',
    requirements: [
      'Professional appearance',
      'Experience with formal events',
      'Ability to work 6+ hours standing',
      'Customer service skills',
    ],
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      navigate('my-jobs');
    }, 1500);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      setShowDeleteModal(false);
      navigate('my-jobs');
    }, 1500);
  };

  const handleDuplicate = () => {
    // In production: Copy job data and navigate to post-job with pre-filled data
    navigate('post-job');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-20">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('my-jobs')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>

          <h1 className="text-lg font-bold text-gray-900">Edit Job</h1>

          {/* More Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
            >
              <MoreVertical className="w-5 h-5 text-gray-700" />
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-40">
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      handleDuplicate();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-semibold text-gray-900">Duplicate Job</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setShowDeleteModal(true);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors border-t border-gray-100"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-red-600">Delete Job</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6 pb-32">
        {/* Basic Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Basic Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                value={jobData.title}
                onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
                placeholder="e.g. Event Waiter"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                value={jobData.category}
                onChange={(e) => setJobData({ ...jobData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
              >
                <option value="waiter">Waiter/Server</option>
                <option value="cleaner">Cleaner</option>
                <option value="security">Security Guard</option>
                <option value="delivery">Delivery Driver</option>
                <option value="retail">Retail Associate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#3164E6]" />
            Date & Time
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={jobData.date}
                onChange={(e) => setJobData({ ...jobData, date: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Start Time</label>
                <input
                  type="time"
                  value={jobData.startTime}
                  onChange={(e) => setJobData({ ...jobData, startTime: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">End Time</label>
                <input
                  type="time"
                  value={jobData.endTime}
                  onChange={(e) => setJobData({ ...jobData, endTime: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Workers */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            Payment & Workers
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Payment per Worker</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                <input
                  type="number"
                  value={jobData.payment}
                  onChange={(e) => setJobData({ ...jobData, payment: e.target.value })}
                  className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
                  placeholder="120"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Workers</label>
              <input
                type="number"
                value={jobData.workers}
                onChange={(e) => setJobData({ ...jobData, workers: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
                placeholder="3"
              />
            </div>

            {/* Total Budget Display */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700">Total Budget</span>
                <span className="text-2xl font-bold text-[#3164E6]">
                  ${(parseFloat(jobData.payment || '0') * parseFloat(jobData.workers || '0')).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-600" />
            Location
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location Name</label>
              <input
                type="text"
                value={jobData.location}
                onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
                placeholder="e.g. Downtown Event Center"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Address</label>
              <input
                type="text"
                value={jobData.address}
                onChange={(e) => setJobData({ ...jobData, address: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
                placeholder="e.g. 456 Downtown Ave, Central District"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Job Description</h3>
          <textarea
            value={jobData.description}
            onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors resize-none"
            placeholder="Describe the job, responsibilities, and what you're looking for..."
          />
        </div>
      </div>

      {/* Save Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 space-y-3">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSaving ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Saving...
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save Changes
            </>
          )}
        </button>
        
        <button
          onClick={() => setShowDeleteModal(true)}
          className="w-full bg-white border-2 border-red-200 text-red-600 py-4 rounded-2xl font-bold active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
          <Trash2 className="w-5 h-5" />
          Delete Job
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full animate-in zoom-in duration-200">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Delete Job?</h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              This action cannot be undone. The job posting will be permanently deleted.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-bold active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-5 h-5" />
                    Yes, Delete Job
                  </>
                )}
              </button>

              <button
                onClick={() => setShowDeleteModal(false)}
                disabled={isDeleting}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold active:scale-95 transition-transform disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}