import React, { useState } from "react";
import Header from "./components/views/global/Header";
import Footer from "./components/views/global/Footer";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Plan from "./components/pages/Plan";

import "./styles/styles.css";

function App() {
    const [showPage, setShowPage] = useState("main");
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
            <Header setShowPage={setShowPage} />
            <main>
                {showPage === "main" ? (
                    <Main data={data} setData={setData} />
                ) : showPage === "stat" ? (
                    <Stat data={data} />
                ) : showPage === "plan" ? (
                    <Plan />
                ) : null}
            </main>
            <Footer />
        </>
    );
}

export default App;
