import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

export const FooterMenu = () => {
    return (
        <nav
            className="level is-mobile has-background-light is-hidden-desktop"
            style={S}
        >
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                        <NavLink
                            to="/home"
                            className="navbar-item"
                            style={{ paddingTop: 0 }}
                        >
                            <i className="fas fa-home fa-sm "></i>
                        </NavLink>
                    </p>
                </div>
            </div>
            {/* <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                        <a
                            href="#searchBar"
                            className="navbar-item"
                            style={{ paddingTop: 0 }}
                        >
                            <i className="fas fa-search fa-sm"></i>
                        </a>
                    </p>
                </div>
            </div> */}
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                        <NavLink
                            to="/task"
                            className="navbar-item"
                            style={{ paddingTop: 0 }}
                        >
                            <i className="fas fa-plus fa-sm"></i>
                        </NavLink>
                    </p>
                </div>
            </div>
            {/* <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                        <NavLink
                            to="/task"
                            className="navbar-item"
                            style={{ paddingTop: 0 }}
                        >
                            <i className="fas fa-filter fa-sm"></i>
                        </NavLink>
                    </p>
                </div>
            </div> */}
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                        <NavLink
                            to="/profile"
                            className="navbar-item"
                            style={{ paddingTop: 0 }}
                        >
                            <i className="fas fa-user-alt fa-sm"></i>
                        </NavLink>
                    </p>
                </div>
            </div>
        </nav>
    );
};

const filterTodos = () => {
    return <h1>Filter</h1>;
};

const S = {
    width: "100%",
    height: "50px",
    position: "fixed",
    bottom: "0px",
    boxShadow: "0 3px 14px 2px rgba(0,0,0,.12)",
    navBtn: {},
};
