const hre = require("hardhat");

async function main() {

    const users = new hre.ethers.Wallet("c0b63ba5bb295cc00cfb5f15415756d63a77c2d1d5aa93e4b1011ede6706dabc");
    console.log(users.address);

    const contract = new hre.ethers.Contract()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});