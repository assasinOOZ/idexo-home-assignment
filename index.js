const ethers = require("ethers");
const testTokenAddress = "0xF3C50eA3E1a1b4DB55FB91a6A3Ef8E4Ca7ECb182";
const testTokenAbi = [
  {
    inputs: [],
    name: "developerName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const provider = new ethers.providers.JsonRpcProvider(
  "https://ropsten.infura.io/v3/d176e0c919ca4ba7bf6853f821e384dd"
);

const getDeveloperName = async () => {
  const testTokenContract = new ethers.Contract(
    testTokenAddress,
    testTokenAbi,
    provider
  );
  const developerName = await testTokenContract.developerName();
  return developerName;
};

getDeveloperName().then((name) => console.log("Developer Name:", name));
