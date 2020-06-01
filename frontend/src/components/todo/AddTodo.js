import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";

const AddTodo = ({ isActive, setModalActive }) => {
    const [close, setClose] = useState(false)
    
    const closeModal = () => {
        setClose(true)
        setModalActive(false)
    }
    if (!isActive) {
        return null;
    }
    return (
        <div className={"modal " + (close ? '' : 'is-active')}>
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
                <TodoForm />
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={closeModal}
            ></button>
        </div>
    );
};

export default AddTodo;
