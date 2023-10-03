import React, { useState } from "react";
import FilterButton from "../../comps/FilterButton";
import { ResponsivePieCanvas } from "@nivo/pie";

const DataList = (props) => {
    const { title, data } = props;

    const [isActive, setIsActive] = useState("all");
    const [filteredData, setFilteredData] = useState(data);

    const filterData = (filter) => {
        setFilteredData(
            filter !== "all" ? data.filter((el) => el.action === filter) : data
        );
    };

    const calculateTotalAmount = (data, action, comment = null) => {
        return data.reduce((total, item) => {
            if (
                item.action === action &&
                (item.comment === comment || comment === null)
            ) {
                return total + item.amount;
            }
            return total;
        }, 0);
    };

    const addSum = calculateTotalAmount(data, "add");
    const spendSum = calculateTotalAmount(data, "spend");
    const transport = calculateTotalAmount(data, "spend", "transport");
    const entertaiment = calculateTotalAmount(data, "spend", "entertaiment");
    const bike = calculateTotalAmount(data, "spend", "bike");
    const regular = calculateTotalAmount(data, "spend", "regular");
    const rent = calculateTotalAmount(data, "spend", "rent");
    const products = calculateTotalAmount(data, "spend", "products");
    const other = calculateTotalAmount(data, "spend", "");

    const MyResponsivePieCanvas = ({
        data = [
            {
                id: "transport",
                label: "Transport",
                value: transport,
                color: "hsl(110, 70%, 50%)",
            },
            {
                id: "entertaiment",
                label: "Entertaiment",
                value: entertaiment,
                color: "hsl(196, 70%, 50%)",
            },
            {
                id: "bike",
                label: "Bike",
                value: bike,
                color: "hsl(23, 70%, 50%)",
            },
            {
                id: "regular",
                label: "Regular payments",
                value: regular,
                color: "hsl(170, 70%, 50%)",
            },
            {
                id: "products",
                label: "Products",
                value: products,
                color: "hsl(264, 70%, 50%)",
            },
            {
                id: "rent",
                label: "Rent",
                value: rent,
                color: "hsl(136, 70%, 50%)",
            },
            {
                id: "other",
                label: "Other",
                value: other,
                color: "hsl(131, 70%, 50%)",
            },
        ].filter((item) => item.value > 0),
    }) => (
        <ResponsivePieCanvas
            data={data}
            margin={{ top: 40, right: 80, bottom: 40, left: 200 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: "paired" }}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.6]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#ffffff"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="#ffffff"
            legends={[
                {
                    anchor: "left",
                    direction: "column",
                    justify: false,
                    translateX: -80,
                    translateY: 0,
                    itemsSpacing: 6,
                    itemWidth: 60,
                    itemHeight: 14,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 16,
                    symbolShape: "circle",
                },
            ]}
        />
    );

    return (
        <>
            <div className="container">
                <h2 className="data__title">{title}</h2>
                <div className={"filter-container"}>
                    <FilterButton
                        className={"filter-button"}
                        title={"all"}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        action={filterData}
                    />
                    <FilterButton
                        className={"filter-button"}
                        title={"add"}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        action={filterData}
                    />
                    <FilterButton
                        className={"filter-button"}
                        title={"spend"}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        action={filterData}
                    />
                </div>
                <div className={"data"}>
                    {filteredData.toReversed().map((el, index) => (
                        <div
                            key={++index}
                            className={el.action + " data__item"}>
                            <h3>{el.amount}</h3>
                            <p>{el.comment}</p>
                        </div>
                    ))}
                </div>
                <div className={"data-stat"}>
                    <p className={"data-add"}>
                        ADD : <span>{addSum}</span>
                    </p>
                    <p className={"data-spend"}>
                        SPEND : <span>{spendSum}</span>
                    </p>
                    <p className={"data-difference"}>
                        DIFFERENCE : <span>{addSum - spendSum}</span>
                    </p>
                </div>
                {isActive === "spend" && (
                    <div className={"pie"}>
                        <MyResponsivePieCanvas />
                    </div>
                )}
            </div>
        </>
    );
};

export default DataList;
