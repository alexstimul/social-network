import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

export const store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
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
    },
    getState () {
        return this._state;
    },
    renderEntireTree () {
        console.log("render");
    },
    subscribe (observer) {
        this.renderEntireTree = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this.renderEntireTree();
    }
}