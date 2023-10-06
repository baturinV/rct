import React from "react";
import Button from "../../comps/Button";

const Header = () => {
    return (
        <>
            <header>
                <div className={"container"}>
                    <div className={"logo"}>ReactManager</div>
                    <div className={"menu-container"}>
                        <Button
                            title={"Home"}
                            className={"menu-button"}
                            href={"/"}
                        />
                        <Button
                            title={"Stat"}
                            className={"menu-button"}
                            href={"/stat/all"}
                        />
                        <Button
                            title={"Planing"}
                            className={"menu-button"}
                            href={"/plan"}
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
