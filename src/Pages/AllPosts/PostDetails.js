import React from "react";
import { AiFillLike, AiOutlineComment, AiTwotoneCalendar } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import PrimaryButton from "../../Componants/PrimaryButton/PrimaryButton";
import UserComments from "./UserComments";

const PostDetails = () => {
    const posts = useLoaderData();
    // console.log(posts);
    const { userName, userImage, date, categoryName, description, _id } = posts;
    return (
        <>
            <div className="card card-side flex-col lg:flex-row  bg-white shadow-inherit mx-5 md:mx-10 mt-10">
                <div className=" p-5 w-full lg:w-3/12 ">
                    <div className="flex items-center space-x-3">
                        <img src={userImage} alt="userImage" className="w-16 h-16 rounded-full" />
                        <p className="font-bold">{userName}</p>
                    </div>
                    <p>Alumni</p>
                    <p>Daffodil international university</p>
                </div>
                <div className="card-body p-10 w-full lg:w-9/12">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{description}</p>
                    <p>Looking For: {categoryName}</p>
                    <div className="card-actions justify-between items-end mx-10 mt-10">
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
                </div>
            </div>

            <div>
                <UserComments id={_id} />
            </div>
        </>
    );
};

export default PostDetails;
