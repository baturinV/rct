import React, { useState } from "react";
import Input from "../comps/Input";

const Main = (props) => {
    const [amount, setAmount] = useState("");
    const [action, setAction] = useState("");
    const [comment, setComment] = useState("");
    const [validateMessage, setValidateMessage] = useState("");

    const { data, setData } = props;

    const succeessTransaction = () => {
        setData([
            ...data,
            {
                amount: parseInt(amount),
                action: action,
                comment: comment,
            },
        ]);
        setAmount("");
        setAction("");
        setComment("");
        setValidateMessage("");
    };

    const validation = () => {
        if (!amount && !action) {
            setValidateMessage(
                "Please add Transaction Amount and Transaction Type"
            );
        } else if (!amount) {
            setValidateMessage("Please add Transaction Amount");
        } else if (!action) {
            setValidateMessage("Please add Transaction Type");
        } else if (!!amount && !!action) {
            succeessTransaction();
        }
    };

    return (
        <>
            <div className="container">
                <form className={"main-form"}>
                    <Input
                        type={"number"}
                        placeholder={"Transaction Amount *"}
                        required={true}
                        id={"test"}
                        inputValue={amount}
                        className={"money"}
                        getValue={setAmount}
                    />
                    <Input
                        type={"radio"}
                        placeholder={""}
                        inputValue={"add"}
                        name={"radio"}
                        getValue={setAction}
                        currentChecked={action}
                    />
                    <Input
                        type={"radio"}
                        placeholder={""}
                        inputValue={"spend"}
                        name={"radio"}
                        getValue={setAction}
                        currentChecked={action}
                    />
                    <Input
                        type={"select"}
                        placeholder={"Transaction comment"}
                        getValue={setComment}
                        inputValue={comment}
                        options={
                            action === "spend"
                                ? [
                                      "transport",
                                      "entertaiment",
                                      "bike",
                                      "regular",
                                      "products",
                                      "rent",
                                  ]
                                : action === "add"
                                ? ["payment", "gift", "sell"]
                                : []
                        }
                    />
                    {!!validateMessage && (
                        <span className={"main-form__validate"}>
                            {validateMessage}
                        </span>
                    )}
                    <Input
                        type={"button"}
                        inputValue={"Submit"}
                        inputClick={validation}
                        disabled={true}
                    />
                </form>
            </div>
        </>
    );
};

export default Main;
