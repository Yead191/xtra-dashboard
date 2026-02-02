interface AdminAnalyticsProps {
  navigate: (route: any) => void;
  currentUser: any;
}

export function AdminAnalytics({ navigate, currentUser }: AdminAnalyticsProps) {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      
      <div className="bg-white p-4 rounded-xl border shadow-sm">
        <h3 className="font-bold mb-4">Revenue Overview</h3>
        <div className="h-48 flex items-end justify-between gap-2">
          {[40, 60, 45, 70, 55, 80].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-purple-600 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
              <span className="text-xs text-gray-500">{['M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border shadow-sm">
        <h3 className="font-bold mb-4">User Growth</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">New Users</span>
            <span className="font-bold">+125</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-blue-500" />
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-600">New Providers</span>
            <span className="font-bold">+43</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[40%] bg-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
