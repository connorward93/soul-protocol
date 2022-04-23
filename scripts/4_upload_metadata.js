import { ipfsGet, ipfsGet } from "@tatumio/tatum";
/**
 * Gets data from the IPFS
 * @param id - IPFS CID of the file
 */
const ipfsId = await ipfsGet("QmXJJ6UF5WkF4WTJvsdhiA1etGwBLfpva7Vr9AudGMe3pj");

/**
 * Upload file to the IPFS storage.
 * @param file - data buffer of the file. Content Type: multipart/form-data
 * @returns ipfsHash - IPFS hash of the file
 */
const ipfsHash = await ipfsUpload(SVG, "fileName");

const metadata = {
  name: "Soul",
  tokenId: 2,
  desicription: "stuff",
  image: ipfsHash,
  attributes: [
    {
      R: r,
      G: g,
      B: b,
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

const nftHash = await ipfsUpload();
