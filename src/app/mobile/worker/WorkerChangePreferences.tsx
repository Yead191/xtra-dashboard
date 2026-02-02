import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Utensils, Hammer, Users, Heart, GraduationCap, Package, Truck, Briefcase, Home, ShoppingBag, Wrench, Baby, Dog, Camera, Music, Check } from 'lucide-react';

interface WorkerChangePreferencesProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

const jobCategories = [
  { id: 'hospitality', name: 'Hospitality & Events', icon: Utensils, color: 'bg-orange-500' },
  { id: 'construction', name: 'Construction & Labor', icon: Hammer, color: 'bg-yellow-600' },
  { id: 'retail', name: 'Retail & Sales', icon: ShoppingBag, color: 'bg-pink-500' },
  { id: 'healthcare', name: 'Healthcare & Nursing', icon: Heart, color: 'bg-red-500' },
  { id: 'education', name: 'Education & Tutoring', icon: GraduationCap, color: 'bg-blue-500' },
  { id: 'warehouse', name: 'Warehouse & Logistics', icon: Package, color: 'bg-indigo-600' },
  { id: 'delivery', name: 'Delivery & Transport', icon: Truck, color: 'bg-green-600' },
  { id: 'office', name: 'Office & Admin', icon: Briefcase, color: 'bg-gray-600' },
  { id: 'cleaning', name: 'Cleaning & Maintenance', icon: Home, color: 'bg-teal-500' },
  { id: 'technical', name: 'Technical Services', icon: Wrench, color: 'bg-purple-600' },
  { id: 'childcare', name: 'Childcare & Babysitting', icon: Baby, color: 'bg-rose-400' },
  { id: 'petcare', name: 'Pet Care', icon: Dog, color: 'bg-amber-500' },
  { id: 'creative', name: 'Creative & Media', icon: Camera, color: 'bg-violet-500' },
  { id: 'entertainment', name: 'Entertainment', icon: Music, color: 'bg-fuchsia-500' },
  { id: 'other', name: 'Other Services', icon: Users, color: 'bg-slate-500' },
];

export function WorkerChangePreferences({ navigate, currentUser }: WorkerChangePreferencesProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(currentUser.categories || []);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSave = () => {
    if (selectedCategories.length === 0) {
      alert('Please select at least one job category');
      return;
    }
    // In production: API call to update preferences
    alert(`Preferences updated! ${selectedCategories.length} categories selected.`);
    navigate('profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-gray-900">Job Preferences</h1>
            <p className="text-xs text-gray-500">{selectedCategories.length} categories selected</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5">
          <h4 className="font-bold text-blue-900 text-sm mb-2">Select Your Job Interests</h4>
          <p className="text-sm text-blue-800 leading-relaxed">
            Choose all categories that match your skills and interests. You'll receive job alerts based on these preferences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-3">
          {jobCategories.map((category) => {
            const isSelected = selectedCategories.includes(category.id);
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`relative p-4 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? 'border-[#3164E6] bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#3164E6] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className={`text-sm font-bold text-center leading-tight ${
                  isSelected ? 'text-[#3164E6]' : 'text-gray-700'
                }`}>
                  {category.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Save Button */}
        <div className="sticky bottom-0 pt-4 pb-2 bg-gray-50">
          <button
            onClick={handleSave}
            disabled={selectedCategories.length === 0}
            className={`w-full py-4 rounded-2xl font-bold text-white transition-all ${
              selectedCategories.length > 0
                ? 'bg-[#3164E6] hover:bg-blue-700 shadow-lg shadow-blue-200'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
