import { ethers } from "hardhat";
import { GameItem } from "../../typechain/GameItem";
import { Marketplace } from "../../typechain/Marketplace";
import { verify, setDefaultSigner, deployer, deployToLiveNetwork } from '../../utils';
 
async function main() {
  deployToLiveNetwork();

  //Set contract signer (owner)
  const signers = await ethers.getSigners();
  const owner = signers[0];
  setDefaultSigner(owner);

  //Deploy GameItem
  const item = await deployer("GameItem") as GameItem;

  //Deploy Marketplace
  const markeplace = await deployer("Marketplace", item.address) as Marketplace;

  //Create game items
  await item.mint(markeplace.address, 1, 30, "0x");
  await item.mint(markeplace.address, 2, 20, "0x");
  await item.mint(markeplace.address, 3, 10, "0x");
}

//Excute deploy
main()
  .then(verify)
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });