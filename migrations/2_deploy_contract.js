const StringStorage = artifacts.require("StringStorage");

module.exports = function(deployer) {
  deployer.deploy(StringStorage);
};
