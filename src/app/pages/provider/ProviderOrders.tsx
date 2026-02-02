import { ArrowLeft, Filter } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Route, User } from '../../App';
import { Progress } from '../../components/ui/progress';

interface ProviderOrdersProps {
  navigate: (route: Route, params?: any) => void;
  currentUser: User;
}

const allOrders = [
  {
    id: 'ORD-4816',
    client: 'John Smith',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    service: 'Mobile UI/UX Design - Standard Package',
    progress: 65,
    deadline: '2 days',
    amount: 250,
    status: 'active',
    date: 'Dec 28, 2025',
  },
  {
    id: 'ORD-4817',
    client: 'Emma Wilson',
    clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    service: 'Logo Design - Premium Package',
    progress: 30,
    deadline: '5 days',
    amount: 450,
    status: 'active',
    date: 'Dec 29, 2025',
  },
  {
    id: 'ORD-4800',
    client: 'David Lee',
    clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    service: 'Brand Identity Design',
    progress: 100,
    deadline: 'Completed',
    amount: 350,
    status: 'completed',
    date: 'Dec 15, 2025',
  },
];

export function ProviderOrders({ navigate, currentUser }: ProviderOrdersProps) {
  const activeOrders = allOrders.filter(o => o.status === 'active');
  const completedOrders = allOrders.filter(o => o.status === 'completed');

  const OrderCard = ({ order }: { order: typeof allOrders[0] }) => (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={order.clientAvatar} />
              <AvatarFallback>{order.client[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{order.client}</p>
              <p className="text-sm text-gray-600">{order.id}</p>
            </div>
          </div>
          <Badge className={order.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}>
            {order.status}
          </Badge>
        </div>
        <h4 className="font-medium mb-2">{order.service}</h4>
        {order.status === 'active' && (
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span>{order.progress}%</span>
            </div>
            <Progress value={order.progress} className="h-2" />
          </div>
        )}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{order.status === 'completed' ? 'Completed' : `Due: ${order.deadline}`}</span>
          <span className="font-semibold text-green-600">${order.amount}</span>
        </div>
        <div className="mt-3 pt-3 border-t">
          <Button size="sm" className="w-full bg-green-600 hover:bg-green-700" onClick={() => navigate('messages')}>
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate('provider-dashboard')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        <Tabs defaultValue="active">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Active ({activeOrders.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedOrders.length})</TabsTrigger>
            <TabsTrigger value="all">All Orders ({allOrders.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeOrders.map(order => <OrderCard key={order.id} order={order} />)}
          </TabsContent>

          <TabsContent value="completed" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedOrders.map(order => <OrderCard key={order.id} order={order} />)}
          </TabsContent>

          <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allOrders.map(order => <OrderCard key={order.id} order={order} />)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
