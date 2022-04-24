// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NFTStorage, File, Blob } from "nft.storage";
import { Currency, mintNFTWithUri, ipfsUpload } from "@tatumio/tatum";
import buffer from "buffer"

type Data = {
transactionHash: any
};

const NFT_STORAGE_KEY = process.env.NFT_STORAGE!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @ts-ignore
  const { colours } = req.body.data;

  const client = new NFTStorage({ token: NFT_STORAGE_KEY });

  const svg = `<svg
      id="circle-random"
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
          <stop id="stop1" stop-color="${colours[0]}" />
          <stop id="stop2" offset="0.499884" stop-color="${colours[1]}" />
          <stop id="stop3" offset="1" stop-color="${colours[2]}" />
        </linearGradient>
      </defs>
      </svg>`;

  const blob = new Blob([svg]);
  const array = await blob.arrayBuffer();
  const upload = Buffer.from(array);
  const imgHash = await ipfsUpload(upload, "Soul SVG");

  const singleMetadata = {
    image: imgHash.ipfsHash,
    attributes: [
      {
        R: colours[0], //hex
        G: colours[1],
        B: colours[2],
      },
      {
        display_type: "boost_percentage",
        trait_type: "Active",
        value: 10, //pull from oracle
      },
      {
        display_type: "boost_percentage",
        trait_type: "Passive",
        value: 10,
      },
      {
        display_type: "boost_percentage",
        trait_type: "Postive",
        value: 10,
      },
      {
        display_type: "boost_percentage",
        trait_type: "Negative",
        value: 10,
      },
      {
        display_type: "date",
        trait_type: "collection date",
        value: 1546360800,
      },
    ],
  };

  // @ts-ignore
  const singleHash = await ipfsUpload(Buffer.from(JSON.stringify(singleMetadata)), "singleMetadata");

  const transactionHash = await mintNFTWithUri(false, {
    to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    url: singleHash.ipfsHash,
    chain: Currency.MATIC,
  });

  console.log(transactionHash)

  res.status(200).json({ transactionHash });
}
