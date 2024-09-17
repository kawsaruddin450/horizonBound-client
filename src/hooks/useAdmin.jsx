import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const {data: admin} = useQuery({
        queryKey: ['admin'],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            const data = response.json();
            return data;
        }
    })
    return [admin]
};

export default useAdmin;