import { useState } from 'react';
import { ClientHome } from './client/ClientHome';
import { ClientSearch } from './client/ClientSearch';
import { ClientBookings } from './client/ClientBookings';
import { ClientMessages } from './client/ClientMessages';
import { ClientProfile } from './client/ClientProfile';
import { ClientAuth } from './client/ClientAuth';
import { ClientServiceDetails } from './client/ClientServiceDetails';
import { ClientBookingFlow } from './client/ClientBookingFlow';
import { ClientOrderTracking } from './client/ClientOrderTracking';
import { Home, Search, Calendar, MessageCircle, User } from 'lucide-react';

export type ClientRoute = 
  | 'auth'
  | 'home'
  | 'search'
  | 'bookings'
  | 'messages'
  | 'profile'
  | 'service-details'
  | 'booking-flow'
  | 'order-tracking';

interface ClientUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
}

interface ClientAppState {
  currentRoute: ClientRoute;
  currentUser: ClientUser | null;
  selectedServiceId?: string;
  selectedOrderId?: string;
}

export default function ClientApp() {
  const [appState, setAppState] = useState<ClientAppState>({
    currentRoute: 'auth',
    currentUser: null,
  });

  const navigate = (route: ClientRoute, params?: { serviceId?: string; orderId?: string }) => {
    setAppState(prev => ({
      ...prev,
      currentRoute: route,
      selectedServiceId: params?.serviceId,
      selectedOrderId: params?.orderId,
    }));
  };

  const login = (user: ClientUser) => {
    setAppState(prev => ({
      ...prev,
      currentUser: user,
      currentRoute: 'home',
    }));
  };

  const logout = () => {
    setAppState({
      currentRoute: 'auth',
      currentUser: null,
    });
  };

  const renderPage = () => {
    const { currentRoute, currentUser, selectedServiceId, selectedOrderId } = appState;

    // Auth required routes
    if (!currentUser && currentRoute !== 'auth') {
      return <ClientAuth navigate={navigate} login={login} />;
    }

    switch (currentRoute) {
      case 'auth':
        return <ClientAuth navigate={navigate} login={login} />;
      case 'home':
        return <ClientHome navigate={navigate} currentUser={currentUser!} />;
      case 'search':
        return <ClientSearch navigate={navigate} currentUser={currentUser!} />;
      case 'bookings':
        return <ClientBookings navigate={navigate} currentUser={currentUser!} />;
      case 'messages':
        return <ClientMessages navigate={navigate} currentUser={currentUser!} />;
      case 'profile':
        return <ClientProfile navigate={navigate} currentUser={currentUser!} logout={logout} />;
      case 'service-details':
        return <ClientServiceDetails navigate={navigate} currentUser={currentUser!} serviceId={selectedServiceId!} />;
      case 'booking-flow':
        return <ClientBookingFlow navigate={navigate} currentUser={currentUser!} serviceId={selectedServiceId!} />;
      case 'order-tracking':
        return <ClientOrderTracking navigate={navigate} currentUser={currentUser!} orderId={selectedOrderId!} />;
      default:
        return <ClientHome navigate={navigate} currentUser={currentUser!} />;
    }
  };

  const showBottomNav = appState.currentUser && !['auth', 'service-details', 'booking-flow', 'order-tracking'].includes(appState.currentRoute);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Mobile Phone Frame */}
      <div className="relative w-[430px] h-[932px] bg-black rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-50"></div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div className="w-full h-full overflow-y-auto">
            {renderPage()}
          </div>

          {/* Bottom Navigation */}
          {showBottomNav && (
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom">
              <div className="flex items-center justify-around h-20 px-4">
                <button
                  onClick={() => navigate('home')}
                  className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                    appState.currentRoute === 'home' ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  <Home className="w-6 h-6" />
                  <span className="text-xs">Home</span>
                </button>
                <button
                  onClick={() => navigate('search')}
                  className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                    appState.currentRoute === 'search' ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  <Search className="w-6 h-6" />
                  <span className="text-xs">Search</span>
                </button>
                <button
                  onClick={() => navigate('bookings')}
                  className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                    appState.currentRoute === 'bookings' ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  <Calendar className="w-6 h-6" />
                  <span className="text-xs">Bookings</span>
                </button>
                <button
                  onClick={() => navigate('messages')}
                  className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                    appState.currentRoute === 'messages' ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-xs">Messages</span>
                </button>
                <button
                  onClick={() => navigate('profile')}
                  className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                    appState.currentRoute === 'profile' ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  <User className="w-6 h-6" />
                  <span className="text-xs">Profile</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}