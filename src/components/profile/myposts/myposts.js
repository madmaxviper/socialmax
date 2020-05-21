import React from "react";
import s from "./myposts.module.css";
import Post from "./post/post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from './../../common/forms-controls/forms-controls';

const Myposts = React.memo( (props) => {
  let postsElement = [...props.posts]
  .map( p => <Post message={p.message} like={p.like} />);
  


  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <div className={s.myPost}>
        <h3>my post</h3>
      </div>
      <div className={s.newPost}>new post</div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
})

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component={Textarea} name='newPostText' placeholder='Post message' validate={[required, maxLength10 ]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};


const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default Myposts;
