import {authAPI} from "../api/api";

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
        case LOGIN:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
    
        default:
            return state;
    }
}

export const login = (userId, email, login) => ({ type: LOGIN, data: {userId, email, login} })

export const auth = () => (dispatch) => {
    authAPI.auth().then(response => {
        console.log(response.data)
        if (response.data.resultCode === 0) {
            const {login, id, email} = response.data.data
            dispatch(login(id, email, login))
        }
    })
}