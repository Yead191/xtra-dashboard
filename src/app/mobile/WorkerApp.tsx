import { useState } from 'react';
import { WorkerHome } from './worker/WorkerHome';
import { WorkerBrowseJobs } from './worker/WorkerBrowseJobs';
import { WorkerMyJobs } from './worker/WorkerMyJobs';
import { WorkerWallet } from './worker/WorkerWallet';
import { WorkerWithdraw } from './worker/WorkerWithdraw';
import { WorkerProfile } from './worker/WorkerProfile';
import { WorkerAuth } from './worker/WorkerAuth';
import { WorkerJobDetails } from './worker/WorkerJobDetails';
import { WorkerJobSummary } from './worker/WorkerJobSummary';
import { WorkerShiftDetails } from './worker/WorkerShiftDetails';
import { WorkerCategoryDetails } from './worker/WorkerCategoryDetails';
import { WorkerAttendance } from './worker/WorkerAttendance';
import { WorkerInbox } from './worker/WorkerInbox';
import { WorkerNotifications } from './worker/WorkerNotifications';
import { WorkerChangePassword } from './worker/WorkerChangePassword';
import { WorkerChangePreferences } from './worker/WorkerChangePreferences';
import { WorkerPersonalInfo } from './worker/WorkerPersonalInfo';
import { WorkerLanguageSettings } from './worker/WorkerLanguageSettings';
import { WorkerLocationSettings } from './worker/WorkerLocationSettings';
import { WorkerTermsConditions } from './worker/WorkerTermsConditions';
import { WorkerPrivacyPolicy } from './worker/WorkerPrivacyPolicy';
import { WorkerFAQ } from './worker/WorkerFAQ';
import { WorkerAboutUs } from './worker/WorkerAboutUs';
import { WorkerHelpSupport } from './worker/WorkerHelpSupport';
import { WorkerContactSupport } from './worker/WorkerContactSupport';
import { WorkerBusinessProfileDetails } from './worker/WorkerBusinessProfileDetails';
import { WorkerEditProfile } from './worker/WorkerEditProfile';
import { WorkerJobFilters } from './worker/WorkerJobFilters';
import { Splash } from './Splash';
import { Onboarding } from './Onboarding';
import { Home, Search, MessageSquare, User, Briefcase } from 'lucide-react';

export type WorkerRoute = 
  | 'splash'
  | 'onboarding'
  | 'auth'
  | 'home'
  | 'browse-jobs'
  | 'job-filters'
  | 'my-jobs'
  | 'wallet'
  | 'withdraw'
  | 'profile'
  | 'edit-profile'
  | 'job-details'
  | 'job-summary'
  | 'shift-details'
  | 'active-job'
  | 'category-details'
  | 'attendance'
  | 'inbox'
  | 'notifications'
  | 'notification-settings'
  | 'change-password'
  | 'change-preferences'
  | 'personal-info'
  | 'language-settings'
  | 'location-settings'
  | 'terms-conditions'
  | 'privacy-policy'
  | 'faq'
  | 'about-us'
  | 'help-support'
  | 'contact-support'
  | 'business-profile-details';

interface AppState {
  currentRoute: WorkerRoute;
  currentUser: any | null;
  selectedJobId: string | null;
  selectedShiftId: string | null;
  selectedCategoryId: string | null;
  selectedBusinessId: string | null;
}

