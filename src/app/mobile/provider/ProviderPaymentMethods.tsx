import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, CreditCard } from 'lucide-react';

interface ProviderPaymentMethodsProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

export function ProviderPaymentMethods({ navigate, currentUser }: ProviderPaymentMethodsProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Payment Methods</h1>
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Visa •••• 1234</p>
            <p className="text-sm text-gray-500">Expires 12/25</p>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Default</span>
        </div>
        
        <button className="w-full bg-blue-50 border-2 border-dashed border-blue-300 text-[#3164E6] py-4 rounded-2xl font-bold">
          + Add New Card
        </button>
      </div>
    </div>
  );
}