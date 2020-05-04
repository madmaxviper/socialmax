import { createStore, combineReducers } from "redux";
import sidebarReducer from './sidebar-reducer';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})



let store = createStore(reducers);


export default store;
