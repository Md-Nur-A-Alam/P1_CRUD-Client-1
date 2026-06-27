import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 py-6 px-6 md:px-12 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                
                {/* Left Section: Branding & Copyright */}
                <div className="flex items-center gap-2">
                    <span className="font-bold italic text-slate-200 tracking-wide">CRUD_op</span>
                    <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
                </div>
                
                {/* Center / Right Section: Footer Links */}
                <div className="flex items-center gap-6">
                    <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                    <a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                    <a href="#support" className="hover:text-blue-400 transition-colors">Support</a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;