import { Target, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';

export const TrainingHub = () => {
    return (
        <div className="group relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>

            {/* Content */}
            <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Target size={24} className="text-white" />
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        Training Hub
                    </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">TRAINING</h3>
                <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-semibold">SPIRITUAL AWARENESS</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-semibold">PERSONAL DEVELOPMENT</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-semibold">FINANCIAL INDEPENDENCE</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                            <Users size={20} />
                        </div>
                        <div className="text-2xl font-bold">12K+</div>
                        <div className="text-sm opacity-90">Students</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                            <TrendingUp size={20} />
                        </div>
                        <div className="text-2xl font-bold">95%</div>
                        <div className="text-sm opacity-90">Success Rate</div>
                    </div>
                </div>

                <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 font-medium group">
                    Enter Training Hub
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
            </div>
        </div>
    );
};