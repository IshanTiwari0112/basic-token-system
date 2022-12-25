pragma solidity >=0.7.0;
// SPDX-License-Identifier: MIT

//contract should be able to create and issue tokens and transfer them between accounts

//safe math restores this intuition by checking the transaction for when an operation overflows.
contract safeMath{
    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
 
    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
}
contract Token is safeMath{
    address public minter;

    string public symbol;
    string public  name;

    uint public intialSupply;

    mapping (address => uint) public balances;

    //token definition
    constructor(){
        minter = msg.sender;
        symbol = "christmas";
        name = "christmas Coin";
        intialSupply = 100;
        balances[minter] = intialSupply;
    }

    //mint(create and issue) tokens to an account
    function mint(address receiver, uint amount) public{
        require(msg.sender == minter, "not the minter");
        balances[receiver] = safeAdd(balances[receiver], amount);
    }

    //transfer tokens between accounts
    function send(address receiver, uint amount) public{
        require(amount <= balances[msg.sender], "not enough funds");
        balances[msg.sender] = safeSub(balances[msg.sender],amount);
        balances[receiver]  = safeAdd(balances[receiver],amount);
    }

    //fallback function
    fallback () external payable {
        revert();
    }
}