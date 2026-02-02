import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, FileText } from 'lucide-react';

interface WorkerTermsConditionsProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

export function WorkerTermsConditions({ navigate, currentUser }: WorkerTermsConditionsProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Terms & Conditions</h1>
            <p className="text-xs text-gray-500">Last updated: Jan 1, 2026</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Introduction */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[#3164E6]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome to Xtra</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                These Terms and Conditions govern your use of the Xtra platform and services. By accessing or using Xtra, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <Section
          number="1"
          title="Acceptance of Terms"
          content="By creating an account and using Xtra's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our services."
        />

        <Section
          number="2"
          title="Eligibility"
          content="You must be at least 18 years old to use Xtra as a worker. You must have the legal right to work in your jurisdiction and provide accurate information during registration. Xtra reserves the right to verify your identity and eligibility at any time."
        />

        <Section
          number="3"
          title="Worker Responsibilities"
          content="As a worker on the Xtra platform, you agree to: (a) Complete assigned jobs professionally and on time, (b) Maintain honest communication with clients, (c) Follow safety guidelines and regulations, (d) Report any issues or concerns promptly, (e) Not engage in any fraudulent or illegal activities."
        />

        <Section
          number="4"
          title="Payment Terms"
          content="Payment for completed jobs will be processed according to the agreed-upon terms. Xtra charges a service fee on all transactions. Workers are responsible for their own tax obligations. Payments are typically processed within 2-5 business days after job completion and approval."
        />

        <Section
          number="5"
          title="Cancellation Policy"
          content="Cancellations must be made at least 24 hours before the scheduled shift start time. Late cancellations may result in penalties or account restrictions. Repeated cancellations may lead to account suspension. Emergency situations will be evaluated on a case-by-case basis."
        />

        <Section
          number="6"
          title="Account Suspension & Termination"
          content="Xtra reserves the right to suspend or terminate your account if you violate these terms, engage in fraudulent activity, receive multiple negative reviews, or fail to meet performance standards. You may close your account at any time through the app settings."
        />

        <Section
          number="7"
          title="Liability & Insurance"
          content="Workers are independent contractors and are responsible for their own actions. Xtra provides basic liability insurance coverage during active jobs. Workers may need additional insurance depending on the nature of their work. Xtra is not liable for injuries or damages beyond the scope of provided insurance."
        />

        <Section
          number="8"
          title="Intellectual Property"
          content="All content, trademarks, and data on the Xtra platform are owned by Xtra or its licensors. You may not copy, modify, or distribute any platform content without permission. Your user-generated content may be used by Xtra for promotional purposes."
        />

        <Section
          number="9"
          title="Privacy & Data Protection"
          content="Your personal information is handled according to our Privacy Policy. We collect and use data to provide and improve our services. You have rights regarding your personal data as outlined in our Privacy Policy."
        />

        <Section
          number="10"
          title="Dispute Resolution"
          content="Any disputes arising from these terms will be resolved through binding arbitration in accordance with local laws. You waive your right to participate in class action lawsuits. Exceptions may be made for small claims court cases."
        />

        <Section
          number="11"
          title="Changes to Terms"
          content="Xtra reserves the right to modify these Terms and Conditions at any time. You will be notified of significant changes via email or in-app notification. Continued use of the platform after changes constitutes acceptance of new terms."
        />

        <Section
          number="12"
          title="Contact Information"
          content="For questions about these Terms and Conditions, please contact us at legal@xtra.com or through the Help & Support section in the app."
        />

        {/* Acceptance Footer */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5">
          <p className="text-sm text-blue-800 leading-relaxed">
            By continuing to use Xtra, you confirm that you have read, understood, and agree to these Terms and Conditions. If you have any questions, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  number: string;
  title: string;
  content: string;
}

function Section({ number, title, content }: SectionProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-[#3164E6] text-white rounded-lg flex items-center justify-center shrink-0 font-bold text-sm">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
