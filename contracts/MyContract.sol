// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    uint256 public myNumber;

    constructor() {
        myNumber = 100;
    }

    function setNumber(uint256 _newNumber) public {
        myNumber = _newNumber;
    }
}
