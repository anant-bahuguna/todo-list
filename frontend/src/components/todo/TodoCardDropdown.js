import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const TodoCardDropdown = ({ todo }) => {
    const { title, id, body } = todo;

    const [activeState, setActiveState] = useState(false);
    // const [onDelete, setOnDelete] = useState(false);

    // const [modalActive, setModalActive] = useState(false);
    // useEffect(() => {
    //     if (modalActive) {
    //         document.documentElement.classList.add("is-clipped");
    //     } else {
    //         document.documentElement.classList.remove("is-clipped");
    //     }
    // });

    const toggleState = () => {
        setActiveState(!activeState);
    };
    const deactivate = () => {
        setActiveState(false);
    };

    return (
        <div
            className={"dropdown is-right " + (activeState && "is-active")}
            tabIndex="0"
        >
            <div className="dropdown-trigger">
                <button
                    className="button is-small"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    onClick={toggleState}
                    // onBlur={deactivate}
                >
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <Link
                        to={{
                            pathname: "/task/edit",
                            updateProps: {
                                todo: todo,
                            },
                        }}
                        href="#"
                        className="dropdown-item"
                    >
                        <span className="panel-icon">
                            <i
                                className="fas fa-pencil-alt"
                                aria-hidden="true"
                            />
                        </span>
                        Edit Task
                    </Link>
                    <Link
                        to={{
                            pathname: "/delete",
                            deleteProps: {
                                id: todo._id,
                            },
                        }}
                        href="#"
                        className="dropdown-item"
                    >
                        <span className="panel-icon">
                            <i
                                className="fas fa-trash-alt"
                                aria-hidden="true"
                            />
                        </span>
                        Delete Task
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TodoCardDropdown;
