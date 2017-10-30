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
	mapping (address => bytes32) public_keys;
	//public key
	//private key finally
	mapping (bytes32 => bytes32[]) shared_secret_keys;
	//private keys ...
	//
	mapping (address => bool) accepted; // whether or not these
	//mapping (address => stuff) check; //this should be a list of all of the shared secret keys
	uint limit;
	uint256 prime;
	uint256 g;
	uint limit;
	uint degree;
	bool isClosed; //can this accept anymore nodes

	bool is_verified;
	//could also stake the nodes


	/* Modifiers:
		isNode?
		isVerified?
		isReady? //everything is there submit the final private key
		isClosed? //
		isOpen?
	*/


	function DKG(uint256 _prime, uint256 _g, uint _limit, uint _degree) {
		prime = _prime;
		g = _g;
		limit = _limit;
		degree = _degree;
	}



	/*
		Add an individual node
		requires a public key, and committed shared secrets c0, c1, .....cn
	*/
	function addNode(bytes32 pub_key, bytes32[] shared_secrets) isOpen();


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
	}



	function getRandom();

	function requestPrivateKeys();

	function verifyPrivateKeyPublicKeyPair(bytes32 verifiedKey, uint index) isNode(msg.sender) {
		//must


	}

	function pieceTogetherPrivateKey();

}
