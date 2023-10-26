import { combineReducers, legacy_createStore as createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import {usersReducer} from "./users-reducer";

const reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store
