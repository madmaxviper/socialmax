import React from "react";
import s from "./about.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./profile-status/profile-status-withHooks";

const About = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.picture}>
        <img src="https://wallbox.ru/resize/2560x1600/wallpapers/main2/201728/149988068859665cf02dc229.88495470.jpg" />
      </div>
      <div className={s.about_item}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
  );
};

export default About;
