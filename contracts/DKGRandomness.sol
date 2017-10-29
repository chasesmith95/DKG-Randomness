pragma solidity ^0.4.4;

import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract DKG {
	mapping (address => address) public_keys;
	mapping (address => bool) addresses;
	mapping (address => stuff) check;
	uint limit;
	uint polynomial;
	bool is_verified;
	//list of things


	function DKG() {
		//owner?

	}

	function check();


	function addAddress();
	//Only add an address if it can do specific things

}
