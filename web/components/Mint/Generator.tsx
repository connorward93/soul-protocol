import React, { useContext, useEffect, useState } from "react";
import AppContext from "context/AppContext";
import seedrandom from "seedrandom";
import classes from "./mint.module.scss";
import { GeneratorCircle } from "components/Circle";

export default function Generator() {
  const { state, dispatch } = useContext(AppContext);
  const { mintSeed } = state;
  const [colours, setColours] = useState<string[] | null>(null);

  useEffect(() => {
    if (!mintSeed) return;
    const rng1 = seedrandom(mintSeed[0][100]);
    const rng2 = seedrandom(mintSeed[1]);
    const rng3 = seedrandom(mintSeed[2]);

    function decimalToHexString(number: number) {
      if (number < 0) {
        number = 0xffffffff + number + 1;
      }
      return number.toString(16).toUpperCase();
    }

    const arr = [
      `#${decimalToHexString(rng1()).replace("0.", "").substring(6, 0)}`,
      `#${decimalToHexString(rng2()).replace("0.", "").substring(6, 0)}`,
      `#${decimalToHexString(rng3()).replace("0.", "").substring(6, 0)}`,
    ];

    setTimeout(() => {
      dispatch({ type: "set-colours", payload: arr });
      setColours([...arr]);
    }, 10000);
  }, [mintSeed]);

  return (
    <div className={classes.generator}>
      <GeneratorCircle baseColours={["#888888", "#bbbbbb", "#eeeeee"]} />
    </div>
  );
}
