import AppContext from "context/AppContext";
import AuthContext from "context/AuthContext--web3auth";
import React, { useContext, useState, useEffect } from "react";
import classes from "./mint.module.scss";

export default function Camera() {
  const authState = useContext(AuthContext);
  const { state, dispatch } = useContext(AppContext);
  const [started, setStarted] = useState<boolean>(false);

  const startCamera = () => {
    if (typeof window === "undefined" || !authState.accounts) return;
    const video = document.createElement("video");
    video.setAttribute("playsinline", ""); // Required to work in iOS 11 & up

    const constraints = {
      audio: false,
      video: { facingMode: "user", width: 100, height: 100 },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        // @ts-ignore
        window.localStream = stream;
        video.srcObject = stream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {
        let msg = "No camera available.";
        if (err.code == 1) msg = "User denied access to use camera.";
        console.log(msg);
        console.error(err);
      });

    video.addEventListener(
      "play",
      function () {
        // trigger business logic
      },
      false
    );

    const canvas = document.querySelector("canvas")!;
    canvas.width = 600;
    canvas.height = 600;
    const context = canvas.getContext("2d")!;
    // context.drawImage(video, 0, 0, canvas.width, canvas.height);
    video.addEventListener(
      "play",
      function () {
        context.drawImage(this, 0, 0, canvas.width, canvas.height);
      },
      false
    );

    function draw(
      video: HTMLVideoElement,
      canvas: HTMLCanvasElement,
      context: CanvasRenderingContext2D,
      frameRate: number
    ) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setTimeout(draw, 1 / frameRate, video, canvas, context, frameRate);
    }

    draw(video, canvas, context, 60);
    setStarted(true);
    dispatch({ type: "set-mint-status", payload: "input" });

    setTimeout(() => {
      dispatch({
        type: "set-mint-seed",
        payload: [
          context.getImageData(60, 60, 200, 100).data,
          new Date().getTime(),
          "52.3747762,4.8967865,18.76z",
        ],
      });

      // @ts-ignore
      window.localStream.getTracks().forEach((track) => {
        track.stop();
      });

      dispatch({ type: "set-mint-status", payload: "generation" });
    }, 10000);
  };

  return (
    <div>
      <div></div>
      <canvas id="canvas"></canvas>

      {started ? null : (
        <div className={classes.action} onClick={startCamera}>
          Load camera
        </div>
      )}
    </div>
  );
}
