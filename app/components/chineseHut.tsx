import React from 'react';

const ChineseHut = () => {
    return (
        <div className="relative max-w-2xl mx-auto">
            {/* Main hut structure */}
            <div className="relative">
                {/* Roof */}
                <div className="relative">
                    {/* Top roof layer */}
                    <div
                        className="w-96 h-32 mx-auto relative"
                        style={{
                            background: 'linear-gradient(145deg, #059669, #047857)',
                            clipPath: 'polygon(10% 100%, 50% 20%, 90% 100%)',
                            borderRadius: '0 0 20px 20px',
                        }}
                    >
                        {/* Roof highlight */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.3), transparent 60%)',
                                clipPath: 'polygon(10% 100%, 50% 20%, 90% 100%)',
                            }}
                        />
                    </div>

                    {/* Roof eaves curve */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 lg:w-[500px] h-8">
                        <div
                            className="w-full h-full"
                            style={{
                                background: 'linear-gradient(90deg, transparent, #047857 20%, #047857 80%, transparent)',
                                borderRadius: '0 0 50px 50px',
                            }}
                        />
                    </div>
                </div>

                {/* Main body of the hut */}
                <div className="relative mt-4">
                    <div
                        className="w-96 h-80 mx-auto relative bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-50 border-4 border-green-700 rounded-lg shadow-2xl"
                        style={{
                            background: 'linear-gradient(145deg, #fef3c7, #fde68a, #f59e0b)',
                        }}
                    >
                        {/* Decorative border */}
                        <div className="absolute inset-2 border-2 border-yellow-600 rounded-md opacity-30" />

                        {/* Content sections */}
                        <div className="p-8 h-full flex flex-col justify-between text-center">
                            {/* Top section */}
                            <div className="hover:scale-105 cursor-pointer duration-200 bg-white backdrop-blur-sm rounded-lg p-4 border border-green-200 shadow-sm">
                                <h3 className="text-green-800 font-semibold text-lg mb-2 uppercase jost">Spiritual Awareness</h3>
                            </div>

                            {/* Middle section */}
                            <div className="hover:scale-105 cursor-pointer duration-200 bg-white backdrop-blur-sm rounded-lg p-4 border border-green-200 shadow-sm">
                                <h3 className="text-green-800 font-semibold text-lg mb-2 uppercase jost">Personal Development</h3>
                            </div>

                            {/* Bottom section */}
                            <div className="hover:scale-105 cursor-pointer duration-200 bg-white backdrop-blur-sm rounded-lg p-4 border border-green-200 shadow-sm">
                                <h3 className="text-green-800 font-semibold text-lg mb-2 uppercase jost">Financial Independence</h3>
                            </div>
                        </div>

                        {/* Decorative corner elements */}
                        <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-green-600 rounded-tl-lg" />
                        <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-green-600 rounded-tr-lg" />
                        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-green-600 rounded-bl-lg" />
                        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-green-600 rounded-br-lg" />
                    </div>
                </div>

                {/* Base/foundation */}
                <div className="relative -mt-2">
                    <div className="w-80 h-6 mx-auto bg-black rounded-b-xl shadow-lg" />
                </div>
            </div>

            {/* Shadow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-8 bg-black/10 rounded-full blur-sm -z-10" />
        </div>
    );
};

export default ChineseHut;