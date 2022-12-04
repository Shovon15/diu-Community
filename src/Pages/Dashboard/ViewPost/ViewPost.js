import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import UserPost from "./UserPost";

const ViewPost = () => {
    const { user } = useContext(AuthContext);
    const {
        data: posts = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/posts/${user?.email}`);
            const data = await res.json();
            return data;
        },
    });
    console.log(posts);
    return (
        <div>
            <h1 className="text-center py-5">My All Posts</h1>
            {posts.map((post) => (
                <UserPost key={post._id} post={post}></UserPost>
            ))}
        </div>
    );
};

export default ViewPost;
