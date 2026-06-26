'use client';

import { updateUser } from '@/app/lib/actions';
import { Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditUserForm = ({ user, userId }) => {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState(user);

    // Formats ISO format dates (e.g. "1998-11-15T00:00:00.000Z") to clean HTML date string required format ("YYYY-MM-DD")
    const formatToInputDate = (dateString) => {
        if (!dateString) return '';
        return dateString.split('T')[0];
    };

    // Helper to format timestamps elegantly for the display section
    const formatDateForDisplay = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const res = await updateUser(formData, userId, currentUser);

        if (res.matchedCount > 0) {
            // Update the display state
            const updatedFields = Object.fromEntries(formData.entries());
            setCurrentUser(prev => ({
                ...prev,
                name: updatedFields.name ?? prev.name,
                email: updatedFields.email ?? prev.email,
                role: updatedFields.role ?? prev.role,
                dob: updatedFields.dob ?? prev.dob,
                isActive: formData.has('isActive')
            }));

            // Alert the user
            alert("User updated successfully!");

            // Refresh the server component's cache in the background
            router.refresh();
        } else {
            alert(`Failed to update user: ${res?.error || 'Unknown error'}`);
        }
    };

    const { name, email, role, _id, dob, isActive } = currentUser;

    return (
        <div className="w-full max-w-2xl border border-[#30363d] bg-[#161b22] rounded-2xl p-8 shadow-2xl">

            {/* Section Header */}
            <div className="border-b border-[#30363d]/60 pb-4 mb-6">
                <h1 className="text-2xl font-bold text-white tracking-tight">Edit or Update Record</h1>
                <p className="text-xs font-mono text-slate-400 mt-1">
                    Updating unique collection node reference: <span className="text-emerald-400 select-all font-semibold">{_id}</span>
                </p>
            </div>

            {/* Upper Section: Original / Current Data Details */}
            <div className="border border-[#30363d]/60 bg-[#0d1117]/60 rounded-xl p-6 mb-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-[#30363d]/40 pb-2">
                    <svg className="h-5 w-5 text-[#0070f3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile Details (Current Data)
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="border-b border-[#30363d]/30 pb-2">
                        <span className="text-xs text-slate-500 font-mono block uppercase">Name</span>
                        <span className="text-slate-200 font-semibold text-base">{name || 'N/A'}</span>
                    </div>
                    <div className="border-b border-[#30363d]/30 pb-2">
                        <span className="text-xs text-slate-500 font-mono block uppercase">Email</span>
                        <span className="text-slate-200 font-semibold text-base font-mono">{email || 'N/A'}</span>
                    </div>
                    <div className="border-b border-[#30363d]/30 pb-2">
                        <span className="text-xs text-slate-500 font-mono block uppercase">Role</span>
                        <div>
                            <span className="inline-flex items-center bg-[#0070f3]/10 border border-[#0070f3]/30 text-[#0070f3] text-xs font-bold px-2.5 py-0.5 rounded mt-1 uppercase">
                                {role || 'User'}
                            </span>
                        </div>
                    </div>
                    <div className="border-b border-[#30363d]/30 pb-2">
                        <span className="text-xs text-slate-500 font-mono block uppercase">Date of Birth</span>
                        <span className="text-slate-200 font-semibold text-base">{formatDateForDisplay(dob)}</span>
                    </div>
                    <div className="col-span-1 sm:col-span-2 pt-2">
                        <span className="text-xs text-slate-500 font-mono block uppercase">Account Status</span>
                        <span className={`inline-flex items-center text-xs font-bold mt-1.5 ${isActive ? 'text-green-400' : 'text-rose-400'}`}>
                            <span className={`h-2.5 w-2.5 rounded-full mr-2 ${isActive ? 'bg-green-400 animate-pulse' : 'bg-rose-400'}`} />
                            {isActive ? 'ACTIVE REGISTRY' : 'INACTIVE / SUSPENDED'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Lower Section: The Form */}
            <div className="border-t border-[#30363d]/60 pt-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit / Modify Fields
                </h2>

                <form onSubmit={handleFormSubmit} key={JSON.stringify(currentUser)} className="flex flex-col gap-5">
                    {/* Hidden input to securely submit the document target ID */}
                    <input type="hidden" name="userId" value={_id} />

                    {/* Full Name */}
                    <TextField className="w-full" name="name" type="text" defaultValue={name}>
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5">Name</Label>
                        <Input
                            placeholder={name || "Enter user's name"}
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors"
                        />
                    </TextField>

                    {/* Email Address */}
                    <TextField className="w-full" name="email" type="email" defaultValue={email}>
                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5">Email</Label>
                        <Input
                            placeholder={email || "Enter user's email"}
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full transition-colors"
                        />
                    </TextField>

                    {/* Split Row for Role & DOB */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Clearance Role Selector */}
                        <div>
                            <label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5">Role</label>
                            <select
                                name="role"
                                defaultValue={role || "User"}
                                className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2.5 w-full h-[42px] cursor-pointer appearance-none"
                            >
                                <option value="User">User</option>
                                <option value="Editor">Editor</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>

                        {/* Date of Birth Field */}
                        <TextField name="dob" type="date" defaultValue={formatToInputDate(dob)}>
                            <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1.5">Date of Birth</Label>
                            <Input
                                placeholder={formatToInputDate(dob) || "Enter user's dob"}
                                className="bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2 w-full h-[42px] block"
                            />
                        </TextField>
                    </div>

                    {/* Active System Status Checkbox */}
                    <div className="flex items-center space-x-3 py-2">
                        <input
                            type="checkbox"
                            name="isActive"
                            defaultChecked={isActive}
                            id="editIsActive"
                            className="rounded bg-[#0d1117] border-[#30363d] text-[#0070f3] focus:ring-0 h-4 w-4 cursor-pointer"
                        />
                        <label htmlFor="editIsActive" className="text-xs font-semibold text-slate-300 uppercase tracking-wide cursor-pointer select-none">
                            Keep Account Status Active
                        </label>
                    </div>

                    {/* Action Controls Footer */}
                    <div className="pt-4 border-t border-[#30363d]/60 flex items-center justify-end space-x-3">
                        <Link
                            href="/users"
                            className="bg-[#30363d] hover:bg-[#21262d] text-white px-5 py-2.5 rounded-xl text-sm transition-colors font-semibold shadow-sm"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#0070f3] hover:bg-[#0060df] text-white px-5 py-2.5 rounded-xl text-sm transition-colors font-semibold shadow-md flex items-center space-x-2"
                        >
                            <svg className="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Apply Variations</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserForm;
