import React from "react";

const Input = (props) => {
    const {
        type,
        name,
        inputValue,
        placeholder,
        required,
        id,
        className,
        currentChecked,
        getValue,
        inputClick,
        options,
    } = props;

    const htmlInput = (
        <input
            type={type}
            id={id}
            className={className}
            placeholder={placeholder}
            required={required === true ?? false}
            name={name}
            options={options}
            value={inputValue}
            checked={currentChecked === inputValue && true}
            onChange={(event) => {
                getValue(event.target.value);
            }}
            onClick={inputClick}
        />
    );

    const htmlSelect = (
        <select
            onChange={(event) => {
                getValue(event.target.value);
            }}>
            <option value={""}></option>
            {!!options &&
                options.map((el, index) => (
                    <option key={index} value={el}>
                        {el}
                    </option>
                ))}
        </select>
    );

    return (
        <>
            {type === "radio" ? (
                <label>
                    {htmlInput} {inputValue};
                </label>
            ) : type === "select" ? (
                htmlSelect
            ) : (
                htmlInput
            )}
        </>
    );
};

Input.defaultProps = {
    type: "text",
    placeholder: "placeholder",
};

export default Input;
