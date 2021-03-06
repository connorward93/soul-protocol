import React, { useContext, useEffect, useState } from "react";
import classes from "./mint.module.scss";
import Button from "components/Button";
import AppContext from "context/AppContext";
import Camera from "./Camera";
import Generator from "./Generator";
import Questions from "./Questions";
import axios from "axios";
import Spinner from "components/Spinner";
import { ethers, Signer, BigNumber } from "ethers";

export default function Mint() {
  const { state, dispatch } = useContext(AppContext);
  const { colours, mintVariant, mintStatus } = state;
  const [loading, setLoading] = useState(false);

  const mintNFT = async () => {
    setLoading(true);

    // Generate SVG and store in IPFS.
    const data = JSON.stringify({
      data: {
        colours: [colours?.[0], colours?.[1], colours?.[2]],
      },
    });

    // @ts-ignore
    const req = axios({
      method: "post",
      url: "/api/file",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }).then(async function (res) {
      setLoading(false);
      return res;
    });

    const tokenURI = (await req).data.metadata.url;

    // Set up your Ethereum transaction
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    const contract = new ethers.Contract(
      "0x4E8E048Cc9482716084AC6c0611d76C4e4F27110",
      [
        "constructor(string symbol, string name)",
        "function mint(string memory)",
      ],
      signer
    );

    const signerContract = contract.connect(signer);
    signerContract.mint(tokenURI);

    console.log(signerContract);
    // signerContract.on(
    //   filter,
    //   (from: string, to: string, tokenId: BigNumber) => {
    //     console.log("success", tokenId);
    //     // if (from === ethers.constants.AddressZero && to === account) {
    //     //   hasSetMintId = true;
    //     //   // setMintId(tokenId.toNumber().toString());
    //     //   // openModalByName("success");
    //     // }
    //   }
    // );
  };

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

  const mint = () => {
    const contract = new ethers.Contract(
      "0x4E8E048Cc9482716084AC6c0611d76C4e4F27110",
      ["function mint()"]
    );
    console.log("contract", contract);
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
              onClick={mintNFT}
              // disabled={!mintStatus?.includes("mintable")}
            >
              <>{loading ? <Spinner /> : "Mint"}</>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
