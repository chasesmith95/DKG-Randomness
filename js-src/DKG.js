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


/*
Variables used throughout the function
*/

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
function getKeys(prime_order, generator) {
  return elgamal.generatePublicPrivateKey(prime_order, generator);
}

var algebra = require('algebra.js');

/* Generates a random polynomial, P, of 
degree specified where P(0) = secret_key  
Return polynomial, which is an array of its coefficients*/
function randomPolynomial(degree, secret_key, prime) {
	var poly = [];
	for (i = 0; i < degree; i++) {
		poly[i] = getRandomInt(0, prime);
	}
	poly[degree] = secret_key;
	return poly;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};


/* Takes in an array of tuples, where each is a tuple of
X and Y values, where Y = P(X). */
function interpolation(points) {
	var delta_polynomials = [];
	for (int i = 0; i < points.length; i++) {
		// constructing a delta polynomial for each point
		var expr = new Expression("x");
		var divide = 1;
		for (int j = 0; j < points.length; j++) {
			if (i != j) {
				var tmpExpr = new Expression("x");
				tmpExpr = tmpExpr.subtract(points[j][0]);
				divide = divide * (points[i][0] - points[j][0]); 
				expr = expr.multiply(tmpExpr);
			}
		}
		expr = expr.divide("x");
		delta_polynomials[i] = expr.divide(divide);
	}
	var poly = delta_polynomials[0].multiply(points[k][1]);
	for (int k = 1; k < delta_polynomials.length; k++) {
		poly = poly.add(delta_polynomials[k]).multiply(points[k][1]);
	}
	return poly;
};


//


/*
Encrypt a point of the function with someone's el gamal address and sign it
*/
function encrypt(m, pub_key, private_key, prime_order, generator) {
  return elgamal.encrypt(m, pub_key, private_key, prime_order, generator);
}


/*
Decrypt a point of a function with someone's el gamal address that is signed
*/
function decrypt(c, d, s, r, private_key, prime) {

  return elgamal.decrypt(c, d, s, r, private_key, prime);
}


/*
Create a random polynomial of order t-1 in mod p
with the x_0 component being the secret key
*/
//polynomialoperator



/*
Create a set of points in the polynomial (shared secrets),
and then create g^xi of points
*/
//polynomialoperator

/*
Validate a point on polynomials
Input: shared_secrets,
*/
//polyfunctions create a polynomial that gives the secret key

/*
Polynomial interpolation mod p (given t+1 points on the polynomial
it is possible to uniquely distinguish it
*/
//polynomialoperator
