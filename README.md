 # Mint with NFT.storage and Polygon TestNetwork Mumbai  

Mint with NFT.storage and Polygon using the Polygon blockchain and IPFS/Filecoin storage via NFT.Storage. Built with Solidity using Hardhat.

 Setting Up

1. Clone the repository
2. Install dependencies

```bash
$ cd NFTMetadata-IPFS(Storage)
$ npm install --save-dev hardhat
$ npx hardhat
$ npm install --save dotenv @nomiclabs/hardhat-etherscan @openzeppelin/contracts @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-toolbox @nomiclabs/hardhat-ethers
$ npm i nft.storage dotenv csv-parse
```
3. Change variables .env files create an account in nft.storage to be able to use its apikey
```bash
#.env
$ NFT_STORAGE_API_KEY
$ PRIVATE_KEY
```

4. Deployment
```bash
$ npx hardhat clean
$ npx hardhat compile
```
```bash
$ npx hardhat run scripts/store-content.mjs --network PolygonMumbai
```
![](https://i.imgur.com/t8BSlNR.gif)

## After doing the first deployment of store-content.mjs Replace the results: ipfs://bafyreieqrgx34acvgryhqxoqqinjsu5to3iu3sz57qv6lzniasbefxy7ii/metadata.json  in  assets/metadata_urls.csv

[https://imgur.com/VGQxUDt.gif]

```bash
$ npx hardhat run scripts/deploy.mjs --network PolygonMumbai //
```


```bash
$ npx hardhat run scripts/mint-nft.mjs --network PolygonMumbai
```








