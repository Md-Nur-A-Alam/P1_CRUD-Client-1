import { Input, Label, TextField } from '@heroui/react';
import React from 'react';

const SignInPage = () => {
    return (
        <div className="min-h-[calc(100vh-69px)] bg-[#0d1117] text-white p-6 flex items-center justify-center font-sans">
            <div className="w-full max-w-md border border-[#30363d] bg-[#161b22] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                
                {/* Decorative background glow matching your brand */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#0070f3]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#00df00]/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header Section */}
                <div className="text-center mb-8 relative z-10">
                    <div className="inline-block text-2xl font-black italic tracking-wider text-transparent bg-clip-text bg-linear-to-r from-[#0070f3] to-indigo-400 drop-shadow-[0_0_15px_rgba(0,112,243,0.3)] mb-2">
                        CRUD_op
                    </div>
                    <h1 className="text-xl font-bold text-white tracking-tight">Access Central Registry</h1>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                        Provide credentials to request database authorization token.
                    </p>
                </div>

                {/* Form Wrapper */}
                {/* Replace with your custom authentication service action handler */}
                <form action="/api/auth/callback" className="flex flex-col gap-5 relative z-10">
                    
                    {/* Email Input */}
                    <TextField className="w-full" name="email" type="email">
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Identity Email
                        </Label>
                        <Input 
                            placeholder="name@example.com" 
                            required
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                        />
                    </TextField>

                    {/* Password Input */}
                    <TextField className="w-full" name="password" type="password">
                        <div className="flex justify-between items-center mb-1.5">
                            <Label className="text-xs font-semibold tracking-wide text-slate-400 block uppercase font-mono">
                                Security Hash
                            </Label>
                            <a href="#forgot" className="text-xs text-[#0070f3] hover:underline font-medium">
                                Forgot Hash?
                            </a>
                        </div>
                        <Input 
                            placeholder="••••••••" 
                            required
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                        />
                    </TextField>

                    {/* Remember Device Flag */}
                    <div className="flex items-center space-x-3 py-1">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            id="rememberDevice"
                            className="rounded bg-[#0d1117] border-[#30363d] text-[#0070f3] focus:ring-0 h-4 w-4 cursor-pointer"
                        />
                        <label htmlFor="rememberDevice" className="text-xs font-semibold text-slate-400 uppercase tracking-wide cursor-pointer select-none font-mono">
                            Trust this device environment
                        </label>
                    </div>

                    {/* Form Controls */}
                    <button 
                        type="submit" 
                        className="bg-[#0070f3] hover:bg-[#0060df] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md flex items-center justify-center space-x-2 mt-2 group hover:shadow-[0_0_20px_rgba(0,112,243,0.3)] active:scale-[0.98] duration-150"
                    >
                        <span>Authenticate Node</span>
                        <svg className="h-4 w-4 stroke-[2.5] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </form>

                {/* Footer Section */}
                <div className="text-center mt-8 pt-4 border-t border-[#30363d]/40 relative z-10">
                    <p className="text-xs text-slate-500 font-medium">
                        Secured system access network. Unauthorized queries log source hardware IP addresses.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SignInPage;