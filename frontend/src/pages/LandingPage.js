import React from "react";
import logo from "../assets/images/todos-logo.svg";

export const LandingPage = () => {
    return (
        <section className="hero is-fullheight has-background-grey-lighter">
            <div className="hero-body">
                <div className="container">
                    <figure className="image" style={S}>
                        <img
                            src={logo}
                            alt="Todos"
                            style={{ maxWidth: "512px" }}
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

const S = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
