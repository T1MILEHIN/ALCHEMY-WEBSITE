import type { Route } from "./+types/about";
import { CheckCircle, Circle, Target } from 'lucide-react';
import { Button } from '~/components/ui/button';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "About Our Website" },
  ];
}


const about = () => {
    const learningPath = [
        { id: 1, title: "Intro", completed: true, current: false },
        { id: 2, title: "Level 1", completed: true, current: false },
        { id: 3, title: "Level 2", completed: true, current: false },
        { id: 4, title: "Level 3", completed: false, current: true },
        { id: 5, title: "Level 4", completed: false, current: false },
        { id: 6, title: "Level 5", completed: false, current: false },
        { id: 7, title: "Goal", completed: false, current: false },
    ];

    const modules = [
        "Spiritual Foundation",
        "Personal Assessment",
        "Skill Development",
        "Advanced Techniques",
        "Mastery Integration"
    ];

    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 py-12">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                        Where Are You?
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Track your progress on the Alchemist Path and discover your current position in the journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Learning Path Visualization */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-8 text-gray-800">Your Learning Journey</h2>

                        {/* Path Steps */}
                        <div className="space-y-6">
                            {learningPath.map((step, index) => (
                                <div key={step.id} className="flex items-center space-x-4">
                                    {/* Step Icon */}
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${step.completed
                                            ? 'bg-emerald-500 text-white'
                                            : step.current
                                                ? 'bg-red-500 text-white border-2 border-red-600'
                                                : 'bg-gray-200 text-gray-400'
                                        }`}>
                                        {step.completed ? (
                                            <CheckCircle size={20} />
                                        ) : step.current ? (
                                            <Target size={20} />
                                        ) : (
                                            <Circle size={20} />
                                        )}
                                    </div>

                                    {/* Step Content */}
                                    <div className={`flex-1 p-4 rounded-lg ${step.completed
                                            ? 'bg-emerald-50 border border-emerald-200'
                                            : step.current
                                                ? 'bg-red-50 border-2 border-red-200'
                                                : 'bg-gray-50 border border-gray-200'
                                        }`}>
                                        <h3 className={`font-semibold ${step.completed
                                                ? 'text-emerald-700'
                                                : step.current
                                                    ? 'text-red-700'
                                                    : 'text-gray-500'
                                            }`}>
                                            {step.title}
                                        </h3>
                                        {step.current && (
                                            <p className="text-sm text-red-600 mt-1">Current Position</p>
                                        )}
                                    </div>

                                    {/* Connecting Line */}
                                    {index < learningPath.length - 1 && (
                                        <div className="absolute left-6 mt-12 w-0.5 h-6 bg-gray-300"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Current Test Highlight */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white">
                            <div className="flex items-center space-x-3 mb-3">
                                <Target size={24} />
                                <h3 className="text-xl font-bold">Current Focus: TEST</h3>
                            </div>
                            <p className="text-red-100">
                                You're currently in the testing phase. Complete your assessment to unlock the next level.
                            </p>
                            <Button className="mt-4 bg-white text-red-600 hover:bg-red-50">
                                Take Assessment
                            </Button>
                        </div>
                    </div>

                    {/* Modules & Progress */}
                    <div className="space-y-8">
                        {/* Available Modules */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Modules</h2>
                            <p className="text-gray-600 mb-6">8 levels - but only 6 modules</p>

                            <div className="space-y-4">
                                {modules.map((module, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                        <span className="text-emerald-700 font-medium">{module}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Stats */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Progress</h2>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-emerald-600 mb-2">3/7</div>
                                    <div className="text-sm text-gray-600">Levels Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">43%</div>
                                    <div className="text-sm text-gray-600">Overall Progress</div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <span>Progress</span>
                                    <span>43%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg p-8 text-white">
                            <h2 className="text-2xl font-bold mb-4">Ready for the Next Step?</h2>
                            <p className="mb-6 text-emerald-100">
                                Complete your current assessment to unlock Level 4 and continue your transformation journey.
                            </p>
                            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-medium">
                                Continue Journey
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default about
