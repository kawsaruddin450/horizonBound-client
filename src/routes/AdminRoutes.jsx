import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const AdminRoutes = ({children}) => {
    const [admin, isAdminLoading] = useAdmin();

    if(isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    const isAdmin = admin?.admin;
    if(isAdmin){
        return children;
    }
    return <Navigate to='/'></Navigate>
};

export default AdminRoutes;