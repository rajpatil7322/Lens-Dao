// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

    const DAO = await hre.ethers.getContractFactory("LensDao");
    const lensdao = await DAO.deploy("0x455f2a5B9932708DDBf682BBE55d4e5f9e989E2b");

    await lensdao.deployed();

    console.log(
        `Lens Dao deployed to ${lensdao.address}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});