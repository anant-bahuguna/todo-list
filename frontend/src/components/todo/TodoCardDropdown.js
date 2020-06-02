import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import {
    deleteTodo,
    setCurrent,
    clearCurrent,
} from "../../actions/todoActions";

import Modal from "../layout/Modal";
import { DeleteMessage } from "../messages/DeleteMessage";

const TodoCardDropdown = ({ todo }) => {
    const { title, id, body } = todo;

    const [activeState, setActiveState] = useState(false);
    const [onDelete, setOnDelete] = useState(false);

    const [modalActive, setModalActive] = useState(false);
    useEffect(() => {
        if (modalActive) {
            document.documentElement.classList.add("is-clipped");
        } else {
            document.documentElement.classList.remove("is-clipped");
        }
    });

    const toggleState = () => {
        setActiveState(!activeState);
    };
    const deactivate = () => {
        setActiveState(false);
    };

    const handleDelete = () => {
        setOnDelete(true);
        setModalActive(true)
        deactivate();
    };

    // if (!onDelete) {
    return (
        <>
            {modalActive && (
                <Modal setModalActive={setModalActive}>
                    {onDelete && <DeleteMessage />}
                </Modal>
            )}
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
                            <i
                                className="fas fa-angle-down"
                                aria-hidden="true"
                            />
                        </span>
                    </button>
                </div>
                <div
                    className="dropdown-menu"
                    id="dropdown-menu"
                    role="menu"
                    
                >
                    <div className="dropdown-content">
                        <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => setCurrent(todo)}
                        >
                            <span className="panel-icon">
                                <i
                                    className="fas fa-pencil-alt"
                                    aria-hidden="true"
                                />
                            </span>
                            Edit Todo
                        </a>
                        <a
                            href="#"
                            className="dropdown-item"
                            onClick={handleDelete}
                        >
                            <span className="panel-icon">
                                <i
                                    className="fas fa-trash-alt"
                                    aria-hidden="true"
                                />
                            </span>
                            Delete Todo
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
    // } else if (onDelete) {
    //     return (
    //         <Modal onClick={toggleState}>
    //             <DeleteMessage />
    //         </Modal>
    //     );
    // }
};

export default TodoCardDropdown;
