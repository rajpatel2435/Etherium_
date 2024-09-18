import * as ethers from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';
const infuraURL = 'https://mainnet.infura.io/v3/f17562e63e444f47892cc54bc0c9d1be';
const provider = new JsonRpcProvider(infuraURL);


// const provider = new ethers.providers.JsonRpcProvider(infuraURL);

// Use the provider to make requests to the Ethereum blockchain
provider.getBlockNumber().then((blockNumber) => {
  console.log(`Current block number: ${blockNumber}`);
});