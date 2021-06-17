const Web3 = require('web3');
const BigNumber = require('bignumber.js');

// mainnet
const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

const contract = new web3.eth.Contract(
	require('./masterchef.json'),
	'0x73feaa1eE314F8c655E354234017bE2193C9E24E'
);

const getPendingCake = async () => {
	const pendingCakeBN = await contract.methods
		.pendingCake(62, process.env.WALLET_ADDRESS)
		.call();
	const pendingCake = new BigNumber(pendingCakeBN)
		.div(new BigNumber(10).pow(18))
		.toNumber();
	return pendingCake;
};

module.exports = {
	getPendingCake,
};
