import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Paperclip, MoreVertical, Search, Phone, Video, Image as ImageIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';

const conversations = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    lastMessage: "I've sent you the updated designs",
    timestamp: '2m ago',
    unread: 2,
    online: true,
    orderId: 'ORDER-001',
  },
  {
    id: '2',
    name: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    lastMessage: 'Thank you! The logo looks perfect',
    timestamp: '1h ago',
    unread: 0,
    online: false,
    orderId: 'ORDER-002',
  },
  {
    id: '3',
    name: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    lastMessage: 'When would you like to start?',
    timestamp: '3h ago',
    unread: 1,
    online: true,
    orderId: 'ORDER-003',
  },
  {
    id: '4',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    lastMessage: 'Sure, I can help with that!',
    timestamp: '1d ago',
    unread: 0,
    online: false,
  },
];

const messages = [
  {
    id: '1',
    sender: 'Sarah Johnson',
    senderId: 'sarah',
    content: 'Hi! Thanks for placing the order. I\'m excited to work on your mobile app design.',
    timestamp: '10:30 AM',
    isOwn: false,
  },
  {
    id: '2',
    sender: 'You',
    senderId: 'me',
    content: 'Thanks Sarah! I\'m looking forward to seeing your designs. I\'ve attached some reference materials.',
    timestamp: '10:35 AM',
    isOwn: true,
  },
  {
    id: '3',
    sender: 'Sarah Johnson',
    senderId: 'sarah',
    content: 'Perfect! I\'ve reviewed the materials. I have a few questions about the color scheme and target audience.',
    timestamp: '10:45 AM',
    isOwn: false,
  },
  {
    id: '4',
    sender: 'You',
    senderId: 'me',
    content: 'Sure! The target audience is millennials aged 25-35. For colors, I prefer a modern, clean look with greens and blues.',
    timestamp: '11:00 AM',
    isOwn: true,
  },
  {
    id: '5',
    sender: 'Sarah Johnson',
    senderId: 'sarah',
    content: 'Great! That gives me a clear direction. I\'ll start with the initial concepts and share them with you by tomorrow.',
    timestamp: '11:05 AM',
    isOwn: false,
  },
  {
    id: '6',
    sender: 'Sarah Johnson',
    senderId: 'sarah',
    content: "I've sent you the updated designs. Please review and let me know your thoughts!",
    timestamp: 'Just now',
    isOwn: false,
  },
];

export function Messages() {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-xl font-bold ml-4">Messages</h1>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full">
        {/* Conversations List */}
        <div className="w-80 bg-white border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-2">
              {filteredConversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer mb-1 transition-colors ${
                    selectedChat.id === conv.id ? 'bg-green-50 border border-green-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conv.avatar} />
                      <AvatarFallback>{conv.name[0]}</AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold truncate">{conv.name}</p>
                      <span className="text-xs text-gray-500">{conv.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    {conv.orderId && (
                      <Badge variant="outline" className="mt-1 text-xs">
                        {conv.orderId}
                      </Badge>
                    )}
                  </div>
                  {conv.unread > 0 && (
                    <Badge className="bg-green-600">{conv.unread}</Badge>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={selectedChat.avatar} />
                  <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                </Avatar>
                {selectedChat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              <div>
                <h2 className="font-semibold">{selectedChat.name}</h2>
                <p className="text-sm text-gray-600">
                  {selectedChat.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Order Context */}
          {selectedChat.orderId && (
            <div className="px-4 py-3 bg-blue-50 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Order:</span>
                  <Badge variant="outline">{selectedChat.orderId}</Badge>
                  <span className="text-gray-600">Mobile UI/UX Design</span>
                </div>
                <Button size="sm" variant="outline">
                  View Order
                </Button>
              </div>
            </div>
          )}

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[70%] ${message.isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
                    {!message.isOwn && (
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={selectedChat.avatar} />
                        <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.isOwn 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className={`text-xs text-gray-500 mt-1 ${message.isOwn ? 'text-right' : 'text-left'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ImageIcon className="w-5 h-5" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={handleSendMessage}
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Press Enter to send
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
