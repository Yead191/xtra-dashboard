import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { ChevronLeft, Star, Check } from 'lucide-react';

interface ProviderRateWorkerProps {
  navigate: (route: ProviderRoute) => void;
  jobId: string;
  currentUser: any;
}

const quickTags = [
  'Professional',
  'On-Time',
  'Quality Work',
  'Good Communication',
  'Friendly',
  'Hardworking',
  'Reliable',
  'Skilled',
];

export function ProviderRateWorker({ navigate, jobId, currentUser }: ProviderRateWorkerProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [review, setReview] = useState('');
  const [wouldHireAgain, setWouldHireAgain] = useState(true);

  const job = {
    title: 'Private Nurse',
    worker: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
    },
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }

    alert('Thank you for your feedback!');
    navigate('my-jobs');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-32">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <button 
          onClick={() => navigate('my-jobs')}
          className="text-gray-600 flex items-center gap-2 mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Rate Worker</h2>
      </div>

      <div className="p-6">
        {/* Worker Info */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 text-center">
          <img 
            src={job.worker.avatar} 
            alt={job.worker.name}
            className="w-24 h-24 rounded-2xl object-cover mx-auto mb-4"
          />
          <h3 className="font-bold text-gray-900 text-lg mb-1">{job.worker.name}</h3>
          <p className="text-gray-600">{job.title}</p>
        </div>

        {/* Star Rating */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 text-center mb-4">How was your experience?</h3>
          
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <Star 
                  className={`w-12 h-12 ${
                    star <= (hoverRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>

          {rating > 0 && (
            <p className="text-center text-gray-600 font-medium">
              {rating === 1 && 'Poor'}
              {rating === 2 && 'Fair'}
              {rating === 3 && 'Good'}
              {rating === 4 && 'Very Good'}
              {rating === 5 && 'Excellent'}
            </p>
          )}
        </div>

        {/* Quick Tags */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-3">Quick Tags (Optional)</h3>
          
          <div className="flex flex-wrap gap-2">
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-[#3164E6] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Written Review */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-3">Written Review (Optional)</h3>
          
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share more about your experience..."
            rows={4}
            className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3164E6] outline-none resize-none"
          />
        </div>

        {/* Would Hire Again */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Would you hire {job.worker.name} again?</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setWouldHireAgain(true)}
              className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                wouldHireAgain
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-200 bg-white text-gray-600'
              }`}
            >
              <Check className={`w-6 h-6 mx-auto mb-2 ${wouldHireAgain ? 'text-green-600' : 'text-gray-400'}`} />
              Yes
            </button>
            <button
              onClick={() => setWouldHireAgain(false)}
              className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                !wouldHireAgain
                  ? 'border-red-600 bg-red-50 text-red-700'
                  : 'border-gray-200 bg-white text-gray-600'
              }`}
            >
              <ChevronLeft className={`w-6 h-6 mx-auto mb-2 rotate-180 ${!wouldHireAgain ? 'text-red-600' : 'text-gray-400'}`} />
              No
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
        <div className="max-w-[430px] mx-auto space-y-3">
          <button
            onClick={handleSubmit}
            disabled={rating === 0}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all ${
              rating === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3164E6] text-white shadow-blue-200 active:scale-[0.98]'
            }`}
          >
            Submit Review
          </button>
          <button
            onClick={() => navigate('my-jobs')}
            className="w-full text-gray-500 font-medium"
          >
            Skip for Now
          </button>
        </div>
      </div>
    </div>
  );
}