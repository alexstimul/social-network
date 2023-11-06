import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"

const reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer, 
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
