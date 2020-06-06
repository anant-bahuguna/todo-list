import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// load user
export const loadUser = () => async dispatch => {
    console.log('loading user')
    if (localStorage.token) {
        console.log('setting global token header')
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get("/users/profile");
        console.log('user loaded ',res.data)

        dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
        dispatch({type: AUTH_ERROR})
    }
};

// register user

export const register = (formData) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        console.log("formData", formData);
        const res = await axios.post("/signUp", formData, config);

        dispatch({ type: REGISTER_SUCCESS, payload: res.data });

        loadUser();
    } catch (err) {
        dispatch({ type: REGISTER_FAIL, payload: err });
    }
};

// login user

export const login= (formData) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        console.log("formData", formData);
        const res = await axios.post("/users/login", formData, config);

        dispatch({ type: LOGIN_SUCCESS, payload: res.data });

        loadUser();
    } catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err });
    }
}; 

// logout

export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
}

// clear errors
