import type { Route } from "./+types/level";
import StaircaseStep from "./components/stareCaseSteps";
import ProgressCard from "./components/progressCard";
import ModulesSection from "./components/modulesSection";
import { AuroraBackground } from "~/components/ui/aurora-background";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "What Level of alchemy are Your At?" },
        { name: "description", content: "Check your LEVEL!!!!" },
    ];
}


const level = () => {
    const alchemicalPath = [
        { id: 1, title: "TIN", material: "Base Foundation", completed: true, current: false },
        { id: 2, title: "LEAD", material: "Initial Transformation", completed: true, current: false },
        { id: 3, title: "IRON", material: "Strength Building", completed: true, current: false },
        { id: 4, title: "STEEL", material: "Hardening Process", completed: false, current: false },
        { id: 5, title: "COPPER", material: "Refinement Phase", completed: false, current: false },
        { id: 6, title: "SILVER", material: "Purification", completed: false, current: false },
        { id: 7, title: "GOLD", material: "Final Mastery", completed: false, current: false }
    ];

    // Mark current position (TEST is between IRON and STEEL)
    const pathWithTest = [
        ...alchemicalPath.slice(0, 3),
        { id: 4, title: "TEST", material: "Assessment Phase", completed: false, current: true },
        ...alchemicalPath.slice(3)
    ];

    const completedLevels = alchemicalPath.filter(step => step.completed).length;
    const totalLevels = alchemicalPath.length;
    const progressPercentage = Math.round((completedLevels / totalLevels) * 100);


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
            <main className="mx-auto pb-12">
                {/* Page Header */}
                <AuroraBackground>
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                                WHERE ARE YOU?
                            </h1>
                            <p className="jost text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Track your progress on the Alchemist Path and discover your current position in the journey of transformation from base metals to gold.
                            </p>
                        </div>
                    </div>
                </AuroraBackground>

                <div className="container mx-auto px-4 space-y-6">
                    <div className="lg:col-span-2">
                        <div className="overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 min-h-[600px]">
                            <h2 className="inter text-2xl font-bold mb-8 text-gray-800 text-center">
                                Your Alchemical Journey
                            </h2>

                            {/* Staircase Steps */}
                            <div className="relative py-8">
                                <div className="space-y-4">
                                    {pathWithTest.map((step, index) => (
                                        <StaircaseStep
                                            key={step.id}
                                            step={step}
                                            index={index}
                                            totalSteps={pathWithTest.length}
                                        />
                                    ))}
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                    <div className="absolute top-4 left-8 text-6xl opacity-10 font-bold text-emerald-600">
                                        🧙‍♂️
                                    </div>
                                    <div className="absolute bottom-8 right-8 text-4xl opacity-10 font-bold text-teal-600">
                                        ⚗️
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Progress & Modules */}
                    <div className="space-y-6">
                        <ProgressCard
                            completedLevels={completedLevels}
                            totalLevels={totalLevels}
                            progressPercentage={progressPercentage}
                            currentLevel="STEEL"
                        />
                        <ModulesSection />
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-16 text-gray-500">
                    <p className="jost">
                        "The path of transformation requires patience, dedication, and wisdom. Each step brings you closer to your golden potential."
                    </p>
                </div>
            </main>
        </div>
    );
}

export default level
