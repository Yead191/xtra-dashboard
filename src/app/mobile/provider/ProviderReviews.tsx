import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ChevronLeft, Star, ThumbsUp, Filter, MessageSquare, 
  User, Calendar, ChevronDown 
} from 'lucide-react';

interface ProviderReviewsProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

// Mock Reviews Data
const MOCK_REVIEWS = [
  {
    id: 'R001',
    workerName: 'Sarah Johnson',
    workerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 5.0,
    date: 'Dec 12, 2025',
    jobTitle: 'Event Waiter',
    comment: 'Great experience working with this venue. Clear instructions and timely payment. Would definitely work here again!',
    tags: ['Professional', 'Good Pay', 'Friendly Team'],
  },
  {
    id: 'R002',
    workerName: 'Michael Chen',
    workerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.0,
    date: 'Dec 10, 2025',
    jobTitle: 'Security Guard',
    comment: 'Good shift overall, but the break room was a bit crowded. Management was supportive though.',
    tags: ['Supportive Management'],
  },
  {
    id: 'R003',
    workerName: 'Emma Rodriguez',
    workerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5.0,
    date: 'Nov 28, 2025',
    jobTitle: 'Private Nurse',
    comment: 'Excellent environment. The family was very welcoming and the patient was easy to care for.',
    tags: ['Great Environment', 'Kind Family'],
  },
  {
    id: 'R004',
    workerName: 'David Kim',
    workerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    rating: 3.0,
    date: 'Nov 15, 2025',
    jobTitle: 'Dishwasher',
    comment: 'Very busy shift. Hard to keep up with the pace, but paid well.',
    tags: ['Fast Paced', 'Good Pay'],
  },
];

export function ProviderReviews({ navigate, currentUser }: ProviderReviewsProps) {
  const [filter, setFilter] = useState<'all' | '5star' | 'critical'>('all');
  
  const stats = {
    average: currentUser.rating || 4.7,
    total: MOCK_REVIEWS.length,
    breakdown: {
      5: 75,
      4: 15,
      3: 5,
      2: 3,
      1: 2,
    }
  };

  const filteredReviews = MOCK_REVIEWS.filter(review => {
    if (filter === '5star') return review.rating === 5;
    if (filter === 'critical') return review.rating < 4;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-6">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">My Reviews</h1>
        </div>
      </div>

      {/* Rating Overview */}
      <div className="bg-white px-6 py-8 mb-4">
        <div className="flex items-center gap-8 mb-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-1">{stats.average.toFixed(1)}</h2>
            <div className="flex items-center gap-1 justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-4 h-4 ${star <= Math.round(stats.average) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} 
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">{stats.total} Reviews</p>
          </div>

          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-xs font-bold w-3 text-gray-500">{star}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${stats.breakdown[star as keyof typeof stats.breakdown]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              filter === 'all' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setFilter('5star')}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              filter === '5star' 
                ? 'bg-yellow-400 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            5 Stars Only
          </button>
          <button
            onClick={() => setFilter('critical')}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              filter === 'critical' 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Critical
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="px-6 space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img 
                  src={review.workerAvatar} 
                  alt={review.workerName} 
                  className="w-10 h-10 rounded-full object-cover border border-gray-100"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{review.workerName}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{review.date}</span>
                    <span>•</span>
                    <span>{review.jobTitle}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-bold text-yellow-700">{review.rating.toFixed(1)}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              "{review.comment}"
            </p>

            <div className="flex flex-wrap gap-2">
              {review.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-md uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900">No reviews found</h3>
            <p className="text-gray-500 text-sm">Try changing your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
