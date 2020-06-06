import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { filterTodos, clearFilter } from "../../actions/todoActions";
import todoReducer from "../../reducers/todoReducer";

const TodoFilter = ({ filtered, filterTodos, clearFilter }) => {
    const text = useRef("");

    useEffect(() => {
        if (filtered === null) {
            text.current.value = "";
        }
    });

    const onChange = (e) => {
        if (text.current.value !== "") {
            filterTodos(e.target.value);
        } else {
            clearFilter();
        }
    };
    return (
        <section>
            <div className="container">
                <div className="column is-one-third is-centered" style={S}>
                    <div className="field">
                        <p className="control has-icons-right">
                            <input
                                ref={text}
                                className="input is-medium is-info"
                                id="searchBar"
                                type="email"
                                placeholder="Search..."
                                onChange={onChange}
                            />
                            <span className="icon is-small is-right">
                                <i className="fas fa-search fa-flip-horizontal"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    filtered: state.todo.filtered,
});

export default connect(mapStateToProps, { filterTodos, clearFilter })(
    TodoFilter
);

const S = {
    margin: "1.2rem auto",
};
