import React from "react";
import s from "./profile.module.css";
import About from "./about/about";
import MyPostsContainer from "./myposts/myposts-container";



const Profile = (props) => {

  return (
    <div className={s.content}>
      <About  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

