import React from "react";
import { useParams } from "react-router-dom";
import DataList from "../views/local/DataList";

const Stat = (props) => {
    const { data } = props;

    const { view } = useParams();

    return <>{data.length > 0 && <DataList view={view} data={data} />}</>;
};

export default Stat;
