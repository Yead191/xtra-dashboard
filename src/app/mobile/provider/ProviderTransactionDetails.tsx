import { ProviderRoute } from '../ProviderApp';
import { ChevronLeft, Download, DollarSign, Calendar, User, MapPin, Clock } from 'lucide-react';

interface ProviderTransactionDetailsProps {
  navigate: (route: ProviderRoute) => void;
  transactionId: string;
  currentUser: any;
}

export function ProviderTransactionDetails({ navigate, transactionId, currentUser }: ProviderTransactionDetailsProps) {
  // Mock data
  const transaction = {
    id: transactionId,
    receiptNumber: 'RCP-2025-001',
    jobTitle: 'Private Nurse',
    workerName: 'Sarah Johnson',
    date: 'Dec 28, 2025',
    checkIn: '9:00 AM',
    checkOut: '3:00 PM',
    totalHours: 6,
    hourlyRate: 30,
    workerPayment: 180,
    platformFee: 27,
    total: 207,
    paymentMethod: 'Visa •••• 1234',
    status: 'completed',
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-32">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <button 
          onClick={() => navigate('payments')}
          className="text-gray-600 flex items-center gap-2 mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Transaction Details</h2>
      </div>

      <div className="p-6">
        {/* Receipt Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-bold text-gray-900 text-2xl mb-2">-${transaction.total.toFixed(2)}</h3>
          <p className="text-gray-600">Payment Successful</p>
          <p className="text-sm text-gray-500 mt-2">Receipt #{transaction.receiptNumber}</p>
        </div>

        {/* Job Details */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Job Details</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Job Title</span>
              <span className="font-semibold text-gray-900">{transaction.jobTitle}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <span className="text-gray-600">Worker</span>
              <span className="font-semibold text-gray-900">{transaction.workerName}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <span className="text-gray-600">Date</span>
              <span className="font-semibold text-gray-900">{transaction.date}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <span className="text-gray-600">Time</span>
              <span className="font-semibold text-gray-900">{transaction.checkIn} - {transaction.checkOut}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <span className="text-gray-600">Total Hours</span>
              <span className="font-semibold text-gray-900">{transaction.totalHours} hours</span>
            </div>
          </div>
        </div>

        {/* Payment Breakdown */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Payment Breakdown</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Hourly Rate</span>
              <span className="font-semibold text-gray-900">${transaction.hourlyRate}/hour</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Hours Worked</span>
              <span className="font-semibold text-gray-900">{transaction.totalHours} hours</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-gray-900">Worker Payment</span>
              <span className="font-semibold text-gray-900">${transaction.workerPayment.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Platform Fee (15%)</span>
              <span className="font-semibold text-gray-900">${transaction.platformFee.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t-2 border-gray-200">
              <span className="font-bold text-gray-900 text-lg">Total Paid</span>
              <span className="font-bold text-green-600 text-xl">${transaction.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>
          <p className="text-gray-700">{transaction.paymentMethod}</p>
        </div>

        {/* Download Receipt */}
        <button className="w-full bg-blue-50 text-[#3164E6] py-4 rounded-2xl font-bold flex items-center justify-center gap-2 border-2 border-blue-200 hover:bg-blue-100 transition-colors">
          <Download className="w-5 h-5" />
          Download Receipt
        </button>
      </div>
    </div>
  );
}