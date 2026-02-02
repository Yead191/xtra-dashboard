import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface WorkerFAQProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Download the Xtra app, tap "Sign Up", and follow the registration process. You\'ll need to provide basic information, select your job preferences, and complete identity verification.',
      },
      {
        q: 'What documents do I need to work?',
        a: 'You\'ll need a valid government ID, proof of eligibility to work in your country, and depending on the job category, relevant certifications or licenses may be required.',
      },
      {
        q: 'How long does verification take?',
        a: 'Most verifications are completed within 24-48 hours. You\'ll receive a notification once your account is approved and you can start browsing jobs.',
      },
    ],
  },
  {
    category: 'Finding & Applying for Jobs',
    questions: [
      {
        q: 'How do I find jobs that match my skills?',
        a: 'Jobs are automatically matched based on your selected categories and preferences. You can browse the "Browse Jobs" tab to see available opportunities and filter by location, pay, and date.',
      },
      {
        q: 'Can I apply for multiple jobs?',
        a: 'Yes! You can apply for as many jobs as you want, as long as the schedules don\'t conflict. Just make sure you can commit to all accepted jobs.',
      },
      {
        q: 'What happens after I apply?',
        a: 'Clients review applications and select workers. You\'ll receive a notification if you\'re accepted. Once accepted, the job appears in your "My Jobs" section under "Upcoming".',
      },
    ],
  },
  {
    category: 'Working & Check-In',
    questions: [
      {
        q: 'How do I check in for a job?',
        a: 'When your shift time arrives, you\'ll see a "Check In Now" button on the job card. Tap it and verify your location at the job site to start your shift. Make sure location services are enabled.',
      },
      {
        q: 'What if I\'m running late?',
        a: 'Contact the client immediately through the app messaging system. Late arrivals may affect your rating, so always communicate if there are any delays.',
      },
      {
        q: 'Can I leave early from a job?',
        a: 'You should complete the full scheduled shift. If you need to leave early due to an emergency, communicate with the client first and check out through the app. This may affect payment and rating.',
      },
    ],
  },
  {
    category: 'Payments & Earnings',
    questions: [
      {
        q: 'When do I get paid?',
        a: 'Payments are processed 2-5 business days after job completion and client approval. You can track your earnings in the Wallet section.',
      },
      {
        q: 'How is my payment calculated?',
        a: 'You\'re paid based on the agreed hourly rate and actual hours worked. Xtra charges a small service fee (typically 10-15%). The final amount appears in your Wallet after deduction.',
      },
      {
        q: 'How do I withdraw money?',
        a: 'Go to Wallet > Withdraw, enter the amount, and select your payout method (bank transfer, mobile money, etc.). Minimum withdrawal amount applies.',
      },
      {
        q: 'Are there any fees?',
        a: 'Xtra charges a service fee on all transactions. There may also be payment processing fees depending on your withdrawal method. All fees are clearly displayed before confirmation.',
      },
    ],
  },
  {
    category: 'Cancellations & Penalties',
    questions: [
      {
        q: 'Can I cancel a job after accepting?',
        a: 'Yes, but cancellations must be made at least 24 hours before the shift. Late cancellations or no-shows may result in penalties and affect your account standing.',
      },
      {
        q: 'What are the penalty rules?',
        a: 'Late cancellations (less than 24 hours): Warning on first offense, penalty fee on subsequent offenses. No-shows: Immediate penalty and possible account suspension. Multiple violations may lead to permanent ban.',
      },
      {
        q: 'What if I have an emergency?',
        a: 'Contact Xtra support immediately with documentation. Genuine emergencies are evaluated case-by-case and penalties may be waived.',
      },
    ],
  },
  {
    category: 'Ratings & Reviews',
    questions: [
      {
        q: 'How does the rating system work?',
        a: 'After each job, clients can rate you from 1-5 stars and leave feedback. Your overall rating is the average of all ratings. Maintain a high rating (4.0+) to access more opportunities.',
      },
      {
        q: 'Can I see my reviews?',
        a: 'Yes, you can view all client feedback in your Profile section under "Reviews". This helps you understand areas of strength and improvement.',
      },
      {
        q: 'What if I receive an unfair rating?',
        a: 'You can dispute a rating by contacting support with evidence. We review all disputes and may remove ratings that violate our guidelines.',
      },
    ],
  },
  {
    category: 'Account & Security',
    questions: [
      {
        q: 'How do I change my password?',
        a: 'Go to Profile > Change Password. Enter your current password and choose a new secure password that meets our requirements.',
      },
      {
        q: 'How do I update my job preferences?',
        a: 'Go to Profile > Job Preferences to add or remove job categories. This determines which job alerts you receive.',
      },
      {
        q: 'Is my personal information safe?',
        a: 'Yes, we use industry-standard encryption and security measures. Read our Privacy Policy for detailed information about data protection.',
      },
      {
        q: 'Can I delete my account?',
        a: 'Yes, contact support to request account deletion. Note that this action is permanent and you\'ll lose access to all data and earnings history.',
      },
    ],
  },
];

export function WorkerFAQ({ navigate, currentUser }: WorkerFAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Frequently Asked Questions</h1>
            <p className="text-xs text-gray-500">Find answers to common questions</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Introduction */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-blue-900 text-sm mb-1">Need Help?</h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                Browse through our most common questions below. If you can't find what you're looking for, contact our support team.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">{category.category}</h3>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {category.questions.map((faq, qIndex) => {
                const itemId = `${catIndex}-${qIndex}`;
                const isOpen = openItems.includes(itemId);

                return (
                  <div key={qIndex} className={qIndex > 0 ? 'border-t border-gray-50' : ''}>
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full p-4 flex items-start justify-between gap-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="font-bold text-gray-900 text-sm flex-1">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still Need Help */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
          <h4 className="font-bold text-gray-900 mb-2">Still need help?</h4>
          <p className="text-sm text-gray-600 mb-4">Our support team is here to assist you</p>
          <button
            onClick={() => navigate('help-support')}
            className="w-full bg-[#3164E6] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
