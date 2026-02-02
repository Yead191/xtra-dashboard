import { useState } from 'react';
import { ClientRoute } from '../ClientApp';
import { Search, MapPin, Star, TrendingUp, Wrench, Palette, Camera, Scissors, Car, Home as HomeIcon, ChevronRight } from 'lucide-react';

interface ClientHomeProps {
  navigate: (route: ClientRoute, params?: any) => void;
  currentUser: any;
}

const categories = [
  { id: 1, name: 'Home Repair', icon: Wrench, color: 'bg-blue-100 text-blue-600' },
  { id: 2, name: 'Cleaning', icon: HomeIcon, color: 'bg-green-100 text-green-600' },
  { id: 3, name: 'Design', icon: Palette, color: 'bg-purple-100 text-purple-600' },
  { id: 4, name: 'Photography', icon: Camera, color: 'bg-pink-100 text-pink-600' },
  { id: 5, name: 'Beauty', icon: Scissors, color: 'bg-yellow-100 text-yellow-600' },
  { id: 6, name: 'Automotive', icon: Car, color: 'bg-red-100 text-red-600' },
];

const featuredServices = [
  {
    id: '1',
    title: 'Professional House Cleaning',
    provider: 'CleanPro Services',
    rating: 4.9,
    reviews: 234,
    price: 49,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    badge: 'Top Rated',
  },
  {
    id: '2',
    title: 'AC Repair & Maintenance',
    provider: 'CoolAir Experts',
    rating: 4.8,
    reviews: 189,
    price: 79,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    badge: 'Fast Service',
  },
  {
    id: '3',
    title: 'Interior Design Consultation',
    provider: 'DesignStudio Co',
    rating: 5.0,
    reviews: 156,
    price: 120,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop',
    badge: 'Premium',
  },
];

const popularServices = [
  {
    id: '4',
    title: 'Plumbing Services',
    provider: 'QuickFix Plumbing',
    rating: 4.7,
    price: 65,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=200&h=200&fit=crop',
  },
  {
    id: '5',
    title: 'Electrical Work',
    provider: 'Sparkle Electric',
    rating: 4.8,
    price: 55,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=200&fit=crop',
  },
];

export function ClientHome({ navigate, currentUser }: ClientHomeProps) {
  const [location, setLocation] = useState('New York, NY');

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-blue-100 text-sm">Welcome back,</p>
            <h2 className="text-white text-2xl">{currentUser.name}</h2>
          </div>
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-white mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Search Bar */}
        <button
          onClick={() => navigate('search')}
          className="w-full bg-white rounded-2xl px-4 py-4 flex items-center gap-3 shadow-lg"
        >
          <Search className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Search for services...</span>
        </button>
      </div>

      {/* Categories */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg">Categories</h3>
          <button className="text-blue-600 text-sm">See All</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => navigate('search')}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center`}>
                <category.icon className="w-7 h-7" />
              </div>
              <span className="text-xs text-center text-gray-700">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg">Featured Services</h3>
          <button className="text-blue-600 text-sm">See All</button>
        </div>
        <div className="space-y-4">
          {featuredServices.map((service) => (
            <button
              key={service.id}
              onClick={() => navigate('service-details', { serviceId: service.id })}
              className="w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs">
                  {service.badge}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-left mb-1">{service.title}</h4>
                <p className="text-gray-500 text-sm text-left mb-3">{service.provider}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{service.rating}</span>
                    <span className="text-gray-400 text-sm">({service.reviews})</span>
                  </div>
                  <div className="text-blue-600">
                    <span className="text-lg">${service.price}</span>
                    <span className="text-sm">/hr</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Services */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg">Trending Now</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {popularServices.map((service) => (
            <button
              key={service.id}
              onClick={() => navigate('service-details', { serviceId: service.id })}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h4 className="text-sm text-left mb-1 line-clamp-1">{service.title}</h4>
                <p className="text-gray-500 text-xs text-left mb-2 line-clamp-1">{service.provider}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{service.rating}</span>
                  </div>
                  <span className="text-blue-600 text-sm">${service.price}/hr</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}