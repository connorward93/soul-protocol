const http = require("https");

const options = {
  method: "GET",
  hostname: "api-eu1.tatum.io",
  port: null,
  path: "/v3/nft/metadata/%7Bchain%7D/%7BcontractAddress%7D/%7Btoken%7D?account=0xc1b45bc27b9c61c3",
  headers: {
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

req.end();
