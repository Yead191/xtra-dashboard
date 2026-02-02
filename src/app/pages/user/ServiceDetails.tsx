import { ArrowLeft, Star, Clock, CheckCircle, MessageSquare, Share2, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Route, User } from '../../App';
import { Separator } from '../../components/ui/separator';

interface ServiceDetailsProps {
  navigate: (route: Route, params?: any) => void;
  currentUser: User | null;
  serviceId: string;
}

const service = {
  id: '1',
  title: 'Mobile UI/UX design or app UI design',
  description: 'I will create a stunning, user-friendly mobile app design that engages your users and elevates your brand. With over 5 years of experience in UI/UX design, I specialize in creating intuitive interfaces that convert.',
  provider: {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 4.9,
    reviews: 127,
    level: 'Top Rated Seller',
    memberSince: 'Jan 2022',
    responseTime: '1 hour',
    completedOrders: 245,
  },
  images: [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
  ],
  packages: [
    {
      name: 'Basic',
      price: 150,
      deliveryTime: '3 days',
      revisions: 2,
      features: [
        '3 Screen Designs',
        'Source Files',
        'Basic Prototyping',
        '2 Revisions',
      ],
    },
    {
      name: 'Standard',
      price: 250,
      deliveryTime: '5 days',
      revisions: 3,
      features: [
        '7 Screen Designs',
        'Source Files',
        'Interactive Prototype',
        '3 Revisions',
        'Design System',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: 450,
      deliveryTime: '7 days',
      revisions: 5,
      features: [
        '15 Screen Designs',
        'Source Files',
        'Advanced Prototype',
        '5 Revisions',
        'Complete Design System',
        'Developer Handoff',
      ],
    },
  ],
  category: 'UI/UX Design',
  tags: ['Mobile App', 'UI Design', 'UX Design', 'Figma', 'Prototype'],
  reviews: [
    {
      author: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
      comment: 'Absolutely amazing work! Sarah understood my vision perfectly and delivered beyond expectations. The design is modern, clean, and user-friendly.',
      date: '2 weeks ago',
    },
    {
      author: 'Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      comment: 'Great communication and fast delivery. The designs were exactly what I needed for my startup app. Highly recommended!',
      date: '1 month ago',
    },
  ],
};

export function ServiceDetails({ navigate, currentUser, serviceId }: ServiceDetailsProps) {
  const handleBookNow = (packageName: string) => {
    if (!currentUser) {
      navigate('auth');
      return;
    }
    navigate('booking', { serviceId });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate('home')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">
                  {service.category}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {service.images.slice(1).map((img, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Title and Provider */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={service.provider.avatar} />
                  <AvatarFallback>{service.provider.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{service.provider.name}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{service.provider.rating}</span>
                      <span className="text-gray-500">({service.provider.reviews} reviews)</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {service.provider.level}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({service.reviews.length})</TabsTrigger>
                <TabsTrigger value="about">About Seller</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">About This Service</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    
                    <h4 className="font-semibold mb-2">What You'll Get:</h4>
                    <ul className="space-y-2 mb-4">
                      {['Professional UI/UX Design', 'High-fidelity mockups', 'Interactive prototypes', 'Source files (Figma/Sketch)', 'Design documentation', 'Unlimited revisions until satisfied'].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {service.reviews.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-semibold">{review.author}</p>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="about">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={service.provider.avatar} />
                        <AvatarFallback>{service.provider.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{service.provider.name}</h3>
                        <Badge className="bg-green-100 text-green-700">{service.provider.level}</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Member Since</p>
                        <p className="font-semibold">{service.provider.memberSince}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Response Time</p>
                        <p className="font-semibold">{service.provider.responseTime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Completed Orders</p>
                        <p className="font-semibold">{service.provider.completedOrders}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Rating</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{service.provider.rating}</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline" onClick={() => navigate('messages')}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact Seller
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Packages */}
          <div className="space-y-4">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Select a Package</h3>
                
                <Tabs defaultValue="Standard" className="w-full">
                  <TabsList className="w-full grid grid-cols-3">
                    {service.packages.map((pkg) => (
                      <TabsTrigger key={pkg.name} value={pkg.name}>
                        {pkg.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {service.packages.map((pkg) => (
                    <TabsContent key={pkg.name} value={pkg.name} className="space-y-4">
                      {pkg.recommended && (
                        <Badge className="w-full justify-center bg-green-600">
                          Recommended
                        </Badge>
                      )}
                      
                      <div className="text-center border-b pb-4">
                        <p className="text-3xl font-bold text-green-600">${pkg.price}</p>
                        <p className="text-sm text-gray-600 mt-1">One-time payment</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Delivery Time</span>
                          <span className="font-semibold flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {pkg.deliveryTime}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Revisions</span>
                          <span className="font-semibold">{pkg.revisions} revisions</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Features:</p>
                        {pkg.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => handleBookNow(pkg.name)}
                      >
                        Continue (${pkg.price})
                      </Button>

                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => navigate('messages')}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Seller
                      </Button>
                    </TabsContent>
                  ))}
                </Tabs>

                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span>Money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
