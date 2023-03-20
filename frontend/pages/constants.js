export const Lens_Dao_Abi = [{
        "inputs": [{
            "internalType": "address",
            "name": "_follow_nft_address",
            "type": "address"
        }],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "ProposalCreated",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "_proposals",
        "outputs": [{
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteStart",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "yayVotes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "nayVotes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "voteEnd",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "executed",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "canceled",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "proposalIndex",
            "type": "uint256"
        }],
        "name": "executeProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "followNFT",
        "outputs": [{
            "internalType": "contract IFollowNFT",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "normalFollow",
        "outputs": [{
            "internalType": "contract IERC721",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "numProposals",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "propose",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "proposalIndex",
                "type": "uint256"
            },
            {
                "internalType": "enum LensDao.Vote",
                "name": "vote",
                "type": "uint8"
            }
        ],
        "name": "voteOnProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]

export const lens_hub_abi = [{ "inputs": [{ "internalType": "address", "name": "followNFTImpl", "type": "address" }, { "internalType": "address", "name": "collectNFTImpl", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "CallerNotCollectNFT", "type": "error" }, { "inputs": [], "name": "CallerNotFollowNFT", "type": "error" }, { "inputs": [], "name": "CannotInitImplementation", "type": "error" }, { "inputs": [], "name": "DispatcherNotSet", "type": "error" }, { "inputs": [], "name": "EmergencyAdminCannotUnpause", "type": "error" }, { "inputs": [], "name": "InitParamsInvalid", "type": "error" }, { "inputs": [], "name": "Initialized", "type": "error" }, { "inputs": [], "name": "NotGovernance", "type": "error" }, { "inputs": [], "name": "NotGovernanceOrEmergencyAdmin", "type": "error" }, { "inputs": [], "name": "NotOwnerOrApproved", "type": "error" }, { "inputs": [], "name": "NotProfileOwner", "type": "error" }, { "inputs": [], "name": "NotProfileOwnerOrDispatcher", "type": "error" }, { "inputs": [], "name": "Paused", "type": "error" }, { "inputs": [], "name": "ProfileCreatorNotWhitelisted", "type": "error" }, { "inputs": [], "name": "ProfileImageURILengthInvalid", "type": "error" }, { "inputs": [], "name": "PublicationDoesNotExist", "type": "error" }, { "inputs": [], "name": "PublishingPaused", "type": "error" }, { "inputs": [], "name": "SignatureExpired", "type": "error" }, { "inputs": [], "name": "SignatureInvalid", "type": "error" }, { "inputs": [], "name": "ZeroSpender", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "name": "burnWithSig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "collect", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "collector", "type": "address" }, { "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.CollectWithSigData", "name": "vars", "type": "tuple" }], "name": "collectWithSig", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "contentURI", "type": "string" }, { "internalType": "uint256", "name": "profileIdPointed", "type": "uint256" }, { "internalType": "uint256", "name": "pubIdPointed", "type": "uint256" }, { "internalType": "bytes", "name": "referenceModuleData", "type": "bytes" }, { "internalType": "address", "name": "collectModule", "type": "address" }, { "internalType": "bytes", "name": "collectModuleInitData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }], "internalType": "struct DataTypes.CommentData", "name": "vars", "type": "tuple" }], "name": "comment", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "contentURI", "type": "string" }, { "internalType": "uint256", "name": "profileIdPointed", "type": "uint256" }, { "internalType": "uint256", "name": "pubIdPointed", "type": "uint256" }, { "internalType": "bytes", "name": "referenceModuleData", "type": "bytes" }, { "internalType": "address", "name": "collectModule", "type": "address" }, { "internalType": "bytes", "name": "collectModuleInitData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.CommentWithSigData", "name": "vars", "type": "tuple" }], "name": "commentWithSig", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "contentURI", "type": "string" }, { "internalType": "uint256", "name": "profileIdPointed", "type": "uint256" }, { "internalType": "uint256", "name": "pubIdPointed", "type": "uint256" }, { "internalType": "bytes", "name": "referenceModuleData", "type": "bytes" }, { "internalType": "address", "name": "collectModule", "type": "address" }, { "internalType": "bytes", "name": "collectModuleInitData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.CommentWithSigData", "name": "vars", "type": "tuple" }], "name": "commentWithSig_Dispatcher", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "string", "name": "handle", "type": "string" }, { "internalType": "string", "name": "imageURI", "type": "string" }, { "internalType": "address", "name": "followModule", "type": "address" }, { "internalType": "bytes", "name": "followModuleInitData", "type": "bytes" }, { "internalType": "string", "name": "followNFTURI", "type": "string" }], "internalType": "struct DataTypes.CreateProfileData", "name": "vars", "type": "tuple" }], "name": "createProfile", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "wallet", "type": "address" }], "name": "defaultProfile", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }, { "internalType": "uint256", "name": "collectNFTId", "type": "uint256" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "emitCollectNFTTransferEvent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "followNFTId", "type": "uint256" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "emitFollowNFTTransferEvent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "exists", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "profileIds", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }], "name": "follow", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "follower", "type": "address" }, { "internalType": "uint256[]", "name": "profileIds", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.FollowWithSigData", "name": "vars", "type": "tuple" }], "name": "followWithSig", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }], "name": "getCollectModule", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }], "name": "getCollectNFT", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCollectNFTImpl", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }], "name": "getContentURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "getDispatcher", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getDomainSeparator", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "getFollowModule", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "getFollowNFT", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getFollowNFTImpl", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "getFollowNFTURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getGovernance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "getHandle", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "getProfile", "outputs": [{ "components": [{ "internalType": "uint256", "name": "pubCount", "type": "uint256" }, { "internalType": "address", "name": "followModule", "type": "address" }, { "internalType": "address", "name": "followNFT", "type": "address" }, { "internalType": "string", "name": "handle", "type": "string" }, { "internalType": "string", "name": "imageURI", "type": "string" }, { "internalType": "string", "name": "followNFTURI", "type": "string" }], "internalType": "struct DataTypes.ProfileStruct", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "handle", "type": "string" }], "name": "getProfileIdByHandle", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }], "name": "getPub", "outputs": [{ "components": [{ "internalType": "uint256", "name": "profileIdPointed", "type": "uint256" }, { "internalType": "uint256", "name": "pubIdPointed", "type": "uint256" }, { "internalType": "string", "name": "contentURI", "type": "string" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "address", "name": "collectModule", "type": "address" }, { "internalType": "address", "name": "collectNFT", "type": "address" }], "internalType": "struct DataTypes.PublicationStruct", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "getPubCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }], "name": "getPubPointer", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }], "name": "getPubType", "outputs": [{ "internalType": "enum DataTypes.PubType", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "pubId", "type": "uint256" }], "name": "getReferenceModule", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getState", "outputs": [{ "internalType": "enum DataTypes.ProtocolState", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address", "name": "newGovernance", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "collectModule", "type": "address" }], "name": "isCollectModuleWhitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "followModule", "type": "address" }], "name": "isFollowModuleWhitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "profileCreator", "type": "address" }], "name": "isProfileCreatorWhitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "referenceModule", "type": "address" }], "name": "isReferenceModuleWhitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "mintTimestampOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "profileIdPointed", "type": "uint256" }, { "internalType": "uint256", "name": "pubIdPointed", "type": "uint256" }, { "internalType": "bytes", "name": "referenceModuleData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }], "internalType": "struct DataTypes.MirrorData", "name": "vars", "type": "tuple" }], "name": "mirror", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "profileIdPointed", "type": "uint256" }, { "internalType": "uint256", "name": "pubIdPointed", "type": "uint256" }, { "internalType": "bytes", "name": "referenceModuleData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.MirrorWithSigData", "name": "vars", "type": "tuple" }], "name": "mirrorWithSig", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "uint256", "name": "profileIdPointed", "type": "uint256" }, { "internalType": "uint256", "name": "pubIdPointed", "type": "uint256" }, { "internalType": "bytes", "name": "referenceModuleData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.MirrorWithSigData", "name": "vars", "type": "tuple" }], "name": "mirrorWithSig_Dispatcher", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "name": "permitForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "contentURI", "type": "string" }, { "internalType": "address", "name": "collectModule", "type": "address" }, { "internalType": "bytes", "name": "collectModuleInitData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }], "internalType": "struct DataTypes.PostData", "name": "vars", "type": "tuple" }], "name": "post", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "contentURI", "type": "string" }, { "internalType": "address", "name": "collectModule", "type": "address" }, { "internalType": "bytes", "name": "collectModuleInitData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.PostWithSigData", "name": "vars", "type": "tuple" }], "name": "postWithSig", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "contentURI", "type": "string" }, { "internalType": "address", "name": "collectModule", "type": "address" }, { "internalType": "bytes", "name": "collectModuleInitData", "type": "bytes" }, { "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bytes", "name": "referenceModuleInitData", "type": "bytes" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.PostWithSigData", "name": "vars", "type": "tuple" }], "name": "postWithSig_Dispatcher", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "name": "setDefaultProfile", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "wallet", "type": "address" }, { "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.SetDefaultProfileWithSigData", "name": "vars", "type": "tuple" }], "name": "setDefaultProfileWithSig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "address", "name": "dispatcher", "type": "address" }], "name": "setDispatcher", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "address", "name": "dispatcher", "type": "address" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.SetDispatcherWithSigData", "name": "vars", "type": "tuple" }], "name": "setDispatcherWithSig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newEmergencyAdmin", "type": "address" }], "name": "setEmergencyAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "address", "name": "followModule", "type": "address" }, { "internalType": "bytes", "name": "followModuleInitData", "type": "bytes" }], "name": "setFollowModule", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "address", "name": "followModule", "type": "address" }, { "internalType": "bytes", "name": "followModuleInitData", "type": "bytes" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.SetFollowModuleWithSigData", "name": "vars", "type": "tuple" }], "name": "setFollowModuleWithSig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "followNFTURI", "type": "string" }], "name": "setFollowNFTURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "followNFTURI", "type": "string" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.SetFollowNFTURIWithSigData", "name": "vars", "type": "tuple" }], "name": "setFollowNFTURIWithSig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newGovernance", "type": "address" }], "name": "setGovernance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "imageURI", "type": "string" }], "name": "setProfileImageURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "internalType": "string", "name": "imageURI", "type": "string" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "internalType": "struct DataTypes.EIP712Signature", "name": "sig", "type": "tuple" }], "internalType": "struct DataTypes.SetProfileImageURIWithSigData", "name": "vars", "type": "tuple" }], "name": "setProfileImageURIWithSig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "enum DataTypes.ProtocolState", "name": "newState", "type": "uint8" }], "name": "setState", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "sigNonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenDataOf", "outputs": [{ "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint96", "name": "mintTimestamp", "type": "uint96" }], "internalType": "struct IERC721Time.TokenData", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "collectModule", "type": "address" }, { "internalType": "bool", "name": "whitelist", "type": "bool" }], "name": "whitelistCollectModule", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "followModule", "type": "address" }, { "internalType": "bool", "name": "whitelist", "type": "bool" }], "name": "whitelistFollowModule", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "profileCreator", "type": "address" }, { "internalType": "bool", "name": "whitelist", "type": "bool" }], "name": "whitelistProfileCreator", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "referenceModule", "type": "address" }, { "internalType": "bool", "name": "whitelist", "type": "bool" }], "name": "whitelistReferenceModule", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

