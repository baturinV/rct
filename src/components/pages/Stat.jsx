import React from "react";
import DataList from "../views/local/DataList";

const Stat = (props) => {
    const { data } = props;

    return <>{data.length > 0 && <DataList data={data} />}</>;
};

export default Stat;
