import React from "react";
import style from "./Preloader.module.scss";

const Preloader = () => {
  return <div className={style["lds-hourglass"]}></div>;
};

export default Preloader;
