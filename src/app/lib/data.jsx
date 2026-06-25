export const getUsers = async () => {
    const req = await fetch ('http://localhost:5000/users');
    const dataResponse = await req.json();
    return dataResponse;
}