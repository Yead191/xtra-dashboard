import { ArrowLeft, DollarSign, TrendingUp, Download, CreditCard } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Route, User } from '../../App';
import { Separator } from '../../components/ui/separator';
import { toast } from 'sonner';

interface ProviderEarningsProps {
  navigate: (route: Route) => void;
  currentUser: User;
}

const transactions = [
  { id: '1', type: 'Earning', desc: 'Mobile UI/UX Design - John Smith', amount: 250, date: 'Dec 28, 2025', status: 'completed' },
  { id: '2', type: 'Withdrawal', desc: 'Bank Transfer', amount: -500, date: 'Dec 25, 2025', status: 'completed' },
  { id: '3', type: 'Earning', desc: 'Logo Design - Emma Wilson', amount: 150, date: 'Dec 20, 2025', status: 'completed' },
  { id: '4', type: 'Earning', desc: 'Brand Identity - David Lee', amount: 350, date: 'Dec 15, 2025', status: 'completed' },
];

export function ProviderEarnings({ navigate, currentUser }: ProviderEarningsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={() => navigate('provider-dashboard')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Earnings & Payouts</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Available Balance</p>
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600">$1,250.00</p>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700" onClick={() => toast.success('Withdrawal requested')}>
                Withdraw Funds
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Pending Clearance</p>
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-3xl font-bold">$450.00</p>
              <p className="text-xs text-gray-500 mt-4">Available in 7 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Total Lifetime</p>
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold">$4,200.00</p>
              <p className="text-xs text-gray-500 mt-4">All-time earnings</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>Your earnings and withdrawals</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          transaction.type === 'Earning' ? 'bg-green-100' : 'bg-blue-100'
                        }`}>
                          {transaction.type === 'Earning' ? (
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          ) : (
                            <CreditCard className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.desc}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                        </p>
                        <p className="text-xs text-gray-500">{transaction.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Payout Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Bank Account</p>
                    <span className="text-green-600 text-sm">Primary</span>
                  </div>
                  <p className="text-sm text-gray-600">****  1234</p>
                  <p className="text-xs text-gray-500">Chase Bank</p>
                </div>
                <Button variant="outline" className="w-full">
                  Add Payout Method
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">December Earnings</span>
                  <span className="font-semibold">$1,850</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Platform Fee (5%)</span>
                  <span className="font-semibold">-$92.50</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-semibold">Net Earnings</span>
                  <span className="font-bold text-green-600">$1,757.50</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
