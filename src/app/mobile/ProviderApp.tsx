import { useState } from 'react';
import { ProviderHome } from './provider/ProviderHomeClean';
import { ProviderMyJobs } from './provider/ProviderMyJobs';
import { ProviderPayments } from './provider/ProviderPayments';
import { ProviderProfile } from './provider/ProviderProfile';
import { ProviderAuth } from './provider/ProviderAuth';
import { ProviderPostJob } from './provider/ProviderPostJobNew';
import { ProviderJobEdit } from './provider/ProviderJobEdit';
import { ProviderJobDetails } from './provider/ProviderJobDetailsPro';
import { ProviderWorkerSelection } from './provider/ProviderWorkerSelection';
import { ProviderTrackWorker } from './provider/ProviderTrackWorker';
import { ProviderConfirmPayment } from './provider/ProviderConfirmPayment';
import { ProviderRateWorker } from './provider/ProviderRateWorker';
import { ProviderTransactionDetails } from './provider/ProviderTransactionDetails';
import { ProviderBusinessProfile } from './provider/ProviderBusinessProfile';
import { ProviderInbox } from './provider/ProviderInbox';
import { ProviderNotificationSettings } from './provider/ProviderNotificationSettings';
import { ProviderPaymentMethods } from './provider/ProviderPaymentMethods';
import { ProviderLanguageSettings } from './provider/ProviderLanguageSettings';
import { ProviderLocationSettings } from './provider/ProviderLocationSettings';
import { ProviderTermsConditions } from './provider/ProviderTermsConditions';
import { ProviderPrivacyPolicy } from './provider/ProviderPrivacyPolicy';
import { ProviderFAQ } from './provider/ProviderFAQ';
import { ProviderAboutUs } from './provider/ProviderAboutUs';
import { ProviderHelpSupport } from './provider/ProviderHelpSupport';
import { ProviderContactSupport } from './provider/ProviderContactSupport';
import { ProviderMyWorkers } from './provider/ProviderMyWorkers';
import { ProviderRebookWorkerNew } from './provider/ProviderRebookWorkerNew';
import { ProviderReviews } from './provider/ProviderReviews';
import { ProviderCheckInApproval } from './provider/ProviderCheckInApproval';
import { ProviderNotificationCenter } from './provider/ProviderNotificationCenter';
import { ProviderFeatureGuide } from './provider/ProviderFeatureGuide';
import { ProviderWorkerProfileDetails } from './provider/ProviderWorkerProfileDetails';
import { Splash } from './Splash';
import { Onboarding } from './Onboarding';
import { Home, Briefcase, PlusCircle, CreditCard, User } from 'lucide-react';

export type ProviderRoute = 
  | 'splash'
  | 'onboarding'
  | 'auth'
  | 'home'
  | 'my-jobs'
  | 'post-job'
  | 'edit-job'
  | 'payments'
  | 'profile'
  | 'job-details'
  | 'worker-selection'
  | 'track-worker'
  | 'confirm-payment'
  | 'rate-worker'
  | 'transaction-details'
  | 'business-profile'
  | 'inbox'
  | 'notification-settings'
  | 'payment-methods'
  | 'language-settings'
  | 'location-settings'
  | 'terms-conditions'
  | 'privacy-policy'
  | 'faq'
  | 'about-us'
  | 'help-support'
  | 'contact-support'
  | 'my-workers'
  | 'rebook-worker'
  | 'reviews'
  | 'worker-profile'
  | 'check-in-approval'
  | 'notification-center'
  | 'feature-guide'
  | 'worker-profile-details';

interface AppState {
  currentRoute: ProviderRoute;
  currentUser: any | null;
  selectedJobId: string | null;
  selectedTransactionId: string | null;
  selectedWorkerId: string | null;
}

