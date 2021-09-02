// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GameToken is ERC20 {
  constructor(
    string memory _name,
    string memory _symbol
  ) ERC20(_name, _symbol) {

  }

  function mint(address _to, uint256 _value) external returns(bool){
    _mint(_to, _value);
    return true;
  }
}
