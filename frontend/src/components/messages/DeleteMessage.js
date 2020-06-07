import React from "react";
import { connect } from "react-redux";

export const DeleteMessage = (props) => {
    const onCancel = () => {
        props.history.push("/home");
    };
    return (
        <div className="columns is-centered is-vcentered" style={S}>
            <div className="column is-one-third">
                <div className="box">
                    <div className="field">
                        <label className="label">
                            Are you sure delete this task?
                        </label>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-danger">
                                Delete Task
                            </button>
                        </div>
                        <div className="control">
                            <button
                                className="button is-link is-light"
                                onClick={onCancel}
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

export default connect()(DeleteMessage);

const S = {
    margin: "1.5rem auto",
    btn: {
        backgroundColor: "#F9A826",
    },
};
