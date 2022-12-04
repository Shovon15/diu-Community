import { useQuery } from "@tanstack/react-query";
import React from "react";

const ViewPost = () => {
    const {
        data: posts = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch("");
            const data = await res.json();
            return data;
        },
    });
    return <div></div>;
};

export default ViewPost;
