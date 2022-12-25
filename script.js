import { useState, useEffect } from 'react';

const [web3, setWeb3] = useState(null)
const [address, setAddress] = useState(null)
const [wc, setWC] = useState(null)

const connectWalletHandler = async () => {
    /*check for external wallet installed ex metamask*/
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
        try {//for better handling of error messages
            //requesting wallet connection
            await window.ethereum.request({ method: "eth_requestAccounts" })
            //setting web3 instance
            web3 = new Web3(window.ethereum)
            setWeb3(web3)
            //getting list of accounts
            const account = await web3.eth.getAccounts()
            setAddress(account[0])

            //creating local contract copy
            const wc = allowanceWalletcontract(web3)
            setWC(wc)



        } catch (err) {
            Seterror(err.message)
        }
    } else {
        //meta mask not installed
        console.log("Please install metamask")
    }
}

// Set Account
web3.eth.defaultAccount = web3.eth.accounts[0];

// Set Contract Abi
var contractAbi = [[
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
]]; // Add Your Contract ABI here!!!

// Set Contract Address
var contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Add Your Contract address here!!!

// Set the Contract
var contract = web3.eth.contract(contractAbi).at(contractAddress);