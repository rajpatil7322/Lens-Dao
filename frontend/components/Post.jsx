import { ethers } from "ethers";
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import { getDaoContractInstance } from "@/pages/context";

export default function Post(props){
    const [content, setContent]=useState("");

    let iface = new ethers.utils.Interface([
        "function post(tuple(uint256,string,address,bytes,address,bytes))"
    ]);

    const data=[ethers.utils.hexZeroPad(ethers.utils.hexlify(29043)),content,'0x0BE6bD7092ee83D44a6eC1D949626FeE48caB30c',ethers.utils.defaultAbiCoder.encode(['bool'], ['true']).toString(),ethers.constants.AddressZero.toString(),"0x"]
    let callData = iface.encodeFunctionData("post",[data]);

    async function propose(){
        const contract=getDaoContractInstance();
        const tx=await contract.propose(['0x60Ae865ee4C725cd04353b5AAb364553f56ceF82'],[0],[callData.toString()],"Post");
        console.log(tx);
    }
    
    return(
        <div className={styles.container}>
            <label>Enter content that will be directly posted on lens protocol via Daos approval</label>
            <br/>
            <textarea
            placeholder="Enter Content"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            />
            <br/>
            <button className={styles.button2} onClick={() =>propose()}>Propose Content to the Lens Protocol</button>
        </div>
    )
}