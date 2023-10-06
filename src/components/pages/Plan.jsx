import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Plan = () => {
    const [count, setCount] = useState(0);

    const { param } = useParams();

    const addCount = () => {
        setCount((prev) => {
            return prev + 1;
        });
    };
    const resetCount = () => {
        setCount(0);
    };

    useEffect(() => {
        // console.log(param);
        // console.log(searchParams.get("name"));
    }, [param]);

    return (
        <>
            <h1>plan</h1>
            <h2>{count}</h2>
            <button onClick={addCount}>Add Count</button>
            <button onClick={resetCount}>Reset Count</button>
        </>
    );
};

export default Plan;
