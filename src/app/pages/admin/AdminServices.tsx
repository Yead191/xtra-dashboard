import { Search, MoreVertical, Eye, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { toast } from 'sonner';

const services = [
  { id: '1', title: 'Mobile UI/UX Design', provider: 'Sarah Johnson', status: 'approved', orders: 45, revenue: '$11,250', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop' },
  { id: '2', title: 'Professional Logo Design', provider: 'Mike Chen', status: 'approved', orders: 32, revenue: '$4,800', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=200&fit=crop' },
  { id: '3', title: 'Brand Identity Package', provider: 'Emma Davis', status: 'pending', orders: 0, revenue: '$0', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop' },
];

export function AdminServices() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Services Management</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search services..." className="pl-10" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <div className="relative h-40">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <Badge className={`absolute top-3 right-3 ${
                service.status === 'approved' ? 'bg-green-600' : 'bg-yellow-600'
              }`}>
                {service.status}
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600">by {service.provider}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => toast.info('View details')}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    {service.status === 'pending' && (
                      <DropdownMenuItem className="text-green-600" onClick={() => toast.success('Service approved')}>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="text-red-600" onClick={() => toast.error('Service rejected')}>
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-gray-50 p-2 rounded text-center">
                  <p className="text-xs text-gray-600">Orders</p>
                  <p className="font-semibold">{service.orders}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                  <p className="text-xs text-gray-600">Revenue</p>
                  <p className="font-semibold text-green-600">{service.revenue}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
