import React from "react";
import classes from "./mint.module.scss";

export default function Mint() {
  return (
    <div className={classes.container}>
      <div className={classes.image}>Image</div>
      <div className={classes.content}></div>
    </div>
  );
}
