import {
  addPostCreateAction
} from "../../../redux/profile-reducer";
import Myposts from "./myposts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostCreateAction(newPostText));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostsContainer;
