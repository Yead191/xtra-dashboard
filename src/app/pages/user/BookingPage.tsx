import { useState } from 'react';
import { ArrowLeft, CreditCard, Lock, Calendar, FileText } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Route, User } from '../../App';
import { Separator } from '../../components/ui/separator';
import { toast } from 'sonner';

interface BookingPageProps {
  navigate: (route: Route, params?: any) => void;
  currentUser: User;
  serviceId: string;
}

export function BookingPage({ navigate, currentUser, serviceId }: BookingPageProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [requirements, setRequirements] = useState('');

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Order placed successfully!');
    navigate('user-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={() => navigate('service-details', { serviceId })}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Service
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Complete Your Order</h1>

        <form onSubmit={handleSubmitOrder}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Project Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="requirements">Describe your project *</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Please provide details about your project, including your goals, target audience, preferred style, and any specific requirements..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      rows={6}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Clear requirements help the seller deliver exactly what you need
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="files">Attach Files (Optional)</Label>
                    <Input id="files" type="file" multiple />
                    <p className="text-sm text-gray-500 mt-2">
                      Upload any reference materials, brand guidelines, or assets
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="deadline">Preferred Deadline</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="deadline" type="date" className="pl-10" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Credit / Debit Card</div>
                        <div className="text-sm text-gray-500">Visa, Mastercard, Amex</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="font-semibold">PayPal</div>
                        <div className="text-sm text-gray-500">Fast and secure</div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mobile UI/UX Design</h4>
                    <p className="text-sm text-gray-600">Standard Package</p>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package Price</span>
                      <span className="font-semibold">$250.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee</span>
                      <span className="font-semibold">$12.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Fee</span>
                      <span className="font-semibold">$7.50</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold text-green-600">$270.00</span>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900">Secure Payment</p>
                        <p className="text-green-700 text-xs mt-1">
                          Your payment is protected until you approve the delivery
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    Place Order - $270.00
                  </Button>

                  <p className="text-xs text-center text-gray-500">
                    By placing this order, you agree to our Terms of Service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
