'use client'
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { useRouter } from 'next/navigation';

const DeleteUserFunc = ({ user, deleteUserAction }) => {
    const router = useRouter();

    const { name, email, role, _id, dob, isActive, createdAt } = user;
    const handleDelete = async (userId) => {
        const res = await deleteUserAction(userId);
        if (res && res.success) {
            router.push('/users');
        } else {
            alert(`Failed to delete user: ${res?.error || 'Unknown error'}`);
        }
    }
    return (
        <AlertDialog>
            {/* Trigger Button with TrashBin Icon */}
            <Button variant="danger" className="flex items-center space-x-2">
                <TrashBin className="h-4 w-4" />
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 bg-[#161b22] border border-[#30363d] text-white rounded-xl">
                        <AlertDialog.CloseTrigger className="text-red-500 hover:text-red-900" />

                        <AlertDialog.Header className="border-b border-[#30363d]/60 pb-3">
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-lg font-bold text-white">
                                Delete user permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body className="py-4 text-slate-300 text-sm">
                            <p>
                                This will permanently delete the account for <strong className="text-white font-semibold">{name}</strong> and remove all of their registry records from the database. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer className="border-t border-[#30363d]/60 pt-3 flex items-center justify-end space-x-2">
                            <Button slot="close" variant="tertiary" className="text-slate-300 bg-accent hover:bg-[#30363d] px-4 py-2 rounded-lg transition-colors">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" className="bg-[#ff0055] hover:bg-[#e0004c] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 shadow-md" onClick={() => handleDelete(_id)}>
                                <TrashBin className="h-4 w-4" />
                                <span>Delete User</span>
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteUserFunc;