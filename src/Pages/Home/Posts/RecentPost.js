import React from "react";
// import { FaRegCommentDots } from "react-icons/fa";
// import AiFillLike from "@react-icons/all-files";
import { AiOutlineComment, AiFillLike, AiTwotoneCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const RecentPost = ({ post }) => {
    const { userName, userImage, date, categoryName, description, _id } = post;
    return (
        <>
            <div className="card card-side flex-col lg:flex-row w-full bg-slate-300 shadow-xl">
                <div className="m-5 w-full lg:w-3/12 ">
                    <div className="flex items-center space-x-3">
                        <img src={userImage} alt="userImage" className="w-16 h-16 rounded-full" />
                        <p className="font-bold">{userName}</p>
                    </div>
                    <p>Alumni</p>
                    <p>Daffodil international university</p>
                </div>
                <div className="card-body p-5 w-full lg:w-9/12">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{description}</p>
                    <p>Looking For: {categoryName}</p>
                    <div className="card-actions justify-between items-end">
                        <div className="flex flex-row items-center space-x-2 ">
                            <AiTwotoneCalendar className="w-8 h-8" />
                            <p className="font-semibold">{date}</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2 ">
                            <AiOutlineComment className="w-8 h-8" />
                            <p className="font-semibold"> 23</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <AiFillLike className="w-8 h-8" />
                            <p className="font-semibold"> 58</p>
                        </div>
                    </div>
                    <div className="flex justify-end my-3">
                        <Link to={`/posts/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentPost;
