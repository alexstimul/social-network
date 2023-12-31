import {usersAPI} from "../api/api";

const SET_USERS = "SET-USERS"
const ADD_FRIEND = "ADD-FRIEND"
const REMOVE_FRIEND = "REMOVE-FRIEND"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SET_LOADING = "SET-LOADING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, isFriend: true }
                    }
                    return {...user}
                })
            };
        case REMOVE_FRIEND:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, isFriend: false }
                    }
                    return { ...user }
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const followUser = (userId) => ({ type: ADD_FRIEND, userId })
export const unFollowUser = (userId) => ({ type: REMOVE_FRIEND, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading })
export const toggleFollowingProgress = (isLoading, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, userId })

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setLoading(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        console.log(data);
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount > 50 ? 50 : data.totalCount));
        dispatch(setLoading(false));
    })
}

export const acceptUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followUser(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    })
}

export const unAcceptUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unFollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unFollowUser(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    })
}