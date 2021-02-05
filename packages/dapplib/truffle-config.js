require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strong crawl maze purpose inner argue tackle gauge'; 
let testAccounts = [
"0x8ce17aa09190762c0137464135643de0633161200fcb7ccfbe500693ef3f0c28",
"0xb9b3727f7114d2f35702d7abd08a7a2b4f637c2cb9e691992952bcda5f8b56a1",
"0xb52377a1756a44d4d144db54297d19ff4abc7250d9e614d5f39d17131cdbdb23",
"0x15151fd1bf569bc08c8043d88b8de17bf459ac0e35bfab4ae9470716fb07c5f6",
"0x70090ace79863cd992c8af47a8d306f5cfb7d67d05248c8511d3c4e5addb10db",
"0x4ac928562d62bdab3a1e0f375cde0986ead0e5fc1e47c41637eefd6e32bec7f1",
"0x038945a86e333688df44abdabf7d199cd697fc167c8f44c3a798cfc2db628c33",
"0x234ec84677ec5c3c32c8d82d405babed715dbc8d100cd362c5662cf347ba474d",
"0x5c67f8c0558a229a30eb5753a14a4b83655568afefc96def74a7e420c8fc5869",
"0xe8a93aacd07fcc22901272fe6c7ba8c606ae86f4e4233c2198e02ab553c510a9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
