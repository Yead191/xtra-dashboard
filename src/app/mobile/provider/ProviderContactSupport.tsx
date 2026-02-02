import { useState, useRef, useEffect } from 'react';
import { ProviderRoute } from '../ProviderApp';
import { ArrowLeft, Send } from 'lucide-react';

interface ProviderContactSupportProps {
  navigate: (route: ProviderRoute) => void;
  currentUser: any;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: string;
}

export function ProviderContactSupport({ navigate, currentUser }: ProviderContactSupportProps) {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Xtra support admin. How can I help you today?',
      sender: 'admin',
      timestamp: '10:30 AM',
    },
    {
      id: '2',
      text: 'Hi! I have a question about my payment.',
      sender: 'user',
      timestamp: '10:32 AM',
    },
    {
      id: '3',
      text: 'I\'d be happy to help you with that. Can you provide more details about the payment issue?',
      sender: 'admin',
      timestamp: '10:33 AM',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!messageText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setMessageText('');

    // Simulate admin response after 2 seconds
    setTimeout(() => {
      const adminResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for your message. I\'m looking into this for you now.',
        sender: 'admin',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, adminResponse]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('profile')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3164E6] to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900">Xtra Support Admin</h1>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Online
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-[#3164E6] text-white rounded-br-sm'
                    : 'bg-white border border-gray-200 text-gray-900 rounded-bl-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              <p
                className={`text-xs text-gray-500 mt-1 px-1 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-end gap-3">
          <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#3164E6] transition-all">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!messageText.trim()}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shrink-0 ${
              messageText.trim()
                ? 'bg-[#3164E6] text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
