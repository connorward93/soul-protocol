import React from "react";
import classes from "./pdp.module.css";

export default function PDP() {
  return (
    <div>
      <div>
        Left
        <div>Image</div>
      </div>
      <div>
        Right
        <button disabled>Pay with fiat</button>
        <button>Pay with crypto</button>
      </div>
    </div>
  );
}
