pragma solidity ^0.4.4;

import "./ConvertLib.sol";

/*
What does this contract need to do?
It needs to:
	Be instantiated with a limit on verifiers
	Needs to give every verifiers
	Hold a list of public keys (not a)


*/

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
