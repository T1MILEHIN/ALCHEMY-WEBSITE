import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import type { Route } from './+types/forgotPassword';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Forgot-Password Page" },
    { name: "description", content: "Recover your account when you forget your password" },
  ];
}

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <Card className="bg-white/80 backdrop-blur-lg border-emerald-100 shadow-xl animate-scale-in">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>Check Your Email</h2>
              <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <div className="space-y-4">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 animate-fade-in"
                  style={{ animationDelay: '0.5s' }}
                >
                  Try Another Email
                </Button>
                <Link to="/auth/login">
                  <Button 
                    variant="ghost" 
                    className="w-full text-gray-600 hover:text-emerald-600 animate-fade-in"
                    style={{ animationDelay: '0.6s' }}
                  >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <Link to="/" className="inline-flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-200 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Alchemist
            </span>
          </Link>
        </div>

        <Card className="bg-white/80 backdrop-blur-lg border-emerald-100 shadow-xl animate-scale-in hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800 animate-fade-in" style={{ animationDelay: '0.3s' }}>Reset Password</CardTitle>
            <CardDescription className="text-gray-600 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" size={18} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    className="pl-10 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 transition-all duration-200 hover:border-emerald-300"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                Send Reset Link
              </Button>
            </form>

            <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <Link to="/auth/login" className="inline-flex items-center text-gray-600 hover:text-emerald-600 transition-all duration-200 hover:underline">
                <ArrowLeft size={18} className="mr-2" />
                Back to Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;