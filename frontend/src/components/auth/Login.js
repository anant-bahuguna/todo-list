import React, { useState, useEffect } from "react";
import {useHistory, Link} from 'react-router-dom'
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

const Login = ({ auth: {loading, isAuthenticated}, login, history }) => {
    const [loadingBtn, setLoadingBtn] = useState("");
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if(isAuthenticated) {
            console.log('login authenticated')
            history.push('/home')
        }
    },[history, isAuthenticated])

    // const history = useHistory();

    const { email, password } = user;
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        // check validation
        e.preventDefault();
        console.log(loading)
        if (loading) {
            setLoadingBtn("is-loading");
        }
        if (validate()) {
            login({
                email,
                password,
            });
        } else {
            console.log("validation failed");
            setLoadingBtn("");
        }

        // history.push("/home");
    };

    const validate = () => {
        if (email && password) return true;

        return false;
    };

    const clearAll = () => {
        setUser({
            email: "",
            password: "",
        });
    };
    return (
        <div className="columns is-centered" style={S}>
            <div className="column is-one-third">
                <div className="box">
                <p className="title has-text-centered">
                        Account <span style={{color: `${S.brandColor}`}}>Login</span>
                    </p>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
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
                            />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                className={"button is-link " + loadingBtn}
                                onClick={onSubmit}
                                style={{backgroundColor: `${S.brandColor}`}}
                            >
                                Log In
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
                        <p>Not registered ?  <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);

const S = {
    margin: "1.5rem auto",
    brandColor: "#F9A826",
};