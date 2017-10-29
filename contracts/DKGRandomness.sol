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
	mapping (address => bool) accepted; // whether or not these
	//mapping (address => stuff) check; //this should be a list of all of the shared secret keys
	uint limit;
	bool is_verified;
	//could also stake the nodes




	function DKG() {
		//created with a prime ordering
		//created with a generator
		//created with an initial limit (number of participants)
		//created with a degree (t)
	}

	/*
		Add an individual node
		requires a public key, and committed shared secrets c0, c1, .....cn
	*/
	function addNode();


	/*
		Request node to distribute shared secrets to nodes
		Unknown whether or not this is needed
	*/
	function distributeKeys();


	 /*
		Individual Node verifies the validity of a shared key from another
		node
	*/
	function verifyKey();

	/*
		A node is accepted into the DKG group of nodes
		Perhaps can only be done by owner
	*/
	function acceptNode(address _node) private {
		accepted[_node] = true;
		//could have event here
	}



	function getRandom();

	function requestPrivateKey();

	function verifyPrivateKeyPublicKeyPair();

	function pieceTogetherPrivateKey();

}
