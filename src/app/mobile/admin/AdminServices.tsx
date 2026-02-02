import { Search, Plus, Warehouse, Truck, Sparkles, HardHat, Utensils, ShoppingBag, Tractor, Box, Wrench } from 'lucide-react';

interface AdminServicesProps {
  navigate: (route: any) => void;
  currentUser: any;
}

const SERVICES = [
  { name: 'Warehouse', providers: 154, price: '$18-30/hr', icon: Warehouse },
  { name: 'Delivery', providers: 320, price: '$20-45/trip', icon: Truck },
  { name: 'Cleaning', providers: 245, price: '$25-50/hr', icon: Sparkles },
  { name: 'Construction', providers: 98, price: '$30-60/hr', icon: HardHat },
  { name: 'Hospitality', providers: 180, price: '$15-25/hr', icon: Utensils },
  { name: 'Retail', providers: 110, price: '$16-22/hr', icon: ShoppingBag },
  { name: 'Agriculture', providers: 65, price: '$18-28/hr', icon: Tractor },
  { name: 'Moving', providers: 140, price: '$35-70/hr', icon: Box },
  { name: 'General Labor', providers: 400, price: '$20-40/hr', icon: Wrench },
];

export function AdminServices({ navigate, currentUser }: AdminServicesProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Service Categories</h1>
          <button className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors">
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>
      </div>

      {/* Services List */}
      <div className="p-4 space-y-3">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-sm font-bold text-purple-600">{service.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500 rounded-full" 
                      style={{ width: `${Math.random() * 40 + 40}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{service.providers} providers</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
