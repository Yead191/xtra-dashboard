import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, Phone, Mail, MessageSquare, HelpCircle } from 'lucide-react';

interface ProviderHelpSupportProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

export function ProviderHelpSupport({ navigate, currentUser }: ProviderHelpSupportProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Help & Support</h1>
        </div>
      </div>
      <div className="p-6 space-y-3">
        <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 border border-gray-100">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-semibold text-gray-900">Call Support</p>
            <p className="text-sm text-gray-500">1-800-XTRAA-BIZ</p>
          </div>
        </button>

        <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 border border-gray-100">
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-semibold text-gray-900">Email Support</p>
            <p className="text-sm text-gray-500">business@xtraa.com</p>
          </div>
        </button>

        <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 border border-gray-100">
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-semibold text-gray-900">Live Chat</p>
            <p className="text-sm text-gray-500">Available 9AM - 6PM</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('faq')}
          className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 border border-gray-100"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-[#3164E6]" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-semibold text-gray-900">FAQ</p>
            <p className="text-sm text-gray-500">Find quick answers</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('contact-support')}
          className="w-full bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-4 flex items-center gap-3 shadow-lg"
        >
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-semibold text-white">Contact Support Team</p>
            <p className="text-sm text-blue-100">Submit a request or view tickets</p>
          </div>
        </button>
      </div>
    </div>
  );
}