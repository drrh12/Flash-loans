const ethers = require("ethers");

// The JSON RPC provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/d341f6b6b99a4c66be728d753b3e8534"
);

// Address of the Uniswap V3 pool
const poolAddress = "0x5aB53EE1d50eeF2C1DD3d5402789cd27bB52c1bB";

// Uniswap V3 pool ABI
const poolABI = [
  "function fee() external view returns (uint24)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
  // Add more function signatures here as needed
];

// Create a contract instance
const poolContract = new ethers.Contract(poolAddress, poolABI, provider);

// Usage
async function getPoolDetails() {
  const fee = await poolContract.fee();
  const token0 = await poolContract.token0();
  const token1 = await poolContract.token1();

  console.log({ fee: fee.toString(), token0, token1 });
}

getPoolDetails();
