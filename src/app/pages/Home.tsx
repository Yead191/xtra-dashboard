import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, TrendingUp, Shield, Zap, User, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

// Mock currentUser for display purposes
const currentUser = null;

const categories = [
  { id: '1', name: 'General Labor', icon: '🏗️', count: 245, color: 'bg-purple-100 text-purple-700' },
  { id: '2', name: 'Construction', icon: '👷', count: 189, color: 'bg-blue-100 text-blue-700' },
  { id: '3', name: 'Warehouse', icon: '📦', count: 312, color: 'bg-green-100 text-green-700' },
  { id: '4', name: 'Delivery', icon: '🚚', count: 156, color: 'bg-orange-100 text-orange-700' },
];

const features = [
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Your payments are protected with industry-standard encryption',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your projects completed on time, every time',
  },
  {
    icon: Star,
    title: 'Top Rated Sellers',
    description: 'Work with verified professionals with proven track records',
  },
  {
    icon: TrendingUp,
    title: 'Quality Guaranteed',
    description: 'Money-back guarantee if you\'re not satisfied',
  },
];

export function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl">WorkConnect</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Browse Jobs</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">For Businesses</a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('/auth')}>
                Sign In
              </Button>
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => navigate('/auth')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-50" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
                🎉 Over 10,000+ Shifts Available
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get Matched With{' '}
                <span className="text-green-600 bg-clip-text">Temporary Work</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with businesses for flexible shifts. From warehouse to delivery, 
                find the perfect match for your schedule.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-xl p-2 flex gap-2 max-w-2xl mb-8">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search for jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button 
                  className="bg-green-600 hover:bg-green-700 px-8" 
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Categories</h2>
              <p className="text-gray-600">Explore jobs by category</p>
            </div>
            <Button variant="ghost" className="text-green-600">
              View All →
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} jobs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
