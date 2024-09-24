import useInstructor from "../hooks/useInstructor";
import { Navigate } from "react-router-dom";

const InstructorRoutes = ({children}) => {
    const [instructor, isInstructorLoading] = useInstructor();

    if(isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }
    const isInstructor = instructor?.instructor;
    if(isInstructor){
        return children;
    }
    return <Navigate to='/'></Navigate>
};

export default InstructorRoutes;