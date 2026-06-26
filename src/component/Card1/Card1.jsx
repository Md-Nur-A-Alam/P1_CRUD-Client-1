'use client';
import React, { use } from 'react';
import { AlertDialog, Badge, Button, Separator } from "@heroui/react";
import { CircleInfo, PencilToSquare, TrashBin } from '@gravity-ui/icons';
import Link from 'next/link';


const Card1 = ({ user, index, deleteUserAction }) => {
    const { _id, name, email, role } = user;
    const handleDelete = async(userId)=>{
        await deleteUserAction(userId);
    }
    return (
        <Badge.Anchor className="flex justify-start border rounded-2xl items-center">
            <div className="p-5 text-2xl">{index + 1}</div>
            <Separator orientation="vertical" />
            <div className="p-5">
                <div className="font-bold text-2xl">{name} </div>
                <div className="text-accent italic underline">{email}</div>
                <div className="flex justify-between mt-3 gap-2">
                    <Link href={`/users/${_id}`}>
                        <Button variant="secondary" className="btn btn-soft bg-accent rounded-lg text-white"><CircleInfo /></Button>
                    </Link>
                    <Link href={`/users/${_id}/edit`}>
                        <Button variant="secondary" className="btn btn-soft bg-warning rounded-lg text-white"><PencilToSquare /></Button>
                    </Link>
                    <AlertDialog>
                        {/* Trigger Button with TrashBin Icon */}
                        <Button variant="danger" className="btn btn-soft rounded-lg text-white">
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
                </div>
                <Badge color="accent" size="lg" variant='outline' className='p-2 bg-accent text-white'>
                    {role}
                </Badge>
            </div>
        </Badge.Anchor>
    );
};

export default Card1;