import { Target } from 'lucide-react';
import { Button } from '~/components/ui/button';

interface ProgressCardProps {
  completedLevels: number;
  totalLevels: number;
  progressPercentage: number;
  currentLevel: string;
}

const ProgressCard = ({ completedLevels, totalLevels, progressPercentage, currentLevel }: ProgressCardProps) => {
  return (
    <div className="space-y-6">
      {/* Current Test Highlight */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Target size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Current Focus: TEST</h3>
            <p className="text-red-100 text-sm">Transformation Assessment</p>
          </div>
        </div>
        <p className="text-red-100 mb-4 jost">
          You're currently in the testing phase. Complete your assessment to unlock {currentLevel} and continue your alchemical transformation.
        </p>
        <Button className="bg-white text-red-600 hover:bg-red-50 font-medium">
          Take Assessment
        </Button>
      </div>

      {/* Progress Stats */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Your Progress</h3>
          <div className="|">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {completedLevels}/{totalLevels}
                </div>
                <div className="text-sm text-gray-600">Levels Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {progressPercentage}%
                </div>
                <div className="text-sm text-gray-600">Overall Progress</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Alchemical Mastery</span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Next Steps */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Ready for Transformation?</h3>
          <p className="mb-4 text-emerald-100 jost">
            Complete your current assessment to unlock the next stage of your alchemical journey and transform base metals into gold.
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-medium">
            Continue Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;