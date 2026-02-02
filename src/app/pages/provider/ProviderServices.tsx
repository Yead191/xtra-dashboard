import { useState } from 'react';
import { ArrowLeft, Plus, Edit, Trash2, Eye, MoreVertical } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Route, User } from '../../App';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { toast } from 'sonner';

interface ProviderServicesProps {
  navigate: (route: Route, params?: any) => void;
  currentUser: User;
}

const services = [
  {
    id: '1',
    title: 'Mobile UI/UX Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    basePrice: 150,
    orders: 45,
    views: 1234,
    rating: 4.9,
    status: 'active',
  },
  {
    id: '2',
    title: 'Professional Logo Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    basePrice: 100,
    orders: 32,
    views: 890,
    rating: 5.0,
    status: 'active',
  },
  {
    id: '3',
    title: 'Brand Identity Package',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    basePrice: 300,
    orders: 18,
    views: 567,
    rating: 4.8,
    status: 'paused',
  },
];

export function ProviderServices({ navigate, currentUser }: ProviderServicesProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate('provider-dashboard')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 mr-2" />
              Create New Service
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Services</h1>
          <p className="text-gray-600">Manage and optimize your service listings</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <Badge className={`absolute top-3 right-3 ${
                  service.status === 'active' ? 'bg-green-600' : 'bg-gray-600'
                }`}>
                  {service.status}
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold line-clamp-2">{service.title}</h3>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => toast.info('Edit service')}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toast.info('View analytics')}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Analytics
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => toast.info('Delete service')}>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-600">Orders</p>
                    <p className="font-semibold">{service.orders}</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-600">Views</p>
                    <p className="font-semibold">{service.views}</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-600">Rating</p>
                    <p className="font-semibold">{service.rating}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="text-xl font-bold text-green-600">${service.basePrice}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
