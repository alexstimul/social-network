import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"

const initialState = {
    posts: [
        {
            id: "1",
            text: "Hello",
            likesCount: 10
        },
        {
            id: "2",
            text: "Ken i M",
            likesCount: 1
        },
        {
            id: "3",
            text: "EMA PREKOL",
            likesCount: 9
        }
      ],
    newPostText: "",
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, text: state.newPostText, likesCount: 0 }],
                newPostText: ""
            };
    
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.user
            }
        default:
            return state;
    }
}

export const addNewPost = () => ({ type: ADD_POST })
export const newPostTextChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })

const setUserProfile = (user) => ({type: SET_USER_PROFILE, user})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}