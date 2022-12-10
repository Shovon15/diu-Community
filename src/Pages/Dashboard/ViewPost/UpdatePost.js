import { toast } from "react-hot-toast";

const UpdatePost = ({ post, refetch }) => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    // console.log(post?._id);

    const handleUpdatePost = (event) => {
        event.preventDefault();
        const form = event.target;
        const updatePost = {
            categoryName: form.categoryName.value,
            description: form.description.value,
            date: currentDate,
        };

        saveUpdatePost(updatePost);
    };
    const saveUpdatePost = (updatePost) => {
        fetch(`https://diu-community-server-shovon15.vercel.app/updatePost/${post?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatePost),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("userSaveDb", data);
                if (data.acknowledged) {
                    toast.success("Post Update successfully");
                    refetch();
                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <>
            <input type="checkbox" id="update-post-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative dark:bg-slate-400">
                    <label htmlFor="update-post-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="text-lg font-bold ">post</h3>
                    <form onSubmit={handleUpdatePost} className="grid grid-cols-1 gap-3 mt-3">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <input
                            name="categoryName"
                            defaultValue={post?.categoryName}
                            type="text"
                            className="input w-full input-bordered dark:text-slate-800"
                        />
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <textarea
                            name="description"
                            defaultValue={post?.description}
                            type="text"
                            className="input w-full h-44 input-bordered dark:text-slate-800"
                        />
                        <br />
                        <input className="btn btn-accent w-full" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdatePost;
