import type { Route } from "./+types/home";
import { CourseCard } from "~/components/courseCard";
// import { TrainingHub } from "~/components/trainingHub";
import ChineseHut from "~/components/chineseHut";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome!" },
  ];
}

const courses = [
  {
    id: 1,
    title: "YOU ARE AN ALCHEMIST",
    subtitle: "WHAT ARE YOU GOOD AT?",
    description:
      "Discover your natural talents and abilities through comprehensive self-assessment tools.",
    color: "from-emerald-400 to-teal-500",
    level: "Membership",
    price: "£3.95"
  },
  {
    id: 2,
    title: "TEST YOURSELF",
    subtitle: "WHAT ALCHEMY LEVEL ARE YOU ON",
    description:
      "Learn to manifest your ideas into reality through practical creation techniques.",
    color: "from-orange-400 to-red-500",
    level: "Free",
    price: "Free"
  },
  {
    id: 3,
    title: "JOIN A GROUP",
    subtitle: "BUILD TOGETHER, GROW TOGETHER",
    description:
      "Connect with like-minded individuals, share your journey, and collaborate in a supportive alchemical community.",
    color: "from-cyan-500 to-indigo-500",
    level: "Community",
    price: "£9.95"
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Journey on the
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {/* bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent */}
          Alchemist Path
        </h2>
        <p className="jost text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Step by Step Path for you to go from Finacial Pain to Financial Gain, Which includes personal development and Spiritual awareness
        </p>
      </div>

      {/* Course Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {courses.map((course, index) => (
          <div key={course.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      <ChineseHut />
      {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🧪</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Spiritual Awareness</h3>
          <p className="text-gray-600">Transform your inner world through ancient wisdom and modern practices.</p>
        </div>

        <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🌱</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Personal Development</h3>
          <p className="text-gray-600">Cultivate your potential and grow into your highest self.</p>
        </div>

        <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">💎</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Financial Independence</h3>
          <p className="text-gray-600">Master the art of wealth creation and financial freedom.</p>
        </div>
      </div> */}
    </main>
  )
}