export default function WorkerApp() {
  const [appState, setAppState] = useState<AppState>({
    currentRoute: 'splash',
    currentUser: null,
    selectedJobId: null,
    selectedShiftId: null,
    selectedCategoryId: null,
    selectedBusinessId: null,
  });

  const navigate = (route: WorkerRoute, jobId?: string, shiftId?: string, categoryId?: string, businessId?: string) => {
    setAppState(prev => ({
      ...prev,
      currentRoute: route,
      selectedJobId: jobId || null,
      selectedShiftId: shiftId || null,
      selectedCategoryId: categoryId || null,
      selectedBusinessId: businessId || null,
    }));
  };

  const login = (user: any) => {
    setAppState(prev => ({
      ...prev,
      currentUser: user,
      currentRoute: user.approvalStatus === 'pending' ? 'auth' : 'home',
    }));
  };

  const logout = () => {
    setAppState({
      currentRoute: 'auth',
      currentUser: null,
      selectedJobId: null,
      selectedShiftId: null,
      selectedCategoryId: null,
      selectedBusinessId: null,
    });
  };

  const renderPage = () => {
    const { currentRoute, currentUser, selectedJobId, selectedShiftId, selectedCategoryId, selectedBusinessId } = appState;

    switch (currentRoute) {
      case 'splash':
        return <Splash navigate={navigate} />;
      case 'onboarding':
        return <Onboarding navigate={navigate} />;
      case 'auth':
        return <WorkerAuth navigate={navigate} login={login} />;
      case 'home':
        return <WorkerHome navigate={navigate} currentUser={currentUser!} />;
      case 'browse-jobs':
        return <WorkerBrowseJobs navigate={navigate} currentUser={currentUser!} />;
      case 'job-filters':
        return <WorkerJobFilters navigate={navigate} currentUser={currentUser!} />;
      case 'my-jobs':
        return <WorkerMyJobs navigate={navigate} currentUser={currentUser!} />;
      case 'wallet':
        return <WorkerWallet navigate={navigate} currentUser={currentUser!} />;
      case 'withdraw':
        return <WorkerWithdraw navigate={navigate} currentUser={currentUser!} />;
      case 'profile':
        return <WorkerProfile navigate={navigate} currentUser={currentUser!} logout={logout} />;
      case 'edit-profile':
        return <WorkerEditProfile navigate={navigate} currentUser={currentUser!} />;
      case 'job-details':
        return <WorkerJobDetails navigate={navigate} jobId={selectedJobId!} currentUser={currentUser!} />;
      case 'job-summary':
        return <WorkerJobSummary navigate={navigate} jobId={selectedJobId!} currentUser={currentUser!} />;
      case 'shift-details':
        return <WorkerShiftDetails navigate={navigate} shiftId={selectedShiftId!} currentUser={currentUser!} />;
      case 'category-details':
        return <WorkerCategoryDetails navigate={navigate} categoryId={selectedCategoryId!} currentUser={currentUser!} />;
      case 'attendance':
        return <WorkerAttendance navigate={navigate} shiftId={selectedShiftId!} currentUser={currentUser!} />;
      case 'inbox':
        return <WorkerInbox navigate={navigate} currentUser={currentUser!} />;
      case 'notifications':
        return <WorkerNotifications navigate={navigate} currentUser={currentUser!} />;
      case 'notification-settings':
        return <WorkerNotificationSettings navigate={navigate} currentUser={currentUser!} />;
      case 'change-password':
        return <WorkerChangePassword navigate={navigate} currentUser={currentUser!} />;
      case 'change-preferences':
        return <WorkerChangePreferences navigate={navigate} currentUser={currentUser!} />;
      case 'personal-info':
        return <WorkerPersonalInfo navigate={navigate} currentUser={currentUser!} />;
      case 'language-settings':
        return <WorkerLanguageSettings navigate={navigate} currentUser={currentUser!} />;
      case 'location-settings':
        return <WorkerLocationSettings navigate={navigate} currentUser={currentUser!} />;
      case 'terms-conditions':
        return <WorkerTermsConditions navigate={navigate} currentUser={currentUser!} />;
      case 'privacy-policy':
        return <WorkerPrivacyPolicy navigate={navigate} currentUser={currentUser!} />;
      case 'faq':
        return <WorkerFAQ navigate={navigate} currentUser={currentUser!} />;
      case 'about-us':
        return <WorkerAboutUs navigate={navigate} currentUser={currentUser!} />;
      case 'help-support':
        return <WorkerHelpSupport navigate={navigate} currentUser={currentUser!} />;
      case 'contact-support':
        return <WorkerContactSupport navigate={navigate} currentUser={currentUser!} />;
      case 'business-profile-details':
        return <WorkerBusinessProfileDetails navigate={navigate} businessId={selectedBusinessId!} currentUser={currentUser!} />;
      default:
        return <WorkerHome navigate={navigate} currentUser={currentUser!} />;
    }
  };

  const showBottomNav = appState.currentUser && 
    appState.currentUser.approvalStatus === 'approved' &&
    !['splash', 'onboarding', 'auth', 'edit-profile', 'job-filters', 'job-details', 'job-summary', 'shift-details', 'active-job', 'category-details', 'attendance', 'notifications', 'notification-settings', 'change-password', 'change-preferences', 'personal-info', 'language-settings', 'location-settings', 'terms-conditions', 'privacy-policy', 'faq', 'about-us', 'help-support', 'contact-support', 'business-profile-details'].includes(appState.currentRoute);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      {/* Mobile Phone Frame */}
      <div className="relative w-[430px] h-[932px] bg-black rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-50"></div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div className="w-full h-full overflow-y-auto scrollbar-hide">
            {renderPage()}
          </div>

          {/* Bottom Navigation */}
          {showBottomNav && (
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 safe-area-bottom shadow-lg z-50">
              <div className="flex items-center justify-around h-20 px-2">
                <NavButton 
                  icon={Home} 
                  label="Home" 
                  active={appState.currentRoute === 'home'}
                  onClick={() => navigate('home')}
                />
                <NavButton 
                  icon={Search} 
                  label="Jobs" 
                  active={appState.currentRoute === 'browse-jobs'}
                  onClick={() => navigate('browse-jobs')}
                />
                <NavButton 
                  icon={Briefcase} 
                  label="My Jobs" 
                  active={appState.currentRoute === 'my-jobs'}
                  onClick={() => navigate('my-jobs')}
                />
                <NavButton 
                  icon={MessageSquare} 
                  label="Inbox" 
                  active={appState.currentRoute === 'inbox'}
                  onClick={() => navigate('inbox')}
                />
                <NavButton 
                  icon={User} 
                  label="Profile" 
                  active={appState.currentRoute === 'profile'}
                  onClick={() => navigate('profile')}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface NavButtonProps {
  icon: any;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavButton({ icon: Icon, label, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all ${
        active ? 'text-[#3164E6]' : 'text-gray-400'
      }`}
    >
      <Icon className={`w-6 h-6 ${active ? 'text-[#3164E6]' : 'text-gray-400'}`} />
      <span className={`text-[10px] font-bold ${active ? 'text-[#3164E6]' : 'text-gray-400'}`}>
        {label}
      </span>
    </button>
  );
}