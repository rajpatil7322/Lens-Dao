import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { ethers } from 'ethers'
import { useState,useEffect } from 'react'
import Post from '@/components/Post'
import { getDaoContractInstance,getFollowNftContractInstance,getLensHubContractInstance } from "@/pages/context";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const{address}=useAccount();

  const [nftbalance,setNftBalance]=useState(0);

  const [blocknumber,setBlockNumber]=useState(0);

  const [delegatedBalance,setdelegatedBalance]=useState(0);

  const [numOfFollowers,setnumOfFollowers]=useState(0);

  const [proposals,setProposals]=useState([]);

  const [numProposals,setNumProposals]=useState(0);

  const [selectedTab, setSelectedTab] = useState("");

  const [TargetAddress, setTargetAddress] = useState([]);

  const [values,setValues]=useState();

  const [calldata,setcalldata]=useState();

  const [description,setdescription]=useState("");

  const [delegateAddress,setDelegateAddress]=useState();

  const [numofpublications,setnumofpublications]=useState(0);

  async function getblocknumber(){
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    var number=parseInt(await provider.getBlockNumber());
    setBlockNumber(number);
  }

  async function getPublicationCount(){
    const contract=getLensHubContractInstance();
    const num=await contract.getPubCount(29043);
    setnumofpublications(parseInt(num));
  }


  async function getDelegatedSupply(){
    const contract=getFollowNftContractInstance();
    const num=blocknumber-10
    if(blocknumber && address){
      const balance=await contract.getPowerByBlockNumber(address,num);
      setdelegatedBalance(parseInt(balance));
    }
  }

  async function delgateVotingPower(){
    const contract=getFollowNftContractInstance();
    const tx=await contract.delegate(delegateAddress);
    console.log(tx);
  }

  function renderdelegate(){
    if(nftbalance-delegatedBalance >0){
      return(
        <div>
           <input
          placeholder="0x0000000000000000000000000000000000000000"
          type="text"
          onChange={(e) => setDelegateAddress(e.target.value)}
        />
        <br/>
        <button className={styles.button2} onClick={() =>delgateVotingPower()}>Delegate</button>
        </div>
      )
    }
  }



  async function getNftBalance(){
    const contract=getFollowNftContractInstance();
    if(address){
      const balance=await contract.balanceOf(address);
      const followers=await contract.totalSupply();
      setnumOfFollowers(parseInt(followers));
      setNftBalance(parseInt(balance.toString()));
    }
   
  }

  async function getNumProposals(){
    const contract=getDaoContractInstance();
    const _numProposals=await contract.numProposals();
    setNumProposals(parseInt(_numProposals));
  }
  
  async function Propose(){
    const contract=getDaoContractInstance();
    console.log(TargetAddress);
    const val=[]
    for (let i = 0; i < values.length; i++) {
      val.push(parseInt(values[i]));
    }
    console.log(val);
    console.log(calldata);
    console.log(description);
    const tx=await contract.propose(TargetAddress,val,calldata,description);
    console.log(tx);
  }

  async function executeProposal(id){
    const contract=getDaoContractInstance();
    const tx=await contract.executeProposal(id)
    console.log(tx);
  }

  async function fetchProposalsById(id){
    const contract=getDaoContractInstance();
    const proposal=await contract._proposals(id);
    const parsedProposal={
      proposalId:parseInt(proposal.proposalId),
      proposer:proposal.proposer,
      deadline: new Date(parseInt(proposal.voteEnd.toString()) * 1000),
      yayVotes:parseInt(proposal.yayVotes),
      nayVotes:parseInt(proposal.nayVotes),
      executed:proposal.executed,
      description:proposal.description,
    }
    return parsedProposal;
  }

  const fetchAllProposals = async () => {
    try {
      const proposals = [];
      for (let i = 0; i < numProposals; i++) {
        const proposal = await fetchProposalsById(i); 
        proposals.push(proposal);
      }
      setProposals(proposals);
      return proposals;
    } catch (error) {
      console.error(error);
    }
  };

  function renderTabs() {
    if (selectedTab === "Create Proposal") {
      return renderCreateProposalTab();
    } else if (selectedTab === "View Proposals") {
      return renderViewProposalsTab();
    }
    return null;
  }

  async function voteOnProposal(proposalId,_vote){
    const contract=getDaoContractInstance();
    let vote = _vote === "YAY" ? 0 : 1;
    const tx=await contract.voteOnProposal(proposalId,vote);
    await tx.wait();
    await fetchAllProposals();

  }


  function renderTabs() {
    if (selectedTab === "Create Proposal") {
      return renderCreateProposalTab();
    } else if (selectedTab === "View Proposals") {
      return renderViewProposalsTab();
    }
    return null;
  }

  async function follow(){
    const contract=getLensHubContractInstance();
    const tx=await contract.follow([29043],['0x'])
    console.log(tx);
  }

  function followTab(){
    if(nftbalance===0){
      return renderFollow();
    }
  }

  function renderFollow(){
    return(
      <div>
        <button className={styles.button2} onClick={() =>follow()}>Follow</button>
      </div>
    )
  }


  function renderCreateProposalTab(){
    return (
      <div className={styles.container}>
        <label>Enter a list of target address: For example ["0x00...","0x00.."] </label>
        <input
          placeholder="0x0000000000000000000000000000000000000000"
          type="text"
          onChange={(e) => setTargetAddress(e.target.value.split(","))}
        />
        <br/>
        <label>Enter a list of values: For example [1,2] </label>
        <input
          placeholder="[1,2]"
          type="text"
          onChange={(e) => setValues(e.target.value.split(","))}
        />
        <br/>
        <label>Enter a list of calldatas: For example ["0xz3j23bs5as","0xkna63h72b"] </label>
        <input
          placeholder="['0xz3j23bs5as','0xkna63h72b']"
          type="text"
          onChange={(e) => setcalldata(e.target.value.split(","))}
        />
        <br/>
        <label>Enter a description: For example "What does your proposal do" </label>
        <input
          placeholder="What does your proposal do"
          type="text"
          onChange={(e) => setdescription(e.target.value)}
        />
        <button className={styles.button2} onClick={() =>Propose()}>
          Propose
        </button>
      </div>
    );
  }

  function renderViewProposalsTab(){
    return (
      <div>
        {proposals.map((p, index) => (
          <div key={index} className={styles.proposalCard}>
            <p>Proposal ID: {p.proposalId}</p>
            <p>Proposer: {p.proposer}</p>
            <p>Deadline: {p.deadline.toLocaleString()}</p>
            <p>Yay Votes: {p.yayVotes}</p>  
            <p>Nay Votes: {p.nayVotes}</p>
            <p>Executed?: {p.executed.toString()}</p>
            <p>Description:{p.description}</p>
            {p.deadline.getTime() > Date.now() && !p.executed ? (
              <div className={styles.flex}>
                <button
                  className={styles.button2}
                  onClick={() => voteOnProposal(p.proposalId, "YAY")}
                >
                  Vote YAY
                </button>
                <button
                  className={styles.button2}
                  onClick={() => voteOnProposal(p.proposalId, "NAY")}
                >
                  Vote NAY
                </button>
              </div>
            ) : p.deadline.getTime() < Date.now() && !p.executed ? (
              <div className={styles.flex}>
                <button
                  className={styles.button2}
                  onClick={() => executeProposal(p.proposalId)}
                >
                  Execute Proposal{" "}
                  {p.yayVotes > p.nayVotes ? "(YAY)" : "(NAY)"}
                </button>
              </div>
            ) : (
              <div className={styles.description}>Proposal Executed</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  useEffect(() =>{
    getNftBalance().then(() =>{
      getNumProposals(); 
      getblocknumber();
      getDelegatedSupply();
      getPublicationCount();
    })
     
  })

  useEffect(() => {
    if (selectedTab === "View Proposals") {
      fetchAllProposals();
    }
  }, [selectedTab]);
  return (
    <>
      <Head>
        <title>Lens DAO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main}>
          <div>
            <ConnectButton/>
            <h1 className={styles.title}>Welcome to Lens Dao</h1>
            <div className={styles.description}>Powered by the Lens Protocol</div>
            <div className={styles.description}>Enabling decentralized content</div>
            <div className={styles.description}>
                Total Proposals :{numProposals}
                <br/>
                Your NFT balance :{nftbalance}
                <br/>
                Total DAO Followers: {numOfFollowers}
                <br/>
                Current Block Number: {blocknumber}
                <br/>
                Delegated Supply :{delegatedBalance}
                <br/>
                Total Publications :{numofpublications}
                {followTab()}
                <br/>
                {renderdelegate()}
                <Post/>
            </div>
            <div className={styles.flex}>
                <button className={styles.button} onClick={() =>setSelectedTab("Create Proposal")}>
                    Create Proposal
                </button>
            </div>
            <br/>
            <div className={styles.flex}>
                <button className={styles.button} onClick={() =>setSelectedTab("View Proposals")}>
                        View Proposals
                </button>
            </div>
            {renderTabs()}
          </div>
        </div>
        <div>
          <img className={styles.image} src="/c2459de-illustration_grow.svg" />
        </div>
      </main>
      <footer className={styles.footer}>
        Made with &#10084; by Raj
      </footer>
    </>
  )
}
