import { parse } from 'csv-parse'
const CONTRACT_ADDRESS = "0x000000000000000000000000000000000000" // Contract address of deploy.mjs
import fs from 'fs'
const METADATA_URLS_PATH = 'assets/metadata_urls.csv'

// Process CSV file
var parser = parse({columns: true}, async function (err, records) {
   console.log(records.length)
   for (let index = 0; index < records.length; index++) {
      var record = records[index]

      await mintNFT(CONTRACT_ADDRESS, record['IPFS_URL'])


      console.log("===========> ",`${record['POKEMON']}`,"\n")
  
     
  
   }
})

fs.createReadStream(METADATA_URLS_PATH).pipe(parser)

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("StarterPokemon")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)

   console.log(`********************************************* \n`)
   console.log("Minting Pokemon Card TCG To Contract Address ")
   console.log(owner.address,"\n")

}