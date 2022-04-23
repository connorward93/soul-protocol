const http = require("https");

const options = {
  method: "POST",
  hostname: "api-eu1.tatum.io",
  port: null,
  path: "/v3/nft/deploy",
  headers: {
    "content-type": "application/json",
    "x-testnet-type": "SOME_STRING_VALUE",
    "x-api-key": "REPLACE_KEY_VALUE",
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(
  JSON.stringify({
    chain: "MUMBAI",
    name: "Soul",
    symbol: "ERC_721",
    fromPrivateKey:
      "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2", //read from .env
    provenance: false,
    cashback: false,
    publicMint: true,
    nonce: 0,
    fee: { gasLimit: "40000", gasPrice: "0" },
  })
);
req.end();
