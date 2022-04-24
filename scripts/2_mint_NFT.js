import { Currency, mintNFTWithUri, ipfsUpload } from "@tatumio/tatum";

//import img SVG

/**
 * Upload file to the IPFS storage.
 * @param file - data buffer of the file. Content Type: multipart/form-data
 * @returns ipfsHash - IPFS hash of the file
 */
const imgHash = await ipfsUpload(SVG, "Soul Image");

const metadata = {
  name: "Soul",
  desicription:
    'Your Soul NFT represents your most authentic "true self" on chain. An interoperable "you" that bridges pysical and vitrual world. A build block for a better web. Connect yourself severeign Soul to the World, and watch it evolves along side you.',
  image: imgHash.ipfshash,
  attributes: [
    {
      R: r, //hex
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

const nftHash = await ipfsUpload(metadata, "tokenMetadata");

const transactionHash = await mintNFTWithUri(false, {
  to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
  url: nftHash,
  chain: Currency.MUMBAI,
});
