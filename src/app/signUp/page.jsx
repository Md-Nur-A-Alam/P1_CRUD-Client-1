import { Input, Label, TextField } from '@heroui/react';
import React from 'react';

const SignUpPage = () => {
    return (
        <div className="min-h-[calc(100vh-69px)] bg-[#0d1117] text-white p-6 flex items-center justify-center font-sans">
            <div className="w-full max-w-2xl border border-[#30363d] bg-[#161b22] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                
                {/* Decorative subtle background mesh glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#0070f3]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00df00]/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header Section */}
                <div className="text-center mb-8 relative z-10">
                    <div className="inline-block text-2xl font-black italic tracking-wider text-transparent bg-clip-text bg-linear-to-r from-[#0070f3] to-[#00df00] drop-shadow-[0_0_15px_rgba(0,112,243,0.3)] mb-2">
                        CRUD_op
                    </div>
                    <h1 className="text-xl font-bold text-white tracking-tight">Initialize Master Account</h1>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                        Register a fresh root configuration block into the user metadata matrix.
                    </p>
                </div>

                {/* Registration Data Form Grid */}
                {/* Replace form destination action string with your registration backend endpoint */}
                <form action="/api/auth/register" className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                    
                    {/* Full Name */}
                    <TextField className="w-full sm:col-span-2" name="name" type="text">
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Full Name
                        </Label>
                        <Input 
                            placeholder="e.g. Arif Rahman" 
                            required
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                        />
                    </TextField>

                    {/* Email Address */}
                    <TextField className="w-full sm:col-span-2" name="email" type="email">
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Email Communication Node
                        </Label>
                        <Input 
                            placeholder="arif.rahman@example.com" 
                            required
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                        />
                    </TextField>

                    {/* Security Clearance Dropdown */}
                    <div>
                        <label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Requested Role
                        </label>
                        <select 
                            name="role" 
                            defaultValue="User"
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full h-10.5 cursor-pointer"
                        >
                            <option value="User">User</option>
                            <option value="Editor">Editor</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    {/* Date of Birth Picker */}
                    <TextField name="dob" type="date">
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Date of Birth
                        </Label>
                        <Input 
                            required
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2 w-full h-10.5 block" 
                        />
                    </TextField>

                    {/* Choose Access Token Key */}
                    <TextField className="w-full" name="password" type="password">
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Access Security Key
                        </Label>
                        <Input 
                            placeholder="Create hard passkey" 
                            required
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                        />
                    </TextField>

                    {/* Confirm Security Key */}
                    <TextField className="w-full" name="confirmPassword" type="password">
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Verify Security Key
                        </Label>
                        <Input 
                            placeholder="Confirm hard passkey" 
                            required
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                        />
                    </TextField>

                    {/* Submit Registration Button Action */}
                    <div className="sm:col-span-2 pt-2">
                        <button 
                            type="submit" 
                            className="w-full bg-[#0070f3] hover:bg-[#0060df] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md flex items-center justify-center space-x-2 group hover:shadow-[0_0_20px_rgba(0,112,243,0.3)] active:scale-[0.99] duration-150"
                        >
                            <span>Compile Node Identity</span>
                            <svg className="h-4 w-4 stroke-[2.5] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </form>

                {/* Redirect/Information Footer */}
                <div className="text-center mt-8 pt-4 border-t border-[#30363d]/40 relative z-10 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <span className="text-xs text-slate-500 font-medium">
                        Node record generation instantiates as <span className="text-emerald-500 font-semibold font-mono">isActive: true</span> by default.
                    </span>
                    <a href="/signin" className="text-xs text-[#0070f3] hover:underline font-semibold tracking-wide">
                        Existing operator login &rarr;
                    </a>
                </div>

            </div>
        </div>
    );
};

export default SignUpPage;