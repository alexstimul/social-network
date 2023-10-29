const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const initialState = {
    dialogs: [
        {
            id: "1",
            name: "Dima"
        },
        {
            id: "2",
            name: "Andrey"
        },
        {
            id: "3",
            name: "Alex"
        }
    ],
    messages: [
        {
            id: "1",
            message: "Привет"
        },
        {
            id: "2",
            message: "Как дела?"
        },
        {
            id: "3",
            message: "Что нового?"
        }
    ],
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, { id: 5,  message: state.newMessageText  }]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.message,
            };
        default:
            return state;
    }
}

export const sendMessage = () => ({ type: ADD_MESSAGE })
export const updateNewMessageBody = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, message: text })