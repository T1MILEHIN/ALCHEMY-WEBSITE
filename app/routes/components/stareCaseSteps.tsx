import { CheckCircle, Circle, Target } from 'lucide-react';

interface StaircaseStepProps {
    step: {
        id: number;
        title: string;
        completed: boolean;
        current: boolean;
        material?: string;
    };
    index: number;
    totalSteps: number;
}

const StaircaseStep = ({ step, index, totalSteps }: StaircaseStepProps) => {
    const isReversed = index % 2 === 1;
    const stepFromBottom = totalSteps - index;

    return (
        <div
            // ${isReversed ? 'flex-row-reverse' : 'flex-row'}
            className={`flex-row-reverse relative flex items-center transition-all duration-500 hover:scale-105`}
            style={{
                marginBottom: '1rem',
                marginRight: `${index * 9}rem`
            }}>
            {/* Step Box */}
            <div className={`relative px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300 ${step.completed
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-200'
                : step.current
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-red-200 animate-pulse'
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-500 shadow-gray-100'
                }
                ${step.current ? 'ring-4 ring-red-300 ring-opacity-50' : ''}`}>
                <div className="flex items-center space-x-3">
                    {/* Icon */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.completed
                        ? 'bg-white/20'
                        : step.current
                            ? 'bg-white/20'
                            : 'bg-white/10'
                        }`}>
                        {step.completed ? (
                            <CheckCircle size={10} />
                        ) : step.current ? (
                            <Target size={10} />
                        ) : (
                            <Circle size={10} />
                        )}
                    </div>
                    {/* Step Info */}
                    <div>
                        <h3 className="font-bold text-sm">{step.title}</h3>
                        {step.material && (
                            <p className="text-xs opacity-80 jost">{step.material}</p>
                        )}
                    </div>
                </div>

                {/* Current Position Indicator */}
                {step.current && (
                    <div className="z-[999] absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                        <div className="jost text-center w-36 bg-red-600 text-white text-xs px-1 py-2 rounded-md font-medium">
                            YOU ARE HERE
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StaircaseStep;