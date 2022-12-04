import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import AllPost from "../../Pages/AllPosts/AllPost";
import AddPost from "../../Pages/Dashboard/AddPost/AddPost";
import ViewPost from "../../Pages/Dashboard/ViewPost/ViewPost";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import UserProfile from "../../Pages/Profile/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Home />,
            },
            {
                path: "/posts",
                element: <AllPost />,
            },

            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/Signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <UserProfile />,
            },
            {
                path: "/dashboard/addposts",
                element: <AddPost />,
            },
            {
                path: "/dashboard/viewpost",
                element: <ViewPost />,
            },
        ],
    },
]);
export default router;
