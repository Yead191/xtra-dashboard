import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Utensils, Heart, Shield, ChefHat, Sparkles, TrendingUp, DollarSign, MapPin, Calendar, Zap, CheckCircle } from 'lucide-react';

interface WorkerJobFiltersProps {
  navigate: (route: WorkerRoute, params?: any) => void;
  currentUser: any;
  initialFilters?: any;
}

const JOB_CATEGORIES = [
  { id: 'waiter', name: 'Waiter', icon: Utensils, color: 'bg-blue-100 text-blue-600' },
  { id: 'nurse', name: 'Nurse', icon: Heart, color: 'bg-pink-100 text-pink-600' },
  { id: 'security', name: 'Security', icon: Shield, color: 'bg-indigo-100 text-indigo-600' },
  { id: 'cook', name: 'Cook', icon: ChefHat, color: 'bg-orange-100 text-orange-600' },
  { id: 'cleaner', name: 'Cleaner', icon: Sparkles, color: 'bg-purple-100 text-purple-600' },
];

const SORT_OPTIONS = [
  { id: 'nearest', label: 'Nearest', icon: '📍' },
  { id: 'pay-high', label: 'Highest', icon: '💰' },
  { id: 'pay-low', label: 'Lowest', icon: '💵' },
  { id: 'recent', label: 'Recent', icon: '🕐' },
];

const DURATION_OPTIONS = [
  { id: 'short', label: 'Short', duration: '< 4 hrs' },
  { id: 'medium', label: 'Medium', duration: '4-8 hrs' },
  { id: 'long', label: 'Long', duration: '8+ hrs' },
];

