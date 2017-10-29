/*
Distributed key generation library for
javascript and for web plug-ins


Required imports
 -bigInt
 -ElGamal
 -polynomialoperator
*/

import elgamal from 'ELGamal' //does this work?
import poly from 'polynomialoperator' //does this work?
var bigInt = require("big-integer");



var prime_order;
var factor;
var generator;

//could you have a list of shared secrets
//could you have a list of encrypted secrets that specific people can see


/* Initialize the encryption scheme (in this ELGamal) this creates:
  -a large prime to serve as the order of the group
  -a generator for the prime group
*/
function create() {
  prime_order, factor = elgamal.randomPrime(256);
  generator = elgamal.groupGenerator(prime_order, factor);
  return prime_order, generator;
}


/*
Get a public and private key from the el gamal function
*/
//elgamal (public private)
function getKeys() {
  return elgamal.generatePublicPrivateKey(prime_order, generator);
}

/*
Validate a point on polynomials
Input: shared_secrets,
*/
//polyfunctions create a polynomial that gives the secret key

/*
Encrypt a point of the function with someone's el gamal address and sign it
*/
function encrypt(m, pub_key, private_key) {
  return elgamal.encrypt(m, pub_key, private_key, prime_order, generator);
}


/*
Decrypt a point of a function with someone's el gamal address that is signed
*/
function decrypt(encrypted, pub_key, private_key) {
  //get the c,
  //get the d, 
  return elgamal.encrypt(m, pub_key, private_key, prime_order, generator);
}


/*
Create a random polynomial of order t-1 in mod p
with the x_0 component being the secret key
*/
//polynomial



/*
Create a set of points in the polynomial (shared secrets),
and then create g^xi of points
*/
//polynomialoperator


/*
Polynomial interpolation mod p (given t+1 points on the polynomial
it is possible to uniquely distinguish it
*/
//polynomialoperator
