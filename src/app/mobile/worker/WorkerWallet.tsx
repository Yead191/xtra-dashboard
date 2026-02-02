import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { DollarSign, ArrowUpRight, ArrowDownLeft, Clock, AlertCircle, Calendar } from 'lucide-react';

interface WorkerWalletProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

const TRANSACTIONS = [
  { id: 1, type: 'credit', title: 'Event Helper', date: 'Today, 2:30 PM', amount: 45.00, status: 'completed' },
  { id: 2, type: 'debit', title: 'Withdrawal', date: 'Dec 28, 2025', amount: 150.00, status: 'completed' },
  { id: 3, type: 'credit', title: 'Cleaning Service', date: 'Dec 27, 2025', amount: 80.00, status: 'completed' },
  { id: 4, type: 'credit', title: 'Bartender', date: 'Dec 25, 2025', amount: 120.00, status: 'pending' },
];

export function WorkerWallet({ navigate, currentUser }: WorkerWalletProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header Card */}
      <div className="bg-[#3164E6] px-6 pt-12 pb-8 rounded-b-[40px] shadow-lg relative z-10 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        
        <h1 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
          <DollarSign className="w-5 h-5 bg-white/20 rounded-full p-1" /> My Wallet
        </h1>

        <div className="flex flex-col items-center mb-8">
          <p className="text-blue-100 text-sm mb-1">Available Balance</p>
          <h2 className="text-5xl font-bold text-white tracking-tight">${currentUser.walletBalance.toFixed(2)}</h2>
          <div className="mt-2 flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs text-blue-100">Pending: $120.00</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('withdraw')}
            className="bg-white text-[#3164E6] py-4 rounded-2xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <ArrowUpRight className="w-4 h-4" /> Withdraw
          </button>
          <button className="bg-[#56B1F1] text-white py-4 rounded-2xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <Calendar className="w-4 h-4" /> History
          </button>
        </div>
      </div>

      {/* Info & Transactions */}
      <div className="flex-1 px-6 pt-6 pb-24">
        
        {/* Admin Note */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Withdrawal Limit</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              You can withdraw your earnings twice a month. A small platform fee applies to each withdrawal.
            </p>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-4">Recent Transactions</h3>
        
        <div className="space-y-4">
          {TRANSACTIONS.map((tx) => (
            <div key={tx.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {tx.type === 'credit' ? (
                    <ArrowDownLeft className={`w-5 h-5 ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`} />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{tx.title}</h4>
                  <p className="text-xs text-gray-400">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${tx.type === 'credit' ? 'text-green-600' : 'text-gray-900'}`}>
                  {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                </p>
                {tx.status === 'pending' && (
                  <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full mt-1">
                    Pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}