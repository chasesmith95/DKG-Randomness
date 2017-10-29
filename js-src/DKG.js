/*
Required imports
bigInt?
ElGamal?
polynomialoperator?
forge?
*/

/* Distributed key generation library for
javascript and for web plug-ins */

var prime_order; //bigint
var generator; //bigint
//could you have a list of shared secrets
//could you have a list of encrypted secrets that specific people can see


/* Initialize the encryption scheme (in this ELGamal) this creates:
  -a large prime to serve as the order of the group
  -a generator for the prime group
*/
//elgamal




/*
Get a public and private key from the el gamal function
*/
//elgamal (public private)



/*
Generate a random polynomial of degree t-1 on the order of p,
along with t values
*/
//polyfunctions



/*
Multi-public key generation Gamal Encryption for everybody
-simply multiply all of the public keys together
*/
//How to combine el gamal? with signature (use the el gamal thing)
/* for later implementations
function publicEncrypt() {

}
*/

/*
Validate a point on polynomials
Input: shared_secrets,

*/
//polyfunctions create a polynomial that gives the secret key

/*
Encrypt a point of the function with someone's el gamal address and sign it
*/
//el gamal


/*
Decrypt a point of a function with someone's el gamal address that is signed
*/
//el gamal


/*
Create a random polynomial of order t in mod p
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
