import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import RecentPost from "./RecentPost";

const Posts = () => {
    const {
        data: posts = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/topposts");
            const data = await res.json();
            return data;
        },
    });
    console.log(posts);
    return (
        <div className="mx-5 md:mx-10">
            <h1 className="text-center">Recent Posts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {posts.map((post) => (
                    <RecentPost key={post._id} post={post}></RecentPost>
                ))}
            </div>
            <Link to="/posts" className="flex justify-center my-5">
                <button className="btn btn-outline ">See all post</button>
            </Link>
        </div>
    );
};

export default Posts;
