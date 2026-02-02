import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ChevronLeft, DollarSign, CreditCard, CheckCircle, AlertCircle,
  Clock, User, Star
} from 'lucide-react';

interface ProviderConfirmPaymentProps {
  navigate: (route: ProviderRoute, jobId?: string) => void;
  jobId: string;
  currentUser: any;
}

export function ProviderConfirmPayment({ navigate, jobId, currentUser }: ProviderConfirmPaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState('card-1234');
  const [processing, setProcessing] = useState(false);

  const job = {
    id: jobId,
    title: 'Private Nurse',
    worker: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
      rating: 5.0,
    },
    date: 'Dec 28, 2025',
    checkInTime: '9:00 AM',
    checkOutTime: '3:00 PM',
    totalHours: 6,
    hourlyRate: 30,
    payment: 180,
  };

  const platformFee = job.payment * 0.15;
  const totalCost = job.payment + platformFee;

  const handleConfirmPayment = () => {
    setProcessing(true);
    
    setTimeout(() => {
      setProcessing(false);
      navigate('rate-worker', jobId);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-32">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <button 
          onClick={() => navigate('job-details', jobId)}
          className="text-gray-600 flex items-center gap-2 mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Confirm & Pay</h2>
      </div>

      <div className="p-6">
        {/* Worker Info */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src={job.worker.avatar} 
              alt={job.worker.name}
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{job.worker.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < Math.floor(job.worker.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{job.worker.rating}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Job Completed</p>
            <p className="font-semibold text-gray-900">{job.title}</p>
            <p className="text-sm text-gray-600">{job.date}</p>
          </div>
        </div>

        {/* Time Summary */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Time Summary</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Check-in</span>
              <span className="font-semibold text-gray-900">{job.checkInTime}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <span className="text-gray-600">Check-out</span>
              <span className="font-semibold text-gray-900">{job.checkOutTime}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <span className="font-semibold text-gray-900">Total Hours</span>
              <span className="font-bold text-green-600">{job.totalHours} hours</span>
            </div>
          </div>
        </div>

        {/* Payment Breakdown */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Payment Breakdown</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Hourly Rate</span>
              <span className="font-semibold text-gray-900">${job.hourlyRate}/hour</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Hours Worked</span>
              <span className="font-semibold text-gray-900">{job.totalHours} hours</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-gray-900">Worker Payment</span>
              <span className="font-semibold text-gray-900">${job.payment.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Platform Fee (15%)</span>
              <span className="font-semibold text-gray-900">${platformFee.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t-2 border-gray-200">
              <span className="font-bold text-gray-900 text-lg">Total Cost</span>
              <span className="font-bold text-[#3164E6] text-2xl">${totalCost.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Payment Method</h3>
            <button 
              onClick={() => navigate('payment-methods')}
              className="text-[#3164E6] font-semibold text-sm"
            >
              Change
            </button>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Visa •••• 1234</p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
            </div>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-blue-900">
              Payment will be processed immediately and the worker will receive their payment within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
        <div className="max-w-[430px] mx-auto space-y-3">
          <button
            onClick={handleConfirmPayment}
            disabled={processing}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
              processing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#3164E6] text-white shadow-blue-200 active:scale-[0.98]'
            }`}
          >
            {processing ? (
              <>
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Confirm & Pay ${totalCost.toFixed(2)}
              </>
            )}
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-semibold">
            <AlertCircle className="w-4 h-4" />
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );
}