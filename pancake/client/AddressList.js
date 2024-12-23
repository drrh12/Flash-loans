// https://docs.pancakeswap.finance/developers/smart-contracts/pancakeswap-exchange/v2-contracts/factory-v2 - /router-v2
// enables the contract's pair
const addressFactory = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"; // pancakeswap factory contract
const addressRouter = "0x10ED43C718714eb63d5aA57B78B54704E256024E"; // pancakeswap router contract
const addressFrom = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; // BUSD contract
const addressFromEth = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"; //ETH contract
const addressTo = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; // WBNB contract

module.exports = {
  addressFactory,
  addressRouter,
  addressFrom,
  addressTo,
};
