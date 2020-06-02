import React, { useState } from "react";

export const DeleteMessage = () => {
    return (
        <div className="columns" style={S}>
            <div className="column">
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
                            <button className="button is-link is-light">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const S = {
    margin: "1.5rem auto",
    btn: {
        backgroundColor: "#F9A826",
    },
};
