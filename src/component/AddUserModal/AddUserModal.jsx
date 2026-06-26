"use client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUserModal = ({ createUserAction }) => {
    return (
        <Modal>
            {/* Trigger Button: Matches the exact "+ Create New User" button style from your image */}
            <Button className="bg-[#0070f3] hover:bg-[#0060df] text-white px-5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors flex items-center space-x-2">
                <svg className="h-4 w-4 stroke-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>Create New User</span>
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md bg-[#161b22] border border-[#30363d] text-white rounded-xl overflow-hidden">
                        <Modal.CloseTrigger className="text-slate-400 hover:text-white" />

                        {/* Modal Header */}
                        <Modal.Header className="p-6 pb-4 border-b border-[#30363d]/60">
                            <Modal.Heading className="text-xl font-bold text-white">Add New User</Modal.Heading>
                        </Modal.Header>

                        {/* Modal Body */}
                        <Modal.Body className="p-6 bg-[#0d1117]">
                            <form action={createUserAction} className="flex flex-col gap-4">

                                {/* Full Name */}
                                <TextField className="w-full" name="name" type="text">
                                    <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1">Name</Label>
                                    <Input placeholder="Enter user's name" className="bg-[#161b22] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2 w-full" />
                                </TextField>

                                {/* Email Address */}
                                <TextField className="w-full" name="email" type="email">
                                    <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1">Email</Label>
                                    <Input placeholder="Enter user's email" className="bg-[#161b22] border border-[#30363d] rounded-lg text-white placeholder-slate-600 focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2 w-full" />
                                </TextField>

                                {/* Layout Split Row for Role & DOB */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Clearance Role Selector */}
                                    <div>
                                        <label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1">Role</label>
                                        <select name="role" className="bg-[#161b22] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2 w-full h-9.5 cursor-pointer">
                                            <option value="User">User</option>
                                            <option value="Editor">Editor</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>

                                    {/* Date of Birth Field */}
                                    <TextField name="dob" type="date">
                                        <Label className="text-xs font-semibold tracking-wide text-slate-400 block mb-1">Date of Birth</Label>
                                        <Input className="bg-[#161b22] border border-[#30363d] rounded-lg text-white focus:border-[#0070f3] focus:ring-0 text-sm px-3 py-2 w-full h-9.5" />
                                    </TextField>
                                </div>

                                {/* Active System Status Checkbox */}
                                <div className="flex items-center space-x-3 pt-2">
                                    <input
                                        type="checkbox"
                                        name="isActive"
                                        defaultChecked
                                        id="modalIsActive"
                                        className="rounded bg-[#161b22] border-[#30363d] text-[#0070f3] focus:ring-0 h-4 w-4 cursor-pointer"
                                    />
                                    <label htmlFor="modalIsActive" className="text-xs font-semibold text-slate-300 uppercase tracking-wide cursor-pointer select-none">
                                        Set Account Status to Active
                                    </label>
                                </div>
                                {/* Modal Actions */}
                                <Modal.Footer className="p-4 border-t border-[#30363d]/60 flex items-center justify-end space-x-2">
                                    <Button slot="close" className="bg-[#30363d] hover:bg-[#21262d] text-white px-4 py-2 rounded-lg text-sm transition-colors font-semibold">
                                        Cancel
                                    </Button>
                                    <Button type="submit" slot="close" className="bg-[#0070f3] hover:bg-[#0060df] text-white px-4 py-2 rounded-lg text-sm transition-colors font-semibold shadow-md">
                                        Save User
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal.Body>



                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddUserModal;