import React from "react";
import s from "./myposts.module.css";
import Post from "./post/post";


const Myposts = (props) => {
  let postElement = props.posts.map((el) => {
    return <Post message={el.message} like={el.like} />;
  });

  let newPostElement = props.newPostText;

  let onAddPost = () => {
    props.addPost();
  };
  
  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  }

  return (
    <div>
      <div className={s.myPost}>
        <h3>my post</h3>
      </div>
      <div className={s.newPost}>new post</div>

      <div>
        <textarea
          onChange={onPostChange}
          value={newPostElement}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>

      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default Myposts;
