async function deployContract() {
    const PokemonNFT = await ethers.getContractFactory("StarterPokemon")
    const exampleNFT = await PokemonNFT.deploy()
    await exampleNFT.deployed()
    const txHash = exampleNFT.deployTransaction.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress


    console.log("******************************************")
    console.log("StarterPokemon Contract Deployed Address\n")
    console.log(contractAddress)
    console.log("******************************************")
   }
   

deployContract()
 .then(() => process.exit(0))
 .catch((error) => {
   console.error(error);
   process.exit(1);
 });