// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;

contract Upgrade {
    address public owner; //contract wallet address
    uint256 public lastCompletedUpgrade;

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function setCompleted(uint256 completed) public restricted {
        lastCompletedMigration = completed;
    }

    function upgrade(address newAddress) public restricted {
        Migrations upgraded = Migrations(newAddress);
        upgraded.setCompleted(lastCompletedMigration);
    }
}
