// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IFollowNFT} from "@aave/lens-protocol/contracts/interfaces/IFollowNFT.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";


contract LensDao{
    IFollowNFT public followNFT;

    IERC721 public ERC721Follow;

    constructor(address _follow_nft_address) public payable{
        followNFT=IFollowNFT(_follow_nft_address);
        ERC721Follow=IERC721(_follow_nft_address);
    }

    receive() external payable{}

    fallback() external payable {}

    // Proposal Core struct which stores the information about the proposal;
    struct ProposalCore {
        uint256 proposalId;
        address[]  targets;
        uint256[]  values;
        bytes[]  calldatas; 
        string  description;
        uint256 voteStart;
        address proposer;
        uint256 yayVotes;
        uint256 nayVotes;
        uint256 voteEnd;
        bool executed;
        bool canceled;
        mapping(address=>bool) voter;
    }

    enum Vote {
        YAY,
        NAY
    }

    uint256 public numProposals; // num of total proposal


    event ProposalCreated(uint256 proposalId,address proposer,address[] targets,uint256[] values,bytes[] calldatas,string description);

    mapping(uint256 => ProposalCore) public _proposals; // Stores the proposalCore structs.


    modifier activeProposalOnly(uint256 proposalIndex) {
        require(
            _proposals[proposalIndex].voteEnd > block.timestamp,
            "DEADLINE_EXCEEDED"
        );
        _;
    }

    // Function to propose to the dao
    function propose(
    address[] memory targets,
    uint256[] memory values, 
    bytes[] memory calldatas, 
    string memory description
    ) public returns(uint256){
        
    address proposer=msg.sender;

    require(targets.length == values.length, "Governor: invalid proposal length");
    require(targets.length == calldatas.length, "Governor: invalid proposal length");
    require(targets.length > 0, "Governor: empty proposal");
    require(ERC721Follow.balanceOf(msg.sender) >0,"Not a Dao member");

    ProposalCore storage proposal = _proposals[numProposals];
    proposal.proposalId=numProposals;
    proposal.targets=targets;
    proposal.values=values;
    proposal.calldatas=calldatas;
    proposal.description=description;
    proposal.proposer=proposer;
    proposal.voteStart=block.timestamp;
    proposal.voteEnd=block.timestamp+2 minutes;

    emit ProposalCreated(numProposals, proposer, targets, values, calldatas, description);
    numProposals++;
    }

    function voteOnProposal(uint256 proposalIndex, Vote vote)
        external activeProposalOnly(proposalIndex)
    {
        ProposalCore storage proposal = _proposals[proposalIndex];

        uint256 voterNFTBalance = followNFT.getPowerByBlockNumber(msg.sender,block.number);

        require(proposal.voter[msg.sender]==false,"Cannot vote twice");
        require(ERC721Follow.balanceOf(msg.sender) >0,"Not a Dao member");
        if (vote == Vote.YAY) {
            proposal.yayVotes += voterNFTBalance;
            proposal.voter[msg.sender]=true;
        } else {
            proposal.nayVotes += voterNFTBalance;
            proposal.voter[msg.sender]=true;
        }
    }

     function executeProposal(uint256 proposalIndex)
        external 
    {
        ProposalCore storage proposal = _proposals[proposalIndex];
        require(proposal.executed==false,"Proposal Already executed");
        require(proposal.voteEnd < block.timestamp,"Voting Period not ended");
        require(ERC721Follow.balanceOf(msg.sender) >0,"Not a Dao member");
        if (proposal.yayVotes > proposal.nayVotes) {
            for (uint256 i = 0; i < proposal.targets.length; ++i) {
                (bool success, bytes memory returndata) = proposal.targets[i].call{value: proposal.values[i]}(proposal.calldatas[i]);
            }
        }  
        proposal.executed = true;
    }

}
