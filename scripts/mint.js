const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("KeywordsNFT");
  const nftContract = await nftContractFactory.attach(
    "0x3972D117851ABD856112523D7b784C3AC0a5Ded4" // deployed contract address
  );
   // Call the function.
  let txn = await nftContract.mintSenderNft("BAYC");
  // Wait for it to be mined.
  await txn.wait();
  console.log("Minted NFT #1");

  // Mint another NFT for fun.
  txn = await nftContract.mintReceiverNft("BAYC");
  // Wait for it to be mined.
  await txn.wait();
  console.log("Minted NFT #2");

  // Call the function.
  txn = await nftContract.mintSenderNft("Azuki");
  // Wait for it to be mined.
  await txn.wait();
  console.log("Minted a Sender NFT");
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
