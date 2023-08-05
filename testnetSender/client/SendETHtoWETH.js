const { ethers } = require("ethers");

//testnet provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/56UUW5bGJaQ-8VHNU92tdrhM7Szi2pay"
);

// create signer
const myAddress = "0xC68De3d02799258D0604c5CDf8333AEf8D144dae";
const privateKey =
  "a7924f44386ff1ada08d4f5769f133ab7eecf85a7cc270fc3053f874f3739d2b";
const walletSigner = new ethers.Wallet(privateKey, provider);

console.log(walletSigner);
