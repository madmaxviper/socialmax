const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", like: 20 },
    { id: 2, message: "It's my first post", like: 13 },
    { id: 3, message: "Ок", like: 9 }
  ],
  newPostText: "post",
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost ],
        newPostText: "",
      };
    }

    case NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;
  }
};

export const addPostCreateAction = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const newPostTextCreateAction = (text) => ({
  type: NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
