import { getUserById } from '@/app/lib/data';
import EditUserForm from '@/component/EditUserForm/EditUserForm';
import React from 'react';

const UserEditPage = async ({ params }) => {
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

    return (
        <div className="min-h-screen bg-[#0d1117] text-white p-6 flex items-center justify-center font-sans">
            <EditUserForm user={user} userId={userId} />
        </div>
    );
};

export default UserEditPage;