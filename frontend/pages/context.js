import { Lens_Dao_Abi, Lens_Dao_Contract_address, Lens_Follow_NFT_Abi, Lens_Follow_Nft_Contract_address, lens_hub_abi, lens_hub_proxy_address } from './constants';
import { ethers } from 'ethers';
export function getDaoContractInstance() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Lens_Dao_Contract_address, Lens_Dao_Abi, signer);
    return contract
}

export function getFollowNftContractInstance() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Lens_Follow_Nft_Contract_address, Lens_Follow_NFT_Abi, signer);
    return contract
}

export function getLensHubContractInstance() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(lens_hub_proxy_address, lens_hub_abi, signer);
    return contract;
}