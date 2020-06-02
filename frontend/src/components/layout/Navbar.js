import React from "react";
import { Link } from "react-router-dom";
import navbarLogo from "../../assets/images/navbar-logo.svg";

export const Navbar = () => {
    return (
        <nav
            className="navbar is-fixed-top has-background-light"
            role="navigation"
            aria-label="main navigation"
            style={S.navbar}
        >
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={navbarLogo} width="112" height="28" />
                </a>

                <a
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/home">
                        Home
                    </Link>

                    <a className="navbar-item">Documentation</a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Filter</a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">All</a>
                            <a className="navbar-item">Complete</a>
                            <a className="navbar-item">Incomplete</a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">Report an issue</a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const S = {
    navbar: {
        boxShadow: "0 3px 14px 2px rgba(0,0,0,.12)",
    },
};
