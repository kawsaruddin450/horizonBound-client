import { FaBookOpen, FaUsers, FaWallet } from "react-icons/fa";
import { GiCheckedShield } from "react-icons/gi";
import { IoMdAddCircle, IoMdHome, IoMdPeople } from "react-icons/io";
import { IoCheckbox, IoSettingsSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { MdFeedback, MdPersonPin } from "react-icons/md";


const Dashboard = () => {
    const [admin] = useAdmin();
    const isAdmin = admin?.admin;

    const [instructor] = useInstructor();
    const isInstructor = instructor?.instructor;

    console.log(isAdmin);
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
                <div className="drawer-side" id="dashboard-sidebar">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-sky-500 text-base-content font-semibold min-h-full w-60 p-4">
                        {/* Sidebar content here */}

                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to='/dashboard/home'><IoMdHome className="text-xl"></IoMdHome> Admin Home</NavLink></li>
                                    <li><NavLink to='/dashboard/managecourses'><IoSettingsSharp className="text-xl"></IoSettingsSharp> Manage Courses</NavLink></li>
                                    <li><NavLink to='/dashboard/manageusers'><FaUsers className="text-xl"></FaUsers> Manage Users</NavLink></li>
                                </> :
                                isInstructor ?
                                    <>
                                        <li><NavLink to='/dashboard/home'><IoMdHome className="text-xl"></IoMdHome> Instructor Home</NavLink></li>
                                        <li><NavLink to='/dashboard/myselection'><MdPersonPin className="text-xl"></MdPersonPin> My Courses</NavLink></li>
                                        <li><NavLink to='/dashboard/addcourse'><IoMdAddCircle className="text-xl"></IoMdAddCircle> Add a Course</NavLink></li>
                                        <li><NavLink to='/dashboard/payments'><MdFeedback className="text-xl"></MdFeedback> Feedbacks</NavLink></li>
                                    </>
                                    : <>
                                        <li><NavLink to='/dashboard/home'><IoMdHome className="text-xl"></IoMdHome> User Home</NavLink></li>
                                        <li><NavLink to='/dashboard/myselection'><IoCheckbox className="text-xl"></IoCheckbox> My Selections</NavLink></li>
                                        <li><NavLink to='/dashboard/enrolled'><GiCheckedShield className="text-xl"></GiCheckedShield> Enrolled Courses</NavLink></li>
                                        <li><NavLink to='/dashboard/payments'><FaWallet className="text-xl"></FaWallet> Payment History</NavLink></li>
                                    </>
                        }

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