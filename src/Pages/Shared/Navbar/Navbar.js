import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import useUser from "../../hooks/useUser";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isUser] = useUser(user?.email);
    const menuItems = (
        <>
            <Link to="/">
                <button className="btn btn-ghost font-bold">Home</button>
            </Link>
            <Link to="/dashboard">
                <button className="btn btn-ghost font-bold">Profile</button>
            </Link>
            <Link to="/posts">
                <button className="btn btn-ghost font-bold">Posts</button>
            </Link>
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
                        <button className="btn btn-ghost font-bold">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn btn-ghost font-bold">SignUp</button>
                    </Link>
                </>
            )}
        </>
    );
    return (
        <div className="navbar border-b bg-gradient-to-r from-cyan-500 to-blue-500">
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
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo" className="rounded-md w-44 " />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
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
