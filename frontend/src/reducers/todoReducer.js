import {
    GET_TODOS,
    SET_CURRENT,
    CLEAR_CURRENT,
    SET_LOADING,
    TODOS_ERROR,
    FILTER_TODOS,
    CLEAR_FILTER,
    UPDATE_TODO,
    ADD_TODO,
    DELETE_TODO,
} from "../actions/types";

const initState = {
    todos: [
    ],
    current: null,
    loading: false,
    filtered: null,
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_TODOS:
            console.log("todos", action.payload);
            return {
                ...state,
                todos: action.payload,
                loading: false,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            console.log("delete", action);
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
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
                    return todo.title.match(regex) || todo.description.match(regex) || todo.label.match(regex) ;
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
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
            };
        default:
            return state;
    }
};
