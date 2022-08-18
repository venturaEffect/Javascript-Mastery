
require("@nomiclabs/hardhat-waffle")
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    matic: {
      url: process.env.PROVIDER_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};