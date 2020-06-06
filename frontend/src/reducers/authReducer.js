import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from "../actions/types";


const initState = {
    isAuthenticated: null,
    token: localStorage.getItem('token'),
    loading: true,
    user: null,
    error: null
};



export default (state = initState, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        const [token] = action.payload.tokens.slice(-1)
        console.log('token', token.token) 
        localStorage.setItem('token',token.token)   
        return {
                ...state,
                token: token.token,
                user: action.payload,
                isAuthenticated: true,
                loading: false,
        } 
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            console.log('logging out')
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        default:
            return state;
    }
};
