import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import useUser from "../../hooks/useUser";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [isUser] = useUser(user?.email);
    // console.log(isUser);
    const { name, userRole, image } = isUser;
    return (
        <div className="mx-5 md:mx-10 mt-5">
            <img src={image} alt="avatar" className="w-44 h-44 rounded-full" />
            <h1 className="text-3xl font-bold py-5">{name}</h1>
            <h1 className="text-2xl pb-5">User Role: {userRole}</h1>
            <h1 className="text-2xl pb-5">Institution: Daffodil international University</h1>
            <h1 className="text-2xl pb-5">Batch:</h1>
            <h1 className="text-2xl pb-5">Department:</h1>
            <h1 className="text-2xl pb-5">Batch:</h1>
            <button className="btn btn-outline">update My Profile</button>
        </div>
    );
};

export default UserProfile;
