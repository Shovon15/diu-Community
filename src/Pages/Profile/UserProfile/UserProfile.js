import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import useUser from "../../hooks/useUser";
import UpdateProfile from "./UpdateProfile";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [isUser] = useUser(user?.email);
    // console.log(isUser);

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${user?.email}`);
            const data = await res.json();
            return data;
        },
    });
    console.log(users);

    const [updateUser, setUpdateUser] = useState();
    // console.log(deletingBuyer);

    const modalClose = () => {
        setUpdateUser(null);
    };

    const { name, userRole, image, institution, department, batch, profession } = users;
    return (
        <>
            <div className="flex mx-5 md:mx-10 mt-5 space-x-5">
                <div>
                    <img src={image} alt="avatar" className="w-44 h-44 rounded-full" />
                </div>
                <div className="flex flex-col space-y-3 text-xl font-semibold pb-5">
                    <h1 className="text-3xl font-bold py-5">{name}</h1>
                    <h1>Institution: {institution}</h1>
                    <h1>Department:{department}</h1>
                    <h1>Batch:{batch}</h1>
                    <h1>profession:{profession}</h1>
                    <h1>User Role: {userRole}</h1>
                </div>
            </div>
            <div className="mx-8">
                <label
                    onClick={() => setUpdateUser(users)}
                    htmlFor="update-modal"
                    className="btn btn-outline dark:text-white hover:bg-cyan-700 hover:border-none px-12 "
                >
                    Update profile
                </label>
            </div>
            <UpdateProfile refetch={refetch} modalClose={modalClose} />
        </>
    );
};

export default UserProfile;
