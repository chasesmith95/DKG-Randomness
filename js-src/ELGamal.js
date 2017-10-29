var forge = require('node-forge');
var bigInt = require("big-integer");

/*
Instantiates ElGamal, with a random prime for the order of the group
and a generator for the group
Input: the number of bits to include in ElGamal Prime.
Output: the random prime, the generator
*/
function elgamal(numBits) {
  var bits = 160;
  forge.prime.generateProbablePrime(bits, function(err, num) {
    // Create prime factor and convert to bigInt
    var factor = bigInt(num.toString(10));
    // Find a larger prime of which factor is prime factor
    // Determine a large even number as a co-factor
    var coFactor = bigInt.randBetween("2e260", "3e260"); // should be bitLength(prime) - bitLength(factor)
    var prime = 4;
    while(!coFactor.isEven() || !prime.isPrime()) {
      coFactor = bigInt.randBetween("2e260", "3e260"); // should be bitLength(prime) - bitLength(factor)
      prime = coFactor.multiply(factor);
      prime = prime.add(1);
    }
    // Get a generator g for the multiplicative group mod factor
    var j = prime.minus(1).divide(factor);
    var h = bigInt.randBetween(2, prime.minus(1));
    var g = h.modPow(j, factor);
};)};};



/*
Generates a random Public key, private key pairing
in the ElGamal group and returns them
Input: the prime and the generator
Output: public key, private key
*/
function generatePublicPrivateKey(prime, g) {
  // Secret key
  var a = bigInt.randBetween(2, factor.minus(2));
  // Public key
  var A = g.modPow(a, prime);
};


/*
Generates the encrypted version of a message (between 1 and minus 1) from the given public key.
Inputs: public key, private key, generator, prime, message
Outputs: encrypted message (c, d) and signature (s, r)
*/
function encrypt(m, ...) {
 var k = bigInt.randBetween(1, factor.minus(1));
 var c1 = g.modPow(k, prime);
};



/*
Generates the message from the private key between
i

*/
function decrypt() {};
