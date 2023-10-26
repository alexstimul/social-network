const SET_USERS = "SET-USERS"
const ADD_FRIEND = "ADD-FRIEND"
const REMOVE_FRIEND = "REMOVE-FRIEND"

const initialState = {
    users: [
        {id: 1, fullName: "Test1", photoUser: "", status: "I am cool 1", location: { city: "Moscow", country: "Russia"}, isFriend: false},
        {id: 2, fullName: "Test2", photoUser: "", status: "I am cool 2", location: { city: "Orel", country: "Russia"}, isFriend: false},
        {id: 3, fullName: "Test3", photoUser: "", status: "I am cool 3", location: { city: "Saratov", country: "Russia"}, isFriend: false},
        {id: 4, fullName: "Test4", photoUser: "", status: "I am cool 4", location: { city: "Piter", country: "Russia"}, isFriend: false},
        {id: 5, fullName: "Test5", photoUser: "", status: "I am cool 5", location: { city: "Orel", country: "Russia"}, isFriend: false}
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.state) {
        case ADD_FRIEND:
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