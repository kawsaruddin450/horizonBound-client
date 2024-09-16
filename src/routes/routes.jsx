import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Courses from "../pages/Courses/Courses/Courses";

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
        }
      ]
    },
  ]);

export default router;