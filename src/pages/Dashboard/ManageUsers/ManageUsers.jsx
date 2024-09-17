import { useQuery } from "@tanstack/react-query";


const ManageUsers = () => {
    const token = localStorage.getItem('access-token')

    const {data: users, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const response = await fetch(`http://localhost:5000/users`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        }
    })
    console.log(users);
    return (
        <div>
            <h1>Show all users: {users?.length}</h1>
        </div>
    );
};

export default ManageUsers;