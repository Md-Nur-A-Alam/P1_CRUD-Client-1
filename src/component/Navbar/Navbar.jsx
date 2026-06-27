'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();

    // Centralized route map config targeting all pages dynamically
    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Users', href: '/users' },
        { label: 'Profile', href: '/profile' },
        { label: 'About', href: '/about' },
    ];

    return (
        <nav className='sticky top-0 z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d] text-white py-4 px-6 md:px-12 transition-all'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>

                {/* Left Section: Fancy Dynamic Navigation Links */}
                <div className="flex items-center gap-2 text-sm font-medium">
                    {navLinks.map((link) => {
                        // Strict exact match for Home, substring check for dynamic layouts
                        const isActive = link.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ease-out select-none group overflow-hidden ${
                                    isActive
                                        ? 'text-[#0070f3] font-bold scale-105'
                                        : 'text-slate-400 hover:text-white hover:bg-[#161b22]/60'
                                }`}
                            >
                                {/* Active background glow & under-border element */}
                                {isActive && (
                                    <span className="absolute inset-0 bg-[#0070f3]/5 rounded-lg border-b-2 border-[#0070f3] animate-fade-in" />
                                )}

                                {/* Hover slider border micro-interaction for inactive elements */}
                                {!isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                )}

                                <span className="relative z-10">{link.label}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Center Section: Glowing Logo */}
                <Link href="/" className="logo text-2xl font-black italic tracking-wider text-transparent bg-clip-text bg-linear-to-r from-[#0070f3] via-indigo-400 to-[#00df00] drop-shadow-[0_0_15px_rgba(0,112,243,0.3)] hover:scale-105 transition-transform duration-300">
                    CRUD_op
                </Link>

                {/* Right Section: Auth Action Controllers */}
                <div className="flex items-center gap-4 text-sm font-medium">
                    
                    {/* Sign In Trigger Button Layout */}
                    <Link href="/signIn">
                        <button className={`px-4 py-1.5 rounded-xl font-bold transition-all text-xs duration-200 active:scale-95 ${
                            pathname.startsWith('/signIn')
                                ? 'bg-[#0060df] text-white ring-2 ring-[#0070f3] shadow-[0_0_20px_rgba(0,112,243,0.4)] scale-105'
                                : 'bg-[#0070f3] text-white hover:bg-[#0060df] shadow-[0_0_15px_rgba(0,112,243,0.2)] hover:scale-105'
                        }`}>
                            Sign In
                        </button>
                    </Link>

                    {/* Sign Up Text Action Switch Link */}
                    <Link href="/signUp">
                        <button className={`text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                            pathname.startsWith('/signUp')
                                ? 'text-[#ffae00] font-bold scale-105 underline underline-offset-4 decoration-2'
                                : 'text-slate-500 hover:text-[#ffae00]'
                        }`}>
                            Sign Up
                        </button>
                    </Link>
                    
                </div>

            </div>
        </nav>
    );
};

export default Navbar;