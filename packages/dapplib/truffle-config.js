require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember erosion hover entire bottom gauge'; 
let testAccounts = [
"0x066714e107e2af4f36b8205042e988df0758c04ac8f466fe48791d0b8201733e",
"0x0a66aff9823c6b56a4547f12504d8dd1a54dbf1e2cdfc93d4cb9128540fb1d16",
"0x079a815162d4232e2e3718991e0bb0f67ebb555edeadf921ae17b80ef05afa7c",
"0x4be18b54119b48d7e8b6cbf9b11cba374fe69576ce60c760f1fb074c96325351",
"0xcc1bba4c4ea7808258851966f6493c4b47ca7aa8faaddf6e3584201a2a442acd",
"0x3d6460a00099bd52166ab4dd2076f50a404ba2c8dd2e83b8d192d64a64d9db21",
"0x6cd6d45f5a76e93d22dc24fa630670eb063bcbd9535959b3b4fadff8f647a92e",
"0xe3e3914789ce259d5aed5ae92b867adaac3dcc18872972216d0c50a0dcad0034",
"0xe6db6fb9543db8417f466da217c0f2fb86cd2112ae84b141cc1bad53d1fe2cc3",
"0xaf083d1008d04fbee964ae2b4be24e5a5cc6c95fca93078ddc054676e3ed07a7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

