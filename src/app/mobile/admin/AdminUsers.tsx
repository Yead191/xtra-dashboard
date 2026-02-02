import { Search, MoreVertical } from 'lucide-react';

interface AdminUsersProps {
  navigate: (route: any) => void;
  currentUser: any;
}

export function AdminUsers({ navigate, currentUser }: AdminUsersProps) {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-white border rounded-xl">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <p className="font-medium">User Name {i}</p>
              <p className="text-sm text-gray-500">user{i}@example.com</p>
            </div>
            <button className="p-2 text-gray-400">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
