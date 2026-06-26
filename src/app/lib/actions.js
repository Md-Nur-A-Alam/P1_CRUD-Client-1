import { revalidatePath } from "next/cache";

export const deleteUser = async (userId) => {
    'use server';

    try {
        const req = await fetch(`http://localhost:5000/users/${userId}`, {
            method: 'DELETE'
        });

        if (!req.ok) {
            throw new Error(`Failed to delete user: ${req.statusText}`);
        }

        const res = await req.json();

        // revalidate cache
        revalidatePath('/users');

        return { success: true, data: res };
    } catch (error) {
        console.error("Error in deleteUser server action:", error);
        return { success: false, error: error.message };
    }
}

export const createUser = async (formData) => {
    'use server';
    const newUser = Object.fromEntries(formData.entries());
    console.log('new user data', newUser);
    const req = await fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const res = await req.json();
    console.log('data after post', res);
    // revalidate cache
    if(res.insertedId){
        revalidatePath('/users');
    }
    return res;
}