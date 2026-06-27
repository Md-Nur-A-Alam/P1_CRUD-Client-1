'use client';

import { Input, Label, TextField } from '@heroui/react';
import React, { useState, useRef } from 'react';

const UpdateProfilePage = () => {
    const fileInputRef = useRef(null);

    // Stateful user context data structure pre-loaded from database metrics
    const [userProfile, setUserProfile] = useState({
        name: "Arif Rahman",
        email: "arif.rahman@example.com",
        phone: "+880 1712-345678",
        address: "Dhaka, Bangladesh",
        dob: "1994-03-12",
        role: "Admin",
        bio: "Full Stack Infrastructure Architect specializing in data system scaling and modular dashboard interface design matrices.",
        avatarUrl: "" // Can hold local Blob preview URL or external web URL addresses
    });

    const { name, email, phone, address, dob, role, bio, avatarUrl } = userProfile;
    const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U';

    // Handler to process local binary file selection previews
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setUserProfile(prev => ({ ...prev, avatarUrl: previewUrl }));
        }
    };

    // Handler to instantly update picture preview box if user inputs a web URL string
    const handleUrlChange = (e) => {
        setUserProfile(prev => ({ ...prev, avatarUrl: e.target.value }));
    };

    return (
        <div className="min-h-[calc(100vh-69px)] bg-[#0d1117] text-white p-6 lg:p-12 flex items-center justify-center font-sans">
            <div className="w-full max-w-3xl border border-[#30363d] bg-[#161b22] rounded-2xl p-6 md:p-10 shadow-2xl">
                
                {/* Page Action Header Banner */}
                <div className="border-b border-[#30363d]/60 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">Update Profile Parameters</h1>
                        <p className="text-xs font-mono text-slate-400 mt-1">
                            Modifying operational metrics for profile level: <span className="text-[#0070f3] font-semibold uppercase">{role}</span>
                        </p>
                    </div>

                    {/* INTERACTIVE PROFILE AVATAR BLOCK */}
                    <div className="relative group shrink-0 self-center sm:self-auto">
                        <input 
                            type="file" 
                            name="avatarFile"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            className="hidden" 
                        />
                        <div 
                            onClick={() => fileInputRef.current.click()}
                            className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#30363d] overflow-hidden relative cursor-pointer hover:border-[#0070f3] ring-offset-2 ring-offset-[#161b22] hover:ring-2 hover:ring-[#0070f3] transition-all"
                            title="Click to select local file asset"
                        >
                            {avatarUrl ? (
                                <img src={avatarUrl} alt={name} className="h-full w-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-indigo-600 to-indigo-800 text-3xl font-bold text-white shadow-lg shadow-indigo-500/10">
                                    {initials}
                                </div>
                            )}
                            
                            {/* Hover Overlay Camera Indicator */}
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <svg className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form mutation block */}
                <form action="/api/profile/update" method="POST" encType="multipart/form-data" className="flex flex-col gap-5">
                    
                    {/* Full Name */}
                    <TextField className="w-full" name="name" type="text">
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Display Name
                        </Label>
                        <Input 
                            defaultValue={name} 
                            required 
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                        />
                    </TextField>

                    {/* NEW: Profile Picture Web URL Input string vector */}
                    <TextField className="w-full" name="avatarUrl" type="url">
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Profile Picture Web URL (Alternative to File Upload)
                        </Label>
                        <Input 
                            placeholder="https://example.com/avatar.png"
                            value={avatarUrl}
                            onChange={handleUrlChange}
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors font-mono" 
                        />
                    </TextField>

                    {/* Profile Biography Summary */}
                    <div className="w-full">
                        <label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                            Profile Biography Block
                        </label>
                        <textarea 
                            name="bio" 
                            defaultValue={bio} 
                            rows={4} 
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full resize-none transition-colors placeholder-slate-600"
                            placeholder="Provide operational context bio strings..."
                        />
                    </div>

                    {/* Form Fields Column Grid Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Email Identity */}
                        <TextField className="w-full" name="email" type="email">
                            <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                                Core Email Identity
                            </Label>
                            <Input 
                                defaultValue={email} 
                                required 
                                className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                            />
                        </TextField>

                        {/* Phone Number */}
                        <TextField className="w-full" name="phone" type="text">
                            <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                                Secure Dial Signal (Phone)
                            </Label>
                            <Input 
                                defaultValue={phone} 
                                className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                            />
                        </TextField>

                        {/* Physical Location Address */}
                        <TextField className="w-full" name="address" type="text">
                            <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                                Location Coordinates (Address)
                            </Label>
                            <Input 
                                defaultValue={address} 
                                className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors" 
                            />
                        </TextField>

                        {/* Date of Birth Selection array */}
                        <TextField name="dob" type="date">
                            <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5 uppercase font-mono">
                                Date of Birth
                            </Label>
                            <Input 
                                defaultValue={dob} 
                                className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2 w-full h-10.5 block" 
                            />
                        </TextField>

                    </div>

                    {/* Action Controls panel footer */}
                    <div className="pt-4 mt-2 border-t border-[#30363d]/60 flex items-center justify-end space-x-3">
                        <a 
                            href="/profile" 
                            className="bg-[#30363d] hover:bg-[#21262d] text-white px-5 py-2.5 rounded-xl text-sm transition-colors font-semibold shadow-sm text-center"
                        >
                            Abort Changes
                        </a>
                        <button 
                            type="submit" 
                            className="bg-[#0070f3] hover:bg-[#0060df] text-white px-5 py-2.5 rounded-xl text-sm transition-colors font-semibold shadow-md flex items-center space-x-2 active:scale-[0.98] duration-150"
                        >
                            <svg className="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            <span>Push Profile Updates</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;