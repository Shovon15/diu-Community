import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import Loader from "../../Shared/Loader";
import UserPost from "./UserPost";

const ViewPost = () => {
    const { user } = useContext(AuthContext);
    const {
        data: posts = [],
        // refetch,
        isLoading,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/posts/${user?.email}`);
            const data = await res.json();
            return data;
        },
    });
    // console.log(posts);
    if (isLoading) {
        return <Loader></Loader>;
    }
    return (
        <div>
            <h1 className="text-center py-5 font-bold text-2xl">My Posts</h1>
            {posts?.length === 0 ? (
                <h1 className="py-7 font-bold text-center">You have no post yet! add a post!!!</h1>
            ) : (
                <>
                    <div className="gird grid-cols-1 gap-5">
                        {posts.map((post) => (
                            <UserPost key={post._id} post={post}></UserPost>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ViewPost;
