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