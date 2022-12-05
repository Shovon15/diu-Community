import React from "react";
import { Link } from "react-router-dom";

const AllPost = ({ post }) => {
    const { userName, userImage, date, categoryName, description, _id } = post;
    return (
        <>
            <div className="card card-side bg-slate-300 shadow-xl">
                <div className="m-5">
                    <div className="flex items-center space-x-2">
                        <img src={userImage} alt="userImage" className="w-16 h-16 rounded-full" />
                        <p className="font-bold">{userName}</p>
                    </div>
                    <p>Alumni</p>
                    <p>Daffodil international university</p>
                </div>
                <div className="card-body p-5">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{description}</p>
                    <p>Looking For: {categoryName}</p>
                    <div className="card-actions justify-between items-end">
                        <h1>{date}</h1>
                        <h1>comments</h1>
                        <h1>like</h1>
                        <Link to={`/posts/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllPost;
