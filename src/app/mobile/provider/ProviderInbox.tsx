import { ProviderRoute } from '../ProviderApp';
import { MessageSquare } from 'lucide-react';

interface ProviderInboxProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

export function ProviderInbox({ navigate, currentUser }: ProviderInboxProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
      </div>
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No messages yet</p>
        </div>
      </div>
    </div>
  );
}
