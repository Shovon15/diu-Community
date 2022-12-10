import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Componants/PrimaryButton/PrimaryButton";
import Loader from "../../Shared/Loader";
import RecentPost from "./RecentPost";

const Posts = () => {
    const {
        data: posts = [],
        // refetch,
        isLoading,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch("https://diu-community-server-shovon15.vercel.app/topposts");
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="mx-5 md:mx-10">
            <h1 className="text-center font-bold text-3xl my-5 lg:my-10 ">Recent Posts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {posts.map((post) => (
                    <RecentPost key={post._id} post={post}></RecentPost>
                ))}
            </div>
            <div className="flex justify-center my-5">
                <Link to="/posts">
                    <PrimaryButton>See all post</PrimaryButton>
                </Link>
            </div>
        </div>
    );
};

export default Posts;
