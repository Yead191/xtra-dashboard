import { useState } from 'react';
import { Home, Users, Briefcase, BarChart2, User } from 'lucide-react';
import { AdminHome } from './admin/AdminHome';
import { AdminUsers } from './admin/AdminUsers';
import { AdminServices } from './admin/AdminServices';
import { AdminAnalytics } from './admin/AdminAnalytics';
import { AdminProfile } from './admin/AdminProfile';

export type AdminRoute = 
  | 'home'
  | 'users'
  | 'services'
  | 'analytics'
  | 'profile';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin';
}

interface AdminAppState {
  currentRoute: AdminRoute;
  currentUser: AdminUser | null;
}

export default function AdminApp() {
  const [appState, setAppState] = useState<AdminAppState>({
    currentRoute: 'home',
    currentUser: {
      id: 'admin-1',
      name: 'Admin User',
      email: 'admin@servicehub.com',
      role: 'admin',
    },
  });

  const navigate = (route: AdminRoute) => {
    setAppState(prev => ({
      ...prev,
      currentRoute: route,
    }));
  };

  const renderPage = () => {
    const { currentRoute, currentUser } = appState;

    switch (currentRoute) {
      case 'home':
        return <AdminHome navigate={navigate} currentUser={currentUser!} />;
      case 'users':
        return <AdminUsers navigate={navigate} currentUser={currentUser!} />;
      case 'services':
        return <AdminServices navigate={navigate} currentUser={currentUser!} />;
      case 'analytics':
        return <AdminAnalytics navigate={navigate} currentUser={currentUser!} />;
      case 'profile':
        return <AdminProfile navigate={navigate} currentUser={currentUser!} />;
      default:
        return <AdminHome navigate={navigate} currentUser={currentUser!} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Mobile Phone Frame */}
      <div className="relative w-[430px] h-[932px] bg-black rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-50"></div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div className="w-full h-full overflow-y-auto pb-20">
            {renderPage()}
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom">
            <div className="flex items-center justify-around h-20 px-4">
              <button
                onClick={() => navigate('home')}
                className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                  appState.currentRoute === 'home' ? 'text-purple-600' : 'text-gray-500'
                }`}
              >
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </button>
              <button
                onClick={() => navigate('users')}
                className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                  appState.currentRoute === 'users' ? 'text-purple-600' : 'text-gray-500'
                }`}
              >
                <Users className="w-6 h-6" />
                <span className="text-xs">Users</span>
              </button>
              <button
                onClick={() => navigate('services')}
                className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                  appState.currentRoute === 'services' ? 'text-purple-600' : 'text-gray-500'
                }`}
              >
                <Briefcase className="w-6 h-6" />
                <span className="text-xs">Services</span>
              </button>
              <button
                onClick={() => navigate('analytics')}
                className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                  appState.currentRoute === 'analytics' ? 'text-purple-600' : 'text-gray-500'
                }`}
              >
                <BarChart2 className="w-6 h-6" />
                <span className="text-xs">Analytics</span>
              </button>
              <button
                onClick={() => navigate('profile')}
                className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                  appState.currentRoute === 'profile' ? 'text-purple-600' : 'text-gray-500'
                }`}
              >
                <User className="w-6 h-6" />
                <span className="text-xs">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
