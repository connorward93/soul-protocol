import React, { useContext, useEffect } from "react";
import AppContext from "context/AppContext";
import classes from "./welcome.module.scss";
import gsap from "gsap";
import Link from "next/link";

export default function Welcome() {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    const timeline = gsap.timeline();
    const els = document.querySelectorAll('[id^="block"]');
    els.forEach((el) => {
      timeline.to(el, { y: "-100%", opacity: 1 }, "+=1");
      timeline.to(el, { y: "-200%", opacity: 0 }, "+=0.5");
      timeline.to(el, { visibility: "hidden" });
    });
    timeline.to("#actions", { opacity: 1 }, "+=1");
  }, []);

  return (
    <div className={classes.container}>
      <div id="block1" className={classes.text}>
        Welcome
      </div>
      <div id="actions" className={classes.actions}>
        <Link href="/mint">
          <a className={classes.card}>
            <div className={classes.image}></div>
            <div className={classes.details}>
              <h5>Mint with hardware</h5>
              <p> Generate your soul with data from the physical world. </p>
            </div>
          </a>
        </Link>
        <Link href="/mint">
          <a
            className={classes.card}
            onClick={() => {
              dispatch({ type: "set-mint-variant", payload: "questions" });
            }}
          >
            <div className={classes.image}></div>
            <div className={classes.details}>
              <h5>Quick onboarding</h5>
              <p> Generate your soul via a short questionnaire.</p>
            </div>
          </a>
        </Link>
        <Link href="/mint">
          <a className={classes.card}>
            <div className={classes.image}></div>
            <div className={classes.details}>
              <h5>Mint with webcam</h5>
              <p>Generate your soul with your likeness.</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
