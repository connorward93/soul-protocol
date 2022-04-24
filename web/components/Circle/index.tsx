import React, { useContext, useEffect } from "react";
import gsap from "gsap";
import classes from "./circle.module.scss";
import Button from "components/Button";
import AppContext from "context/AppContext";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type CircleProps = {
  status?: string;
  colours?: string[] | null;
  baseColours?: string[] | null;
};

export const GeneratorCircle = ({ baseColours }: CircleProps) => {
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);
  const { status, colours } = state;

  useEffect(() => {
    if (!colours) return;
    const timeline = gsap.timeline();
    timeline.call(
      () => {
        dispatch({ type: "set-mint-status", payload: "mintable" });
        gsap
          .to("#stop4", {
            stopColor: colours[0],
          })
          .duration(2);
        gsap
          .to("#stop5", {
            stopColor: colours[1],
          })
          .duration(2);
        gsap
          .to("#stop6", {
            stopColor: colours[2],
          })
          .duration(2);
      },
      [],
      "+=4.0"
    );
  }, [colours]);

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
            <stop
              id="stop4"
              stopColor={baseColours?.length ? baseColours[0] : "#FF00F5"}
            />
            <stop
              id="stop5"
              offset="0.499884"
              stopColor={baseColours?.length ? baseColours[1] : "#0027F5"}
            />
            <stop
              id="stop6"
              offset="1"
              stopColor={baseColours?.length ? baseColours[2] : "#6DFEFE"}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default function Circle() {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const { status } = state;

  useEffect(() => {
    if (status.includes("logged-in")) return;
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

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className={classes.container}>
      <svg
        id="circle-random"
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
            <stop id="stop1" stopColor={"#FF00F5"} />
            <stop id="stop2" offset="0.499884" stopColor={"#0027F5"} />
            <stop id="stop3" offset="1" stopColor={"#6DFEFE"} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
