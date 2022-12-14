import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import useUser from "../../../hooks/useUser";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isUser] = useUser(user?.email);
    const menuItems = (
        <>
            <NavLink to="/">
                <button className="btn btn-ghost font-bold hover:text-white">Home</button>
            </NavLink>
            <NavLink to="/dashboard">
                <button className="btn btn-ghost font-bold hover:text-white">Profile</button>
            </NavLink>
            <NavLink to="/posts">
                <button className="btn btn-ghost font-bold hover:text-white">Posts</button>
            </NavLink>
        </>
    );
    const userItem = (
        <>
            {user?.uid ? (
                <Link to="/dashboard" className="cursor-pointer">
                    <div className="tooltip tooltip-left" data-tip={isUser?.name}>
                        {isUser?.image ? (
                            <img src={isUser?.image} alt="avatar" className="w-10 h-10 rounded-full mr-5 lg:mr-10" />
                        ) : (
                            <FaUser className="w-5 h-5 rounded-full mr-5 lg:mr-10"></FaUser>
                        )}
                    </div>
                </Link>
            ) : (
                <>
                    <Link to="/login">
                        <button className="btn btn-ghost font-bold hover:text-white">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn btn-ghost font-bold hover:text-white">SignUp</button>
                    </Link>
                </>
            )}
        </>
    );
    return (
        <div className="navbar  border-b bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border-none"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo" className="rounded-md w-44 " />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-slate-600 ">{menuItems}</ul>
            </div>
            <div className="navbar-end">{userItem}</div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </label>
        </div>
    );
};

export default Navbar;
