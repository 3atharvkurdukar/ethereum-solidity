const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let inbox;
let accounts;
const INITIAL_MSG = 'Hi there!';
const NEW_MSG = 'Bye bye!';

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_MSG] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys the contract', () => {
    assert.ok(inbox.options.address);
  });
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MSG);
  });
  it('should set the message', async () => {
    await inbox.methods.setMessage(NEW_MSG).send({ from: accounts[1] });
    const message = await inbox.methods.message().call();
    assert.equal(message, NEW_MSG);
  });
});
