import React, { useEffect } from "react";
import classes from "./welcome.module.scss";
import gsap from "gsap";
import Link from "next/link";

export default function Welcome() {
  useEffect(() => {
    const timeline = gsap.timeline();
    const els = document.querySelectorAll('[id^="block"]');
    els.forEach((el) => {
      timeline.to(el, { y: "-100%", opacity: 1 }, "+=1");
      timeline.to(el, { y: "-200%", opacity: 0 }, "+=1");
      timeline.to(el, { visibility: "hidden" });
    });

    timeline.to("#actions", { opacity: 1 }, "+=1");
  }, []);

  return (
    <div className={classes.container}>
      <div id="block1" className={classes.text}>
        Welcome
      </div>
      <div id="block2" className={classes.text}>
        Lorem ipsum dolor sit amet.{" "}
      </div>
      <div id="block3" className={classes.text}>
        Lorem ipsum dolor sit amet.{" "}
      </div>
      <div id="block4" className={classes.text}>
        Lorem ipsum dolor sit amet.{" "}
      </div>
      <div id="block5" className={classes.text}>
        Lorem ipsum dolor sit amet.{" "}
      </div>
      <div id="actions" className={classes.actions}>
        <Link href="/mint">
          <a className={classes.card}>
            <div className={classes.image}></div>
            <div className={classes.details}>
              <h5>Action 1</h5>
              <p> Lorem ipsum dolor sit amet. </p>
            </div>
          </a>
        </Link>
        <Link href="/mint">
          <a className={classes.card}>
            <div className={classes.image}></div>
            <div className={classes.details}>
              <h5>Action 2</h5>
              <p> Coming soon. </p>
            </div>
          </a>
        </Link>
        <Link href="/mint">
          <a className={classes.card}>
            <div className={classes.image}></div>
            <div className={classes.details}>
              <h5>Action 3</h5>
              <p> Coming soon. </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
