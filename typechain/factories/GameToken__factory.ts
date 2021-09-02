/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GameToken, GameTokenInterface } from "../GameToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001983380380620019838339818101604052810190620000379190620001a3565b818181600390805190602001906200005192919062000075565b5080600490805190602001906200006a92919062000075565b5050505050620003ac565b8280546200008390620002bd565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c620001368462000251565b62000228565b9050828152602081018484840111156200015b576200015a6200038c565b5b6200016884828562000287565b509392505050565b600082601f83011262000188576200018762000387565b5b81516200019a84826020860162000125565b91505092915050565b60008060408385031215620001bd57620001bc62000396565b5b600083015167ffffffffffffffff811115620001de57620001dd62000391565b5b620001ec8582860162000170565b925050602083015167ffffffffffffffff81111562000210576200020f62000391565b5b6200021e8582860162000170565b9150509250929050565b60006200023462000247565b9050620002428282620002f3565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026f576200026e62000358565b5b6200027a826200039b565b9050602081019050919050565b60005b83811015620002a75780820151818401526020810190506200028a565b83811115620002b7576000848401525b50505050565b60006002820490506001821680620002d657607f821691505b60208210811415620002ed57620002ec62000329565b5b50919050565b620002fe826200039b565b810181811067ffffffffffffffff8211171562000320576200031f62000358565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6115c780620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f19146101a357806370a08231146101d357806395d89b4114610203578063a457c2d714610221578063a9059cbb14610251578063dd62ed3e14610281576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c16102b1565b6040516100ce9190611019565b60405180910390f35b6100f160048036038101906100ec9190610e40565b610343565b6040516100fe9190610ffe565b60405180910390f35b61010f610361565b60405161011c919061113b565b60405180910390f35b61013f600480360381019061013a9190610ded565b61036b565b60405161014c9190610ffe565b60405180910390f35b61015d610463565b60405161016a9190611156565b60405180910390f35b61018d60048036038101906101889190610e40565b61046c565b60405161019a9190610ffe565b60405180910390f35b6101bd60048036038101906101b89190610e40565b610518565b6040516101ca9190610ffe565b60405180910390f35b6101ed60048036038101906101e89190610d80565b61052e565b6040516101fa919061113b565b60405180910390f35b61020b610576565b6040516102189190611019565b60405180910390f35b61023b60048036038101906102369190610e40565b610608565b6040516102489190610ffe565b60405180910390f35b61026b60048036038101906102669190610e40565b6106f3565b6040516102789190610ffe565b60405180910390f35b61029b60048036038101906102969190610dad565b610711565b6040516102a8919061113b565b60405180910390f35b6060600380546102c09061126b565b80601f01602080910402602001604051908101604052809291908181526020018280546102ec9061126b565b80156103395780601f1061030e57610100808354040283529160200191610339565b820191906000526020600020905b81548152906001019060200180831161031c57829003601f168201915b5050505050905090565b6000610357610350610798565b84846107a0565b6001905092915050565b6000600254905090565b600061037884848461096b565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006103c3610798565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610443576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043a9061109b565b60405180910390fd5b6104578561044f610798565b8584036107a0565b60019150509392505050565b60006012905090565b600061050e610479610798565b848460016000610487610798565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610509919061118d565b6107a0565b6001905092915050565b60006105248383610bec565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105859061126b565b80601f01602080910402602001604051908101604052809291908181526020018280546105b19061126b565b80156105fe5780601f106105d3576101008083540402835291602001916105fe565b820191906000526020600020905b8154815290600101906020018083116105e157829003601f168201915b5050505050905090565b60008060016000610617610798565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cb906110fb565b60405180910390fd5b6106e86106df610798565b858584036107a0565b600191505092915050565b6000610707610700610798565b848461096b565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610810576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610807906110db565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610880576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108779061105b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161095e919061113b565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d2906110bb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a429061103b565b60405180910390fd5b610a56838383610d4c565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610adc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad39061107b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b6f919061118d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bd3919061113b565b60405180910390a3610be6848484610d51565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c539061111b565b60405180910390fd5b610c6860008383610d4c565b8060026000828254610c7a919061118d565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ccf919061118d565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d34919061113b565b60405180910390a3610d4860008383610d51565b5050565b505050565b505050565b600081359050610d6581611563565b92915050565b600081359050610d7a8161157a565b92915050565b600060208284031215610d9657610d956112fb565b5b6000610da484828501610d56565b91505092915050565b60008060408385031215610dc457610dc36112fb565b5b6000610dd285828601610d56565b9250506020610de385828601610d56565b9150509250929050565b600080600060608486031215610e0657610e056112fb565b5b6000610e1486828701610d56565b9350506020610e2586828701610d56565b9250506040610e3686828701610d6b565b9150509250925092565b60008060408385031215610e5757610e566112fb565b5b6000610e6585828601610d56565b9250506020610e7685828601610d6b565b9150509250929050565b610e89816111f5565b82525050565b6000610e9a82611171565b610ea4818561117c565b9350610eb4818560208601611238565b610ebd81611300565b840191505092915050565b6000610ed560238361117c565b9150610ee082611311565b604082019050919050565b6000610ef860228361117c565b9150610f0382611360565b604082019050919050565b6000610f1b60268361117c565b9150610f26826113af565b604082019050919050565b6000610f3e60288361117c565b9150610f49826113fe565b604082019050919050565b6000610f6160258361117c565b9150610f6c8261144d565b604082019050919050565b6000610f8460248361117c565b9150610f8f8261149c565b604082019050919050565b6000610fa760258361117c565b9150610fb2826114eb565b604082019050919050565b6000610fca601f8361117c565b9150610fd58261153a565b602082019050919050565b610fe981611221565b82525050565b610ff88161122b565b82525050565b60006020820190506110136000830184610e80565b92915050565b600060208201905081810360008301526110338184610e8f565b905092915050565b6000602082019050818103600083015261105481610ec8565b9050919050565b6000602082019050818103600083015261107481610eeb565b9050919050565b6000602082019050818103600083015261109481610f0e565b9050919050565b600060208201905081810360008301526110b481610f31565b9050919050565b600060208201905081810360008301526110d481610f54565b9050919050565b600060208201905081810360008301526110f481610f77565b9050919050565b6000602082019050818103600083015261111481610f9a565b9050919050565b6000602082019050818103600083015261113481610fbd565b9050919050565b60006020820190506111506000830184610fe0565b92915050565b600060208201905061116b6000830184610fef565b92915050565b600081519050919050565b600082825260208201905092915050565b600061119882611221565b91506111a383611221565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156111d8576111d761129d565b5b828201905092915050565b60006111ee82611201565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561125657808201518184015260208101905061123b565b83811115611265576000848401525b50505050565b6000600282049050600182168061128357607f821691505b60208210811415611297576112966112cc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61156c816111e3565b811461157757600080fd5b50565b61158381611221565b811461158e57600080fd5b5056fea264697066735822122091e49222f4b25a101baa05892f1e42314a6f55f6912de574f7faef4d79ccbfa164736f6c63430008070033";

export class GameToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GameToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<GameToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): GameToken {
    return super.attach(address) as GameToken;
  }
  connect(signer: Signer): GameToken__factory {
    return super.connect(signer) as GameToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GameTokenInterface {
    return new utils.Interface(_abi) as GameTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GameToken {
    return new Contract(address, _abi, signerOrProvider) as GameToken;
  }
}