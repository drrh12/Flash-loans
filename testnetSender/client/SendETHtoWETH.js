const { ethers } = require("ethers");

//testnet provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/56UUW5bGJaQ-8VHNU92tdrhM7Szi2pay" //testnet provider
);

// create signer
const myAddress = "0xC68De3d02799258D0604c5CDf8333AEf8D144dae";
const privateKey =
  "a7924f44386ff1ada08d4f5769f133ab7eecf85a7cc270fc3053f874f3739d2b";
const walletSigner = new ethers.Wallet(privateKey, provider);

const exchangeETH = async () => {
  const gasPrice = await provider.getGasPrice();
  const nonce = 0; // web3.eth.getTransactionCount(myAddress)
  const value = "0.05";
  const txBuild = {
    from: myAddress,
    to: "0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa", //Sepolia test network
    value: ethers.utils.parseEther(value),
    nonce: nonce,
    gasLimit: 10000,
    gasPrice: gasPrice,
  };
  //send the transaction
  console.log(txBuild);
};

exchangeETH();
