import React from "react";

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn border-cyan-700 hover:border-cyan-700 bg-cyan-700  hover:bg-white hover:text-cyan-700   px-12">
            {children}
        </button>
    );
};

export default PrimaryButton;
