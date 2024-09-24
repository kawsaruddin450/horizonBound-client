import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { data: instructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['instructor'],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users/instructor/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            const data = response.json();
            return data;
        }
    })
    return [instructor, isInstructorLoading]
};

export default useInstructor;