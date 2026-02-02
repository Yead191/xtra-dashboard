import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { Send, User, MoreVertical, Phone, ArrowLeft, Shield } from 'lucide-react';

interface WorkerInboxProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

const MESSAGES = [
  { id: 1, text: "Hi, I'm arriving in 5 minutes.", sender: 'me', time: '1:55 PM' },
  { id: 2, text: "Great, please come to the back entrance.", sender: 'client', time: '1:56 PM' },
  { id: 3, text: "Understood. See you soon.", sender: 'me', time: '1:57 PM' },
];

export function WorkerInbox({ navigate, currentUser }: WorkerInboxProps) {
  const [messages, setMessages] = useState(MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      text: newMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4 shadow-sm z-10 sticky top-0 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="relative">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <User className="w-6 h-6 text-gray-500" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 leading-tight">Grand Plaza Hotel</h2>
              <p className="text-xs text-gray-500">Event Waiter • Active Job</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
              <Shield className="w-5 h-5 text-[#3164E6]" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-6 overflow-y-auto space-y-4 pb-24">
        {/* System Message */}
        <div className="flex justify-center my-4">
          <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Job Started • Today
          </span>
        </div>

        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.sender === 'me' 
                  ? 'bg-[#3164E6] text-white rounded-br-none' 
                  : 'bg-white text-gray-900 border border-gray-100 rounded-bl-none shadow-sm'
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 text-right ${
                msg.sender === 'me' ? 'text-blue-100' : 'text-gray-400'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-6">
           <button className="text-red-500 text-xs font-bold bg-red-50 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors">
             Report Issue / Dispute
           </button>
        </div>
      </div>

      {/* Input */}
      <div className="bg-white p-4 border-t border-gray-100 fixed bottom-0 left-0 right-0 safe-area-bottom">
        <div className="flex items-center gap-2 max-w-[430px] mx-auto">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3164E6]"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            className="w-12 h-12 bg-[#3164E6] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 active:scale-95 transition-transform"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
