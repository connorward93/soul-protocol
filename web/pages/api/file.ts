// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NFTStorage, File, Blob } from "nft.storage";
import mime from "mime";
import fs from "fs";
import path from "path";

type Data = {
  metadata: any;
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

  const file = new File([svg], "test.svg", { type: "image/svg+xml" });
  const metadata = await client.store({
    name: "Soul NFT",
    description: "Your on-chain true self",
    image: file,
  });

  res.status(200).json({ metadata });
}
