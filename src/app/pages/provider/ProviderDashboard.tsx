import { useState } from 'react';
import { DollarSign, Package, TrendingUp, Star, Bell, Plus, MessageSquare, Eye } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Route, User } from '../../App';
import { Progress } from '../../components/ui/progress';

interface ProviderDashboardProps {
  navigate: (route: Route, params?: any) => void;
  currentUser: User;
  logout: () => void;
}

const stats = [
  { label: 'Total Earnings', value: '$4,200', change: '+12%', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
  { label: 'Active Orders', value: '8', change: '+3', icon: Package, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { label: 'This Month', value: '$1,850', change: '+18%', icon: TrendingUp, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { label: 'Avg Rating', value: '4.9', change: '127 reviews', icon: Star, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
];

const activeOrders = [
  {
    id: 'ORD-4816',
    client: 'John Smith',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    service: 'Mobile UI/UX Design - Standard Package',
    progress: 65,
    deadline: '2 days',
    amount: 250,
    status: 'in_progress',
  },
  {
    id: 'ORD-4817',
    client: 'Emma Wilson',
    clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    service: 'Logo Design - Premium Package',
    progress: 30,
    deadline: '5 days',
    amount: 450,
    status: 'in_progress',
  },
  {
    id: 'ORD-4818',
    client: 'Michael Brown',
    clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    service: 'Brand Identity Design',
    progress: 90,
    deadline: 'Tomorrow',
    amount: 350,
    status: 'review',
  },
];

export function ProviderDashboard({ navigate, currentUser, logout }: ProviderDashboardProps) {
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
                <Button variant="ghost" onClick={() => navigate('provider-dashboard')}>
                  Dashboard
                </Button>
                <Button variant="ghost" onClick={() => navigate('provider-services')}>
                  My Services
                </Button>
                <Button variant="ghost" onClick={() => navigate('provider-orders')}>
                  Orders
                </Button>
                <Button variant="ghost" onClick={() => navigate('provider-earnings')}>
                  Earnings
                </Button>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
              <Button variant="ghost" className="flex items-center gap-2" onClick={() => navigate('provider-profile')}>
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {currentUser.name}! 👋
            </h1>
            <p className="text-gray-600">Here's your business overview for today</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700" onClick={() => navigate('provider-services')}>
            <Plus className="w-4 h-4 mr-2" />
            Create Service
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Orders */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Active Orders</CardTitle>
                    <CardDescription>Manage your ongoing projects</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => navigate('provider-orders')}>
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={order.clientAvatar} />
                          <AvatarFallback>{order.client[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{order.client}</h4>
                          <p className="text-sm text-gray-600">{order.service}</p>
                        </div>
                      </div>
                      <Badge className={order.status === 'review' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}>
                        {order.status === 'review' ? 'In Review' : 'In Progress'}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{order.progress}%</span>
                      </div>
                      <Progress value={order.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Due: {order.deadline}</span>
                        <span className="font-semibold text-green-600">${order.amount}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1" onClick={() => navigate('messages')}>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        Update Progress
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Your earnings over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[420, 680, 520, 890, 1100, 1850].map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-green-600 rounded-t-lg transition-all hover:bg-green-700"
                        style={{ height: `${(value / 2000) * 100}%` }}
                      />
                      <p className="text-xs text-gray-600 mt-2">
                        {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                      </p>
                      <p className="text-xs font-semibold">${value}</p>
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
                <Button className="w-full justify-start bg-green-600 hover:bg-green-700" onClick={() => navigate('provider-services')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Service
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('messages')}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  View Messages
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('provider-earnings')}>
                  <DollarSign className="w-4 h-4 mr-2" />
                  Withdraw Earnings
                </Button>
              </CardContent>
            </Card>

            {/* Service Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Service Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Mobile UI/UX Design', views: 1234, orders: 45, rating: 4.9 },
                  { name: 'Logo Design', views: 890, orders: 32, rating: 5.0 },
                  { name: 'Brand Identity', views: 567, orders: 18, rating: 4.8 },
                ].map((service, index) => (
                  <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                    <h4 className="font-semibold text-sm mb-2">{service.name}</h4>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          Views
                        </span>
                        <span className="font-semibold">{service.views}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Package className="w-3 h-3" />
                          Orders
                        </span>
                        <span className="font-semibold">{service.orders}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          Rating
                        </span>
                        <span className="font-semibold">{service.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Boost Your Sales</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Respond to client messages within 1 hour to improve your ranking and get more orders.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
