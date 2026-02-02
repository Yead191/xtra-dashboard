import { useState } from 'react';
import { Search, Bell, MessageSquare, ShoppingBag, Clock, CheckCircle, Star, TrendingUp, Package, User as UserIcon } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Route, User } from '../../App';
import { Progress } from '../../components/ui/progress';

interface UserDashboardProps {
  navigate: (route: Route, params?: any) => void;
  currentUser: User;
  logout: () => void;
}

const recentOrders = [
  {
    id: 'ORDER-001',
    service: 'Mobile UI/UX design or app UI design',
    provider: 'Sarah Johnson',
    providerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    status: 'in_progress',
    progress: 65,
    deadline: '2 days',
    price: 250,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=150&fit=crop',
  },
  {
    id: 'ORDER-002',
    service: 'Professional Logo Design',
    provider: 'Mike Chen',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    status: 'completed',
    progress: 100,
    deadline: 'Delivered',
    price: 150,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&h=150&fit=crop',
  },
  {
    id: 'ORDER-003',
    service: 'SEO Content Writing Package',
    provider: 'Emma Davis',
    providerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    status: 'pending',
    progress: 10,
    deadline: '5 days',
    price: 120,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=150&fit=crop',
  },
];

const recommendedServices = [
  {
    id: '5',
    title: 'Social Media Management',
    provider: 'Jessica Brown',
    rating: 4.9,
    reviews: 89,
    price: 300,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop',
  },
  {
    id: '6',
    title: 'Product Photography',
    provider: 'David Lee',
    rating: 5.0,
    reviews: 156,
    price: 200,
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=300&h=200&fit=crop',
  },
  {
    id: '7',
    title: 'Video Editing Pro',
    provider: 'Rachel Green',
    rating: 4.8,
    reviews: 234,
    price: 350,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop',
  },
];

const stats = [
  { label: 'Active Orders', value: '2', icon: ShoppingBag, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { label: 'Completed', value: '12', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' },
  { label: 'In Progress', value: '1', icon: Clock, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  { label: 'Total Spent', value: '$2.4k', icon: TrendingUp, color: 'text-purple-600', bgColor: 'bg-purple-100' },
];

export function UserDashboard({ navigate, currentUser, logout }: UserDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-xl">ServiceHub</span>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <Button variant="ghost" onClick={() => navigate('user-dashboard')}>
                  Dashboard
                </Button>
                <Button variant="ghost" onClick={() => navigate('home')}>
                  Browse Services
                </Button>
                <Button variant="ghost" onClick={() => navigate('messages')}>
                  Messages
                </Button>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
              <Button variant="ghost" className="flex items-center gap-2" onClick={() => navigate('user-profile')}>
                <Avatar className="w-8 h-8">
                  <AvatarImage src={currentUser.avatar} />
                  <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline">{currentUser.name}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {currentUser.name}! 👋
          </h1>
          <p className="text-gray-600">Here's what's happening with your orders today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Track and manage your service orders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate('order-tracking', { orderId: order.id })}
                  >
                    <div className="flex gap-4">
                      <img
                        src={order.image}
                        alt={order.service}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1 line-clamp-1">{order.service}</h3>
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={order.providerAvatar} />
                                <AvatarFallback>{order.provider[0]}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-gray-600">{order.provider}</span>
                            </div>
                          </div>
                          <Badge
                            variant={order.status === 'completed' ? 'default' : order.status === 'in_progress' ? 'secondary' : 'outline'}
                            className={
                              order.status === 'completed' 
                                ? 'bg-green-100 text-green-700' 
                                : order.status === 'in_progress' 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-gray-100 text-gray-700'
                            }
                          >
                            {order.status.replace('_', ' ')}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{order.progress}%</span>
                          </div>
                          <Progress value={order.progress} className="h-2" />
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {order.deadline}
                            </span>
                            <span className="font-semibold text-green-600">${order.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full" onClick={() => navigate('home')}>
                  Browse More Services
                </Button>
              </CardContent>
            </Card>

            {/* Recommended Services */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Based on your previous orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {recommendedServices.map((service) => (
                    <div
                      key={service.id}
                      className="border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => navigate('service-details', { serviceId: service.id })}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h4 className="font-semibold text-sm mb-2 line-clamp-2">{service.title}</h4>
                        <div className="flex items-center gap-1 text-xs mb-2">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{service.rating}</span>
                          <span className="text-gray-500">({service.reviews})</span>
                        </div>
                        <p className="text-sm">
                          <span className="text-gray-600">From</span>{' '}
                          <span className="font-bold text-green-600">${service.price}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('home')}>
                  <Search className="w-4 h-4 mr-2" />
                  Find Services
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('messages')}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Messages
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('user-profile')}>
                  <UserIcon className="w-4 h-4 mr-2" />
                  My Profile
                </Button>
              </CardContent>
            </Card>

            {/* Activity Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { action: 'Order completed', detail: 'Logo Design', time: '2 hours ago', icon: CheckCircle, color: 'text-green-600' },
                  { action: 'New message', detail: 'From Sarah Johnson', time: '5 hours ago', icon: MessageSquare, color: 'text-blue-600' },
                  { action: 'Order started', detail: 'UI/UX Design', time: '1 day ago', icon: Package, color: 'text-orange-600' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-8 h-8 ${activity.color} bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.detail}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our support team is here to assist you 24/7
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
