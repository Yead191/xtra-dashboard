import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, LifeBuoy, MessageCircle, Mail, Phone, FileText, Send } from 'lucide-react';

interface WorkerHelpSupportProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

export function WorkerHelpSupport({ navigate, currentUser }: WorkerHelpSupportProps) {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const topics = [
    'Account Issues',
    'Payment Problems',
    'Job Application',
    'Check-In Issues',
    'Rating Dispute',
    'Technical Problem',
    'Report Abuse',
    'Other',
  ];

  const handleSubmit = () => {
    if (!selectedTopic || !message) {
      alert('Please select a topic and enter your message');
      return;
    }
    // In production: API call to submit support ticket
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedTopic('');
      setMessage('');
    }, 3000);
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
            <h1 className="text-lg font-bold text-gray-900">Help & Support</h1>
            <p className="text-xs text-gray-500">We're here to help you</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-6 text-white">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
            <LifeBuoy className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold mb-2">How can we help you?</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('faq')}
              className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#3164E6] hover:bg-blue-50 transition-all text-left"
            >
              <div className="w-10 h-10 bg-blue-50 text-[#3164E6] rounded-xl flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Browse FAQ</h4>
              <p className="text-xs text-gray-500">Find quick answers</p>
            </button>

            <button
              className="bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-5 text-left shadow-lg"
              onClick={() => navigate('contact-support')}
            >
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Contact Support</h4>
              <p className="text-xs text-blue-100">Submit a request or view tickets</p>
            </button>
          </div>
        </div>

        {/* Contact Methods */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Contact Us</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-blue-50 text-[#3164E6] rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-bold text-gray-900 text-sm">Email Support</h4>
                <p className="text-xs text-gray-500">support@xtra.com</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-bold text-gray-900 text-sm">Phone Support</h4>
                <p className="text-xs text-gray-500">+1 (800) XTRA-HELP</p>
              </div>
            </button>
          </div>
        </div>

        {/* Support Form */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Submit a Request</h3>

          {/* Topic Selection */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Select Topic</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent"
            >
              <option value="">Choose a topic...</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Describe Your Issue</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please provide as much detail as possible..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              Response time: Usually within 2-4 hours
            </p>
          </div>

          {/* User Info */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-xs text-gray-500 mb-2">Your Information:</p>
            <p className="text-sm text-gray-700 font-medium">{currentUser.name}</p>
            <p className="text-xs text-gray-500">{currentUser.email}</p>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!selectedTopic || !message}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              selectedTopic && message
                ? 'bg-[#3164E6] text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
            Submit Request
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-5 animate-in fade-in slide-in-from-top duration-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-green-900 text-sm mb-1">Request Submitted!</h4>
                <p className="text-sm text-green-800 leading-relaxed">
                  Our support team will respond to your request within 2-4 hours. You'll receive updates via email and in-app notifications.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Office Hours */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5">
          <h4 className="font-bold text-blue-900 text-sm mb-2">Support Hours</h4>
          <div className="space-y-1 text-sm text-blue-800">
            <p>📞 <strong>Phone:</strong> Mon-Fri 9AM-6PM EST</p>
            <p>💬 <strong>Live Chat:</strong> 24/7 Available</p>
            <p>📧 <strong>Email:</strong> 24-48 hour response time</p>
          </div>
        </div>
      </div>
    </div>
  );
}