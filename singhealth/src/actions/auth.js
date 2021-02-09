import axios from 'axios';
import { ROOT_URL } from "../utils";
import {
    UNAUTH_USER,
    AUTH_ERROR,
    AUTH_USER,
    NETWORK_ERROR,
    CHANGE_PASSWORD,
    RESET_PASSWORD,
    PASSWORD_SENT,
    SIGNUP_USER,
    SIGNUP_ERROR,
    GET_USER_DETAILS,
    GET_USER_DETAILS_ERROR,
    UPDATE_USER_DETAILS,
    UPDATE_USER_DETAILS_ERROR
} from "./types";

const defaultToken = localStorage.getItem('token');
if (defaultToken) {
    axios.defaults.headers['Authorization'] = 'Bearer ' + defaultToken;
}

export function signinUser(email, password, history, dispatch) {
    axios.get(`${ROOT_URL}/users/current`,
        {
            auth: {
                username: email,
                password: password
            }
        })
        .then(loginResponse => {
            const { token, is_admin } = loginResponse.data;
            localStorage.setItem('token', token);
            localStorage.setItem('admin', is_admin);

            axios.defaults.headers['Authorization'] = `Bearer ${token}`;
            dispatch({
                type: AUTH_USER
            });
            history.push('/home')
        })
        .catch(() => {
            dispatch ({
                type: AUTH_ERROR
            })
        })
}

export function signupUser(email, password, fullName, dispatch) {
    axios.post(`${ROOT_URL}/users`, null,
        {
            params: {
                "email": email,
                "password": password,
                "full_name": fullName
            }
        })
        .then(loginResponse => {
            dispatch({
                type: SIGNUP_USER
            })
        })
        .catch((loginError) => {
            console.log(loginError.message)
            dispatch ({
                type: SIGNUP_ERROR
            })
        })
}

export function getUserDetails(dispatch) {
    axios.get(`${ROOT_URL}/users/current`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: GET_USER_DETAILS,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error.message)
            dispatch({
                type: GET_USER_DETAILS_ERROR
            })
        })
}
