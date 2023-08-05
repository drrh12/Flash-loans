const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/d341f6b6b99a4c66be728d753b3e8534"
);

const addressFactory = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

const abi = [
  "function getPool(address tokenA, address tokenB,uint24 fee) external view returns (address pool)",
];
const contractFactory = new ethers.Contract(addressFactory, abi, provider);

const adressWETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const addressAAVE = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";

const getPool = async () => {
  const addressPool = await contractFactory.getPool(
    adressWETH,
    addressAAVE,
    3000
  );
  console.log(addressPool);
};

getPool();
