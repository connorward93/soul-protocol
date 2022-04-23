const http = require("https");

const options = {
  method: "POST",
  hostname: "api-eu1.tatum.io",
  port: null,
  path: "/v3/nft/mint",
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
    to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", //read address
    url: "https://my_token_data.com", //metadata for the token
  })
);
req.end();
