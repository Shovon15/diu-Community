import React from "react";
import { useLoaderData } from "react-router-dom";
import AllPost from "./AllPost";

const AllPosts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h1 className="text-center">All Posts</h1>
            <div className="grid  gap-5 mx-10">
                {posts.map((post) => (
                    <AllPost key={post._id} post={post}></AllPost>
                ))}
            </div>
        </div>
    );
};

export default AllPosts;
