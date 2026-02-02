import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';

export function AdminAnalytics() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics & Reports</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
            <CardDescription>Monthly revenue trends</CardDescription>
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

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>New user registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {[420, 680, 520, 890, 1100, 1250].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-600 rounded-t-lg hover:bg-blue-700 transition-colors"
                    style={{ height: `${(value / 1500) * 100}%` }}
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                  </p>
                  <p className="text-xs font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'Graphic Design', orders: 245, revenue: '$45,600' },
              { name: 'Web Development', orders: 189, revenue: '$38,200' },
              { name: 'Video Editing', orders: 156, revenue: '$28,900' },
            ].map((cat, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-semibold">{cat.name}</p>
                  <p className="text-sm text-gray-600">{cat.orders} orders</p>
                </div>
                <p className="font-bold text-green-600">{cat.revenue}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Sellers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'Sarah Johnson', orders: 45, revenue: '$11,250' },
              { name: 'Mike Chen', orders: 32, revenue: '$8,400' },
              { name: 'Emma Davis', orders: 28, revenue: '$7,200' },
            ].map((seller, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-semibold">{seller.name}</p>
                  <p className="text-sm text-gray-600">{seller.orders} completed orders</p>
                </div>
                <p className="font-bold text-green-600">{seller.revenue}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
