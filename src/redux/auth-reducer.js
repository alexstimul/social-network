import {authAPI} from "../api/api";

const AUTH = "AUTH"
const LOGIN = "LOGIN"

const initialState = {
    isLoading: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case LOGIN:
            return {
                ...state,
                userId: action.userId,
                isAuth: true
            }
    
        default:
            return state;
    }
}

export const isAuth = (userId, email, login) => ({ type: AUTH, data: {userId, email, login} })
export const loginAction = (userId) => ({ type: LOGIN, data: {userId} })

export const auth = () => (dispatch) => {
    authAPI.auth().then(response => {
        console.log(response.data)
        if (response.data.resultCode === 0) {
            const {login, id, email} = response.data.data
            dispatch(isAuth(id, email, login))
        }
    })
}

export const login = (login, password, isRememberMe) => (dispatch) => {
    authAPI.login(login, password, isRememberMe).then(response => {
        console.log(response.data)
        if (response.data.resultCode === 0) {
            const {userId} = response.data.data
            dispatch(loginAction(userId))
        }
    })
}