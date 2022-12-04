import React from "react";

const userPost = ({ post }) => {
    console.log(post);
    return (
        <div>
            <h1>{post.categoryName}</h1>
            <h1>{post.description}</h1>
            <h1>{post.date}</h1>
        </div>
    );
};

export default userPost;