export default function ProviderApp() {
  const [appState, setAppState] = useState<AppState>({
    currentRoute: 'splash',
    currentUser: null,
    selectedJobId: null,
    selectedTransactionId: null,
    selectedWorkerId: null,
  });

  const navigate = (route: ProviderRoute, jobId?: string, workerId?: string, transactionId?: string) => {
    setAppState(prev => ({
      ...prev,
      currentRoute: route,
      selectedJobId: jobId || null,
      selectedWorkerId: workerId || null,
      selectedTransactionId: transactionId || null,
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
      selectedTransactionId: null,
      selectedWorkerId: null,
    });
  };

  const renderPage = () => {
    const { currentRoute, currentUser, selectedJobId, selectedTransactionId, selectedWorkerId } = appState;

    switch (currentRoute) {
      case 'splash':
        return <Splash navigate={navigate} />;
      case 'onboarding':
        return <Onboarding navigate={navigate} />;
      case 'auth':
        return <ProviderAuth navigate={navigate} login={login} />;
      case 'home':
        return <ProviderHome navigate={navigate} currentUser={currentUser!} />;
      case 'my-jobs':
        return <ProviderMyJobs navigate={navigate} currentUser={currentUser!} />;
      case 'post-job':
        return <ProviderPostJob navigate={navigate} currentUser={currentUser!} />;
      case 'edit-job':
        return <ProviderJobEdit navigate={navigate} jobId={selectedJobId!} currentUser={currentUser!} />;
      case 'payments':
        return <ProviderPayments navigate={navigate} currentUser={currentUser!} />;
      case 'profile':
        return <ProviderProfile navigate={navigate} currentUser={currentUser!} logout={logout} />;
      case 'job-details':
        return <ProviderJobDetails navigate={navigate} jobId={selectedJobId!} currentUser={currentUser!} />;
      case 'worker-selection':
        return <ProviderWorkerSelection navigate={navigate} jobId={selectedJobId!} currentUser={currentUser!} />;
      case 'track-worker':
        return <ProviderTrackWorker navigate={navigate} jobId={selectedJobId!} currentUser={currentUser!} />;
      case 'confirm-payment':
        return <ProviderConfirmPayment navigate={navigate} jobId={selectedJobId!} currentUser={currentUser!} />;
      case 'rate-worker':
        return <ProviderRateWorker navigate={navigate} jobId={selectedJobId!} currentUser={currentUser!} />;
      case 'transaction-details':
        return <ProviderTransactionDetails navigate={navigate} transactionId={selectedTransactionId!} currentUser={currentUser!} />;
      case 'business-profile':
        return <ProviderBusinessProfile navigate={navigate} currentUser={currentUser!} />;
      case 'inbox':
        return <ProviderInbox navigate={navigate} currentUser={currentUser!} />;
      case 'notification-settings':
        return <ProviderNotificationSettings navigate={navigate} currentUser={currentUser!} />;
      case 'payment-methods':
        return <ProviderPaymentMethods navigate={navigate} currentUser={currentUser!} />;
      case 'language-settings':
        return <ProviderLanguageSettings navigate={navigate} currentUser={currentUser!} />;
      case 'location-settings':
        return <ProviderLocationSettings navigate={navigate} currentUser={currentUser!} />;
      case 'terms-conditions':
        return <ProviderTermsConditions navigate={navigate} currentUser={currentUser!} />;
      case 'privacy-policy':
        return <ProviderPrivacyPolicy navigate={navigate} currentUser={currentUser!} />;
      case 'faq':
        return <ProviderFAQ navigate={navigate} currentUser={currentUser!} />;
      case 'about-us':
        return <ProviderAboutUs navigate={navigate} currentUser={currentUser!} />;
      case 'help-support':
        return <ProviderHelpSupport navigate={navigate} currentUser={currentUser!} />;
      case 'contact-support':
        return <ProviderContactSupport navigate={navigate} currentUser={currentUser!} />;
      case 'my-workers':
        return <ProviderMyWorkers navigate={navigate} currentUser={currentUser!} />;
      case 'rebook-worker':
        return <ProviderRebookWorkerNew navigate={navigate} workerId={selectedWorkerId!} currentUser={currentUser!} />;
      case 'reviews':
        return <ProviderReviews navigate={navigate} currentUser={currentUser!} />;
      case 'check-in-approval':
        return <ProviderCheckInApproval navigate={navigate} currentUser={currentUser!} />;
      case 'notification-center':
        return <ProviderNotificationCenter navigate={navigate} currentUser={currentUser!} />;
      case 'feature-guide':
        return <ProviderFeatureGuide navigate={navigate} currentUser={currentUser!} />;
      case 'worker-profile-details':
        return <ProviderWorkerProfileDetails navigate={navigate} workerId={selectedWorkerId!} currentUser={currentUser!} />;
      default:
        return <ProviderHome navigate={navigate} currentUser={currentUser!} />;
    }
  };

  const showBottomNav = appState.currentUser && 
    appState.currentUser.approvalStatus === 'approved' &&
    !['splash', 'onboarding', 'auth', 'edit-job', 'job-details', 'worker-selection', 'track-worker', 'confirm-payment', 'rate-worker', 'transaction-details', 'business-profile', 'notification-settings', 'payment-methods', 'language-settings', 'location-settings', 'terms-conditions', 'privacy-policy', 'faq', 'about-us', 'help-support', 'contact-support', 'my-workers', 'rebook-worker', 'reviews', 'worker-profile', 'check-in-approval', 'notification-center', 'feature-guide', 'worker-profile-details'].includes(appState.currentRoute);

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
                  icon={Briefcase} 
                  label="My Jobs" 
                  active={appState.currentRoute === 'my-jobs'}
                  onClick={() => navigate('my-jobs')}
                />
                <button
                  onClick={() => navigate('post-job')}
                  className="flex flex-col items-center justify-center -mt-4"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#3164E6] to-[#5B8EF7] rounded-2xl shadow-lg flex items-center justify-center">
                    <PlusCircle className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 mt-1">Post</span>
                </button>
                <NavButton 
                  icon={CreditCard} 
                  label="Payments" 
                  active={appState.currentRoute === 'payments'}
                  onClick={() => navigate('payments')}
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