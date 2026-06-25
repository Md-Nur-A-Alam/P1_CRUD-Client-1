export const deleteUser = async (userId)=>{
    'user server';

    const req = await fetch (`http://localhost:5000/users/${userId}`,{
        method: 'DELETE'

    });
    const res = await req.json();


    // revalidate cache
    return DataTransfer;
}