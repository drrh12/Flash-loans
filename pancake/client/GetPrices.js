const ethers = require("ethers");

const {
  addressFactory,
  addressRouter,
  addressFrom,
  addressTo,
} = require("./AddressList");

const { erc20ABI, factoryABI, routerABI, pairABI } = require("./AbiList");

//standard provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

console.log(provider);
