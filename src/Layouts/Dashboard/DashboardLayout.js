import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-200 dark:bg-slate-700 text-base-content dark:text-white font-bold text-lg">
                        <li>
                            <Link to="/dashboard">Profile</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addposts">Add Post</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/viewpost">View My Post</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;
