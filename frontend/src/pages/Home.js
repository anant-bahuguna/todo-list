
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TodoCardList, TodoFilter } from "../components/todo";
import { SearchBar } from "../components/layout";
import { getTodos } from "../actions/todoActions";
import { loadUser } from "../actions/authActions";

const Home = ({ todo: { todos, loading, filtered }, getTodos, loadUser }) => {
    useEffect(() => {
        loadUser();
        //get todos
    }, []);
    return (
        <>
            <TodoFilter />
            <TodoCardList todos={todos} loading={loading} filtered={filtered}/>;
        </>
    );
};

const mapStateToProps = (state) => ({
    todo: state.todo,
});

export default connect(mapStateToProps, { getTodos, loadUser })(Home);

