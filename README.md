## Usage

### Pre Requisites

Before running any command, make sure to install dependencies:

```
$ yarn 
```

### Compile

Compile the smart contracts with Hardhat:

```
$ yarn compile
```

### Deploy contract to a live network + validate to etherscan

Note: requires mnemonic and Moralis API key

```
$ npx hardhat run scripts/rinkeby/token-deploy.ts --network rinkeby
```

### Test contract locally 

Note: requires Moralis API key

```
$ yarn test
```

### Rebuild contracts

Note: May need to give permission

```
$ ./rebuild.sh
```