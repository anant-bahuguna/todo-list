import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { setAlert } from "../../actions/alertActions";
import Alerts from '../layout/Alerts'

const Register = ({
    auth: { loading, isAuthenticated },
    register,
    setAlert,
    history,
}) => {
    const [loadingBtn, setLoadingBtn] = useState("");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    useEffect(() => {
        if (isAuthenticated) {
            console.log("authenticated");
            history.push("/home");
        }
    }, [history, isAuthenticated]);

    // const history = useHistory();

    const { name, email, password, password2 } = user;
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setAlert("Please enter all fields", "danger");
        } else if (password !== password2) {
            setAlert("Passwords do not match", "danger");
        } else {
            register({
                name,
                email,
                password,
            });
        }

        // history.push("/home");
    };

    const clearAll = () => {
        setUser({
            name: "",
            email: "",
            password: "",
            password2: "",
        });
    };
    return (
        <div className="columns is-centered" style={S}>
            <div className="column is-three-quarters">
                <Alerts />
                <div className="box">
                    <p className="title has-text-centered">
                        Account{" "}
                        <span style={{ color: `${S.brandColor}` }}>
                            Register
                        </span>
                    </p>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Name"
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                name="password2"
                                value={password2}
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                className={"button is-link " + loadingBtn}
                                onClick={onSubmit}
                                style={{ backgroundColor: `${S.brandColor}` }}
                            >
                                Register
                            </button>
                        </div>
                        <div className="control">
                            <button
                                className="button is-warning is-light"
                                onClick={clearAll}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <p>
                            Already registered ?{" "}
                            <Link to="/login">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { register, setAlert })(Register);

const S = {
    margin: "1.5rem auto",
    brandColor: "#F9A826",
};
