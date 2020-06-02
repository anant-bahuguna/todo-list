import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoCard from "./TodoCard";
import PropTypes from "prop-types";
import { getTodos } from "../../actions/todoActions";
import { SET_LOADING } from "../../actions/types";

const TodoCardList = ({ todo: { todos, loading }, getTodos }) => {
    // useEffect(() => {
    //     getTodos();
    // }, []);

    if (loading || todos === null) {
        return (
            <section>
                <div className="container">
                    <div className="column is-one-third">
                        <progress
                            className="progress is-small is-info "
                            max="100"
                        >
                            60%
                        </progress>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="container">
                <div className="columns is-multiline" style={S.card}>
                    {todos.map((todo) => (
                        <div className="column is-one-third" key={todo.id}>
                            <TodoCard todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

TodoCardList.propTypes = {
    todo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    todo: state.todo,
});

export default connect(mapStateToProps, { getTodos })(TodoCardList);

const S = {
    loading: {
        margin: "1.2rem auto",
    },
    card: {
        margin: "1.5rem auto",
    },
};
