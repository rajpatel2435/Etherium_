import { JsonRpcProvider, ethers} from 'ethers';
import dotenv from 'dotenv';
dotenv.config();


const infuraURL = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
const provider = new JsonRpcProvider(infuraURL);


// const provider = new ethers.providers.JsonRpcProvider(infuraURL);

// Use the provider to make requests to the Ethereum blockchain
provider.getBlockNumber().then((blockNumber) => {
  console.log(`Current block number: ${blockNumber}`);
});

// Look up the current block number
await provider.getBlockNumber()
// 16987688

// Get the balance of an account (by address or ENS name, if supported by network)
balance = await provider.getBalance("ethers.eth")
// { BigNumber: "182334002436162568" }

// Often you need to format the output to something more user-friendly,
// such as in ether (instead of wei)
ethers.utils.formatEther(balance)
// '0.182334002436162568'

// If a user enters a string in an input field, you may need
// to convert it from ether (as a string) to wei (as a BigNumber)
ethers.utils.parseEther("1.0")
// { BigNumber: "1000000000000000000" }\\\
















// in my words
const provider2= new ethers.provider.JsonRpcProvider(infuraURL
);

const myAddress= await provider2.resolveName("ethers.eth");

const otherAddress= await provider2.resolveName("other.eth");

console.log("myAddress", await provider2.lookupAddress(myAddress));

console.log("otherAddress", await provider2.lookupAddress(otherAddress));

console.log("getbalacne", ethers.utils.formatEther(await provider2.getBalance(myAddress)))