export const Lens_Dao_Contract_address = "0xfc126221188bf25e4817C773d263E0b59A551851"

export const lens_hub_proxy_address = "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82"

export const Lens_Follow_Nft_Contract_address = "0x455f2a5B9932708DDBf682BBE55d4e5f9e989E2b"

export const Lens_Follow_NFT_Abi = [{
        "inputs": [{
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "hub",
            "type": "address"
        }],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "BlockNumberInvalid",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "components": [{
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DataTypes.EIP712Signature",
                "name": "sig",
                "type": "tuple"
            }
        ],
        "name": "burnWithSig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "delegatee",
            "type": "address"
        }],
        "name": "delegate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "delegator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delegatee",
                "type": "address"
            },
            {
                "components": [{
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DataTypes.EIP712Signature",
                "name": "sig",
                "type": "tuple"
            }
        ],
        "name": "delegateBySig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "profileId",
            "type": "uint256"
        }],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "InitParamsInvalid",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "Initialized",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "to",
            "type": "address"
        }],
        "name": "mint",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "NotHub",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotOwnerOrApproved",
        "type": "error"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "components": [{
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DataTypes.EIP712Signature",
                "name": "sig",
                "type": "tuple"
            }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            },
            {
                "components": [{
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DataTypes.EIP712Signature",
                "name": "sig",
                "type": "tuple"
            }
        ],
        "name": "permitForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SignatureExpired",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "SignatureInvalid",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TokenDoesNotExist",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ZeroSpender",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "exists",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "getApproved",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
        }],
        "name": "getDelegatedSupplyByBlockNumber",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDomainSeparator",
        "outputs": [{
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            }
        ],
        "name": "getPowerByBlockNumber",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "HUB",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "mintTimestampOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "ownerOf",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "sigNonces",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
        }],
        "name": "supportsInterface",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }],
        "name": "tokenByIndex",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "tokenDataOf",
        "outputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint96",
                    "name": "mintTimestamp",
                    "type": "uint96"
                }
            ],
            "internalType": "struct IERC721Time.TokenData",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "tokenURI",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]