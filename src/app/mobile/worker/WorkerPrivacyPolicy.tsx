import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Shield } from 'lucide-react';

interface WorkerPrivacyPolicyProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

export function WorkerPrivacyPolicy({ navigate, currentUser }: WorkerPrivacyPolicyProps) {
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
            <h1 className="text-lg font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-xs text-gray-500">Last updated: Jan 1, 2026</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Introduction */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your Privacy Matters</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                At Xtra, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <Section
          title="Information We Collect"
          content="We collect information you provide during registration (name, email, phone, address), profile information and work preferences, job application and performance data, location data when using the app, payment and banking information for transactions, and device and usage information to improve our services."
        />

        <Section
          title="How We Use Your Information"
          content="Your information is used to: Facilitate job matching between workers and clients, process payments and manage transactions, verify your identity and eligibility, communicate about jobs and account updates, improve our services and user experience, comply with legal obligations and regulations, prevent fraud and ensure platform security."
        />

        <Section
          title="Information Sharing"
          content="We share your information only when necessary: With clients when you apply for jobs (limited profile information), with payment processors for transaction handling, with service providers who assist in platform operations, with law enforcement when required by law, and with your consent for specific purposes. We never sell your personal data to third parties."
        />

        <Section
          title="Location Data"
          content="We collect location data to: Verify your attendance at job locations, suggest nearby job opportunities, calculate travel distances, and ensure compliance with job requirements. You can control location permissions in your device settings, though some features may be limited without location access."
        />

        <Section
          title="Data Security"
          content="We implement industry-standard security measures including: Encryption of sensitive data in transit and at rest, secure authentication and access controls, regular security audits and updates, secure data centers and infrastructure, and employee training on data protection. However, no system is completely secure, and we encourage you to protect your account credentials."
        />

        <Section
          title="Data Retention"
          content="We retain your personal information for as long as your account is active or as needed to provide services. After account deletion, we may retain certain information for legal, regulatory, or legitimate business purposes. You can request data deletion by contacting support."
        />

        <Section
          title="Your Rights"
          content="You have the right to: Access your personal data, correct inaccurate information, request deletion of your data, opt-out of marketing communications, restrict certain data processing, export your data in a portable format, and lodge a complaint with data protection authorities."
        />

        <Section
          title="Cookies & Tracking"
          content="We use cookies and similar technologies to: Remember your preferences and settings, analyze platform usage and performance, provide personalized content and recommendations, and ensure security and prevent fraud. You can manage cookie preferences in your browser settings."
        />

        <Section
          title="Children's Privacy"
          content="Xtra is not intended for users under 18 years of age. We do not knowingly collect information from children. If we become aware that a child has provided personal information, we will take steps to delete such information."
        />

        <Section
          title="International Data Transfers"
          content="Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this policy and applicable laws."
        />

        <Section
          title="Changes to This Policy"
          content="We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or in-app notification. Your continued use of the platform constitutes acceptance of the updated policy."
        />

        <Section
          title="Contact Us"
          content="If you have questions about this Privacy Policy or how we handle your data, please contact our Data Protection Officer at privacy@xtra.com or through the Help & Support section in the app."
        />

        {/* GDPR/CCPA Notice */}
        <div className="bg-teal-50 border-2 border-teal-100 rounded-2xl p-5">
          <h4 className="font-bold text-teal-900 text-sm mb-2">Your Data Protection Rights</h4>
          <p className="text-sm text-teal-800 leading-relaxed mb-3">
            If you are in the EU (GDPR) or California (CCPA), you have additional rights regarding your personal data. Contact us to exercise these rights or for more information.
          </p>
          <button className="text-sm font-bold text-teal-700 underline">
            Learn More About Your Rights
          </button>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  content: string;
}

function Section({ title, content }: SectionProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}
