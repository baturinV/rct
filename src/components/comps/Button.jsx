import React from "react";

const Button = (props) => {
    const { title, className, buttonClick, href } = props;

    return (
        <button className={className} onClick={() => buttonClick(href)}>
            {title}
        </button>
    );
};

export default Button;
