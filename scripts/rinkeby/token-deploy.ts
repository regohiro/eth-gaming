import { ethers } from "hardhat";
import { verify, setDefaultSigner, deployer, deployToLiveNetwork } from '../../utils';
 
async function main() {
  deployToLiveNetwork();

  //Set contract signer (owner)
  const signers = await ethers.getSigners();
  const owner = signers[0];
  setDefaultSigner(owner);

  //Deploy Token
  await deployer("GameToken", "GameToken", "GT");
}

//Excute deploy
main()
  .then(verify)
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });