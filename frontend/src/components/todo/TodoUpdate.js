import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
    addTodo,
    setCurrent,
    clearCurrent,
    updateTodo,
} from "../../actions/todoActions";

const TodoUpdate = ({
    history,
    location,
    current,
    addTodo,
    clearCurrent,
    updateTodo,
}) => {
    useEffect(() => {
        if (location.updateProps !== undefined) {
            location.updateProps.todo.dueDate = location.updateProps.todo.dueDate.split('T')[0] 
            setTodo(location.updateProps.todo);
        } else {
            history.push('/home');
        }
    }, []);
    // useEffect(() => {
    //     if (current !== null) {
    //         setTodo(current);
    //     } else {
    //         setTodo({
    //             title: "",
    //             dueDate: "",
    //             description: "",
    //             label: "personal",
    //         });
    //     }
    // }, [current]);
    const [loadingBtn, setLoadingBtn] = useState("");

    const [todo, setTodo] = useState({
        title: "",
        dueDate: "",
        description: "",
        label: "personal",
    });

    const { title, dueDate, description, label } = todo;

    const onChange = (e) =>
        setTodo({ ...todo, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        setLoadingBtn("is-loading");
        e.preventDefault();
        // if (current === null) {
        //     addTodo(todo);
        // } else {
            updateTodo(todo);
        // }
        

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
                        <label className="label">Title</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="title"
                                value={title}
                                placeholder="Task Title"
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Due Date</label>
                        <div className="control">
                            <input
                                className="input"
                                type="date"
                                name="dueDate"
                                value={dueDate}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Label</label>
                        <div className="control">
                            <div className="select">
                                <select
                                    name="label"
                                    value={label}
                                    onChange={onChange}
                                >
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
                                placeholder="Description"
                                name="description"
                                value={description}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                className={"button is-link " + loadingBtn}
                                onClick={onSubmit}
                            >
                                Update Task
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

const mapStateToProps = (state) => ({
    current: state.todo.current,
});

export default connect(mapStateToProps, {
    addTodo,
    setCurrent,
    clearCurrent,
    updateTodo,
})(TodoUpdate);

const S = {
    margin: "1.5rem auto",
    btn: {
        backgroundColor: "#F9A826",
    },
};
