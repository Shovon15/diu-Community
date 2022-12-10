import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Componants/PrimaryButton/PrimaryButton";

const AllPost = ({ post }) => {
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
    } = post;
    return (
        <>
            <div className="card card-side flex-col lg:flex-row w-full bg-white shadow-xl">
                <div className="m-5 w-full lg:w-3/12 ">
                    <div className="flex items-center space-x-3">
                        <img src={userImage} alt="userImage" className="w-16 h-16 rounded-full" />
                        <p className="font-bold">{userName}</p>
                    </div>
                    <div className="py-3">
                        <p className="font-bold">{userProfession}</p>
                        <p className="font-semibold">{userInstitution}</p>
                        <p className="font-semibold">{userDepartment} Department</p>
                        <p className="font-semibold">Batch: {userBatch}</p>
                    </div>
                </div>
                <div className="card-body p-5 w-full lg:w-9/12 min-h-fit">
                    <h2 className="card-title">{categoryName.toUpperCase()}</h2>
                    <p>{description}</p>
                    <div className="flex flex-row items-center space-x-2 ">
                        <AiTwotoneCalendar className="w-5 h-5" />
                        <p className="font-semibold">{date}</p>
                    </div>
                    <div className="flex justify-end">
                        <Link to={`/posts/${_id}`}>
                            <PrimaryButton className="">Details</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllPost;
