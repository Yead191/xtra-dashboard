import { useState } from 'react';
import { ClientRoute } from '../ClientApp';
import { ArrowLeft, Star, MapPin, Clock, Award, Shield, Heart, Share2, MessageCircle } from 'lucide-react';

interface ClientServiceDetailsProps {
  navigate: (route: ClientRoute, params?: any) => void;
  currentUser: any;
  serviceId: string;
}

const serviceData = {
  '1': {
    id: '1',
    title: 'Professional House Cleaning',
    provider: 'CleanPro Services',
    providerAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    rating: 4.9,
    reviews: 234,
    completedJobs: 450,
    price: 49,
    duration: '2-3 hours',
    description: 'Professional house cleaning service with eco-friendly products. Our experienced team ensures your home is spotless and sanitized. We cover all areas including kitchen, bathrooms, bedrooms, and living spaces.',
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
    ],
    features: [
      'Eco-friendly cleaning products',
      'Background-checked staff',
      '100% satisfaction guarantee',
      'Flexible scheduling',
    ],
    availability: ['Mon-Fri: 8 AM - 6 PM', 'Sat-Sun: 9 AM - 4 PM'],
    location: '2.3 km away',
  },
};

export function ClientServiceDetails({ navigate, currentUser, serviceId }: ClientServiceDetailsProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const service = serviceData[serviceId as keyof typeof serviceData] || serviceData['1'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative">
        {/* Image Slider */}
        <div className="relative h-80 bg-gray-200">
          <img
            src={service.images[activeImageIndex]}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6">
            <button
              onClick={() => navigate('home')}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {service.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 pb-32">
        {/* Title & Provider */}
        <div className="mb-6">
          <h1 className="text-2xl mb-2">{service.title}</h1>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={service.providerAvatar}
              alt={service.provider}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-gray-900">{service.provider}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Award className="w-3 h-3" />
                <span>{service.completedJobs} jobs completed</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg">{service.rating}</span>
              <span className="text-gray-500">({service.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{service.location}</span>
            </div>
          </div>
        </div>

        {/* Price & Duration */}
        <div className="bg-blue-50 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Starting from</p>
              <p className="text-3xl text-blue-600">${service.price}<span className="text-lg">/hr</span></p>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{service.duration}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg mb-3">About This Service</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-lg mb-3">What's Included</h3>
          <div className="space-y-3">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h3 className="text-lg mb-3">Availability</h3>
          <div className="space-y-2">
            {service.availability.map((time, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Shield className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-gray-900">Verified Provider</p>
              <p className="text-sm">Background checked and insured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 safe-area-bottom">
        <div className="max-w-[430px] mx-auto flex gap-3">
          <button
            onClick={() => navigate('messages')}
            className="w-14 h-14 border-2 border-blue-600 rounded-2xl flex items-center justify-center text-blue-600"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate('booking-flow', { serviceId: service.id })}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
