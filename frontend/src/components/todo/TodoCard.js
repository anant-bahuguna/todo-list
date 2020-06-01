import React, { useState } from "react";
import { connect } from "react-redux";
import {
    deleteTodo,
    setCurrent,
    clearCurrent,
} from "../../actions/todoActions";

const TodoCard = ({
    todo,
    current,
    filtered,
    deleteTodo,
    setCurrent,
    clearCurrent,
}) => {
    const [activeState, setActiveState] = useState(false);

    const { title, id, body } = todo;

    const onDelete = () => {
        deleteTodo(id);
        clearCurrent();
    };

    const toggleState = () => {
        setActiveState(!activeState);
    };
    const deactivate = () => {
        setActiveState(false);
    };
    return (
        <div className="card">
            <header className="card-header has-background-warning">
                <p className="card-header-title">{title}</p>
                <div className="card-header-icon" aria-label="more options">
                    {/* <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true" />
                            </span> */}
                    <div
                        className={
                            "dropdown is-right " + (activeState && "is-active")
                        }
                        tabIndex="0"
                    >
                        <div className="dropdown-trigger">
                            <button
                                className="button is-small"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                onClick={toggleState}
                                onBlur={deactivate}
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
                                <a href="#" className="dropdown-item">
                                    <span className="panel-icon">
                                        <i
                                            className="fas fa-pencil-alt"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    Edit Todo
                                </a>
                                <a href="#" className="dropdown-item">
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
                </div>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>{body}</p>
                    <span className="tag is-link is-normal is-light">
                        Personal
                    </span>{" "}
                    <span className="tag is-danger is-normal is-light">
                        <time dateTime="2016-1-1">1 June</time>
                    </span>{" "}
                    <span className="tag is-success is-normal is-light">
                        Completed
                    </span>
                </div>
            </div>
            {/* <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                    Save
                    </a>
                    <a href="#" className="card-footer-item">
                    Edit
                    </a>
                    <a href="#" className="card-footer-item">
                    Delete
                    </a>
                </footer> */}
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

{
    /* <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64"> */
}
{
    /* <img
                                src="https://bulma.io/images/placeholders/128x128.png"
                                alt="Image"
                            /> */
}
{
    /* <i className="far fa-2x fa-check-square"></i>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>John Smith</strong>{" "}
                                <small>@johnsmith</small> <small>31 May</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aenean efficitur sit amet massa
                                fringilla egestas. Nullam condimentum luctus
                                turpis.
                            </p>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item" aria-label="reply">
                                    <span className="icon is-small">
                                        <i
                                            className="fas fa-reply"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </a>
                                <a className="level-item" aria-label="retweet">
                                    <span className="icon is-small">
                                        <i
                                            className="fas fa-pencil-alt"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </a>
                                <a className="level-item" aria-label="like">
                                    <span className="icon is-small">
                                        <i
                                            className="fas fa-star"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div> */
}
