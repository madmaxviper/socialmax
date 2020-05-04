import React from "react";

import s from "./post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200?webp=false" />
      <span>{props.message}</span>
      <div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
