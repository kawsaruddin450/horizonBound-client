import { FaBookOpen, FaWallet } from "react-icons/fa";
import { GiCheckedShield } from "react-icons/gi";
import { IoMdHome, IoMdPeople } from "react-icons/io";
import { IoCheckbox } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="drawer md:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary btn-outline drawer-button md:hidden absolute top-8 left-5 text-xl">
                        <RiMenu2Line></RiMenu2Line>
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-sky-500 text-base-content font-semibold min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a><IoMdHome className="text-xl"></IoMdHome> Dashboard Home</a></li>
                        <li><a><IoCheckbox className="text-xl"></IoCheckbox> My Selections</a></li>
                        <li><a><GiCheckedShield className="text-xl"></GiCheckedShield> Enrolled Courses</a></li>
                        <li><a><FaWallet className="text-xl"></FaWallet> Payment History</a></li>

                        <div className="divider"></div>

                        <li><NavLink to='/'><IoMdHome className="text-xl"></IoMdHome> Home</NavLink></li>
                        <li><NavLink to='/instructors'><IoMdPeople className="text-xl"></IoMdPeople> Instructors</NavLink></li>
                        <li><NavLink to='/courses'><FaBookOpen className="text-xl"></FaBookOpen> Courses</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;