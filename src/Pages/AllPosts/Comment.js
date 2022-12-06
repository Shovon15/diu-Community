import React from "react";

const Comment = ({ comments }) => {
    const { userName, userImage, comment, date } = comments;
    return (
        <div>
            <div className="flex flex-row space-x-3">
                <img src={userImage} alt="user" className="rounded-full w-12 h-12" />
                <div className="">
                    <h1 className="font-bold">{userName}</h1>
                    <h1>{date}</h1>
                </div>
            </div>
            <h1 className="px-2 py-2">{comment}</h1>
        </div>
    );
};

export default Comment;
