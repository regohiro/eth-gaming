import { task } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/types";

import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";

import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });

const MNEMONIC = process.env.MNEMONIC || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const MORALIS_API_KEY = process.env.MORALIS_API_KEY || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.7",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
      },
      chainId: 31337,
    },
    rinkeby: {
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 4,
      url: "https://" + "speedy-nodes-nyc.moralis.io/" + MORALIS_API_KEY + "/eth/rinkeby" 
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    enabled: false,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  mocha: {
    timeout: 20000000
  }
};

export default config;
