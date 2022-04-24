const Migrations = artifacts.require("Migrations");
const SoulNFT = artifacts.require("SoulNFT");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);

  const instance = await deployer.deploy(SoulNFT);
};
