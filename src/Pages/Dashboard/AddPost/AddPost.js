import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import useUser from "../../../hooks/useUser";
import Loader from "../../Shared/Loader";

const AddPost = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        isLoading,
    } = useForm();

    const { user } = useContext(AuthContext);
    const [isUser] = useUser(user?.email);

    const navigate = useNavigate();
    // const imageHostKey = process.env.REACT_APP_img_KEY;
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const handleAddItems = (data) => {
        console.log(isUser?.name);
        const items = {
            userName: isUser?.name,
            userImage: isUser?.image,
            userEmail: isUser?.email,
            categoryName: data.category,
            date: currentDate,
            description: data.description,
        };

        const saveItem = (items) => {
            fetch("https://diu-community-server.vercel.app/posts", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(items),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("saveItem", data);
                    // getUserToken(email);
                    if (data.acknowledged) {
                        toast.success("post added successfully");
                        // data.reset();
                        navigate("/");
                    } else {
                        toast.error(data.message);
                    }
                });
        };

        saveItem(items);
    };

    if (isLoading) {
        return <Loader />;
    }

    // const handleAddItems = () => {};
    return (
        <>
            <h2 className="text-2xl text-center font-bold text-orange-600 pt-5">Post your status</h2>
            <div className=" p-7 rounded-xl shadow-xl">
                <form onSubmit={handleSubmit(handleAddItems)} className="dark:text-slate-800">
                    <div className="grid grid-cols-1  md:grid-cols-2 mx-10">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">looking For:</span>
                            </label>
                            <select
                                {...register("category", {
                                    required: "please select one",
                                })}
                                className="input input-bordered w-full max-w-xs"
                            >
                                <option value="web developer">Web developer</option>
                                <option value="software tester">Software tester</option>
                                <option value="Data Analyst">Data analyst</option>
                            </select>
                            {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                        </div>
                    </div>
                    <div className="form-control w-full px-10 py-5">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <textarea
                            type="text"
                            {...register("description", {
                                required: "description  is required",
                            })}
                            className="input input-bordered h-32 "
                        />
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                    </div>

                    <div className="flex justify-center ">
                        <input
                            className="btn btn-outline dark:text-white hover:bg-cyan-700 hover:border-none px-20"
                            value="add item"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddPost;
