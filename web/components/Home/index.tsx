import React, { useEffect } from "react";
import gsap from "gsap";
import classes from "./home.module.scss";

export default function Home() {
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline.call(
      () => {
        gsap
          .to("#stop1", {
            stopColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          })
          .duration(2);
        gsap
          .to("#stop2", {
            stopColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          })
          .duration(2);
        gsap
          .to("#stop3", {
            stopColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          })
          .duration(2);
      },
      [],
      "+=2.0"
    );
  }, []);

  return (
    <div className={classes.container}>
      <svg
        className={classes.circle}
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="150" r="150" fill="url(#paint0_linear_217_2)" />
        <defs>
          <linearGradient
            id="paint0_linear_217_2"
            x1="18"
            y1="86.5"
            x2="267"
            y2="258.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop id="stop1" stopColor="#FF00F5" />
            <stop id="stop2" offset="0.499884" stopColor="#0027F5" />
            <stop id="stop3" offset="1" stopColor="#6DFEFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
