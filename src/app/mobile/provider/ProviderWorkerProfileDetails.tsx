import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { 
  ArrowLeft, Star, MapPin, Clock, DollarSign, TrendingUp,
  Heart, Briefcase, CheckCircle, Calendar, Award,
  MessageSquare, Phone, Mail, Shield, AlertTriangle,
  ThumbsUp, TrendingDown, ChevronDown, ChevronUp
} from 'lucide-react';

interface ProviderWorkerProfileDetailsProps {
  navigate: (route: ProviderRoute, jobId?: string, workerId?: string) => void;
  workerId: string;
  currentUser: any;
}

// Extended mock worker data
const workerData: { [key: string]: any } = {
  'W001': {
    id: 'W001',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 4.9,
    reviewCount: 147,
    completedJobs: 89,
    categories: ['Waiter', 'Event Staff', 'Bartender'],
    memberSince: 'Jan 2024',
    responseTime: '5 min avg',
    distance: '2.3 km',
    verified: true,
    reliability: 98,
    onTimeRate: 99,
    completionRate: 97,
    bio: 'Experienced hospitality professional with 3+ years in event service. Passionate about creating memorable experiences for guests. CPR certified and ServSafe trained.',
    skills: ['Professional Service', 'Event Coordination', 'Customer Relations', 'Food Safety', 'Team Player'],
    languages: ['English', 'Spanish'],
    certifications: ['ServSafe Certified', 'CPR/First Aid', 'Alcohol Service'],
    availability: 'Weekends & Evenings',
    hourlyRate: '$18-22',
    totalEarned: 8450,
    lastActive: '2 hours ago',
    badges: ['Top Performer', 'Quick Responder', 'Highly Rated'],
    reviews: [
      {
        id: 'R001',
        businessName: 'Sunset Bistro',
        businessLogo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100',
        rating: 5,
        date: '2 days ago',
        comment: 'Sarah was absolutely fantastic! Professional, punctual, and went above and beyond. Guests loved her service. Will definitely hire again!',
        jobType: 'Waiter'
      },
      {
        id: 'R002',
        businessName: 'Grand Events Co',
        businessLogo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=100',
        rating: 5,
        date: '1 week ago',
        comment: 'Excellent work ethic and great attitude. Handled a large wedding reception smoothly.',
        jobType: 'Event Staff'
      },
      {
        id: 'R003',
        businessName: 'Downtown Cafe',
        businessLogo: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=100',
        rating: 4,
        date: '2 weeks ago',
        comment: 'Very professional but arrived 10 minutes late due to traffic. Otherwise perfect service.',
        jobType: 'Waiter'
      }
    ],
    jobHistory: [
      { date: 'Jan 15, 2026', business: 'Sunset Bistro', type: 'Waiter', hours: 6, earned: 120, rating: 5 },
      { date: 'Jan 12, 2026', business: 'Grand Events Co', type: 'Event Staff', hours: 8, earned: 160, rating: 5 },
      { date: 'Jan 8, 2026', business: 'Plaza Restaurant', type: 'Waiter', hours: 5, earned: 100, rating: 4 },
    ]
  },
  'W002': {
    id: 'W002',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.8,
    reviewCount: 98,
    completedJobs: 56,
    categories: ['Security', 'Warehouse Worker'],
    memberSince: 'Mar 2024',
    responseTime: '12 min avg',
    distance: '4.1 km',
    verified: true,
    reliability: 95,
    onTimeRate: 96,
    completionRate: 98,
    bio: 'Dedicated security professional with military background. Focused on maintaining safe environments and excellent crisis management skills.',
    skills: ['Security Protocols', 'Conflict Resolution', 'Surveillance', 'Emergency Response'],
    languages: ['English', 'Mandarin'],
    certifications: ['Security License', 'First Responder'],
    availability: 'Night Shifts Available',
    hourlyRate: '$20-25',
    totalEarned: 5680,
    lastActive: '1 day ago',
    badges: ['Reliable', 'Verified Pro'],
    reviews: [
      {
        id: 'R004',
        businessName: 'Metro Mall',
        businessLogo: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=100',
        rating: 5,
        date: '3 days ago',
        comment: 'Michael is extremely professional and vigilant. Great asset to our security team.',
        jobType: 'Security'
      }
    ],
    jobHistory: []
  },
  'W003': {
    id: 'W003',
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5.0,
    reviewCount: 203,
    completedJobs: 124,
    categories: ['Nurse', 'Caregiver'],
    memberSince: 'Nov 2023',
    responseTime: '3 min avg',
    distance: '1.8 km',
    verified: true,
    reliability: 100,
    onTimeRate: 100,
    completionRate: 100,
    bio: 'Registered nurse with 5 years experience in home healthcare. Compassionate, detail-oriented, and committed to providing excellent patient care.',
    skills: ['Patient Care', 'Medical Administration', 'Vital Monitoring', 'Elderly Care', 'CPR'],
    languages: ['English', 'Spanish', 'Portuguese'],
    certifications: ['RN License', 'BLS Certified', 'Hospice Care'],
    availability: 'Flexible Schedule',
    hourlyRate: '$28-35',
    totalEarned: 12340,
    lastActive: '30 min ago',
    badges: ['Top Performer', '5-Star Excellence', 'Quick Responder', 'Verified Pro'],
    reviews: [],
    jobHistory: []
  }
};

