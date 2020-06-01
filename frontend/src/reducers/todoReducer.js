
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
        {
            id: 1,
            title: 'Complete backend',
            body: 'afknk knaksf kandk knad kad kad jka',
            status: 1,
            dueDate: '3 June'
        },
        {
            id: 2,
            title: 'Complete backend',
            body: 'afknk knaksf kandk knad kad kad jka',
            status: 1,
            dueDate: '3 June'
        },
        {
            id: 3,
            title: 'Complete backend',
            body: 'afknk knaksf kandk knad kad kad jka',
            status: 1,
            dueDate: '3 June'
        },
        {
            id: 4,
            title: 'Complete backend',
            body: 'afknk knaksf kandk knad kad kad jka',
            status: 1,
            dueDate: '3 June'
        },
        {
            id: 5,
            title: 'Complete backend',
            body: 'afknk knaksf kandk knad kad kad jka',
            status: 1,
            dueDate: '3 June'
        }
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
                    return todo.title.match(regex) || todo.body.match(regex);
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
