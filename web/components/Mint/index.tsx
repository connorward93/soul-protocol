import React from "react";
import classes from "./mint.module.scss";

export default function Mint() {
  return (
    <div className={classes.container}>
      <div className={classes.image}>Canvas</div>
      <div className={classes.column}>
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
        </div>
        {/* <div className={classes.card}>
          <p> 0xCa21d4228cDCc68D4e23807E5e370C07577Dd152 ↗ №</p>
          <p>minted 56,741 </p>
          <p>price Free. </p>
          <p>Just pay gas.</p>
        </div> */}
      </div>
    </div>
  );
}
