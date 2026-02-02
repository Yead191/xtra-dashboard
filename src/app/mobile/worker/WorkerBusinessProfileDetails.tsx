import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { 
  ArrowLeft, Star, MapPin, Clock, Building,
  Heart, Briefcase, CheckCircle, Calendar,
  MessageSquare, Phone, Mail, Shield, TrendingUp,
  ChevronDown, ChevronUp, Store, DollarSign, Users
} from 'lucide-react';

interface WorkerBusinessProfileDetailsProps {
  navigate: (route: WorkerRoute, jobId?: string) => void;
  businessId: string;
  currentUser: any;
}

// Mock business data
const businessData: { [key: string]: any } = {
  'B001': {
    id: 'B001',
    businessName: 'Sunset Bistro',
    ownerName: 'Robert Martinez',
    logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    rating: 4.8,
    reviewCount: 234,
    totalJobsPosted: 156,
    category: 'Restaurant & Hospitality',
    memberSince: 'Aug 2023',
    responseTime: '15 min avg',
    distance: '3.2 km',
    verified: true,
    address: '123 Sunset Blvd, Downtown',
    phone: '(555) 123-4567',
    email: 'contact@sunsetbistro.com',
    description: 'Upscale dining establishment specializing in contemporary American cuisine. We value professionalism, punctuality, and excellent customer service from our team members.',
    workEnvironment: ['Fast-Paced', 'Professional', 'Team-Oriented', 'Customer-Focused'],
    benefits: ['Competitive Pay', 'Flexible Hours', 'Tips', 'Staff Meals'],
    avgPayRate: '$18-22/hr',
    totalWorkers: 45,
    repeatHireRate: 78,
    paymentOnTime: 98,
    activeJobs: 3,
    badges: ['Verified Business', 'Top Employer', 'Quick Payer'],
    reviews: [
      {
        id: 'R001',
        workerName: 'Sarah J.',
        workerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        rating: 5,
        date: '5 days ago',
        comment: 'Great place to work! Management is respectful and the team is supportive. Pay is always on time and tips are good.',
        jobType: 'Waiter',
        verified: true
      },
      {
        id: 'R002',
        workerName: 'Mike T.',
        workerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        rating: 4,
        date: '2 weeks ago',
        comment: 'Professional environment. The shifts can be demanding during peak hours but overall a good experience.',
        jobType: 'Event Staff',
        verified: true
      },
      {
        id: 'R003',
        workerName: 'Emma R.',
        workerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Excellent employer! Clear communication, fair treatment, and prompt payment. Would definitely work here again!',
        jobType: 'Waiter',
        verified: true
      }
    ],
    recentJobs: [
      { 
        id: 'J101',
        title: 'Waiter for Weekend Brunch',
        date: 'Tomorrow',
        time: '9:00 AM - 3:00 PM',
        pay: '$20/hr',
        applicants: 12,
        status: 'hiring'
      },
      { 
        id: 'J102',
        title: 'Evening Server',
        date: 'Jan 22',
        time: '5:00 PM - 11:00 PM',
        pay: '$18/hr + tips',
        applicants: 8,
        status: 'hiring'
      },
      { 
        id: 'J103',
        title: 'Event Staff - Private Party',
        date: 'Jan 25',
        time: '6:00 PM - 12:00 AM',
        pay: '$22/hr',
        applicants: 15,
        status: 'hiring'
      }
    ]
  },
  'B002': {
    id: 'B002',
    businessName: 'Grand Events Co',
    ownerName: 'Jennifer Williams',
    logo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
    rating: 4.9,
    reviewCount: 187,
    totalJobsPosted: 98,
    category: 'Events & Catering',
    memberSince: 'Jan 2024',
    responseTime: '10 min avg',
    distance: '5.1 km',
    verified: true,
    address: '456 Events Plaza, Midtown',
    phone: '(555) 987-6543',
    email: 'hr@grandevents.com',
    description: 'Premier event planning and catering company serving corporate and private events. We seek reliable, professional staff who excel in high-pressure environments.',
    workEnvironment: ['Event-Based', 'Dynamic', 'Professional', 'High-Energy'],
    benefits: ['Premium Pay', 'Weekend Work', 'Networking Opportunities', 'Growth Potential'],
    avgPayRate: '$22-28/hr',
    totalWorkers: 67,
    repeatHireRate: 85,
    paymentOnTime: 100,
    activeJobs: 5,
    badges: ['Verified Business', 'Premium Employer', 'Fast Response'],
    reviews: [],
    recentJobs: []
  },
  'B003': {
    id: 'B003',
    businessName: 'Metro Mall Security',
    ownerName: 'David Thompson',
    logo: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400',
    rating: 4.6,
    reviewCount: 142,
    totalJobsPosted: 203,
    category: 'Security Services',
    memberSince: 'May 2023',
    responseTime: '20 min avg',
    distance: '6.8 km',
    verified: true,
    address: '789 Shopping Center, Northside',
    phone: '(555) 456-7890',
    email: 'security@metromall.com',
    description: 'Leading security provider for commercial properties. We require certified, vigilant professionals committed to maintaining safe environments.',
    workEnvironment: ['Structured', 'Safety-Focused', 'Protocol-Driven', 'Team Support'],
    benefits: ['Consistent Shifts', 'Training Provided', 'Certification Support', 'Career Path'],
    avgPayRate: '$20-25/hr',
    totalWorkers: 89,
    repeatHireRate: 72,
    paymentOnTime: 95,
    activeJobs: 7,
    badges: ['Verified Business', 'Reliable Employer'],
    reviews: [],
    recentJobs: []
  }
};

