import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { MapPin, DollarSign, Star, TrendingUp, Clock, Bell, Award, Utensils, Heart, Shield, ChefHat, Sparkles, ArrowRight, Search, Wallet } from 'lucide-react';

interface WorkerHomeProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
}

const JOB_CATEGORIES = [
  { id: 'waiter', name: 'Waiter', icon: Utensils, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { id: 'nurse', name: 'Nurse', icon: Heart, color: 'text-rose-500', bgColor: 'bg-rose-50' },
  { id: 'security', name: 'Security', icon: Shield, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
  { id: 'cook', name: 'Cook', icon: ChefHat, color: 'text-amber-500', bgColor: 'bg-amber-50' },
  { id: 'cleaner', name: 'Cleaner', icon: Sparkles, color: 'text-teal-500', bgColor: 'bg-teal-50' },
];

const todaysJobs = [
  {
    id: '1',
    title: 'Event Waiter',
    business: 'Grand Hotel',
    time: '6:00 PM - 10:00 PM',
    payment: 60,
    status: 'pending',
    distance: '2.5 km',
  }
];

export function WorkerHome({ navigate, currentUser }: WorkerHomeProps) {
  const [todaysEarnings] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 pb-28 font-sans">
      {/* Header */}
      <div className="bg-[#3164E6] px-6 pt-12 pb-8 rounded-b-[30px] shadow-lg relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-white rounded-full p-0.5">
               <img src={currentUser.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
             </div>
             <div>
               <p className="text-blue-100 text-xs font-medium">Welcome back,</p>
               <h2 className="text-white text-xl font-bold">{currentUser.name}</h2>
             </div>
          </div>
          <button 
            onClick={() => navigate('notifications')}
            className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center relative hover:bg-white/20 transition-colors">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-[#3164E6]"></span>
          </button>
        </div>

        {/* Wallet Summary */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white mb-2">
          <div className="flex items-center justify-between mb-4">
             <div>
               <p className="text-blue-100 text-xs mb-1">Total Balance</p>
               <h1 className="text-3xl font-bold tracking-tight">${currentUser.walletBalance.toFixed(2)}</h1>
             </div>
             <button 
               onClick={() => navigate('withdraw')}
               className="bg-white text-[#3164E6] px-4 py-2 rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-transform"
             >
               Withdraw
             </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-200 bg-black/10 p-2 rounded-lg inline-flex">
            <Clock className="w-3 h-3" />
            <span>Withdrawals allowed: 2x / month</span>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4 relative z-20">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
             <p className="text-gray-400 text-xs mb-1">Today's Earnings</p>
             <p className="text-[#3164E6] text-xl font-bold">${todaysEarnings.toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
             <p className="text-gray-400 text-xs mb-1">Jobs Completed</p>
             <p className="text-[#3164E6] text-xl font-bold">{currentUser.jobsCompleted}</p>
          </div>
        </div>
        
        {/* Primary CTA */}
        <button
          onClick={() => navigate('browse-jobs')}
          className="w-full bg-[#3164E6] text-white p-5 rounded-2xl shadow-lg shadow-blue-200 flex items-center justify-between group active:scale-[0.98] transition-all mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">Find Part-Time Jobs</h3>
              <p className="text-blue-100 text-sm">Browse map & list view</p>
            </div>
          </div>
          <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </button>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 font-bold text-lg">Categories</h3>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {JOB_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button 
                  key={cat.id}
                  onClick={() => navigate('category-details', { categoryId: cat.id })}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-14 h-14 rounded-2xl ${cat.bgColor} flex items-center justify-center transition-transform hover:scale-105 active:scale-95`}>
                    <Icon className={`w-6 h-6 ${cat.color}`} />
                  </div>
                  <span className="text-[10px] font-medium text-gray-600 truncate w-full text-center">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Today's Work */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 font-bold text-lg">Today's Work</h3>
            <button onClick={() => navigate('my-jobs')} className="text-[#3164E6] text-sm font-medium">See All</button>
          </div>
          
          {todaysJobs.map((job) => (
             <div key={job.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between mb-3">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                   <Utensils className="w-6 h-6 text-orange-500" />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900">{job.title}</h4>
                   <p className="text-gray-500 text-sm">{job.business}</p>
                 </div>
               </div>
               <div className="text-right">
                 <p className="font-bold text-[#3164E6]">${job.payment}</p>
                 <p className="text-xs text-gray-400">{job.time}</p>
               </div>
             </div>
          ))}
        </div>

      </div>
    </div>
  );
}