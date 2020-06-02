import React, { useEffect, useState } from "react";

// const Modal = ({ isActive, setModalActive, children }) => {
//     const [close, setClose] = useState(false)
    
//     const closeModal = () => {
//         setClose(true)
//         setModalActive(false)
//     }
//     if (!isActive) {
//         return null;
//     }
//     return (
//         <div className={"modal " + (close ? '' : 'is-active')}>
//             <div className="modal-background" onClick={closeModal}></div>
//             <div className="modal-content">
//                 {children}
//             </div>
//             <button
//                 className="modal-close is-large"
//                 aria-label="close"
//                 onClick={closeModal}
//             ></button>
//         </div>
//     );
// };

const Modal = ({ children, setModalActive }) => {
    const [close, setClose] = useState(false)
    
    const closeModal = () => {
        setClose(true)
        setModalActive(false)
    }
    
    if (close) {
        return null;
    }
    return (
        <div className={"modal " + (close ? '' : 'is-active')}>
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
                {children}
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={closeModal}
            ></button>
        </div>
    );
};

export default Modal;
