import React, { useState, useEffect } from "react";
import { updateStatus } from "../../actions/todoActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const UpdateStatus = ({ location, updateStatus }) => {
    const history = useHistory();
    useEffect(() => {
        if (location.statusProps !== undefined) {
            setStatus(location.statusProps.status);
        } else {
            history.push("/home");
        }
    }, []);
    const [loadingBtn, setLoadingBtn] = useState("");

    const [status, setStatus] = useState("Not Started");

    const onChange = (e) => {
        setStatus(e.target.value);
    };

    const onSubmit = (e) => {
        setLoadingBtn("is-loading");
        e.preventDefault();
        updateStatus(status, location.statusProps.id);

        clearAll();
    };

    const clearAll = () => {
        history.push("/home");
    };
    return (
        <div className="columns is-centered" style={S}>
            <div className="column is-one-third">
                <div className="box">
                    <div className="field">
                        <label className="label">Current Status</label>
                        <div className="control">
                            <div className="select">
                                <select
                                    name="label"
                                    value={status}
                                    onChange={onChange}
                                >
                                    <option>Not Started</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                className={"button is-link " + loadingBtn}
                                onClick={onSubmit}
                            >
                                Update Status
                            </button>
                        </div>
                        <div className="control">
                            <button
                                className="button is-link is-light"
                                onClick={clearAll}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { updateStatus })(UpdateStatus);

const S = {
    margin: "1.5rem auto",
};
