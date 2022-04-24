import React, { useContext } from "react";
import classes from "./mint.module.scss";
import Button from "components/Button";
import AppContext from "context/AppContext";
import Camera from "./Camera";
import Generator from "./Generator";
import Questions from "./Questions";

export default function Mint() {
  const { state, dispatch } = useContext(AppContext);
  const { mintVariant, mintStatus } = state;

  const renderCanvas = () => {
    switch (mintVariant) {
      case "questions":
        return <Questions />;
      case "camera":
      default:
        return <Camera />;
    }
  };

  const renderIntroDetails = () => {
    switch (mintVariant) {
      case "camera":
      default:
        return "Enable your camera to generate your soul with your likeness.";
    }
  };

  const renderDetails = () => {
    switch (mintStatus) {
      case "mintable":
        return "You can now mint your soul.";
      case "generation":
        return "Generating your soul.";
      case "initial":
      default:
        return renderIntroDetails();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.canvas}>
        <div className={classes.image}>
          {mintStatus?.includes("generation") ||
          mintStatus?.includes("mintable") ? (
            <Generator />
          ) : (
            renderCanvas()
          )}
        </div>
        <div className={classes.details}>
          <div>{renderDetails()}</div>
          <div>
            <Button
              variant="secondary"
              onClick={() => {}}
              disabled={!mintStatus?.includes("mintable")}
            >
              Mint
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
