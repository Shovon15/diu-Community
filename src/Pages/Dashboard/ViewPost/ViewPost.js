import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import ConfirmationModal from "../../Shared/ConfirmationModal";
import Loader from "../../Shared/Loader";
import UpdatePost from "./UpdatePost";
import UserPost from "./UserPost";

const ViewPost = () => {
    const { user } = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const [deletingPost, setDeletingPost] = useState(null);

    // console.log(deletingPost);
    // console.log("post:", post);

    const {
        data: posts = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`https://diu-community-server-shovon15.vercel.app/userpost/${user?.email}`);
            const data = await res.json();
            return data;
        },
    });
    // console.log(posts);
    const closeModal = () => {
        setDeletingPost(null);
    };

    const handleDeletePost = () => {
        fetch(`https://diu-community-server-shovon15.vercel.app/userpost/${deletingPost?._id}`, {
            method: "DELETE",
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Post deleted successfully`);
                }
            });
    };

    if (isLoading) {
        return <Loader></Loader>;
    }
    return (
        <div className="pb-">
            <h1 className="text-center text-cyan-700 py-5 font-bold text-3xl">My Posts</h1>

            {posts?.length === 0 ? (
                <h1 className="py-7 font-bold text-center">You have no post yet! add a post!!!</h1>
            ) : (
                <>
                    <h1 className=" font-bold text-start mx-5 md:mx-10 text-xl">You have {posts.length} post </h1>
                    <div className="gird grid-cols-1 gap-5">
                        {posts.map((post) => (
                            <UserPost
                                key={post._id}
                                posts={post}
                                setDeletingPost={setDeletingPost}
                                setPost={setPost}
                            ></UserPost>
                        ))}
                    </div>

                    <UpdatePost post={post} setPost={setPost} refetch={refetch}></UpdatePost>
                    {deletingPost && (
                        <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={` ${deletingPost?.categoryName} Category name Post?`}
                            successAction={handleDeletePost}
                            successButtonName="Delete"
                            modalData={post}
                            closeModal={closeModal}
                        ></ConfirmationModal>
                    )}
                </>
            )}
        </div>
    );
};

export default ViewPost;
