const ethers = require("ethers");

const {
  addressFactory,
  addressRouter,
  addressFrom,
  addressTo,
} = require("./AddressList");

const { erc20ABI, factoryABI, routerABI, pairABI } = require("./AbiList");

// standard provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

// connect to factory
const contractFacttory = new ethers.Contract(
  addressFactory,
  factoryABI,
  provider
);

// connect to router

const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

//console.log(contractFacttory);

// Call the blockchain
const getPrices = async (amountInHuman) => {
  // convert to blockchain form
  const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
  const decimals = await contractToken.decimals();
  const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();

  const amountsOut = await contractRouter.getAmountsOut(amountIn, [
    addressFrom,
    addressTo,
  ]);

  //convert amount out
  const contractTokenTwo = new ethers.Contract(addressTo, erc20ABI, provider);
  const decimalsTwo = await contractTokenTwo.decimals();
  // hex to int
  const amountOutHuman = ethers.utils.formatUnits(
    amountsOut[1].toString(),
    decimalsTwo
  );

  console.log(amountOutHuman);
};

const amountInHuman = "500";
getPrices("500");
