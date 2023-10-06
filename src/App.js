import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/views/global/Header";
import Footer from "./components/views/global/Footer";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Plan from "./components/pages/Plan";

import "./styles/styles.css";

function App() {
    const [data, setData] = useState([
        {
            amount: 1000,
            action: "add",
            comment: "payment",
        },
        {
            amount: 200,
            action: "spend",
            comment: "rent",
        },
    ]);

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route
                        path={"/stat/:view"}
                        element={<Stat data={data} />}
                    />
                    <Route path={"/plan"} element={<Plan />} />
                    <Route
                        path={"/"}
                        element={<Main data={data} setData={setData} />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
