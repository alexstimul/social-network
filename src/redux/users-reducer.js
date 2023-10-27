const SET_USERS = "SET-USERS"
const ADD_FRIEND = "ADD-FRIEND"
const REMOVE_FRIEND = "REMOVE-FRIEND"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1
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
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: ADD_FRIEND, userId })
export const unFollowAC = (userId) => ({ type: REMOVE_FRIEND, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })