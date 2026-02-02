import { ArrowLeft, Clock, CheckCircle, Package, Truck, Star, MessageSquare, Download, AlertCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Progress } from '../../components/ui/progress';
import { Route, User } from '../../App';
import { Separator } from '../../components/ui/separator';
import { Textarea } from '../../components/ui/textarea';
import { toast } from 'sonner';

interface OrderTrackingProps {
  navigate: (route: Route, params?: any) => void;
  currentUser: User;
  orderId: string;
}

const orderStatuses = [
  { label: 'Order Placed', icon: Package, completed: true, date: 'Dec 28, 2025' },
  { label: 'In Progress', icon: Clock, completed: true, date: 'Dec 29, 2025' },
  { label: 'Under Review', icon: AlertCircle, completed: false, date: 'Expected: Jan 2, 2026' },
  { label: 'Completed', icon: CheckCircle, completed: false, date: '' },
];

const deliverables = [
  { name: 'High-Fidelity Mockups', status: 'completed', file: 'mockups_final.fig' },
  { name: 'Interactive Prototype', status: 'in_progress', file: 'prototype_v2.fig' },
  { name: 'Design System', status: 'pending', file: '' },
];

export function OrderTracking({ navigate, currentUser, orderId }: OrderTrackingProps) {
  const handleApprove = () => {
    toast.success('Order approved! Payment has been released to the seller.');
    navigate('user-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={() => navigate('user-dashboard')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Order #{orderId}</h1>
            <p className="text-gray-600">Track your order progress</p>
          </div>
          <Badge className="bg-blue-100 text-blue-700 text-base px-4 py-2">
            In Progress
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Order Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orderStatuses.map((status, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          status.completed ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'
                        }`}>
                          <status.icon className="w-5 h-5" />
                        </div>
                        {index < orderStatuses.length - 1 && (
                          <div className={`w-0.5 h-12 mt-2 ${status.completed ? 'bg-green-600' : 'bg-gray-200'}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h3 className={`font-semibold ${status.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                          {status.label}
                        </h3>
                        <p className="text-sm text-gray-500">{status.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Details */}
            <Card>
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Overall Completion</span>
                    <span className="text-sm font-bold">65%</span>
                  </div>
                  <Progress value={65} className="h-3" />
                  <p className="text-sm text-gray-600 mt-2">Expected delivery: 2 days</p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Deliverables</h4>
                  <div className="space-y-3">
                    {deliverables.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            item.status === 'completed' ? 'bg-green-100 text-green-600' :
                            item.status === 'in_progress' ? 'bg-blue-100 text-blue-600' :
                            'bg-gray-100 text-gray-400'
                          }`}>
                            {item.status === 'completed' ? <CheckCircle className="w-4 h-4" /> :
                             item.status === 'in_progress' ? <Clock className="w-4 h-4" /> :
                             <Package className="w-4 h-4" />}
                          </div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            {item.file && <p className="text-xs text-gray-500">{item.file}</p>}
                          </div>
                        </div>
                        {item.status === 'completed' && (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Communication */}
            <Card>
              <CardHeader>
                <CardTitle>Updates & Messages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="font-semibold text-sm mb-1">Sarah Johnson</p>
                        <p className="text-sm">Hi! I've started working on your project. I've completed the initial mockups for 5 screens. Please review and let me know if you'd like any changes.</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-row-reverse">
                    <Avatar>
                      <AvatarImage src={currentUser.avatar} />
                      <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-right">
                      <div className="bg-green-600 text-white rounded-lg p-3 inline-block text-left">
                        <p className="text-sm">Looks great! I love the color scheme. Can you make the buttons slightly larger?</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Textarea placeholder="Type your message..." rows={3} />
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      Send Message
                    </Button>
                    <Button variant="outline">
                      Attach File
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Details */}
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
                    alt="Service"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold mb-1">Mobile UI/UX Design</h3>
                  <p className="text-sm text-gray-600">Standard Package</p>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID</span>
                    <span className="font-medium">{orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date</span>
                    <span className="font-medium">Dec 28, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-medium">5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revisions</span>
                    <span className="font-medium">1 of 3 used</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Paid</span>
                  <span className="text-xl font-bold text-green-600">$270.00</span>
                </div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>4.9 (127 reviews)</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={() => navigate('messages')}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Seller
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleApprove}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve & Complete
                </Button>
                <Button variant="outline" className="w-full">
                  Request Revision
                </Button>
                <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                  Report Issue
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
