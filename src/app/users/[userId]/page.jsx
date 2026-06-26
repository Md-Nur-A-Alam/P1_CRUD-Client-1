import { deleteUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import DeleteUserFunc from '@/component/DeleteUserFunc/DeleteUserFunc';
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0d1117] px-4">
                <div className="text-center border border-red-500/30 bg-[#161b22] p-8 rounded-xl">
                    <h1 className="text-xl font-bold text-red-400">User Profile Not Found</h1>
                    <p className="mt-2 text-sm text-slate-400">The requested account hash ID is invalid or missing.</p>
                </div>
            </div>
        );
    }

    const { name, email, role, _id, dob, isActive, createdAt } = user;

    // Helper to format timestamps elegantly
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-[#0d1117] text-white p-6 flex items-center justify-center font-sans">
            <div className="w-full max-w-3xl border border-[#30363d] bg-[#161b22] rounded-2xl p-8 shadow-2xl relative overflow-hidden">

                {/* 1. Header Banner Badge style matched exactly from your UI */}
                <div className="flex justify-center mb-10">
                    <div className="bg-[#0070f3] text-white font-bold px-8 py-3 rounded-xl text-lg tracking-wide shadow-[0_0_20px_rgba(0,112,243,0.3)] border border-[#00df00]/20">
                        User Profile Details
                    </div>
                </div>

                {/* 2. Unified Master Layout Block */}
                <div className="border border-[#30363d] bg-[#0d1117]/60 rounded-xl overflow-hidden">

                    {/* Right Core Data Fields Column */}
                    <div className="p-6 flex-1 relative">

                        {/* Top-Right Absolute Floating Role Tag */}
                        <div className="absolute top-4 right-4">
                            <span className="bg-[#0070f3] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                                {role || 'User'}
                            </span>
                        </div>

                        {/* User Identity Info */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight">{name}</h2>
                            <a href={`mailto:${email}`} className="text-sm text-[#0070f3] hover:underline block mt-0.5 font-mono">
                                {email}
                            </a>
                        </div>

                        {/* Structural Sub-grid for dynamic attributes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#30363d]/60 text-sm">
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Document Reference</span>
                                <span className="font-mono text-xs text-emerald-400 break-all select-all">{_id || userId}</span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Account Status</span>
                                <span className={`inline-flex items-center text-xs font-bold mt-1 ${isActive ? 'text-green-400' : 'text-rose-400'}`}>
                                    <span className={`h-2 w-2 rounded-full mr-2 ${isActive ? 'bg-green-400 animate-pulse' : 'bg-rose-400'}`} />
                                    {isActive ? 'ACTIVE REGISTRY' : 'INACTIVE / SUSPENDED'}
                                </span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Date of Birth</span>
                                <span className="text-slate-300 font-medium">{formatDate(dob)}</span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-500 font-mono block uppercase">Sys-Creation Timestamp</span>
                                <span className="text-slate-300 font-medium">{formatDate(createdAt)}</span>
                            </div>
                        </div>

                        {/* Bottom Component Action Bar (Matches your blue, yellow, red dashboard controls layout) */}
                        <div className="flex items-center justify-end space-x-3 mt-8 pt-4 border-t border-[#30363d]/40">
                            {/* Go Back Button */}
                            <Link
                                href="/users"
                                className="bg-[#0070f3] hover:bg-[#0060df] text-white p-2.5 rounded-lg transition-colors shadow-md flex items-center justify-center"
                                title="Go Back"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </Link>

                            {/* Edit Button */}
                            <button className="bg-[#f5a623] hover:bg-[#e0951b] text-white p-2.5 rounded-lg transition-colors shadow-md">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>

                            {/* Delete Button */}
                            <DeleteUserFunc user={user} deleteUserAction={deleteUser}></DeleteUserFunc>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserDetailsPage;