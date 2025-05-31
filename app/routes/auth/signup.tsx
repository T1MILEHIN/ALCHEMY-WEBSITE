import { useState } from 'react';
import { Link } from 'react-router';
import { User, Lock, Eye, EyeOff, Mail } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import type { Route } from './+types/signup';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "SignUp Page" },
    { name: "description", content: "Welcome to our Website\nTo continue Register with your details" },
  ];
}

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup logic here
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log('Signup attempt:', formData);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center space-x-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-200 transition-all duration-300 group-hover:scale-105">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            Alchemist
                        </span>
                    </Link>
                </div>

                <Card className="bg-white/80 backdrop-blur-lg border-emerald-100 shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-gray-800">Create Account</CardTitle>
                        <CardDescription className="text-gray-600">
                            Join the Alchemist community and start your transformation journey
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e: any) => handleInputChange('name', e.target.value)}
                                        className="pl-10 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e: any) => handleInputChange('email', e.target.value)}
                                        className="pl-10 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={(e: any) => handleInputChange('password', e.target.value)}
                                        className="pl-10 pr-10 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={(e: any) => handleInputChange('confirmPassword', e.target.value)}
                                        className="pl-10 pr-10 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="mt-1 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    I agree to the{' '}
                                    <Link to="/terms" className="text-emerald-600 hover:text-emerald-700 font-medium">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link to="/privacy" className="text-emerald-600 hover:text-emerald-700 font-medium">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Create Account
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <Link to="/auth/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Signup;