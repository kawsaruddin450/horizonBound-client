import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Courses from "../pages/Courses/Courses/Courses";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layouts/Dashboard/Dashboard";
import MySelection from "../pages/Dashboard/MySelection/MySelection";
import PrivateRoutes from "./PrivateRoutes";
import ManageCourses from "../pages/Dashboard/ManageCourses/ManageCourses";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import InstructorRoutes from "./InstructorRoutes";
import AddCourse from "../pages/Dashboard/AddCourse/AddCourse";
import MyCourses from "../pages/Dashboard/MyCourses/MyCourses";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/courses',
            element: <Courses></Courses>
        },
        {
          path: "/instructors",
          element: <Instructors></Instructors>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: 'myselection',
          element: <MySelection></MySelection>
        },
        //admin routes
        {
          path: 'managecourses',
          element: <AdminRoutes><ManageCourses></ManageCourses></AdminRoutes>
        },
        {
          path: 'manageusers',
          element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
        },
        //instructor routes
        {
          path: 'addcourse',
          element: <InstructorRoutes><AddCourse></AddCourse></InstructorRoutes>
        },
        {
          path: 'mycourses',
          element: <InstructorRoutes><MyCourses></MyCourses></InstructorRoutes>
        }
      ]
    }
  ]);

export default router;