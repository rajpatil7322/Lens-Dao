require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const AlCHEMY_API_KEY = process.env.AlCHEMY_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    solidity: '0.8.10',
    networks: {
        mumbai: {
            url: AlCHEMY_API_KEY,
            accounts: [PRIVATE_KEY],
        },
    },
};