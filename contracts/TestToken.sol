
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    string public developerName;
    constructor(string memory _developerName) ERC20("TestToken", "TST") {
        _mint(msg.sender, 100*10**18);
        developerName = _developerName;
    }
}
