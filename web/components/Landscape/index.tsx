import React from "react";
import classes from "./landscape.module.scss";

export default function Landscape() {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.card}>Your profile</div>
      </div>
      <div className={classes.details}>Your channels</div>
      <div className={classes.grid}>
        <div className={classes.card}>Red</div>
        <div className={classes.card}>Blue</div>
        <div className={classes.card}>Green</div>
        <div className={classes.card}>Yellow</div>
        <div className={classes.card}>Purple</div>
        <div className={classes.card}>Orange</div>
      </div>
    </div>
  );
}
