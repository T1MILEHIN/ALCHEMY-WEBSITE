import { useState } from 'react';
import { Link } from 'react-router';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import type { Route } from './+types/login';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Login Page" },
    { name: "description", content: "Enter Your Login Details to continue" },
  ];
}

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-4">
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
                        <CardTitle className="text-2xl font-bold text-gray-800">Welcome Back</CardTitle>
                        <CardDescription className="text-gray-600 jost">
                            Sign in to your account to continue your journey
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e: any) => setEmail(e.target.value)}
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
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e: any) => setPassword(e.target.value)}
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

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2 text-sm text-gray-600">
                                    <input type="checkbox" className="rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500" />
                                    <span>Remember me</span>
                                </label>
                                <Link to="/auth/forgot-password" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                                    Forgot password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Sign In
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600 jost">
                                Don't have an account?{' '}
                                <Link to="/auth/signup" className="text-emerald-600 hover:text-emerald-700 font-medium jost">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Login;