//connecting metamask button
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
    getAccount();
});

async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    showAccount.innerHTML = account;
    // var tokenContract = require(tokenContract)
}

// var Contract = require('../contracts/token.sol');

// // set provider for all later instances to use
// Contract.setProvider('ws://localhost:7545');


// Set Account
// web3.eth.defaultAccount = web3.eth.accounts[0];

// Set Contract Abi
import { ethers } from "../js/ethers-5.1.esm.min.js";

// Set Contract Address
var contractAddress = '0x88f2bdaee02e5119f6f97f8cbc705827cf6754da'; // Add Your Contract address here!!!

const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "send",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balances",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "intialSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minter",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "safeAdd",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "c",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "safeSub",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "c",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];


// const tokenContract = web3 => {
//     new web3.eth.Contract(
//         abi,
//         "0x88f2bDAeE02e5119F6F97F8cbC705827Cf6754DA")
//         console.log("done")
// }

// var provider = new ethers.providers.InfuraProvider("homestead","57abb63e082349f78bdd39797e82ab50");
// var factory = await ethers.getCOntactFactory()
const provider = new ethers.providers.Web3Provider(window.ethereum);

var contract =  new ethers.Contract( contractAddress , abi , provider);

const c = await contract.deploy(contractAddress);

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();

//const walletcontract = new web3.eth.Contract(abi, "0xEcE7f354b0d946Ce02A398C44289C5b89be99d46")

// export default tokenContract;

// Set the Contract
//var contract = web3.eth.contract(contractAbi).at(contractAddress);

// var Contract = require('web3-eth-contract');

// // set provider for all later instances to use
// Contract.setProvider('ws://localhost:7545');


//jquery for all buttons 
$('form[role="mint"]').on('submit', function (event) {
    event.preventDefault();
    alert("sending");
    new ethers.Contract( contractAddress , abi ,signer).mint($('address').val(), $('amount').val());
})
$('form[role="send"]').on('submit', function (event) {
    event.preventDefault();
    alert("sending23123 ");
    new ethers.Contract( contractAddress , abi ,signer).send($('address').val(), $('amount').val());
})
$('form[role="balance"]').on('submit', function (event) {
    event.preventDefault();
    alert("sendingasdasdda");
    new ethers.Contract( contractAddress , abi ,signer).getBalances($('address').val());
})
