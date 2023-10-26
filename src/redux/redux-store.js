import { combineReducers, legacy_createStore as createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

const reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer
})

export const store = createStore(reducers)