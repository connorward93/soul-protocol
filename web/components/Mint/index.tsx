import React from "react";
import classes from "./mint.module.scss";
import Button from "components/Button";

export default function Mint() {
  return (
    <div className={classes.container}>
      <div className={classes.canvas}>
        <div className={classes.image}>Canvas</div>
        <div className={classes.details}>
          <div>Details</div>
          <div>
            <Button variant="secondary" onClick={() => {}}>
              Mint
            </Button>
          </div>
        </div>
      </div>
      {/* <div className={classes.column}>
        <div className={classes.card}>
          <p>
            zorb ↗ is a simple, open-source identity system for the
            decentralized Internet. It is maintained by ZORA, the decentralized
            marketplace protocol.
          </p>
          <p>
            To ring in 2022, we invite you to mint a zorb NFT of your own. Each
            NFT imbues the properties of its wallet holder, and when sent to
            someone else, will transform. Minting is free for 42 hours on New
            Year’s Day and cements your status as an early supporter of Zora.
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
}
