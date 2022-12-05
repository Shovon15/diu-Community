import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import AllPost from "../../Pages/AllPosts/AllPosts";
import PostDetails from "../../Pages/AllPosts/PostDetails";
import AddPost from "../../Pages/Dashboard/AddPost/AddPost";
import ViewPost from "../../Pages/Dashboard/ViewPost/ViewPost";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import UserProfile from "../../Pages/Profile/UserProfile/UserProfile";
import PrivateRoutes from "../ProvateRoutes/privateRoutes";

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
                loader: () => fetch("http://localhost:5000/posts"),
            },
            {
                path: "/posts/:_id",
                element: (
                    <PrivateRoutes>
                        <PostDetails />
                    </PrivateRoutes>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/posts/${params._id}`),
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
        element: (
            <PrivateRoutes>
                <DashboardLayout />
            </PrivateRoutes>
        ),
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
