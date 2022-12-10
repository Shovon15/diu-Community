import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import UpdateProfile from "./UpdateProfile";

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`https://diu-community-server-shovon15.vercel.app/users/${user?.email}`);
            const data = await res.json();
            return data;
        },
    });
    console.log(users);
    const { name, image, institution, department, batch, profession } = users;

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("    logout     ");
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <div className="flex mx-5 md:mx-10 mt-5 space-x-5">
                <div>
                    <img src={image} alt="avatar" className="w-44 h-44 rounded-full" />
                </div>
                <div className="flex flex-col space-y-3 text-xl font-semibold pb-5">
                    <h1 className="text-3xl font-bold capitalize py-5">{name}</h1>
                    <h1>
                        Institution:<span className="font-bold capitalize "> {institution}</span>
                    </h1>
                    <h1>Department: {department}</h1>
                    <h1>Batch: {batch}</h1>
                    <h1>
                        profession:<span className="font-bold capitalize"> {profession}</span>
                    </h1>
                </div>
            </div>
            <div className="mx-8 flex flex-row space-x-10">
                <label
                    htmlFor="update-modal"
                    className="btn btn-outline dark:text-white hover:bg-cyan-700 hover:border-none px-12 "
                >
                    Update profile
                </label>

                <button onClick={handleLogOut} className="btn btn-outline hover:bg-red-600">
                    Logout
                </button>
            </div>
            <UpdateProfile refetch={refetch} />
        </>
    );
};

export default UserProfile;
