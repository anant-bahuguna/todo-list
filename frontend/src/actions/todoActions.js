import { GET_TODOS, SET_CURRENT, SET_LOADING, TODOS_ERROR } from "./types";

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
            payload: err.response.data
        })
    }
};

// No async call needed
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
