import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User as UserIcon, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { toast } from 'sonner';
import { User, UserRole } from '../types';

export function AuthPage() {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [role, setRole] = useState<UserRole>('worker');
  
  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Mock authentication
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email: email,
      role: role || 'worker',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      phone: '+1 234 567 8900',
      location: 'New York, USA',
      rating: 4.8,
      completedOrders: 45,
      memberSince: 'Jan 2024',
    };

    toast.success('Welcome back!');
    
    // Navigate based on role
    if (mockUser.role === 'admin') {
      navigate('/admin/dashboard');
    } else if (mockUser.role === 'business') {
      navigate('/business/dashboard');
    } else {
      navigate('/worker/dashboard');
    }
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !name || !phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock registration
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      email: email,
      role: role || 'worker',
      phone: phone,
      location: location || 'Not specified',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 0,
      completedOrders: 0,
      memberSince: 'Dec 2025',
    };

    toast.success('Account created successfully!');
    
    // Navigate based on role
    if (newUser.role === 'admin') {
      navigate('/admin/dashboard');
    } else if (newUser.role === 'business') {
      navigate('/business/dashboard');
    } else {
      navigate('/worker/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-12 text-white h-full flex flex-col justify-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Welcome to WorkConnect</h2>
                <p className="text-xl text-green-50 mb-8">
                  Connect with trusted businesses or find flexible work opportunities nearby.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GPS Verified</h3>
                    <p className="text-green-50">Accurate time tracking and attendance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Secure Payments</h3>
                    <p className="text-green-50">Escrow protection for every job</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instant Matches</h3>
                    <p className="text-green-50">Find work or workers in seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                {authMode === 'signin' ? 'Sign In' : 'Create Account'}
              </CardTitle>
              <CardDescription>
                {authMode === 'signin' 
                  ? 'Welcome back! Please enter your credentials.' 
                  : 'Join our community of workers and businesses.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={authMode} onValueChange={(v) => setAuthMode(v as 'signin' | 'signup')}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="signin">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="role-signin">I am a</Label>
                      <RadioGroup value={role || 'worker'} onValueChange={(v) => setRole(v as UserRole)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="worker" id="worker-signin" />
                          <Label htmlFor="worker-signin" className="font-normal cursor-pointer">Worker (Looking for jobs)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business-signin" />
                          <Label htmlFor="business-signin" className="font-normal cursor-pointer">Business (Hiring)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="admin" id="admin-signin" />
                          <Label htmlFor="admin-signin" className="font-normal cursor-pointer">Admin</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email-signin">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email-signin"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password-signin">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password-signin"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Remember me</span>
                      </label>
                      <a href="#" className="text-green-600 hover:text-green-700">
                        Forgot password?
                      </a>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Sign In
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="role-signup">I want to</Label>
                      <RadioGroup value={role || 'worker'} onValueChange={(v) => setRole(v as UserRole)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="worker" id="worker-signup" />
                          <Label htmlFor="worker-signup" className="font-normal cursor-pointer">Find Work</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business-signup" />
                          <Label htmlFor="business-signup" className="font-normal cursor-pointer">Hire Workers</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email-signup">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email-signup"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="location"
                          type="text"
                          placeholder="City, Country"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password-signup">Password *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password-signup"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      By creating an account, you agree to our{' '}
                      <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>Demo credentials for testing:</p>
                <p className="text-xs mt-1">Email: any@email.com | Password: any</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
