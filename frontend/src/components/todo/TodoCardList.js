import React, { useEffect } from "react";
import TodoCard from "./TodoCard";
import { connect } from "react-redux";
import { getTodos } from "../../actions/todoActions";
import { Spinner } from "../layout";

const TodoCardList = ({ todo: { todos, loading, filtered }, getTodos }) => {
    useEffect(() => {
        getTodos();
    }, []);

    if (loading || todos === null) {
        return <Spinner />;
    }

    if (todos !== null && todos.length === 0 && !loading) {
        return (
            <h1 className="has-text-centered">
                Please add a task
            </h1>
        );
    }
    return (
        <section>
            <div className="container">
                <div className="columns is-multiline" style={S.card}>
                    {filtered !== null
                        ? filtered.map((todo) => (
                              <div
                                  className="column is-one-third"
                                  key={todo._id}
                              >
                                  <TodoCard todo={todo} />
                              </div>
                          ))
                        : todos.map((todo) => (
                              <div
                                  className="column is-one-third"
                                  key={todo._id}
                              >
                                  <TodoCard todo={todo} />
                              </div>
                          ))}
                </div>
            </div>
        </section>
    );
};

// TodoCardList.propTypes = {
//     todo: PropTypes.object.isRequired,
// };

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