export function WorkerBusinessProfileDetails({ navigate, businessId, currentUser }: WorkerBusinessProfileDetailsProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'jobs'>('overview');

  const business = businessData[businessId] || businessData['B001'];

  const handleContact = () => {
    alert(`Contact ${business.businessName} via messaging`);
  };

  const handleApplyToJob = (jobId: string) => {
    navigate('job-details', jobId);
  };

  const displayedReviews = showAllReviews ? business.reviews : business.reviews.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 px-6 pt-12 pb-6">
        <button
          onClick={() => navigate('home')}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 active:scale-95 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Business Header Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              {business.logo ? (
                <img
                  src={business.logo}
                  alt={business.businessName}
                  className="w-20 h-20 rounded-2xl object-cover"
                />
              ) : (
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Store className="w-10 h-10 text-[#3164E6]" />
                </div>
              )}
              {business.verified && (
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold text-gray-900 mb-1">{business.businessName}</h1>
              <p className="text-sm text-gray-600 mb-2">{business.ownerName}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-sm text-gray-900">{business.rating}</span>
                </div>
                <span className="text-sm text-gray-600">({business.reviewCount} reviews)</span>
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

          {/* Category Badge */}
          <div className="mb-4 pb-4 border-b border-gray-100">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-[#3164E6] font-medium px-3 py-1.5 rounded-lg text-sm">
              <Building className="w-4 h-4" />
              {business.category}
            </span>
          </div>

          {/* Badges */}
          {business.badges && business.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-gray-100">
              {business.badges.map((badge: string) => (
                <div key={badge} className="flex items-center gap-1 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 px-3 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span className="text-xs font-bold text-purple-700">{badge}</span>
                </div>
              ))}
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-[#3164E6]">{business.totalJobsPosted}</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-wide font-bold">Jobs Posted</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-green-600">{business.paymentOnTime}%</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-wide font-bold">On-Time Pay</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-purple-600">{business.repeatHireRate}%</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-wide font-bold">Repeat Hire</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <button
            onClick={handleContact}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3164E6] text-white font-bold text-sm shadow-lg shadow-blue-200 active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            Message Business
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
            onClick={() => setActiveTab('jobs')}
            className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'jobs'
                ? 'bg-[#3164E6] text-white'
                : 'text-gray-600'
            }`}
          >
            Jobs ({business.activeJobs})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 space-y-4">
        {activeTab === 'overview' && (
          <>
            {/* About */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">About the Business</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{business.description}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{business.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Member since {business.memberSince}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Response time: {business.responseTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{business.distance} from your location</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-3">
                <a href={`tel:${business.phone}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#3164E6]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm font-medium text-gray-900">{business.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-900">{business.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Work Environment */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Work Environment</h3>
              <div className="flex flex-wrap gap-2">
                {business.workEnvironment.map((env: string) => (
                  <div key={env} className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                    <CheckCircle className="w-3 h-3 text-[#3164E6]" />
                    <span className="text-xs font-medium text-blue-700">{env}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Benefits & Perks</h3>
              <div className="space-y-2">
                {business.benefits.map((benefit: string) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Employer Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">On-Time Payment Rate</span>
                    <span className="font-bold text-gray-900">{business.paymentOnTime}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: `${business.paymentOnTime}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Worker Repeat Hire Rate</span>
                    <span className="font-bold text-gray-900">{business.repeatHireRate}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-[#3164E6] rounded-full"
                      style={{ width: `${business.repeatHireRate}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Average Pay</p>
                  <p className="text-lg font-bold text-green-600">{business.avgPayRate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Total Workers</p>
                  <p className="text-lg font-bold text-[#3164E6]">{business.totalWorkers}</p>
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
                    <span className="text-4xl font-bold text-gray-900">{business.rating}</span>
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600">{business.reviewCount} worker reviews</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-600 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-bold text-sm">Excellent</span>
                  </div>
                  <p className="text-xs text-gray-600">Top rated employer</p>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            {business.reviews.length > 0 ? (
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900">Worker Reviews</h3>
                {displayedReviews.map((review: any) => (
                  <div key={review.id} className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={review.workerAvatar}
                        alt={review.workerName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900">{review.workerName}</h4>
                          {review.verified && (
                            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
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

                {business.reviews.length > 2 && (
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
                        Show All {business.reviews.length} Reviews
                      </>
                    )}
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <Star className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">No reviews yet</h3>
                <p className="text-sm text-gray-500">Reviews from workers will appear here.</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'jobs' && (
          <>
            {business.recentJobs && business.recentJobs.length > 0 ? (
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900">Active Job Postings</h3>
                {business.recentJobs.map((job: any) => (
                  <div key={job.id} className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">{job.title}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{job.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{job.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            <span className="font-bold text-green-600">{job.pay}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          job.status === 'hiring' 
                            ? 'bg-green-50 text-green-600' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {job.status === 'hiring' ? 'Hiring' : 'Closed'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Users className="w-3 h-3" />
                        <span>{job.applicants} applicants</span>
                      </div>
                      <button
                        onClick={() => handleApplyToJob(job.id)}
                        className="px-4 py-2 bg-[#3164E6] text-white rounded-xl font-bold text-sm active:scale-95 transition-transform"
                      >
                        View Job
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">No active jobs</h3>
                <p className="text-sm text-gray-500">This business doesn't have any active job postings right now.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
