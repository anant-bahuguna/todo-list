import { v4 as uuidv4 } from "uuid";

import {
    ADD_TODO,
    GET_TODOS,
    UPDATE_TODO,
    DELETE_TODO,
    SET_CURRENT,
    CLEAR_CURRENT,
    SET_LOADING,
    TODOS_ERROR,
    FILTER_TODOS,
    CLEAR_FILTER,
} from "./types";

// Async call needed so uses thunk
// export const getTodos = () => {
//     return async (dispatch, getState) => {
//         setLoading();
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data = await res.json()

//         dispatch({
//             type: GET_TODOS,
//             payload: data
//         })
//     }
// }

// Get todos from server
export const getTodos = () => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();

        dispatch({
            type: GET_TODOS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: TODOS_ERROR,
            payload: err,
        });
    }
};

// ADD todo
export const addTodo = (todo) => {
    todo.id = uuidv4();
    return { type: ADD_TODO, payload: todo };
};

// Delete todo

export const deleteTodo = (id) => {
    return { type: DELETE_TODO, payload: id };
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

export const updateTodo = (todo) => {
    return { type: UPDATE_TODO, payload: todo };
};

// Filter todos

export const filterTodos = (text) => {
    return { type: FILTER_TODOS, payload: text };
};

// Clear filter

export const clearFilter = () => {
    return { type: CLEAR_FILTER };
};
