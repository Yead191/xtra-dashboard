import { useState } from 'react';
import { ClientRoute } from '../ClientApp';
import { Search, SlidersHorizontal, MapPin, Star, X } from 'lucide-react';

interface ClientSearchProps {
  navigate: (route: ClientRoute, params?: any) => void;
  currentUser: any;
}

const allServices = [
  {
    id: '1',
    title: 'Professional House Cleaning',
    provider: 'CleanPro Services',
    category: 'Cleaning',
    rating: 4.9,
    reviews: 234,
    price: 49,
    distance: '2.3 km',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop',
  },
  {
    id: '2',
    title: 'AC Repair & Maintenance',
    provider: 'CoolAir Experts',
    category: 'Home Repair',
    rating: 4.8,
    reviews: 189,
    price: 79,
    distance: '1.5 km',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop',
  },
  {
    id: '3',
    title: 'Interior Design Consultation',
    provider: 'DesignStudio Co',
    category: 'Design',
    rating: 5.0,
    reviews: 156,
    price: 120,
    distance: '3.7 km',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=200&fit=crop',
  },
  {
    id: '4',
    title: 'Plumbing Services',
    provider: 'QuickFix Plumbing',
    category: 'Home Repair',
    rating: 4.7,
    reviews: 98,
    price: 65,
    distance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=300&h=200&fit=crop',
  },
  {
    id: '5',
    title: 'Car Detailing Service',
    provider: 'AutoShine Pro',
    category: 'Automotive',
    rating: 4.9,
    reviews: 145,
    price: 89,
    distance: '4.1 km',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=300&h=200&fit=crop',
  },
  {
    id: '6',
    title: 'Professional Photography',
    provider: 'SnapMasters Studio',
    category: 'Photography',
    rating: 4.8,
    reviews: 201,
    price: 150,
    distance: '2.8 km',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=300&h=200&fit=crop',
  },
];

const recentSearches = ['House Cleaning', 'Plumbing', 'AC Repair'];
const popularSearches = ['Electrician', 'Painter', 'Carpenter', 'Moving Service'];

export function ClientSearch({ navigate, currentUser }: ClientSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: 'All',
    rating: 'All',
    distance: 'All',
  });

  const filteredServices = allServices.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showResults = searchQuery.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
        <h2 className="text-2xl mb-4">Search Services</h2>
        
        {/* Search Bar */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for services..."
              className="w-full pl-12 pr-10 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Active Filters */}
        {(filters.category !== 'All' || filters.priceRange !== 'All') && (
          <div className="flex gap-2 flex-wrap">
            {filters.category !== 'All' && (
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {filters.category}
                <button onClick={() => setFilters({ ...filters, category: 'All' })}>
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            {filters.priceRange !== 'All' && (
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {filters.priceRange}
                <button onClick={() => setFilters({ ...filters, priceRange: 'All' })}>
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-100 px-6 py-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 outline-none"
              >
                <option>All</option>
                <option>Home Repair</option>
                <option>Cleaning</option>
                <option>Design</option>
                <option>Photography</option>
                <option>Automotive</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 outline-none"
              >
                <option>All</option>
                <option>Under $50</option>
                <option>$50 - $100</option>
                <option>$100 - $200</option>
                <option>Above $200</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setFilters({ category: 'All', priceRange: 'All', rating: 'All', distance: 'All' })}
                className="flex-1 py-3 border border-gray-200 rounded-xl"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-6 py-6">
        {!showResults ? (
          <>
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm text-gray-500 mb-3">Recent Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(search)}
                      className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div>
              <h3 className="text-sm text-gray-500 mb-3">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(search)}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Results Header */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </p>
              <button className="text-sm text-blue-600">Sort by</button>
            </div>

            {/* Results List */}
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => navigate('service-details', { serviceId: service.id })}
                  className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4 p-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 text-left">
                      <h4 className="mb-1 line-clamp-1">{service.title}</h4>
                      <p className="text-gray-500 text-sm mb-2">{service.provider}</p>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <MapPin className="w-3 h-3" />
                          <span>{service.distance}</span>
                        </div>
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
          </>
        )}
      </div>
    </div>
  );
}
