import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, clearCurrent, updateTodo } from "../../actions/todoActions";
import {loadUser} from '../../actions/authActions'

const TodoForm = ({ current, addTodo, clearCurrent, updateTodo, loadUser }) => {
    useEffect(() => {
        loadUser()
    }, [])
    // useEffect(() => {
    //     if (current !== null) {
    //         setTodo(current);
    //     } else {
    //         setTodo({
    //             name: "",
    //             email: "",
    //             phone: "",
    //             type: "personal",
    //         });
    //     }
    // }, [current]);
    const history = useHistory();
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
        if (current === null) {
            addTodo(todo);
        } else {
            updateTodo(todo);
        }
        history.push('/home')

        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };
    return (
        <div className="columns is-centered" style={S}>
            <div className="column is-one-third">
                <div className="box">
                    <div className="field">
                        <label className="label">Task</label>
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
                                Add Task
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

export default connect(mapStateToProps, { addTodo, clearCurrent, updateTodo, loadUser })(
    TodoForm
);

const S = {
    margin: "1.5rem auto",
    btn: {
        backgroundColor: "#F9A826",
    },
};
