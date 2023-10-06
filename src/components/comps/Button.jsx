import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
    const { title, className, href } = props;
    const navigate = useNavigate();

    return (
        <button
            className={className}
            onClick={() => {
                !!href ? navigate(href) : console.log("empty href");
            }}>
            {title}
        </button>
    );
};

export default Button;
