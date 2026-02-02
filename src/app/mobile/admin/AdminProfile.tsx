import { Settings, LogOut } from 'lucide-react';

interface AdminProfileProps {
  navigate: (route: any) => void;
  currentUser: any;
}

export function AdminProfile({ navigate, currentUser }: AdminProfileProps) {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Profile</h1>

      <div className="flex items-center gap-4 py-4">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold">
          A
        </div>
        <div>
          <h2 className="text-xl font-bold">{currentUser.name}</h2>
          <p className="text-gray-500">{currentUser.email}</p>
          <span className="inline-block mt-1 px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
            Super Admin
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <button className="w-full flex items-center justify-between p-4 bg-white border rounded-xl">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Settings</span>
          </div>
        </button>
        <button className="w-full flex items-center justify-between p-4 bg-white border rounded-xl text-red-600">
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
}
