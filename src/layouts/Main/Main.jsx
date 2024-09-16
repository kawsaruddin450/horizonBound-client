import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet />
        </div>
    );
};

export default Main;