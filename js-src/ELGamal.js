var forge = require('node-forge');
var bigInt = require("big-integer");
/*
  var bits = 160;



};)};};
*/


/*
Generates a random prime number in numBits
Input: numBits
Output: prime number
//TODO return the prime number and the factor
*/
function randomPrime(numBits) {
  forge.prime.generateProbablePrime(bits, function(err, num) {
    var factor = bigInt(num.toString(10));
    var coFactor = bigInt.randBetween("2e260", "3e260"); // should be bitLength(prime) - bitLength(factor)
    var prime = 4;
    while(!coFactor.isEven() || !prime.isPrime()) {
      coFactor = bigInt.randBetween("2e260", "3e260"); // should be bitLength(prime) - bitLength(factor)
      prime = coFactor.multiply(factor);
      prime = prime.add(1);
      }
  });


};




/*
Generates a generator for a prime ordered group
Input: prime order (must be prime)
Output: generator
*/
function groupGenerator(prime, factor) {
  var j = prime.minus(1).divide(factor);
  var h = bigInt.randBetween(2, prime.minus(1));
  var g = h.modPow(j, factor);
  return g;
};

/*
Generates a random Public key, private key pairing
in the ElGamal group and returns them
Input: the prime and the generator
Output: public key, private key
*/
function generatePublicPrivateKey(prime, g) {
  var privateKey = bigInt.randBetween(2, factor.minus(2));
  var publicKey = g.modPow(a, prime);
  return (publicKey, privateKey);
};


/*
Generates the encrypted version of a message (between 1 and minus 1) from the given public key.
Inputs: public key, private key, generator, prime, message
Outputs: encrypted message (c, d) and signature (s, r)
*/
function encrypt(m, ...) {
 var k = bigInt.randBetween(1, factor.minus(1));
 var c1 = g.modPow(k, prime);
 //TODO:
};



/*
Generates the message from the private key between
i
//TODO:
*/
function decrypt() {};
