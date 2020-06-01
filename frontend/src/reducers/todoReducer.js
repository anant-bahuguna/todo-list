import {
    GET_TODOS,
    SET_CURRENT,
    SET_LOADING,
    TODOS_ERROR,
} from "../actions/types";

const initState = {
    todos: null,
    current: null,
    loading: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_TODOS:
            console.log('todos', action.payload);
            return {
                ...state,
                todos: action.payload,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case TODOS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
