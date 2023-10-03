import React from "react";
import Button from "../../comps/Button";

const Header = (props) => {
    const { setShowPage } = props;

    return (
        <>
            <header>
                <div className={"container"}>
                    <div className={"logo"}>ReactManager</div>
                    <div className={"menu-container"}>
                        <Button
                            title={"Home"}
                            className={"menu-button"}
                            buttonClick={setShowPage}
                            href={"main"}
                        />
                        <Button
                            title={"Stat"}
                            className={"menu-button"}
                            buttonClick={setShowPage}
                            href={"stat"}
                        />
                        <Button
                            title={"Planing"}
                            className={"menu-button"}
                            buttonClick={setShowPage}
                            href={"plan"}
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
