import React from "react";

const FilterButton = (props) => {
    const { title, className, isActive, setIsActive, action } = props;

    let classes = className;
    if (isActive === title) {
        classes = classes + " is-active";
    }

    return (
        <button
            className={classes}
            onClick={(event) => {
                setIsActive(title);
                action(title);
            }}>
            {title}
        </button>
    );
};

export default FilterButton;
