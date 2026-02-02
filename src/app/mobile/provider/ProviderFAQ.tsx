import { useState } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, ChevronDown } from 'lucide-react';

interface ProviderFAQProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

const faqs = [
  {
    q: 'How do I post a job?',
    a: 'Tap the + button in the center of the bottom navigation bar to start posting a job.',
  },
  {
    q: 'What is the platform fee?',
    a: 'XTRAA charges a 15% platform fee on top of the worker payment.',
  },
  {
    q: 'Can I cancel a job after posting?',
    a: 'Yes, you can cancel before a worker accepts. After acceptance, cancellation fees may apply.',
  },
  {
    q: 'How do workers get paid?',
    a: 'Workers receive payment within 24 hours after you confirm job completion.',
  },
];

export function ProviderFAQ({ navigate, currentUser }: ProviderFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">FAQ</h1>
        </div>
      </div>
      <div className="p-6 space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <span className="font-semibold text-gray-900">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
