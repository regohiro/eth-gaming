// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";

contract Marketplace {
  IERC1155 private item;
  mapping(uint256 => uint256) price;

  constructor(IERC1155 _item) {
    require(address(_item) != address(0));
    item = _item;
    price[1] = 1 * 10**14;
    price[2] = 2 * 10**14;
    price[3] = 3 * 10**14;
  }

  receive() external payable {
    revert();
  }

  function buyItem(uint256 _itemId) external payable {
    uint256 weiAmount = msg.value;
    require(weiAmount >= price[_itemId] && price[_itemId] != 0);

    item.safeTransferFrom(address(this), msg.sender, _itemId, 1, "");
  }

  function onERC1155Received(
    address,
    address,
    uint256,
    uint256,
    bytes calldata
  ) external pure returns (bytes4) {
    return this.onERC1155Received.selector;
  }
}
