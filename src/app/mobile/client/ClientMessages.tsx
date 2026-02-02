import { useState } from 'react';
import { ClientRoute } from '../ClientApp';
import { Search, Send, Paperclip, Image as ImageIcon } from 'lucide-react';

interface ClientMessagesProps {
  navigate: (route: ClientRoute, params?: any) => void;
  currentUser: any;
}

const conversations = [
  {
    id: '1',
    provider: 'Sarah Johnson',
    service: 'House Cleaning',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    lastMessage: 'I will be there at 10 AM tomorrow',
    timestamp: '2 mins ago',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    provider: 'Mike Anderson',
    service: 'AC Repair',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    lastMessage: 'What time works best for you?',
    timestamp: '1 hour ago',
    unread: 0,
    online: false,
  },
  {
    id: '3',
    provider: 'Emma Wilson',
    service: 'Interior Design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    lastMessage: 'I have some great ideas for your living room',
    timestamp: '3 hours ago',
    unread: 0,
    online: true,
  },
];

const chatMessages = [
  {
    id: '1',
    senderId: 'provider',
    text: 'Hi! Thanks for booking my service.',
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    senderId: 'user',
    text: 'Hello! Looking forward to it.',
    timestamp: '10:32 AM',
  },
  {
    id: '3',
    senderId: 'provider',
    text: 'What time would work best for you tomorrow?',
    timestamp: '10:33 AM',
  },
  {
    id: '4',
    senderId: 'user',
    text: 'I think 10 AM would be perfect.',
    timestamp: '10:35 AM',
  },
  {
    id: '5',
    senderId: 'provider',
    text: 'Perfect! I will be there at 10 AM tomorrow',
    timestamp: '10:36 AM',
  },
];

export function ClientMessages({ navigate, currentUser }: ClientMessagesProps) {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message
      setMessage('');
    }
  };

  if (selectedChat) {
    const activeConversation = conversations.find(c => c.id === selectedChat);
    
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedChat(null)}
              className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center"
            >
              ←
            </button>
            <div className="flex items-center gap-3 flex-1">
              <div className="relative">
                <img
                  src={activeConversation?.avatar}
                  alt={activeConversation?.provider}
                  className="w-12 h-12 rounded-full"
                />
                {activeConversation?.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <h3 className="text-lg">{activeConversation?.provider}</h3>
                <p className="text-sm text-gray-500">
                  {activeConversation?.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.senderId === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  msg.senderId === 'user'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-white text-gray-900 rounded-bl-sm'
                }`}
              >
                <p>{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.senderId === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-100 px-6 py-4 safe-area-bottom">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center text-gray-400">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-400">
              <ImageIcon className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 bg-gray-50 rounded-2xl border-0 outline-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
        <h2 className="text-2xl mb-4">Messages</h2>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search conversations..."
            className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="px-6 py-6">
        {conversations.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">No messages yet</h3>
            <p className="text-gray-500 mb-6">Start a conversation with a service provider</p>
            <button
              onClick={() => navigate('home')}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl"
            >
              Browse Services
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedChat(conversation.id)}
                className="w-full bg-white rounded-2xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={conversation.avatar}
                      alt={conversation.provider}
                      className="w-14 h-14 rounded-full"
                    />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg">{conversation.provider}</h3>
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{conversation.service}</p>
                    <p className="text-sm text-gray-600 line-clamp-1">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
