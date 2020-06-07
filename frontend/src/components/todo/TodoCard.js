import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    deleteTodo,
    setCurrent,
    clearCurrent,
} from "../../actions/todoActions";

import { TodoDelete } from "./TodoDelete";
import TodoCardDropdown from "./TodoCardDropdown";

const TodoCard = ({
    todo,
    current,
    filtered,
    deleteTodo,
    setCurrent,
    clearCurrent,
}) => {
    const [activeState, setActiveState] = useState(false);

    const { title, _id, dueDate, description, label, status } = todo;

    // const onDelete = () => {
    //     console.log("click delete");
    //     deleteTodo(id);
    //     clearCurrent();
    // };

    // const toggleState = () => {
    //     setActiveState(!activeState);
    // };
    // const deactivate = () => {
    //     setActiveState(false);
    // };
    return (
        <div className="card">
            <header className="card-header has-background-warning">
                <p className="card-header-title">{title}</p>
                <div className="card-header-icon" aria-label="more options">
                    {/* <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true" />
                            </span> */}

                    <TodoCardDropdown todo={todo} />
                </div>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>{description}</p>
                    {label !== "Select Label" && (
                        <span className="tag is-link is-normal is-light">
                            {label.charAt(0).toUpperCase() + label.slice(1)}
                        </span>
                    )}{" "}
                    <span className="tag is-danger is-normal is-light">
                        <time dateTime="2016-1-1">{dueDate.split('T')[0]}</time>
                    </span>{" "}
                </div>
            </div>
            <Link
                to={{
                    pathname: "/task/status",
                    statusProps: {
                        status: status,
                        id: _id
                    },
                }}
            >
                <footer className="card-footer">
                    <TodoStatus status={status}> {status} </TodoStatus>
                    {/* <span className="tag is-success is-normal is-light card-footer-item">
                    Completed
                </span> */}
                </footer>
            </Link>
        </div>
    );
};

const mapStateToProps = (state) => ({
    current: state.todo.current,
    filtered: state.todo.filtered,
});

export default connect(mapStateToProps, {
    deleteTodo,
    setCurrent,
    clearCurrent,
})(TodoCard);

const TodoStatus = ({status, children}) => {
    switch (status) {
        case "In Progress": //In progress
            return (
                <span className="tag is-info is-normal is-light card-footer-item">
                   📝 {children}
                </span>
            );
        case "Completed": //Completed
            return (
                <span className="tag is-success is-normal is-light card-footer-item">
                    ✔️ {children}
                </span>
            );
        case "Not Started": //Not started
        default:
            return (
                <span className="tag is-danger is-normal is-light card-footer-item">
                    ❌ {children || "Not Started"}
                </span>
            );
    }
};
