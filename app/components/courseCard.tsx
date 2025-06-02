import { ArrowRight, Clock, Star } from 'lucide-react';
import { Button } from '~/components/ui/button';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  level: string;
}

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
      {/* Gradient Header */}
      <div className={`h-32 bg-gradient-to-r ${course.color} relative `}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {course.title}
        </h3>
        <h4 className="text-lg font-semibold text-emerald-600 mb-3">
          {course.subtitle}
        </h4>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">6-8 weeks</span>
          </div>
          <span className="text-2xl font-bold text-emerald-600">Free</span>
        </div>

        <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium group">
          Start Journey
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </div>
  );
};