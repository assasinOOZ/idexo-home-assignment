async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const testTokenFactory = await ethers.getContractFactory("TestToken");
  const testContract = await testTokenFactory.deploy("Andrew");

  console.log("==========Result===========");
  console.log("Deployed Address", testContract.address);
  console.log("Developer Name", await testContract.developerName());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
