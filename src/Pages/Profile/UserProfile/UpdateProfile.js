import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import useUser from "../../../hooks/useUser";
// import useUser from "../../hooks/useUser";

const UpdateProfile = ({ refetch, modalClose }) => {
    const { user } = useContext(AuthContext);
    const [isUser] = useUser(user?.email);

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const form = event.target;
        const users = {
            name: form.name.value,
            institution: form.institution.value,
            department: form.department.value,
            batch: form.batch.value,
            profession: form.profession.value,
        };

        // saveUpdateUser(users);
        saveUpdateUser(users);
    };

    const saveUpdateUser = (users) => {
        fetch(`http://localhost:5000/users/${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(users),
        })
            .then((res) => res.json())
            .then((data) => {
                // navigate(from, { replace: true });
                console.log("userSaveDb", data);
                // getUserToken(email);
                if (data.acknowledged) {
                    toast.success("Profile Updated");
                    refetch();
                    // isUserLoading(true);
                    modalClose();
                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative dark:bg-slate-400">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="text-lg font-bold ">modelName</h3>
                    <form onSubmit={handleUpdateProfile} className="grid grid-cols-1 gap-3 mt-3">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            defaultValue={isUser?.name}
                            type="text"
                            className="input w-full input-bordered dark:text-slate-800"
                        />
                        <label className="label">
                            <span className="label-text">Institution</span>
                        </label>
                        <input
                            name="institution"
                            defaultValue={isUser?.institution}
                            type="text"
                            className="input w-full input-bordered dark:text-slate-800"
                        />
                        <label className="label">
                            <span className="label-text">Department</span>
                        </label>
                        <input
                            name="department"
                            type="text"
                            defaultValue={isUser?.department}
                            className="input w-full input-bordered dark:text-slate-800"
                        />
                        <label className="label">
                            <span className="label-text">Batch</span>
                        </label>
                        <input
                            name="batch"
                            type="text"
                            defaultValue={isUser?.batch}
                            className="input w-full input-bordered dark:text-slate-800"
                        />
                        <label className="label">
                            <span className="label-text">Profession</span>
                        </label>
                        <input
                            name="profession"
                            type="text"
                            defaultValue={isUser?.profession}
                            className="input w-full input-bordered dark:text-slate-800"
                        />
                        <br />
                        <input onClick={modalClose} className="btn btn-accent w-full" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateProfile;
