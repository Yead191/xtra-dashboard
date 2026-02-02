import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { ArrowLeft, Send, Clock, CheckCircle, AlertCircle, MessageSquare, FileText, ChevronRight } from 'lucide-react';

interface WorkerContactSupportProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

interface SupportTicket {
  id: string;
  subject: string;
  topic: string;
  message: string;
  status: 'open' | 'in-progress' | 'resolved';
  createdAt: string;
  lastUpdated: string;
  response?: string;
}

export function WorkerContactSupport({ navigate, currentUser }: WorkerContactSupportProps) {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'new' | 'history'>('new');

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

  // Mock ticket history
  const [tickets] = useState<SupportTicket[]>([
    {
      id: 'TKT-1523',
      subject: 'Unable to check-in for my shift',
      topic: 'Check-In Issues',
      message: 'I arrived at the job location but the check-in button is not working...',
      status: 'resolved',
      createdAt: '2026-01-12',
      lastUpdated: '2026-01-12',
      response: 'We\'ve fixed the GPS issue. You should now be able to check in. If the problem persists, please restart the app.',
    },
    {
      id: 'TKT-1687',
      subject: 'Payment delayed for completed job',
      topic: 'Payment Problems',
      message: 'I completed a job 5 days ago but haven\'t received payment yet...',
      status: 'in-progress',
      createdAt: '2026-01-15',
      lastUpdated: '2026-01-16',
      response: 'We\'re reviewing your payment with the business owner. We\'ll update you within 24 hours.',
    },
    {
      id: 'TKT-1742',
      subject: 'Unfair rating from employer',
      topic: 'Rating Dispute',
      message: 'I received a 2-star rating but I completed all tasks as requested...',
      status: 'open',
      createdAt: '2026-01-17',
      lastUpdated: '2026-01-17',
    },
  ]);

  const handleSubmit = () => {
    if (!selectedTopic || !subject || !message) {
      alert('Please fill in all required fields');
      return;
    }
    // In production: API call to submit support ticket
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedTopic('');
      setSubject('');
      setMessage('');
      setActiveTab('history');
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <Clock className="w-4 h-4" />;
      case 'in-progress':
        return <AlertCircle className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'in-progress':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'resolved':
        return 'bg-green-50 text-green-600 border-green-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
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
            <h1 className="text-lg font-bold text-gray-900">Contact Support</h1>
            <p className="text-xs text-gray-500">Submit a request or view tickets</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('new')}
            className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'new'
                ? 'border-[#3164E6] text-[#3164E6]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            New Request
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'history'
                ? 'border-[#3164E6] text-[#3164E6]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            My Tickets ({tickets.length})
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {activeTab === 'new' ? (
          <>
            {/* Introduction */}
            <div className="bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold mb-2">How can we help you?</h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                Our support team is available 24/7 to assist you with any questions or concerns.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Submit a Support Request</h3>

              {/* Topic Selection */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Topic <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent"
                >
                  <option value="">Select a topic...</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject Input */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief summary of your issue..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent"
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Describe Your Issue <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please provide as much detail as possible to help us assist you better..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6] focus:border-transparent resize-none"
                />
                <p className="text-xs text-gray-500 mt-2">
                  💡 Tip: Include job IDs, employer names, or transaction details when relevant
                </p>
              </div>

              {/* User Info Display */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 mb-2">Your Information:</p>
                <p className="text-sm text-gray-700 font-medium">{currentUser.name}</p>
                <p className="text-xs text-gray-500">{currentUser.email}</p>
              </div>

              {/* Priority Info */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                <h4 className="text-sm font-bold text-blue-900 mb-2">Response Times</h4>
                <div className="space-y-1 text-xs text-blue-800">
                  <p>🔴 <strong>Critical Issues:</strong> Within 1 hour</p>
                  <p>🟡 <strong>Standard Requests:</strong> 2-4 hours</p>
                  <p>🟢 <strong>General Inquiries:</strong> 24 hours</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!selectedTopic || !subject || !message}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  selectedTopic && subject && message
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
                    <h4 className="font-bold text-green-900 text-sm mb-1">Request Submitted Successfully!</h4>
                    <p className="text-sm text-green-800 leading-relaxed">
                      Your support ticket has been created. Our team will respond within 2-4 hours. Check the "My Tickets" tab to track progress.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Ticket History */}
            <div className="space-y-3">
              {tickets.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                      Support Tickets
                    </h3>
                    <span className="text-xs text-gray-500">
                      {tickets.filter(t => t.status === 'open').length} Active
                    </span>
                  </div>
                  {tickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#3164E6] transition-colors cursor-pointer"
                    >
                      {/* Ticket Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-gray-500">{ticket.id}</span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-bold border flex items-center gap-1 ${getStatusColor(
                                ticket.status
                              )}`}
                            >
                              {getStatusIcon(ticket.status)}
                              {ticket.status.replace('-', ' ').toUpperCase()}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{ticket.subject}</h4>
                          <p className="text-xs text-gray-500">{ticket.topic}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
                      </div>

                      {/* Ticket Message */}
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{ticket.message}</p>

                      {/* Admin Response (if available) */}
                      {ticket.response && (
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-3">
                          <p className="text-xs font-bold text-blue-900 mb-1">Admin Response:</p>
                          <p className="text-xs text-blue-800">{ticket.response}</p>
                        </div>
                      )}

                      {/* Ticket Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Created: {ticket.createdAt}</span>
                          <span>•</span>
                          <span>Updated: {ticket.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">No Support Tickets</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    You haven't submitted any support requests yet.
                  </p>
                  <button
                    onClick={() => setActiveTab('new')}
                    className="bg-[#3164E6] text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
                  >
                    Create New Request
                  </button>
                </div>
              )}
            </div>

            {/* Help Notice */}
            <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5">
              <h4 className="font-bold text-blue-900 text-sm mb-2">Need Immediate Help?</h4>
              <p className="text-sm text-blue-800 mb-3">
                For urgent matters, you can reach our support team directly:
              </p>
              <div className="space-y-2">
                <button className="w-full bg-white rounded-xl p-3 flex items-center justify-between border border-blue-200 hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-medium text-blue-900">📞 Call: 1-800-XTRA-HELP</span>
                  <ChevronRight className="w-4 h-4 text-blue-600" />
                </button>
                <button className="w-full bg-white rounded-xl p-3 flex items-center justify-between border border-blue-200 hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-medium text-blue-900">💬 Live Chat Available 24/7</span>
                  <ChevronRight className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}