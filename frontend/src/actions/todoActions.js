import axios from "axios";
import {
    ADD_TODO,
    GET_TODOS,
    UPDATE_TODO,
    DELETE_TODO,
    UPDATE_STATUS,
    CLEAR_TODOS,
    SET_CURRENT,
    CLEAR_CURRENT,
    SET_LOADING,
    TODOS_ERROR,
    FILTER_TODOS,
    CLEAR_FILTER,
} from "./types";

// Get todos
export const getTodos = () => async (dispatch) => {
    try {
        const res = await axios.get("/todo");
        console.log(
            "getting todos with token ",
            axios.defaults.headers.common["Authorization"]
        );
        console.log("get todos res data", res.data);

        dispatch({ type: GET_TODOS, payload: res.data });
    } catch (err) {
        dispatch({ type: TODOS_ERROR, payload: err });
    }
};

// ADD todo
export const addTodo = (todo) => async (dispatch) => {
    console.log("add action");
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios.post("/todo", todo, config);

        dispatch({ type: ADD_TODO, payload: res.data });
    } catch (err) {
        dispatch({ type: TODOS_ERROR, payload: err });
    }
};

// Delete todo

export const deleteTodo = (id) => async (dispatch) => {
    console.log("delete action");
    try {
        const res = await axios.delete(`/todo/${id}`);
        dispatch({ type: DELETE_TODO, payload: id });
    } catch (err) {
        dispatch({ type: TODOS_ERROR, payload: err });
    }
};

// Clear Todos
export const clearTodos = () => (dispatch) => {
    dispatch({ type: CLEAR_TODOS });
};

// Set Current todo
export const setCurrent = (todo) => {
    return { type: SET_CURRENT, payload: todo };
};

// Clear current todo

export const clearCurrent = () => {
    return { type: CLEAR_CURRENT };
};

// No async call needed
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};

// Update todo

export const updateTodo = (todo) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.patch(`/todo/${todo._id}`, todo, config);
        dispatch({ type: UPDATE_TODO, payload: res.data });
    } catch (err) {
        dispatch({ type: TODOS_ERROR, payload: err });
    }
};

// Update Status

export const updateStatus = (status, id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const obj = { status };
    try {
        const res = await axios.patch(`/todo/${id}`, obj, config);
        dispatch({ type: UPDATE_TODO, payload: res.data });
    } catch (err) {
        dispatch({ type: TODOS_ERROR, payload: err });
    }
};

// Filter todos

export const filterTodos = (text) => {
    return { type: FILTER_TODOS, payload: text };
};

// Clear filter

export const clearFilter = () => {
    return { type: CLEAR_FILTER };
};
