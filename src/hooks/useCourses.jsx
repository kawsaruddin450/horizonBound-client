import { useQuery } from "@tanstack/react-query";


const useCourses = () => {

    const {data: courses = [], refetch} = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/courses`);
            return response.json();
        }
    })
    return [courses, refetch];
};

export default useCourses;