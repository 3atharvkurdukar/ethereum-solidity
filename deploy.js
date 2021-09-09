const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');

// The mnemonic and infura Rinkeby network API are used to create the provider
const provider = new HDWalletProvider(
  'window grit mosquito adjust mistake stamp rotate critic turkey seminar fortune fashion diesel steak hawk opinion during onion pill answer rebel infant audit limit',
  'https://rinkeby.infura.io/v3/7b7701900fdb44568a03d67c73dccb8a'
);
const web3 = new Web3(provider);
