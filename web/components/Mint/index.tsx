import React, { useContext } from "react";
import classes from "./mint.module.scss";
import Button from "components/Button";
import AppContext from "context/AppContext";
import Camera from "./Camera";
import Generator from "./Generator";

export default function Mint() {
  const { state, dispatch } = useContext(AppContext);
  const { mintVariant, mintStatus } = state;

  const renderCanvas = () => {
    switch (mintVariant) {
      case "camera":
      default:
        return <Camera />;
      // default:
      //   return null;
    }
  };

  const renderIntroDetails = () => {
    switch (mintVariant) {
      case "camera":
      default:
        return "Enable your camera to generate your soul with your likeness.";
      // default:
      //   return null;
    }
  };

  const renderDetails = () => {
    switch (mintStatus) {
      case "generation":
        return "Gathering data. Relax.";
      case "initial":
      default:
        return renderIntroDetails();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.canvas}>
        <div className={classes.image}>
          {mintStatus?.includes("generation") ? <Generator /> : renderCanvas()}
        </div>
        <div className={classes.details}>
          <div>{renderDetails()}</div>
          <div>
            <Button variant="secondary" onClick={() => {}}>
              Mint
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
