import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, User, Home, Notebook, Video, Book, ListCheck, User2 } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";

const navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigationItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "#courses", label: "Courses", icon: Notebook },
        { href: "#videos", label: "Videos", icon: Video },
        { href: "#articles", label: "Articles", icon: Book },
        { href: "#glossary", label: "Glossary", icon: ListCheck },
        { href: "/about", label: "About", icon: User2 },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-200 transition-all duration-300 group-hover:scale-105">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            Alchemist
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            return item.href.startsWith('/') ? (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    className={({isActive})=> isActive ? "flex items-center space-x-2 px-4 py-2 rounded-lg text-emerald-600 bg-emerald-50/50 transition-all duration-200 font-medium group" : "flex items-center space-x-2 px-4 py-2 rounded-lg text-black hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-200 font-medium group"}
                                    // className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-200 font-medium group"
                                >
                                    {Icon && <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />}
                                    <span className='jost'>{item.label}</span>
                                </NavLink>
                            ) : (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-black hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-200 font-medium group"
                                >
                                    {Icon && <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />}
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Desktop Login Button */}
                    <div className="hidden lg:flex items-center">
                        <Link to="/auth/login">
                            <Button
                                variant="outline"
                                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <User size={18} className="mr-2" />
                                Log In
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="hover:bg-emerald-50 transition-colors duration-200"
                                >
                                    <Menu size={24} className="text-gray-700" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-lg border-l border-emerald-100">
                                <SheetHeader className="text-left">
                                    <SheetTitle className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">A</span>
                                        </div>
                                        <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                            Alchemist
                                        </span>
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="px-4 mt-8 space-y-2">
                                    {navigationItems.map((item) => {
                                        const Icon = item.icon;
                                        return item.href.startsWith('/') ? (
                                            <Link
                                                key={item.href}
                                                to={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/70 transition-all duration-200 font-medium w-full"
                                            >
                                                {Icon && <Icon size={20} />}
                                                <span>{item.label}</span>
                                            </Link>
                                        ) : (
                                            <a
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/70 transition-all duration-200 font-medium w-full"
                                            >
                                                {Icon && <Icon size={20} />}
                                                <span>{item.label}</span>
                                            </a>
                                        );
                                    })}

                                    <div className="pt-4 mt-6 border-t border-emerald-100">
                                        <Link to="/auth/login">
                                            <Button
                                                variant="outline"
                                                className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 justify-start"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <User size={18} className="mr-2" />
                                                Log In
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default navbar