import {
    GET_TODOS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_STATUS,
    SET_LOADING,
    TODOS_ERROR,
    FILTER_TODOS,
    CLEAR_FILTER,
    UPDATE_TODO,
    ADD_TODO,
    DELETE_TODO,
    CLEAR_TODOS,
} from "../actions/types";

const initState = {
    todos: null,
    current: null,
    loading: true,
    filtered: null,
    error: null,
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                loading: false,
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo._id !== action.payload
                ),
                loading: false,
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo._id === action.payload._id ? action.payload : todo
                ),
                loading: false,
            };
        case CLEAR_TODOS:
            return {
                ...state,
                todos: null,
                filtered: null,
                error: null,
                current: null,
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            };
        case FILTER_TODOS:
            return {
                ...state,
                filtered: state.todos.filter((todo) => {
                    const regex = new RegExp(`${action.payload}`, "gi");
                    return (
                        todo.title.match(regex) ||
                        todo.description.match(regex) ||
                        todo.label.match(regex) ||
                        todo.status.match(regex)
                    );
                }),
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null,
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
