const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">A</span>
                            </div>
                            <span className="text-xl font-bold">Alchemist Path</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-md jost">
                            Step by Step Path for you to go from Finacial Pain to Financial Gain, Which includes personal development and Spiritual awareness
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Learn</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Training Hub</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Resources</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Alchemist Path. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer