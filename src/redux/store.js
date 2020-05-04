import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", like: 20 },
        { id: 2, message: "It's my first post", like: 13 },
        { id: 3, message: "Ок", like: 9 },
      ],
      newPostText: "IT",
    },
    dialogsPage: {
      dialogData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Vova" },
        { id: 3, name: "Pasha" },
        { id: 4, name: "Vlad" },
        { id: 5, name: "Olga" },
      ],

      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are your lessons" },
        { id: 3, message: "Ok" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Dream" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log(" ");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
