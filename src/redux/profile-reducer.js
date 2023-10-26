const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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
    newPostText: ""
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

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const newPostTextChangeCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}