import React from "react";

export const TodoForm = () => {
    return (
        <div className='columns' style={S}>
            <div className="column" >
                <div className="box">
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Task Title"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Due Date</label>
                        <div className="control">
                            <input className="input" type="date" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Label</label>
                        <div className="control">
                            <div className="select">
                                <select>
                                    <option>Select Label</option>
                                    <option>Personal</option>
                                    <option>Work</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                placeholder="Textarea"
                            />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Add Task</button>
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
        backgroundColor: '#F9A826'
    }
};
