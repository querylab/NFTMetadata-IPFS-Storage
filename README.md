 ## Mint with NFT.storage and Polygon TestNetwork Mumbai  

Mint with NFT.storage and Polygon using the Polygon blockchain and IPFS/Filecoin storage via NFT.Storage. Built with Solidity using Hardhat.

 Setting Up

### 1. Clone the repository

### 2. Install dependencies

```bash
$ cd NFTMetadata-IPFS-Storage
$ npm install --save-dev hardhat
$ npx hardhat
$ npm install --save dotenv @nomiclabs/hardhat-etherscan @openzeppelin/contracts @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-toolbox @nomiclabs/hardhat-ethers
$ npm i nft.storage dotenv csv-parse
```
### 3. Change variables .env files create an account in nft.storage to be able to use its apikey
```bash
#.env
$ NFT_STORAGE_API_KEY
$ PRIVATE_KEY
```

### 4. Deployment
```bash
$ npx hardhat clean
$ npx hardhat compile
```
```bash
$ npx hardhat run scripts/store-content.mjs --network PolygonMumbai
```
<a href="https://imgur.com/t8BSlNR"><img src="https://i.imgur.com/t8BSlNR.gif" title="source: imgur.com" /></a>

### After doing the first deployment of store-content.mjs Replace the results: ipfs://bafyreieqrgx34acvgryhqxoqqinjsu5to3iu3sz57qv6lzniasbefxy7ii/metadata.json  in  assets/metadata_urls.csv


```bash
$ npx hardhat run scripts/deploy.mjs --network PolygonMumbai //
```
<a href="https://imgur.com/VGQxUDt"><img src="https://i.imgur.com/VGQxUDt.gif" title="source: imgur.com" /></a>

```bash
$ npx hardhat run scripts/mint-nft.mjs --network PolygonMumbai
```
<a href="https://imgur.com/S4LEnC3"><img src="https://i.imgur.com/S4LEnC3.gif" title="source: imgur.com" /></a>


<a href="https://imgur.com/ZTnGVlk"><img src="https://i.imgur.com/ZTnGVlk.png" title="source: imgur.com" /></a>


### 5. You can see on the OpenSea Testnet at Polygon is a test environment where developers can test their applications and functionality without using real assets on the core network. 


<a href="https://imgur.com/u6pqsBc"><img src="https://i.imgur.com/u6pqsBc.png" title="source: imgur.com" /></a>


<a href="https://imgur.com/tZA937p"><img src="https://i.imgur.com/tZA937p.png" title="source: imgur.com" /></a>



















































