export function ProviderWorkerProfileDetails({ navigate, workerId, currentUser }: ProviderWorkerProfileDetailsProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'history'>('overview');

  const worker = workerData[workerId] || workerData['W001'];

  const handleHireWorker = () => {
    navigate('rebook-worker', undefined, workerId);
  };

  const handleContact = () => {
    alert(`Contact ${worker.name} via messaging`);
  };

  const displayedReviews = showAllReviews ? worker.reviews : worker.reviews.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 px-6 pt-12 pb-6">
        <button
          onClick={() => navigate('my-workers')}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 active:scale-95 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Worker Header Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <img
                src={worker.avatar}
                alt={worker.name}
                className="w-20 h-20 rounded-2xl object-cover"
              />
              {worker.verified && (
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold text-gray-900 mb-1">{worker.name}</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-sm text-gray-900">{worker.rating}</span>
                </div>
                <span className="text-sm text-gray-600">({worker.reviewCount} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {worker.categories.slice(0, 2).map((cat: string) => (
                  <span key={cat} className="text-xs bg-blue-50 text-[#3164E6] font-medium px-2 py-1 rounded-lg">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isFavorite
                  ? 'bg-red-50 text-red-500'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
            </button>
          </div>

          {/* Badges */}
          {worker.badges && worker.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-gray-100">
              {worker.badges.map((badge: string) => (
                <div key={badge} className="flex items-center gap-1 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 px-3 py-1 rounded-full">
                  <Award className="w-3 h-3 text-purple-600" />
                  <span className="text-xs font-bold text-purple-700">{badge}</span>
                </div>
              ))}
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-[#3164E6]">{worker.completedJobs}</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-wide font-bold">Jobs Done</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-green-600">{worker.onTimeRate}%</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-wide font-bold">On Time</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-purple-600">{worker.reliability}%</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-wide font-bold">Reliable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-lg grid grid-cols-2 gap-3">
          <button
            onClick={handleContact}
            className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-[#3164E6] text-[#3164E6] font-bold text-sm active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            Message
          </button>
          <button
            onClick={handleHireWorker}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3164E6] text-white font-bold text-sm shadow-lg shadow-blue-200 active:scale-95 transition-transform"
          >
            <Briefcase className="w-4 h-4" />
            Hire Now
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-4">
        <div className="flex gap-2 bg-white rounded-2xl p-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'overview'
                ? 'bg-[#3164E6] text-white'
                : 'text-gray-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'reviews'
                ? 'bg-[#3164E6] text-white'
                : 'text-gray-600'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'history'
                ? 'bg-[#3164E6] text-white'
                : 'text-gray-600'
            }`}
          >
            History
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 space-y-4">
        {activeTab === 'overview' && (
          <>
            {/* About */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">About</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{worker.bio}</p>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Since {worker.memberSince}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{worker.responseTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{worker.distance} away</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>{worker.hourlyRate}/hr</span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Performance Metrics</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Reliability Score</span>
                    <span className="font-bold text-gray-900">{worker.reliability}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-[#3164E6] rounded-full"
                      style={{ width: `${worker.reliability}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">On-Time Rate</span>
                    <span className="font-bold text-gray-900">{worker.onTimeRate}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: `${worker.onTimeRate}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Completion Rate</span>
                    <span className="font-bold text-gray-900">{worker.completionRate}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{ width: `${worker.completionRate}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {worker.skills.map((skill: string) => (
                  <div key={skill} className="flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-medium text-green-700">{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-gray-900 mb-3 mt-4">Certifications</h3>
              <div className="space-y-2">
                {worker.certifications.map((cert: string) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-[#3164E6]" />
                    </div>
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Languages</p>
                  <p className="text-sm text-gray-900">{worker.languages.join(', ')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Availability</p>
                  <p className="text-sm text-gray-900">{worker.availability}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Total Earned</p>
                  <p className="text-lg font-bold text-green-600">${worker.totalEarned.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Last Active</p>
                  <p className="text-sm text-gray-900">{worker.lastActive}</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'reviews' && (
          <>
            {/* Rating Summary */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-4xl font-bold text-gray-900">{worker.rating}</span>
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600">{worker.reviewCount} reviews</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-600 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-bold text-sm">Excellent</span>
                  </div>
                  <p className="text-xs text-gray-600">Top 5% of workers</p>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            {worker.reviews.length > 0 ? (
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900">Recent Reviews</h3>
                {displayedReviews.map((review: any) => (
                  <div key={review.id} className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={review.businessLogo}
                        alt={review.businessName}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900">{review.businessName}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < review.rating
                                    ? 'text-yellow-500 fill-yellow-500'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                        {review.jobType}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                ))}

                {worker.reviews.length > 2 && (
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="w-full py-3 rounded-xl border-2 border-gray-200 font-bold text-sm text-gray-700 flex items-center justify-center gap-2"
                  >
                    {showAllReviews ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Show All {worker.reviews.length} Reviews
                      </>
                    )}
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <Star className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">No reviews yet</h3>
                <p className="text-sm text-gray-500">Be the first to review this worker!</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'history' && (
          <>
            {worker.jobHistory && worker.jobHistory.length > 0 ? (
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900">Job History</h3>
                {worker.jobHistory.map((job: any, index: number) => (
                  <div key={index} className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{job.business}</h4>
                        <p className="text-sm text-gray-600">{job.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">${job.earned}</p>
                        <p className="text-xs text-gray-500">{job.hours}h</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{job.date}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-sm">{job.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">No job history available</h3>
                <p className="text-sm text-gray-500">Completed jobs with you will appear here.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
