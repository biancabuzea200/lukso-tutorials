/*In this tutorial, we will generate an EOA that we will alter use to create a Universal UniversalProfile.
*/

import Web3 from "web3";

const web3 = new Web3();

const myEOA = web3.eth.accounts.create();
console.log(myEOA);

console.log("Add funds to:", myEOA.address);
console.log("Testnet faucet: https://faucet.testnet.lukso.network");

console.log("Add the private key to the .env file.");
console.log(
  `Check your founds: https://explorer.execution.testnet.lukso.network/address/${myEOA.address}/internal-transactions`
);