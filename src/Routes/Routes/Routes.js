import { createBrowserRouter, Link } from "react-router-dom";
import PrimaryButton from "../../Componants/PrimaryButton/PrimaryButton";
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
                path: "/posts",
                element: (
                    <PrivateRoutes>
                        {" "}
                        <AllPost />
                    </PrivateRoutes>
                ),
                loader: () => fetch("https://diu-community-server-shovon15.vercel.app/posts"),
            },
            {
                path: "/posts/:_id",
                element: (
                    <PrivateRoutes>
                        <PostDetails />
                    </PrivateRoutes>
                ),
                loader: ({ params }) => fetch(`https://diu-community-server-shovon15.vercel.app/posts/${params._id}`),
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
    {
        path: "*",
        element: (
            <div className="py-20 md:py-44">
                <p className="text-center font-bold text-3xl">Page Not found</p>
                <Link to="/" className="flex justify-center mt-5">
                    <PrimaryButton>Home</PrimaryButton>
                </Link>
            </div>
        ),
    },
]);
export default router;
