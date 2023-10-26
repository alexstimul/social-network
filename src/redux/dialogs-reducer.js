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
        case ADD_MESSAGE: {
            const newMessage = {
                id: 5,
                message: state.newMessageText
            };

            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = ""
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.message;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const newMessageTextChangeCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        message: text
    }
}