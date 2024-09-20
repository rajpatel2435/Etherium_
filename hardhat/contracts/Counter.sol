// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter{
    uint public count = 0;
    address public owner; 

    constructor(uint256 _initialCount){
        count=_initialCount;
        owner= msg.sender;
    }

    modifier onlyBoss(){
        require(msg.sender ==owner, " you are not owner");
        _; // like middleware in solidity
        // it tellls soldiity to execut the rest of the code
    }

    function get() public view returns(uint){
        return count;
    }

    function increment() public {
        count += 1;
    }
    function decrement() public onlyBoss {
        count -=1;
    }
}