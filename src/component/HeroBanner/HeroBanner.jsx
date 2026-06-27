'use client';
import React, { useState } from 'react';

const HeroBanner = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative overflow-hidden bg-slate-950 text-white min-h-[50vh] flex items-center justify-center px-6 py-16 border-b border-slate-900">
            
            {/* 1. Animated Tech Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Slow pulse glow left */}
                <div className="absolute top-[-10%] left-[-10%] w-125 h-125 rounded-full bg-blue-600/10 blur-[120px] animate-pulse duration-8000"></div>
                {/* Slow pulse glow right */}
                <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 rounded-full bg-indigo-600/10 blur-[120px] animate-pulse duration-10000"></div>
                
                {/* Interactive Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[30px_30px]"></div>
            </div>

            {/* 2. Banner Content Wrapper */}
            <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
                
                {/* Pill Badge (Interactive Hover) */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-blue-400 mb-6 font-medium cursor-pointer hover:border-blue-500/50 transition-all duration-300">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>System Online v2.0</span>
                </div>

                {/* Animated Heading */}
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none mb-6">
                    Streamline Your{' '}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-indigo-400 animate-text">
                        Data Control
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-400 text-base sm:text-xl max-w-2xl mb-10 font-normal leading-relaxed">
                    An ultra-responsive platform engineered for seamless user administration. 
                    Monitor privileges, provision access controls, and modify records safely in real time.
                </p>

                {/* Interactive Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="group relative px-8 py-3.5 w-full sm:w-auto rounded-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
                    >
                        {/* Shimmer background effect on hover */}
                        <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                        
                        <div className="flex items-center justify-center gap-2">
                            <span>Get Started Fast</span>
                            <svg 
                                className={`w-4 h-4 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </button>

                    <button className="px-8 py-3.5 w-full sm:w-auto rounded-xl font-bold bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all duration-300">
                        Documentation
                    </button>
                </div>

            </div>
        </div>
    );
};

export default HeroBanner;