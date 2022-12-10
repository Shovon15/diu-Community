import React from "react";
import { AiFillEdit, AiTwotoneCalendar } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
// import UpdatePost from "./UpdatePost";

const userPost = ({ posts, setPost, setDeletingPost }) => {
    const { description, date, categoryName } = posts;
    return (
        <>
            <div className="card card-side flex-col lg:flex-row  bg-white shadow-inherit mx-5 md:mx-10 mt-10">
                <div className="card-body p-10 w-full lg:w-9/12">
                    <h2 className="card-title">{categoryName.toUpperCase()}</h2>
                    <p className="font-semibold">{description}</p>
                    <div className="card-actions flex flex-row items-center space-x-2 ">
                        <AiTwotoneCalendar className="w-5 h-5" />
                        <p className="font-semibold">{date}</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 justify-center p-5 w-full lg:w-3/12 ">
                    <label
                        onClick={() => setPost(posts)}
                        htmlFor="update-post-modal"
                        className="btn btn-outline border-cyan-700  dark:text-white hover:bg-cyan-700 hover:border-none px-12 "
                    >
                        Edit
                        <AiFillEdit className="w-6 h-6 mx-2" />
                    </label>
                    <label
                        onClick={() => setDeletingPost(posts)}
                        htmlFor="confirmation-modal"
                        className="btn btn-outline border-red-600 hover:border-red-700 hover:bg-red-600 hover:text-white text-red-700"
                    >
                        Delete
                        <FaTrashAlt className="w-6 h-6 mx-2" />
                    </label>
                </div>
            </div>
        </>
    );
};

export default userPost;
