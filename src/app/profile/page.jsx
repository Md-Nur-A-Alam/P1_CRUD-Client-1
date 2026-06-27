'use client';

import { Input, Label, TextField } from '@heroui/react';
import React, { useState, useRef } from 'react';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    
    // Manage profile data state
    const [userProfile, setUserProfile] = useState({
        name: "Arif Rahman",
        email: "arif.rahman@example.com",
        phone: "+880 1712-345678",
        address: "Dhaka, Bangladesh",
        dob: "1994-03-12",
        role: "Admin",
        isActive: true,
        bio: "Full Stack Infrastructure Architect specializing in data system scaling and modular dashboard interface design matrices.",
        avatarUrl: null, // Holds uploaded profile picture object url
        createdAt: "2026-01-15T08:30:00.000Z"
    });

    const { name, email, phone, address, dob, role, isActive, bio, avatarUrl, createdAt } = userProfile;
    const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U';
    
    const fileInputRef = useRef(null);

    // Dynamic date parsing helper
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Client side preview handler for local file upload
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setUserProfile(prev => ({ ...prev, avatarUrl: previewUrl }));
        }
    };

    // Form submission processing updates
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        setUserProfile(prev => ({
            ...prev,
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            dob: formData.get('dob'),
            bio: formData.get('bio'),
            // Note: In real setup, the avatar file chunk from fileInputRef would be pushed to your storage bucket/DB
        }));
        
        setIsEditing(false);
    };

    return (
        <div className="min-h-[calc(100vh-69px)] bg-[#0d1117] text-white p-6 lg:p-12 flex items-center justify-center font-sans">
            <div className="w-full max-w-4xl border border-[#30363d] bg-[#161b22] rounded-2xl p-6 md:p-10 shadow-2xl">
                
                {/* Profile Header Block */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-[#30363d]/60 pb-8">
                    
                    {/* AVATAR UPLOAD COMPONENT ZONE */}
                    <div className="relative group shrink-0">
                        {/* Hidden native input stream */}
                        <input 
                            type="file" 
                            name="avatar"
                            ref={fileInputRef}
                            onChange={handleAvatarChange}
                            accept="image/*"
                            disabled={!isEditing}
                            className="hidden" 
                        />
                        
                        {/* Interactive Avatar Container */}
                        <div 
                            onClick={() => isEditing && fileInputRef.current.click()}
                            className={`flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-2xl border-2 border-[#30363d] overflow-hidden relative transition-all ${
                                isEditing 
                                    ? 'cursor-pointer hover:border-[#0070f3] ring-offset-2 ring-offset-[#161b22] hover:ring-2 hover:ring-[#0070f3]' 
                                    : 'select-none'
                            }`}
                        >
                            {/* Fallback image render fallback handling */}
                            {avatarUrl ? (
                                <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-indigo-600 to-indigo-800 text-4xl font-bold text-white shadow-lg shadow-indigo-500/10">
                                    {initials}
                                </div>
                            )}

                            {/* Modern Interactive Upload Mask Overlay visible ONLY when Editing */}
                            {isEditing && (
                                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <svg className="h-6 w-6 text-slate-300 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-[10px] font-bold text-slate-300 font-mono tracking-wider uppercase">Upload</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Metadata Content Information */}
                    <div className="flex-1 text-center md:text-left min-w-0">
                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                            <h1 className="text-3xl font-extrabold text-white tracking-tight truncate">
                                {name}
                            </h1>
                            <div className="flex justify-center md:justify-start items-center gap-2">
                                <span className="bg-[#0070f3] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                                    {role}
                                </span>
                                <span className={`h-2.5 w-2.5 rounded-full ${isActive ? 'bg-[#00df00] animate-pulse' : 'bg-rose-500'}`} />
                            </div>
                        </div>
                        <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl">
                            {isEditing ? "Modify your avatar image parameters by hovering on the box profile cover image array." : bio}
                        </p>
                    </div>

                    {!isEditing && (
                        <div className="shrink-0 mt-2 md:mt-0">
                            <button 
                                onClick={() => setIsEditing(true)}
                                className="bg-[#0070f3] hover:bg-[#0060df] text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all shadow-md flex items-center space-x-1.5 active:scale-95 duration-150"
                            >
                                <svg className="h-3.5 w-3.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <span>Modify Profile</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Body Component Toggle View */}
                {isEditing ? (
                    <form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0d1117]/30 border border-[#30363d]/50 rounded-xl p-6">
                            <TextField className="w-full sm:col-span-2" name="name" type="text">
                                <Label className="text-xs font-semibold text-slate-400 block mb-1">Name</Label>
                                <Input defaultValue={name} required className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] text-sm px-3 py-2 w-full" />
                            </TextField>

                            <div className="w-full sm:col-span-2">
                                <label className="text-xs font-semibold text-slate-400 block mb-1">Profile Biography</label>
                                <textarea name="bio" defaultValue={bio} rows={3} className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2 w-full resize-none" />
                            </div>

                            <TextField className="w-full" name="email" type="email">
                                <Label className="text-xs font-semibold text-slate-400 block mb-1">Email</Label>
                                <Input defaultValue={email} required className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] text-sm px-3 py-2 w-full" />
                            </TextField>

                            <TextField className="w-full" name="phone" type="text">
                                <Label className="text-xs font-semibold text-slate-400 block mb-1">Secure Dial Signal (Phone)</Label>
                                <Input defaultValue={phone} className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] text-sm px-3 py-2 w-full" />
                            </TextField>

                            <TextField className="w-full" name="address" type="text">
                                <Label className="text-xs font-semibold text-slate-400 block mb-1">Location Coordinates (Address)</Label>
                                <Input defaultValue={address} className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] text-sm px-3 py-2 w-full" />
                            </TextField>

                            <TextField name="dob" type="date">
                                <Label className="text-xs font-semibold text-slate-400 block mb-1">Date of Birth</Label>
                                <Input defaultValue={dob} className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] text-sm px-3 py-2 w-full h-9.5" />
                            </TextField>
                        </div>

                        <div className="flex justify-end space-x-2 pt-2">
                            <button 
                                type="button" 
                                onClick={() => setIsEditing(false)}
                                className="bg-[#30363d] hover:bg-[#21262d] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                className="bg-[#00df00] hover:bg-[#00ba00] text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-md"
                            >
                                Save Modifications
                            </button>
                        </div>
                    </form>
                ) : (
                    /* Read Only Attributes Summary */
                    <div className="mt-8">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 font-mono">
                            Node Structural Attributes
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#0d1117]/50 border border-[#30363d]/40 rounded-xl p-6">
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Communication Link</span>
                                <span className="text-sm font-semibold text-slate-200 mt-1 block break-all">{email}</span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Secure Dial Signal</span>
                                <span className="text-sm font-semibold text-slate-200 mt-1 block">{phone || 'N/A'}</span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Location Coordinates</span>
                                <span className="text-sm font-semibold text-slate-200 mt-1 block">{address || 'N/A'}</span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Date of Birth</span>
                                <span className="text-sm font-semibold text-slate-200 mt-1 block">{formatDate(dob)}</span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Authority Matrix</span>
                                <span className="text-sm font-semibold text-[#0070f3] mt-1 block capitalize">{role} Status Access</span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Sys-Creation Stamp</span>
                                <span className="text-sm font-semibold text-slate-200 mt-1 block font-mono">
                                    {formatDate(createdAt)}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProfilePage;