const SET_USERS = "SET-USERS"
const ADD_FRIEND = "ADD-FRIEND"
const REMOVE_FRIEND = "REMOVE-FRIEND"

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            debugger
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, isFriend: true}
                    }
                })
            }
        case REMOVE_FRIEND:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, isFriend: false}
                    }
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: ADD_FRIEND, userId })
export const unFollowAC = (userId) => ({ type: REMOVE_FRIEND, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })