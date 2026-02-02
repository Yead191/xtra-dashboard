import { Search, MoreVertical, UserCheck, UserX, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { toast } from 'sonner';

const users = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah@example.com', role: 'business', status: 'active', orders: 45, revenue: '$4200', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { id: '2', name: 'Mike Chen', email: 'mike@example.com', role: 'business', status: 'active', orders: 32, revenue: '$3500', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: '3', name: 'John Smith', email: 'john@example.com', role: 'worker', status: 'active', orders: 12, revenue: '$2400', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
  { id: '4', name: 'Emma Davis', email: 'emma@example.com', role: 'business', status: 'suspended', orders: 18, revenue: '$1800', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
];

export function AdminUsers() {
  const UserCard = ({ user }: { user: typeof users[0] }) => (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toast.info('View user details')}>
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info('Send email')}>
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </DropdownMenuItem>
              {user.status === 'active' ? (
                <DropdownMenuItem className="text-red-600" onClick={() => toast.info('User suspended')}>
                  <UserX className="w-4 h-4 mr-2" />
                  Suspend User
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem className="text-green-600" onClick={() => toast.info('User activated')}>
                  <UserCheck className="w-4 h-4 mr-2" />
                  Activate User
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Badge className={user.role === 'business' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}>
            {user.role}
          </Badge>
          <Badge className={user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
            {user.status}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600">Orders</p>
            <p className="font-semibold">{user.orders}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600">Revenue</p>
            <p className="font-semibold text-green-600">{user.revenue}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search users..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="businesses">Businesses</TabsTrigger>
          <TabsTrigger value="workers">Workers</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => <UserCard key={user.id} user={user} />)}
        </TabsContent>

        <TabsContent value="businesses" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.filter(u => u.role === 'business').map(user => <UserCard key={user.id} user={user} />)}
        </TabsContent>

        <TabsContent value="workers" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.filter(u => u.role === 'worker').map(user => <UserCard key={user.id} user={user} />)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
