import React from "react";
import logo from "../assets/images/todos-logo.svg";
import Register from '../components/auth/Register'

export const LandingPage = () => {
    return (
        <section className="hero is-fullheight has-background-grey-lighter">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-vcentered">
                            <figure className="image" style={S}>
                                <img
                                    src={logo}
                                    alt="Todos"
                                    style={{ maxWidth: "512px" }}
                                />
                            </figure>
                        </div>
                        <div className="column">
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const S = {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
};
