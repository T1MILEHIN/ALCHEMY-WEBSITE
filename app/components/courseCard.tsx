import { ArrowRight, Clock, Star } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Link } from 'react-router';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  color: string;
  level: string;
}

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const isFree = course.price.toLowerCase() === 'free';
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
      <div className={`h-32 bg-gradient-to-r ${course.color} relative `}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {course.title}
        </h3>
        <h4 className="inter text-base font-semibold text-emerald-600 mb-3">
          {course.subtitle}
        </h4>
        <p className="jost text-gray-600 mb-4 leading-relaxed line-clamp-2">
          {course.description}
        </p>

        <Link to="/levels">
          <Button
            className={`w-full cursor-pointer ${
              isFree
                ? 'bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
            } text-white font-medium group`}
          >
            {isFree ? 'Start for Free' : `Start Journey – ${course.price}`}
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};