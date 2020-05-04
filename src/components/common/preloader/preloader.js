import React from "react";
import s from "../preloader/preloader.module.css";
import preloader from "../../../images/preloader.svg";

let Preloader = (props) => {
  return (
    <div className={s.preloader}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
