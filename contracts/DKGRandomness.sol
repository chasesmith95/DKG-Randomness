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
	//public key
	//private key finally
	mapping (address => bool) addresses;
	//mapping (address => stuff) check;
	uint limit;
	bool is_verified;
	//could also stake the nodes

	//list of things



	function DKG() {
		//created with a prime ordering
		//created with a generator
		//created with an initial limit (number of participants)
		//created with a degree (t)
	}

	/*
		Add an individual node
		requires a public key, c0, c1, .....ct-1
	*/
	function addNode();


	/*
		Request node to distribute shared secrets to nodes
	*/
	function distributeKeys();


	 /*
		Individual Node verifies the validity of a key from another
		node
	*/
	function verifyKey();

	function acceptNode();

	function getRandom();

	function requestPrivateKey();

	function verifyPrivateKeyPublicKeyPair();

	function pieceTogetherPrivateKey();

}
