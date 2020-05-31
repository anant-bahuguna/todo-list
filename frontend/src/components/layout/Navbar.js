import React from "react";
import navbarLogo from "../../assets/images/navbar-logo.svg";

export const Navbar = () => {
    return (
        <nav
            class="navbar is-fixed-top has-background-light"
            role="navigation"
            aria-label="main navigation"
            style={S.navbar}
        >
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src={navbarLogo} width="112" height="28" />
                </a>

                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">Home</a>

                    <a class="navbar-item">Documentation</a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">Filter</a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">All</a>
                            <a class="navbar-item">Complete</a>
                            <a class="navbar-item">Incomplete</a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item">Report an issue</a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">Log in</a>
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
