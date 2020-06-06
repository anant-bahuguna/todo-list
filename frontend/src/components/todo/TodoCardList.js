import React, { useEffect } from "react";
import TodoCard from "./TodoCard";

const TodoCardList = ({ filtered, todos, loading }) => {
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


    if (!loading && todos.length === 0) {
        return (
            <h1 className="has-text-centered">
                Wow you have completed all your tasks
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
                                  key={todo.id}
                              >
                                  <TodoCard todo={todo} />
                              </div>
                          ))
                        : todos.map((todo) => (
                              <div
                                  className="column is-one-third"
                                  key={todo.id}
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

export default TodoCardList;

const S = {
    loading: {
        margin: "1.2rem auto",
    },
    card: {
        margin: "1.5rem auto",
    },
};
