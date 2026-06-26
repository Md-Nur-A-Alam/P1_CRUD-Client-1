import { revalidatePath } from "next/cache";

export const deleteUser = async (userId)=>{
    'use server';

    try {
        const req = await fetch (`http://localhost:5000/users/${userId}`,{
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