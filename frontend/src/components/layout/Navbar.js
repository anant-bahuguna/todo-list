import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import navbarLogo from "../../assets/images/navbar-logo.svg";
import { logout } from "../../actions/authActions";

const Navbar = ({ auth: { isAuthenticated, user} ,logout}) => {
    const onLogout = () => {
        logout();
    };
    const authLinks = (
        <Fragment>
            <div className="navbar-start">
                <Link className="navbar-item" to="/home">
                    Home
                </Link>

                <NavLink to='/task' className="navbar-item">New Task</NavLink>

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
                        <a
                            className=""
                            style={{ color: `${S.brandColor}` }}
                            
                        >
                            <strong>Hi {user && user.name} </strong>
                        </a>
                        <a className="button is-light" onClick={onLogout}>
                            <i className="fas fa-sign-out-alt"></i>Log out
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
    const guestLinks = (
        <>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <Link to='/register'
                            className="button is-primary"
                            style={{ backgroundColor: `${S.brandColor}` }}
                        >
                            <strong>Sign up</strong>
                        </Link>
                        <Link to='/login' className="button is-light">Log in</Link>
                    </div>
                </div>
            </div>
        </>
    );
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
                {isAuthenticated ? authLinks : guestLinks}
                {/* <div className="navbar-start">
                    <Link className="navbar-item" to="/home">
                        Home
                    </Link>

                    <a className="navbar-item">Search</a>

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
                            <a
                                className="button is-primary"
                                style={{ backgroundColor: `${S.brandColor}` }}
                            >
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">Log in</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

const S = {
    navbar: {
        boxShadow: "0 3px 14px 2px rgba(0,0,0,.12)",
    },
    brandColor: "#F9A826",
};
