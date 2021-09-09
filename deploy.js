const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// The mnemonic and infura Rinkeby network API are used to create the provider
const provider = new HDWalletProvider(
  'window grit mosquito adjust mistake stamp rotate critic turkey seminar fortune fashion diesel steak hawk opinion during onion pill answer rebel infant audit limit',
  'https://rinkeby.infura.io/v3/7b7701900fdb44568a03d67c73dccb8a'
);
const web3 = new Web3(provider);

const deploy = async () => {
  // Get a list of all accounts
  const accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  console.log('Attempting to deploy from account', accounts[0]);
  const inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello There!'] })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

  console.log('Contract deployed to', inbox.options.address);
};

deploy();