export function WorkerJobFilters({ navigate, currentUser, initialFilters }: WorkerJobFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialFilters?.categories || []);
  const [payRange, setPayRange] = useState({ min: initialFilters?.payMin || 10, max: initialFilters?.payMax || 50 });
  const [selectedDistance, setSelectedDistance] = useState(initialFilters?.distance || 10);
  const [startDate, setStartDate] = useState(initialFilters?.startDate || '');
  const [endDate, setEndDate] = useState(initialFilters?.endDate || '');
  const [selectedDurations, setSelectedDurations] = useState<string[]>(initialFilters?.durations || []);
  const [verifiedOnly, setVerifiedOnly] = useState(initialFilters?.verifiedOnly || false);
  const [selectedSort, setSelectedSort] = useState(initialFilters?.sort || 'nearest');

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleDuration = (durationId: string) => {
    setSelectedDurations(prev =>
      prev.includes(durationId)
        ? prev.filter(id => id !== durationId)
        : [...prev, durationId]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPayRange({ min: 10, max: 50 });
    setSelectedDistance(10);
    setStartDate('');
    setEndDate('');
    setSelectedDurations([]);
    setVerifiedOnly(false);
    setSelectedSort('nearest');
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (selectedCategories.length > 0) count++;
    if (payRange.min !== 10 || payRange.max !== 50) count++;
    if (selectedDistance !== 10) count++;
    if (startDate || endDate) count++;
    if (selectedDurations.length > 0) count++;
    if (verifiedOnly) count++;
    if (selectedSort !== 'nearest') count++;
    return count;
  };

  const applyFilters = () => {
    const filters = {
      categories: selectedCategories,
      payMin: payRange.min,
      payMax: payRange.max,
      distance: selectedDistance,
      startDate,
      endDate,
      durations: selectedDurations,
      verifiedOnly,
      sort: selectedSort,
    };
    navigate('browse-jobs', { filters });
  };

  const activeCount = getActiveFilterCount();

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="px-6 pt-12 pb-4">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => navigate('browse-jobs')}
              className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center active:scale-95 transition-transform"
            >
              <ArrowLeft className="w-5 h-5 text-gray-900" />
            </button>
            <h1 className="text-xl text-gray-900 font-bold" style={{ fontFamily: 'var(--font-title)' }}>
              Filters & Sort
            </h1>
            <button
              onClick={clearAllFilters}
              className="text-sm text-[#3164E6] font-bold active:scale-95 transition-transform"
            >
              Clear All
            </button>
          </div>
          {activeCount > 0 && (
            <div className="flex items-center gap-2 mt-2">
              <div className="w-6 h-6 bg-[#3164E6] text-white rounded-full flex items-center justify-center text-xs font-bold">
                {activeCount}
              </div>
              <span className="text-sm text-gray-600">Active filter{activeCount !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="pt-32 px-6 space-y-6">
        {/* Sort By - Single Line */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#3164E6]" />
            Sort By
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {SORT_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedSort(option.id)}
                className={`px-3 py-3 rounded-xl border-2 transition-all active:scale-95 ${
                  selectedSort === option.id
                    ? 'bg-blue-50 border-[#3164E6]'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-xl mb-1">{option.icon}</div>
                <div className={`text-xs font-bold ${
                  selectedSort === option.id ? 'text-[#3164E6]' : 'text-gray-900'
                }`}>
                  {option.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Job Categories */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3">Job Categories</h3>
          <div className="flex flex-wrap gap-2">
            {JOB_CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategories.includes(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all active:scale-95 ${
                    isSelected
                      ? 'bg-blue-50 border-[#3164E6]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-[#3164E6]' : category.color
                  }`}>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : ''}`} />
                  </div>
                  <span className={`text-sm font-medium ${
                    isSelected ? 'text-[#3164E6]' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </span>
                  {isSelected && (
                    <CheckCircle className="w-4 h-4 text-[#3164E6]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pay Range - Simple Single Slider */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[#3164E6]" />
            Pay Range
          </h3>
          <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-bold text-[#3164E6]">${payRange.min}</div>
              <div className="text-sm text-gray-500">to</div>
              <div className="text-lg font-bold text-[#3164E6]">${payRange.max}</div>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={payRange.max}
              onChange={(e) => setPayRange({ min: 10, max: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3164E6]"
            />
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-500">$10/hr</span>
              <span className="text-xs text-gray-500">$50/hr</span>
            </div>
          </div>
        </div>

        {/* Distance - Single Line */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#3164E6]" />
            Distance
          </h3>
          <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Within</span>
              <div className="text-lg font-bold text-[#3164E6]">{selectedDistance} km</div>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={selectedDistance}
              onChange={(e) => setSelectedDistance(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3164E6]"
            />
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-500">1 km</span>
              <span className="text-xs text-gray-500">50+ km</span>
            </div>
          </div>
        </div>

        {/* Date Range - Calendar Inputs */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#3164E6]" />
            Date Range
          </h3>
          <div className="bg-white rounded-xl p-4 border-2 border-gray-200 space-y-3">
            <div>
              <label className="text-xs text-gray-600 mb-2 block">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-2 block">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>

        {/* Duration - Compact */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#3164E6]" />
            Shift Duration
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {DURATION_OPTIONS.map((duration) => {
              const isSelected = selectedDurations.includes(duration.id);
              return (
                <button
                  key={duration.id}
                  onClick={() => toggleDuration(duration.id)}
                  className={`px-3 py-3 rounded-xl border-2 transition-all active:scale-95 ${
                    isSelected
                      ? 'bg-blue-50 border-[#3164E6]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className={`text-sm font-bold mb-1 ${
                    isSelected ? 'text-[#3164E6]' : 'text-gray-900'
                  }`}>
                    {duration.label}
                  </div>
                  <div className="text-xs text-gray-500">{duration.duration}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Verified Jobs Only */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3">Additional Options</h3>
          <button
            onClick={() => setVerifiedOnly(!verifiedOnly)}
            className={`w-full flex items-center justify-between px-4 py-4 rounded-xl border-2 transition-all active:scale-[0.98] ${
              verifiedOnly
                ? 'bg-green-50 border-green-500'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                verifiedOnly ? 'bg-green-500' : 'bg-gray-100'
              }`}>
                <CheckCircle className={`w-6 h-6 ${verifiedOnly ? 'text-white' : 'text-gray-400'}`} />
              </div>
              <div className="text-left">
                <div className={`text-sm font-medium ${
                  verifiedOnly ? 'text-green-700' : 'text-gray-900'
                }`}>
                  Verified Jobs Only
                </div>
                <div className="text-xs text-gray-500">Show only verified employers</div>
              </div>
            </div>
            <div className={`w-12 h-6 rounded-full transition-colors ${
              verifiedOnly ? 'bg-green-500' : 'bg-gray-300'
            }`}>
              <div className={`w-5 h-5 bg-white rounded-full transition-transform mt-0.5 ${
                verifiedOnly ? 'ml-6' : 'ml-0.5'
              }`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Fixed Bottom Apply Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('browse-jobs')}
            className="flex-1 py-4 bg-gray-100 text-gray-900 rounded-xl font-bold text-sm active:scale-[0.98] transition-transform"
          >
            Cancel
          </button>
          <button
            onClick={applyFilters}
            className="flex-1 py-4 bg-[#3164E6] text-white rounded-xl font-bold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            Apply Filters
            {activeCount > 0 && (
              <div className="w-6 h-6 bg-white text-[#3164E6] rounded-full flex items-center justify-center text-xs font-bold">
                {activeCount}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
