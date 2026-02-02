import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { CreditCard, ChevronRight, Calendar, TrendingUp, Filter, X } from 'lucide-react';

interface ProviderPaymentsProps {
  navigate: (route: ProviderRoute, transactionId?: string) => void;
  currentUser: any;
}

const transactions = [
  {
    id: 'TX001',
    jobTitle: 'Private Nurse',
    workerName: 'Sarah Johnson',
    date: 'Dec 28, 2025',
    amount: 180,
    platformFee: 27,
    total: 207,
    status: 'completed',
  },
  {
    id: 'TX002',
    jobTitle: 'Cook',
    workerName: 'Alex Chen',
    date: 'Dec 20, 2025',
    amount: 110,
    platformFee: 16.50,
    total: 126.50,
    status: 'completed',
  },
  {
    id: 'TX003',
    jobTitle: 'Security Guard',
    workerName: 'Mike Brown',
    date: 'Dec 15, 2025',
    amount: 95,
    platformFee: 14.25,
    total: 109.25,
    status: 'completed',
  },
  {
    id: 'TX004',
    jobTitle: 'Cleaner',
    workerName: 'Emily White',
    date: 'Dec 10, 2025',
    amount: 65,
    platformFee: 9.75,
    total: 74.75,
    status: 'refunded',
  },
];

export function ProviderPayments({ navigate, currentUser }: ProviderPaymentsProps) {
  const [activeTab, setActiveTab] = useState<'history' | 'methods'>('history');
  const [showFilter, setShowFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'refunded'>('all');

  const totalSpent = transactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => sum + t.total, 0);

  const thisMonthSpent = transactions
    .filter(t => t.status === 'completed' && t.date.includes('Dec'))
    .reduce((sum, t) => sum + t.total, 0);

  const filteredTransactions = transactions.filter(t => {
    if (statusFilter === 'all') return true;
    return t.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Payments</h2>
        
        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'history' ? 'bg-[#3164E6] text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Payment History
          </button>
          <button
            onClick={() => setActiveTab('methods')}
            className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'methods' ? 'bg-[#3164E6] text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Payment Methods
          </button>
        </div>
      </div>

      {activeTab === 'history' ? (
        <div className="p-6">
          {/* Spending Summary */}
          <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-6 mb-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5" />
              <h3 className="font-bold text-lg">Spending Summary</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-blue-200 text-sm mb-1">This Month</p>
                <p className="text-3xl font-bold">${thisMonthSpent.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm mb-1">All Time</p>
                <p className="text-3xl font-bold">${totalSpent.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-3 relative z-20">
              <h3 className="font-bold text-gray-900">
                {statusFilter === 'all' ? 'Recent Transactions' : 
                 statusFilter === 'completed' ? 'Paid Transactions' : 'Refunded Transactions'}
              </h3>
              
              <div className="relative">
                <button 
                  onClick={() => setShowFilter(!showFilter)}
                  className={`text-sm font-semibold flex items-center gap-1 transition-colors ${showFilter ? 'text-gray-900' : 'text-[#3164E6]'}`}
                >
                  {showFilter ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
                  {showFilter ? 'Close' : 'Filter'}
                </button>

                {/* Filter Dropdown */}
                {showFilter && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-48 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <p className="text-[10px] font-bold text-gray-400 px-3 py-2 uppercase tracking-wide">Filter by Status</p>
                    {['all', 'completed', 'refunded'].map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status as any);
                          setShowFilter(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          statusFilter === status ? 'bg-blue-50 text-[#3164E6]' : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        {status === 'all' ? 'All Transactions' : status === 'completed' ? 'Paid' : 'Refunded'}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <button
                  key={transaction.id}
                  onClick={() => navigate('transaction-details', transaction.id)}
                  className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{transaction.jobTitle}</h4>
                      <p className="text-sm text-gray-600">{transaction.workerName}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">-${transaction.total.toFixed(2)}</p>
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                        transaction.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {transaction.status === 'completed' ? 'Paid' : 'Refunded'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{transaction.date}</span>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">No transactions found</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6">
          {/* Payment Methods */}
          <div className="space-y-3 mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Visa •••• 1234</p>
                <p className="text-sm text-gray-500">Expires 12/25</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                  Default
                </span>
                <button className="text-orange-600 text-sm font-semibold">Edit</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Mastercard •••• 5678</p>
                <p className="text-sm text-gray-500">Expires 08/26</p>
              </div>
              <button className="text-[#3164E6] text-sm font-semibold">Edit</button>
            </div>
          </div>

          {/* Add New Card */}
          <button className="w-full bg-blue-50 border-2 border-dashed border-blue-300 text-[#3164E6] py-4 rounded-2xl font-bold text-lg hover:bg-blue-100 transition-colors">
            + Add New Card
          </button>

          {/* Info */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-sm text-blue-900">
              💳 Your payment information is securely stored and encrypted. We never share your card details.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
