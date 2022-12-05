import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Loader from "../Shared/Loader";
import Comment from "./Comment";

const UserComments = ({ id }) => {
    const [commentError, setCommentError] = useState();
    const { isUser } = useContext(AuthContext);

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    // console.log(isUser);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {
        data: comments = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["comments"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comments/${id}`);
            const data = await res.json();
            return data;
        },
    });
    console.log(comments);

    const handleAddComment = (data) => {
        const userComment = {
            postId: id,
            comment: data.comment,
            userImage: isUser?.image,
            userName: isUser?.name,
            userEmail: isUser?.email,
            date: currentDate,
        };
        saveComment(userComment);
    };

    const saveComment = (userComment) => {
        fetch("http://localhost:5000/comments", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userComment),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("saveItem", data);
                // getUserToken(email);
                if (data.acknowledged) {
                    toast.success("Comment added successfully");
                    refetch();
                    reset();
                } else {
                    setCommentError(data.message);
                    toast.error(data.message);
                }
            });
    };
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className="flex flex-row mx-5 md:mx-10 p-10">
            <div className="w-full md:w-4/12">
                {comments.map((comment) => (
                    <Comment key={comment._id} comment={comment}></Comment>
                ))}
            </div>
            <div className="w-full md:w-8/12">
                <form onSubmit={handleSubmit(handleAddComment)}>
                    <div className="form-control w-full  dark:text-slate-800">
                        <label className="label">
                            <span className="label-text">Comment Here</span>
                        </label>
                        <textarea
                            type="text"
                            {...register("comment", {
                                required: "comment is Required",
                            })}
                            className="input input-bordered w-full max-w-xs h-32"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    {commentError && <p className="text-red-600">{commentError}</p>}
                    <div className="">
                        <input
                            className="btn bg-cyan-400 hover:bg-cyan-600 border-none mt-4 px-12"
                            value="Send"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserComments;
