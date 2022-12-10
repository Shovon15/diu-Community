import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import UserComments from "./UserComments";

const PostDetails = () => {
    const posts = useLoaderData();
    // console.log(posts);
    const {
        userName,
        userImage,
        date,
        categoryName,
        description,
        _id,
        userProfession,
        userInstitution,
        userDepartment,
        userBatch,
    } = posts;
    return (
        <>
            <div className="card card-side flex-col lg:flex-row  bg-white shadow-inherit mx-5 md:mx-10 mt-10">
                <div className=" p-5 w-full lg:w-3/12 ">
                    <div className="flex items-center space-x-3">
                        <img src={userImage} alt="userImage" className="w-16 h-16 rounded-full" />
                        <p className="font-bold">{userName}</p>
                    </div>
                    <div className="font-semibold pt-3">
                        <p>{userProfession}</p>
                        <p>{userInstitution}</p>
                        <p>{userDepartment} Department</p>
                        <p>Batch: {userBatch}</p>
                    </div>
                </div>
                <div className="card-body p-10 w-full lg:w-9/12">
                    <h2 className="card-title">{categoryName.toUpperCase()}</h2>
                    <p className="font-semibold">{description}</p>
                    <div className="card-actions flex flex-row items-center space-x-2 ">
                        <AiTwotoneCalendar className="w-5 h-5" />
                        <p className="font-semibold">{date}</p>
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
