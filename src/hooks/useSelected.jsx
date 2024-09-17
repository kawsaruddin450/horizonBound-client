import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from "@tanstack/react-query";


const useSelected = () => {
    const {user, loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const {data: selectedCourses = [], refetch} = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selected?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        }
    })
    return [selectedCourses, refetch];
};

export default useSelected;