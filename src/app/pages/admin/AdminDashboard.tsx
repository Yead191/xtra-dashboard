import { Users, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';

const stats = [
  { label: 'Total Users', value: '12,458', change: '+12%', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { label: 'Total Revenue', value: '$245,890', change: '+18%', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
  { label: 'Active Orders', value: '1,234', change: '+8%', icon: ShoppingBag, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  { label: 'Growth Rate', value: '23.5%', change: '+5%', icon: TrendingUp, color: 'text-purple-600', bgColor: 'bg-purple-100' },
];

const recentActivity = [
  { user: 'Sarah Johnson', action: 'Completed order #4816', time: '2 mins ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { user: 'Mike Chen', action: 'New service created', time: '15 mins ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { user: 'Emma Davis', action: 'Withdrew $500', time: '1 hour ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
];

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              <p className="text-sm text-green-600">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-2">
                {[12000, 18500, 15000, 22000, 28000, 24589].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-green-600 rounded-t-lg hover:bg-green-700 transition-colors"
                      style={{ height: `${(value / 30000) * 100}%` }}
                    />
                    <p className="text-xs text-gray-600 mt-2">
                      {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                    </p>
                    <p className="text-xs font-semibold">${(value / 1000).toFixed(1)}k</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback>{activity.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
