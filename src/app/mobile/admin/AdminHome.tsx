import { Users, DollarSign, ShoppingBag, TrendingUp, Bell } from 'lucide-react';

interface AdminHomeProps {
  navigate: (route: any) => void;
  currentUser: any;
}

export function AdminHome({ navigate, currentUser }: AdminHomeProps) {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Welcome back, {currentUser.name}</p>
        </div>
        <button className="p-2 bg-gray-100 rounded-full">
          <Bell className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">12.5k</p>
          <p className="text-sm text-gray-600">Total Users</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold">$245k</p>
          <p className="text-sm text-gray-600">Revenue</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-xl">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
            <ShoppingBag className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-2xl font-bold">1,234</p>
          <p className="text-sm text-gray-600">Active Orders</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold">+23%</p>
          <p className="text-sm text-gray-600">Growth</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white border rounded-xl">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <p className="font-medium text-sm">New user registration</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
