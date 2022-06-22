const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal
let provider;
let web3;
let contract;
let user_address;
let selectedAccount;
let already_minted;

var mint_count = 1;
var final_cost;
var mint_costs = 0.005; // Change cost here
var chainId = 4; // should be 4 for rinkeby and 1 for mainnet

var t_address = "0xeD58B20Fd8e99EA5E304a39C4451955f819c911a"
var t_abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "ApprovalToCurrentOwner", "type": "error" }, { "inputs": [], "name": "ApproveToCaller", "type": "error" }, { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" }, { "inputs": [], "name": "MintToZeroAddress", "type": "error" }, { "inputs": [], "name": "MintZeroQuantity", "type": "error" }, { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" }, { "inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error" }, { "inputs": [], "name": "TransferToZeroAddress", "type": "error" }, { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "NEWFMC", "type": "uint256" }], "name": "changeFMC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newsupply_", "type": "uint256" }], "name": "changesupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "minter", "type": "address" }], "name": "getFMC", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "mintowner", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newmaxperwallet", "type": "uint256" }], "name": "setMaxPerWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintRate", "type": "uint256" }], "name": "setMintRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }];

function init() {

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: "c0db0b85222f4f5c82dd2bed1fc843f9",
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
    });

}


async function check_if_user_is_minted() {
    await contract.methods.getFMC(String(user_address)).call().then(async function (res, err) {
        if (res == '0') {
            final_cost = final_cost - mint_costs;
        }
        await mint_now(final_cost, mint_count);
    });
}

async function update_total_supply() {
    await contract.methods.totalSupply().call().then(function (res, err) {
        if (res) {
            $('#total_supply').html(res)
            $("#box-total-count").show()
        }
    });
}

async function update_cost(){
    await contract.methods.mintRate().call().then(function (res, err) {
        if (res) {
            mint_costs = parseFloat(web3.utils.fromWei(res, 'ether'))
            $('#mint_costs').html(mint_costs);
        }
    });
}

async function mint_now(final_cost, mint_count) {
    var final_wei_Val = (final_cost * Math.pow(10, 18)).toFixedSpecial(0)
    await contract.methods.mint(String(mint_count))
        .send({
            from: user_address,
            value: final_wei_Val
        }).then(function (res, err) {
            if (res) {
                alert("MINTED SUCCESSFULLY!")
            } else {
                alert("MINTING FAILED!")
            }
        });

}

async function switch_network(chainId) {
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: web3.utils.toHex(chainId) }]
    });
}

function check() {
    web3.eth.getAccounts().then(async (tx) => {
        if (tx[0] !== undefined) {
            user_address = tx[0]
            alert("Wallet connected !!!")

            web3.eth.net.getId().then(async (netId) => {
                if (netId === chainId) {
                    $('#connect_btn').hide()
                    $('#mint_box').show();

                    $('#mint_btn').click(async () => {
                        // check if already minted
                        await check_if_user_is_minted();
                    })

                    // total supply
                    await update_total_supply();

                    // update cost
                    await update_cost();

                } else {
                    switch (chainId) {
                        case 1:
                            alert("Connect to ETH mainnet");
                            break;
                        case 4:
                            alert("Connect to Rinkeby");
                            break;
                    }

                    await switch_network(chainId)

                }
            });
        }
    });
}

async function connectweb3() {
    try {
        provider = await web3Modal.connect();
        web3 = new Web3(provider);
        contract = new web3.eth.Contract(t_abi, t_address);
        check()
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    provider.on("accountsChanged", (accounts) => {
        location.reload();
    });

    provider.on("chainChanged", (chainId) => {
        location.reload();
    });

    provider.on("networkChanged", (networkId) => {
        location.reload();
    });

}

function set_value(type) {
    if (type == 'increase') {
        if (mint_count != 5) {
            mint_count++;
        }
    } else {
        if (mint_count != 1) {
            mint_count--;
        }
    }
    final_cost = mint_costs * mint_count
    $('#mint_count').html(mint_count);
}


$(document).ready(() => {
    init();
    $('#connect_btn').click(async () => { await connectweb3(); })

    $('#increase_btn').click(() => {
        set_value('increase');
    })

    $('#decrease_btn').click(() => {
        set_value('decrease');
    })


    set_value("increase")
});



Number.prototype.toFixedSpecial = function (n) {
    var str = this.toFixed(n);
    if (str.indexOf("e+") === -1) return str;

    str = str
        .replace(".", "")
        .split("e+")
        .reduce(function (p, b) {
            return p + Array(b - p.length + 2).join(0);
        });

    if (n > 0) str += "." + Array(n + 1).join(0);

    return str;
};