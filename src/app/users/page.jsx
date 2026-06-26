import React from 'react';
import { getUsers } from '../lib/data';
import Card1 from '@/component/Card1/Card1';
import { createUser, deleteUser } from '../lib/actions';
import AddUserModal from '@/component/AddUserModal/AddUserModal';

const UsersPage = async () => {
    const users = await getUsers();
    return (
        <div className='space-y-10 mt-10'>
                <h2 className='text-3xl font-black py-5 px-10 border bg-accent mx-auto duration-300 hover:scale-110 w-fit rounded-2xl'>User Management: {users.length} users</h2>
                <div className="flex justify-center"><AddUserModal createUserAction = {createUser}/></div>
            <div className="flex flex-wrap justify-center items-center gap-10 border rounded-xl m-5 p-10">
                {users.map((user, index) => (
                    <Card1 key={user._id} user={user} index={index} deleteUserAction = {deleteUser}></Card1>
                ))}
            </div>
        </div>
    );
};

export default UsersPage;