'use server';

import { revalidatePath } from "next/cache";

export const deleteUser = async (userId) => {

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
    if (res.insertedId) {
        revalidatePath('/users');
    }
    return res;
}

export const updateUser = async (formData, userId, user) => {
    const { name, email, role, dob, isActive } = user;
    const newFormData = Object.fromEntries(formData.entries());

    const changedDataOnly = {};

    if (newFormData.name && newFormData.name !== name) changedDataOnly.name = newFormData.name;
    if (newFormData.email && newFormData.email !== email) changedDataOnly.email = newFormData.email;
    if (newFormData.role && newFormData.role !== role) changedDataOnly.role = newFormData.role;

    // Normalize and compare Date of Birth
    const originalDob = dob ? dob.split('T')[0] : '';
    if (newFormData.dob && newFormData.dob !== originalDob) changedDataOnly.dob = newFormData.dob;

    // Compare isActive checkbox status
    const updatedIsActive = formData.has('isActive');
    if (updatedIsActive !== !!isActive) changedDataOnly.isActive = updatedIsActive;

    console.log('updated user data (changed fields only):', changedDataOnly);

    // If no changes are detected, return a success response with 0 modifications without calling the API
    if (Object.keys(changedDataOnly).length === 0) {
        console.log('No fields changed. Skipping PATCH request.');
        return { matchedCount: 1, modifiedCount: 0, message: 'No changes detected.' };
    }

    const req = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(changedDataOnly)
    });
    const res = await req.json();
    console.log('data after patch', res);
    // revalidate cache
    if (res.matchedCount) {
        revalidatePath('/users');
    }
    return res;
}