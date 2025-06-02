const ModulesSection = () => {
    const modules = [
        "Spiritual Foundation",
        "Personal Assessment",
        "Skill Development",
        "Advanced Techniques",
        "Mastery Integration",
        "Transformation Mastery"
    ];

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Available Modules</h3>
            <p className="text-gray-600 mb-6">8 levels - but only 6 modules</p>

            <div className="space-y-3">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors duration-200"
                    >
                        <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0" />
                        <span className="text-emerald-700 font-medium">{module}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModulesSection;